"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Save } from "lucide-react";
import {
  applicationSchema,
  emptyApplication,
  HEARD_FROM,
  SECTORS,
  TRACKS,
  type ApplicationInput,
} from "@/lib/application-schema";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn, localePath } from "@/lib/utils";
import { CheckRow, Field, SelectInput, TextArea, TextInput } from "./fields";

type Props = {
  locale: Locale;
  form: Dictionary["form"];
  validation: Dictionary["validation"];
  homeLabel: string;
};

const DRAFT_KEY = "ail-application-draft-v1";

function loadDraft(): Partial<ApplicationInput> | null {
  try {
    const raw = window.sessionStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as Partial<ApplicationInput>) : null;
  } catch {
    return null;
  }
}

function saveDraft(values: Partial<ApplicationInput>) {
  try {
    // The honeypot and consent are never persisted.
    const { website: _w, consent: _c, ...rest } = values as Record<string, unknown>;
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(rest));
  } catch {
    /* storage unavailable (private mode etc.): the form still works */
  }
}

function clearDraft() {
  try {
    window.sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

export function ApplicationForm({ locale, form: t, validation, homeLabel }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [reference, setReference] = useState("");
  const [formError, setFormError] = useState("");
  const restored = useRef(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    mode: "onTouched",
    defaultValues: {
      ...emptyApplication,
      consent: false,
    } as unknown as DefaultValues<ApplicationInput>,
  });

  // Restore what the visitor already typed (survives switching language, which changes the route).
  useEffect(() => {
    const draft = loadDraft();
    if (draft) reset({ ...getValues(), ...draft } as ApplicationInput, { keepDefaultValues: true });
    restored.current = true;
  }, [reset, getValues]);

  // Persist as the visitor types.
  useEffect(() => {
    const sub = watch((values) => {
      if (restored.current) saveDraft(values as Partial<ApplicationInput>);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const track = watch("track");
  
  // Keep the fee category consistent with the chosen track.
  useEffect(() => {
    if (!restored.current) return;
   
  }, [track, setValue]);

 

  const msg = (key?: string) => {
    if (!key) return undefined;
    if (key === "Required") return validation.required;
    return (validation as Record<string, string>)[key] ?? validation.invalid;
  };
  const err = (name: keyof ApplicationInput) => msg(errors[name]?.message as string | undefined);

  const onSubmit = async (values: ApplicationInput) => {
    setFormError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reference?: string;
        code?: string;
        fieldErrors?: Record<string, string>;
      };

      if (res.ok && data.ok) {
        clearDraft();
        setReference(data.reference ?? "");
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setStatus("idle");
      if (res.status === 422 && data.fieldErrors) {
        for (const [field, key] of Object.entries(data.fieldErrors)) {
          setError(field as keyof ApplicationInput, { type: "server", message: key });
        }
        setFormError(t.errors.fixFields);
      } else if (res.status === 409) setFormError(t.errors.duplicate);
      else if (res.status === 429) setFormError(t.errors.rateLimited);
      else if (res.status === 503) setFormError(t.errors.unavailable);
      else setFormError(t.errors.generic);
    } catch {
      setStatus("idle");
      setFormError(t.errors.generic);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-violet-200 bg-white p-8 text-center shadow-soft sm:p-12" role="status">
        <CheckCircle2 aria-hidden className="mx-auto h-14 w-14 text-violet-600" />
        <h2 className="mt-5 text-3xl font-semibold">{t.success.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-600">{t.success.text}</p>
        {reference && (
          <div className="mx-auto mt-8 max-w-xs rounded-xl bg-violet-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">{t.success.referenceLabel}</p>
            <p dir="ltr" className="mt-1 font-mono text-2xl font-bold text-violet-900">
              {reference}
            </p>
          </div>
        )}
        <p className="mt-4 text-sm text-ink-500">{t.success.keepReference}</p>
        <Link href={localePath(locale)} className="btn-primary mt-8">
          {homeLabel}
        </Link>
      </div>
    );
  }

  const req = t.required;
  const fieldset = "rounded-2xl border border-paper-200 bg-white p-6 shadow-soft sm:p-8";
  const legend = "mb-5 font-display text-xl font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-describedby={formError ? "form-error" : undefined}>
      {/* ---- About you */}
      <fieldset className={fieldset}>
        <legend className={legend}>{t.sections.about}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="fullName" label={t.labels.fullName} error={err("fullName")} required requiredLabel={req} className="sm:col-span-2">
            <TextInput id="fullName" autoComplete="name" invalid={!!errors.fullName} {...register("fullName")} />
          </Field>
          <Field id="email" label={t.labels.email} error={err("email")} required requiredLabel={req}>
            <TextInput id="email" type="email" dir="ltr" autoComplete="email" invalid={!!errors.email} {...register("email")} />
          </Field>
          <Field id="phone" label={t.labels.phone} hint={t.hints.phone} error={err("phone")} required requiredLabel={req}>
            <TextInput id="phone" type="tel" dir="ltr" autoComplete="tel" invalid={!!errors.phone} {...register("phone")} />
          </Field>
        </div>
      </fieldset>

      {/* ---- Eligibility */}
      <fieldset className={fieldset}>
        <legend className={legend}>{t.sections.eligibility}</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="track" label={t.labels.track} error={err("track")} required requiredLabel={req}>
            <SelectInput id="track" invalid={!!errors.track} defaultValue="" {...register("track")}>
              <option value="">{t.placeholders.select}</option>
              {TRACKS.map((x) => (
                <option key={x} value={x}>{t.options.tracks[x]}</option>
              ))}
            </SelectInput>
          </Field>
          <Field id="sector" label={t.labels.sector} error={err("sector")} required requiredLabel={req}>
            <SelectInput id="sector" invalid={!!errors.sector} defaultValue="" {...register("sector")}>
              <option value="">{t.placeholders.select}</option>
              {SECTORS.map((x) => (
                <option key={x} value={x}>{t.options.sectors[x]}</option>
              ))}
            </SelectInput>
          </Field>

         
        </div>

       
      </fieldset>

      {/* ---- Motivation */}
      <fieldset className={fieldset}>
        <legend className={legend}>{t.sections.motivation}</legend>
        <div className="space-y-5">
          <Field id="motivation" label={t.labels.motivation} hint={t.hints.motivation} error={err("motivation")} required requiredLabel={req}>
            <TextArea id="motivation" maxLength={1500} invalid={!!errors.motivation} {...register("motivation")} />
          </Field>
          <Field id="sectorProblem" label={t.labels.sectorProblem} hint={t.hints.sectorProblem} error={err("sectorProblem")} required requiredLabel={req}>
            <TextArea id="sectorProblem" maxLength={1200} invalid={!!errors.sectorProblem} {...register("sectorProblem")} />
          </Field>
        </div>
      </fieldset>

      {/* ---- Tuition & consent */}
      <fieldset className={fieldset}>
        <legend className={legend}>{t.sections.tuition}</legend>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
           
            <Field id="heardFrom" label={t.labels.heardFrom} error={err("heardFrom")}>
              <SelectInput id="heardFrom" {...register("heardFrom")}>
                <option value="">{t.placeholders.select}</option>
                {HEARD_FROM.map((x) => (
                  <option key={x} value={x}>{t.options.heardFrom[x]}</option>
                ))}
              </SelectInput>
            </Field>
          </div>
          <CheckRow label={t.labels.paymentPlan} {...register("paymentPlan")} />
          <CheckRow label={t.labels.consent} error={err("consent")} errorId="consent-error" {...register("consent")} />
        </div>

        {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
        <div aria-hidden className="sr-only">
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </label>
        </div>
      </fieldset>

      {formError && (
        <p id="form-error" role="alert" className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {formError}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="inline-flex items-center gap-2 text-xs text-ink-500">
          <Save aria-hidden className="h-3.5 w-3.5" />
          {t.draftSaved}
        </p>
        <button type="submit" disabled={status === "submitting"} className={cn("btn-primary min-w-48 !py-3.5")}>
          {status === "submitting" ? (
            <>
              <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>
      </div>
    </form>
  );
}

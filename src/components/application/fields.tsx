"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Field({
  id,
  label,
  hint,
  error,
  required,
  requiredLabel,
  children,
  className,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  requiredLabel?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && (
          <span className="ms-1 text-rose-600" aria-hidden title={requiredLabel}>
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }>(
  function TextInput({ invalid, className, ...props }, ref) {
    return <input ref={ref} aria-invalid={invalid || undefined} className={cn("field-input", className)} {...props} />;
  },
);

export const SelectInput = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }>(
  function SelectInput({ invalid, className, children, ...props }, ref) {
    return (
      <select ref={ref} aria-invalid={invalid || undefined} className={cn("field-input", className)} {...props}>
        {children}
      </select>
    );
  },
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }>(
  function TextArea({ invalid, className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn("field-input min-h-[8.5rem] resize-y leading-relaxed", className)}
        {...props}
      />
    );
  },
);

export const CheckRow = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { label: ReactNode; error?: string; errorId?: string }
>(function CheckRow({ label, error, errorId, className, ...props }, ref) {
  return (
    <div>
      <label className={cn("flex cursor-pointer items-start gap-3 text-[15px] text-ink-700", className)}>
        <input
          ref={ref}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 h-4 w-4 shrink-0 rounded border-paper-300 accent-violet-600"
          {...props}
        />
        <span>{label}</span>
      </label>
      {error && (
        <p id={errorId} role="alert" className="ms-7 mt-1 text-sm font-medium text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
});

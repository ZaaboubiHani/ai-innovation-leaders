# AI Innovation Leaders Program — website

Official site and application portal for the **AI Innovation Leaders Program** by **Prolync** in academic partnership with **Altis**.
Built with Next.js (App Router) · TypeScript · Tailwind CSS · MongoDB (Mongoose) · Zod · React Hook Form · Lucide.
Languages: English, French, Arabic (full RTL).

## Run locally (Windows, macOS, Linux)

Requires Node.js 20.9 or newer and a MongoDB database.

```bash
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
# edit .env.local -> set MONGODB_URI (and IP_HASH_SALT)
npm run dev                     # http://localhost:3000
```

**MongoDB options**
- Free cloud: create an Atlas cluster, paste its connection string into `MONGODB_URI`.
- Local with Docker: `docker compose up -d`, then keep the default `MONGODB_URI`.
- Local install: install MongoDB Community Edition and keep the default `MONGODB_URI`.

The website pages work without a database; only submitting the application form needs it
(without one, the form shows a friendly "temporarily unavailable" message).

## Production

```bash
npm run build
npm start
```
Set `MONGODB_URI`, `IP_HASH_SALT` (long random string) and `NEXT_PUBLIC_SITE_URL` in your host's environment settings.
Works on any Node host (Vercel, Render, Railway, a VPS). `NEXT_PUBLIC_*` values are read at build time.

## Before launch — please confirm
- **Tuition currency.** The PDF gives "35,000 to 40,000" with no currency. Set `NEXT_PUBLIC_TUITION_CURRENCY` (e.g. `DZD`) once confirmed.
- **Contact email.** Set `NEXT_PUBLIC_CONTACT_EMAIL` to show it in the footer and privacy page.
- **Privacy notice.** `pages.privacy` in the dictionaries is a plain-language starting point; have it reviewed against your data-protection obligations.
- **Translations.** French and Arabic were written to follow the PDF faithfully; have a native speaker proofread before publishing.

## Where things are

| What | Where |
|---|---|
| Page text, all languages | `src/i18n/dictionaries/{en,fr,ar}.ts` (English defines the shape; TypeScript flags any missing key) |
| Pages | `src/app/[locale]/…` (home, program, admissions, apply, privacy) |
| Page sections | `src/components/sections/` |
| Application form | `src/components/application/` |
| Form rules (shared by browser and server) | `src/lib/application-schema.ts` |
| Submission endpoint | `src/app/api/applications/route.ts` |
| Database model | `src/models/application.ts` |
| Brand assets (supplied logos, unmodified) | `public/brand/` |
| Colours | `tailwind.config.ts` (derived from the Prolync violet/yellow and Altis pink) |

## Admin dashboard (view and manage enrollments)

Sign in at **`/admin`** (e.g. http://localhost:3000/admin). It is separate from the public site, English-only and hidden from search engines.

**One-time setup**
```bash
npm run admin:hash -- "choose-a-strong-password"
```
Copy the three printed lines (`ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `ADMIN_SESSION_SECRET`) into `.env.local` and into your host's environment settings, set `ADMIN_EMAIL` to your real address, then restart. Your password itself is never stored, only its hash.

**What you can do**
- See totals, last-7-day count, and breakdowns by sector, track, status and country.
- Search and filter applications, page through them, and **Export CSV** (respects the current filters).
- Open any application to read the full answers, change its status (new → reviewing → shortlisted → interviewed → offered → enrolled / declined / withdrawn), add private notes, or delete it (for data-removal requests).

**Security:** passwords are hashed with scrypt; sessions are signed, HTTP-only, same-site cookies that expire after 8 hours; login is limited to 8 attempts per 15 minutes; every admin API checks the session on the server. There is a single admin account. To rotate access, generate a new hash and secret (changing the secret signs everyone out).

## Reviewing applications

Applications are stored in the `applications` collection (view with MongoDB Atlas, Compass or `mongosh`).
Export everything to CSV (opens correctly in Excel, including Arabic):

```bash
npm run export:applications
```

## Security notes
- MongoDB is only ever accessed on the server (Route Handler); the browser never sees the connection string.
- Every submission is re-validated on the server with the same Zod schema; unknown fields are dropped.
- Spam/abuse: hidden honeypot field, same-origin check, 20 KB body limit, per-process burst limit, and 5 applications per hashed IP per hour. Raw IP addresses are never stored.
- Duplicate emails are rejected (unique index). Security headers and a Content-Security-Policy are set in `next.config.mjs`.
- CSV export neutralises spreadsheet formula injection.
- Admin access is a single account protected as described above; use a long unique password and HTTPS in production.

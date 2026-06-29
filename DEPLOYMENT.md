# Deployment (monorepo → two Vercel projects)

This repo is an **npm-workspaces monorepo**:

```
packages/ui      # @solvrex/ui — shared design system, components, data, server logic
apps/us          # solvrex.us  — career-services homepage
apps/in          # solvrex.in  — business-enablement homepage
```

Both apps share everything via `@solvrex/ui`; only the homepage (and home `<title>`)
differ. Each app deploys as its **own Vercel project** on its domain.

## Local development
```bash
npm install                 # at the repo root (links the workspace)
npm run dev -w apps/us       # solvrex.us app (http://localhost:3000)
npm run dev -w apps/in       # solvrex.in app
npm run build -w apps/us     # production build for one app
```
For the contact form locally, add `RESEND_API_KEY` to `apps/us/.env.local` and
`apps/in/.env.local` (each app reads its own).

## Vercel — two projects (one per domain)
Create **two** projects from this same repo/branch:

| Project | Root Directory | Domain | `NEXT_PUBLIC_SITE_URL` |
| --- | --- | --- | --- |
| solvrex-us | `apps/us` | solvrex.us | `https://solvrex.us` |
| solvrex-in | `apps/in` | solvrex.in | `https://solvrex.in` |

For each project (Settings → …):
1. **Root Directory** = `apps/us` (or `apps/in`). Enable "Include files outside the root
   directory" so the workspace + `packages/ui` are available (Vercel does this for
   monorepos automatically; keep the install command as `npm install` run at the repo root).
2. **Build command** `next build`, **Install command** `npm install` (root). Framework =
   Next.js (auto-detected).
3. **Environment variables:** `NEXT_PUBLIC_SITE_URL` (per table) and `RESEND_API_KEY`
   (your Resend key). Optionally `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`.
4. **Domains:** attach `solvrex.us` to the us project and `solvrex.in` to the in project.

> `NEXT_PUBLIC_SITE_URL` also has a per-app default baked into each `next.config.mjs`
> (`solvrex.us` / `solvrex.in`), so canonical/OG/sitemap are correct even without the env
> var — but set it in Vercel to be explicit.

## Resend (contact form)
Sign up at resend.com using `official@solvrex.in`, create an API key, set `RESEND_API_KEY`
on both projects. Without it, the form returns a friendly error instead of sending.

## Notes
- The shared contact handler, sitemap, and robots live in `@solvrex/ui/server`; each app
  re-exports them so per-domain URLs are correct automatically.
- To make the two sites diverge further, edit the app's own `app/**` (routes) or its
  homepage component; shared pieces stay in `packages/ui`.

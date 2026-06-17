# Deployment (Vercel)

This site is a Next.js App Router app with a server route for the contact form,
so it needs a host that runs server code. **Vercel** is the recommended (free)
target and auto-detects Next.js.

## 1. Set up Resend (free)

1. Sign up at [resend.com](https://resend.com) using **official@solvrex.in** as
   the account email. This lets the form send to that inbox immediately with the
   `onboarding@resend.dev` sender — no domain/DNS verification needed.
2. Create an API key (Dashboard → API Keys).
3. (Optional, for a branded sender) Add and verify the `solvrex.in` domain, then
   set `CONTACT_FROM_EMAIL` to e.g. `Solvrex <hello@solvrex.in>`.

## 2. Deploy to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset is detected automatically as **Next.js** (no config needed).
4. Add environment variables (Project → Settings → Environment Variables):
   - `RESEND_API_KEY` = your key
   - optionally `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
5. Deploy.

## 3. Custom domain

Point `solvrex.in` at Vercel (Project → Settings → Domains) and follow the DNS
instructions Vercel provides.

## Local testing

```bash
cp .env.local.example .env.local   # add RESEND_API_KEY
npm install
npm run dev                          # http://localhost:3000
```

Submit the contact form and confirm an email arrives at `official@solvrex.in`
(reply-to is set to the sender's address). Without `RESEND_API_KEY` set, the form
returns a friendly error instead of sending.

## Notes

- The previous GitHub Pages workflow has been removed — static hosting can't run
  the `/api/contact` route that sends email.
- The contact form includes a hidden honeypot field for basic spam protection.

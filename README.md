# Solvrex

Technology Consulting, Career Support & Business Solutions.

A multi-page marketing site built from the Figma design, on **Next.js (App Router) + Tailwind CSS**, with a contact form that emails inquiries to **solvrex.official@gmail.com** via [Resend](https://resend.com). Deployed on **Vercel**.

## Getting started

### Prerequisites
- Node.js 18.18+ and npm

### Install

```bash
npm install
```

### Environment variables

The contact form needs a Resend API key. Copy the example file and fill it in:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Default | Notes |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | yes | — | From your Resend dashboard. |
| `CONTACT_TO_EMAIL` | no | `solvrex.official@gmail.com` | Where inquiries are delivered. |
| `CONTACT_FROM_EMAIL` | no | `Solvrex <onboarding@resend.dev>` | Sender. `onboarding@resend.dev` works with no DNS setup. |

**Free Resend setup (no DNS required):** create a free Resend account using
`solvrex.official@gmail.com` as the account email. Unverified accounts can send to that
same address immediately using the `onboarding@resend.dev` sender — which is
exactly this form's use case. Later, verify the `solvrex.in` domain in Resend to
send from a branded address like `hello@solvrex.in`.

### Develop

```bash
npm run dev
```

Runs at `http://localhost:3000`.

### Build

```bash
npm run build
npm start
```

## Routes

- `/` — Home
- `/services` — Services overview
- `/services/business-enablement`
- `/services/technology-consulting`
- `/services/career-services`
- `/about`
- `/contact` — contact form (`POST /api/contact`)

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md). In short: import the repo into Vercel,
set `RESEND_API_KEY`, deploy. Vercel auto-detects Next.js.

## Technology stack

- **Next.js** 15 (App Router)
- **React** 18.3
- **Tailwind CSS** 4
- **Resend** — transactional email for the contact form

## License

All rights reserved © 2026 Solvrex

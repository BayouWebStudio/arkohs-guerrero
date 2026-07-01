# Sacred Geometry Masterclass — course platform

Sales and waitlist site for Raúl Wesche's geometric tattooing course.
Built with Next.js 16, Tailwind CSS 4, and TypeScript.

## Structure

- `app/page.tsx` — the sales page (hero, credibility, outcomes, curriculum, FAQ, waitlist CTAs)
- `content/curriculum.ts` — single source of truth for modules/lessons; edit here and the page updates
- `app/api/waitlist/route.ts` — email capture endpoint
- `docs/FILMING_PLAN.md` — lesson-by-lesson shoot list, formats, gear, and schedule

## Run locally

```bash
npm install
npm run dev
```

## Waitlist configuration

The waitlist endpoint delivers emails to the first configured provider:

| Env var | Provider |
|---|---|
| `KLAVIYO_PRIVATE_KEY` + `KLAVIYO_LIST_ID` | Klaviyo list subscription |
| `WAITLIST_WEBHOOK_URL` | Any webhook (Zapier, Make, Google Sheets) |

With neither set, the form returns a "not configured" message.

## Roadmap

1. **Now:** waitlist page live, collect emails while filming (see `docs/FILMING_PLAN.md`)
2. **Next:** checkout — Shopify product (digital) or Stripe Payment Link for founding members
3. **Then:** gated course area (`/course`) — auth (Clerk) + video hosting (Mux or Vimeo OTT), lessons driven by `content/curriculum.ts`

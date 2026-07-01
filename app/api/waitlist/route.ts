import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Waitlist capture with pluggable delivery, in priority order:
 * 1. Klaviyo (KLAVIYO_PRIVATE_KEY + KLAVIYO_LIST_ID)
 * 2. Generic webhook (WAITLIST_WEBHOOK_URL) — Zapier, Make, Google Sheets, etc.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const klaviyoKey = process.env.KLAVIYO_PRIVATE_KEY;
  const klaviyoList = process.env.KLAVIYO_LIST_ID;
  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  try {
    if (klaviyoKey && klaviyoList) {
      const res = await fetch(
        "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
        {
          method: "POST",
          headers: {
            Authorization: `Klaviyo-API-Key ${klaviyoKey}`,
            revision: "2024-10-15",
            "content-type": "application/vnd.api+json",
          },
          body: JSON.stringify({
            data: {
              type: "profile-subscription-bulk-create-job",
              attributes: {
                profiles: {
                  data: [
                    {
                      type: "profile",
                      attributes: {
                        email,
                        subscriptions: {
                          email: { marketing: { consent: "SUBSCRIBED" } },
                        },
                      },
                    },
                  ],
                },
              },
              relationships: {
                list: { data: { type: "list", id: klaviyoList } },
              },
            },
          }),
        }
      );
      if (!res.ok) throw new Error(`Klaviyo ${res.status}`);
    } else if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          source: "masterclass-waitlist",
          ts: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    } else {
      return NextResponse.json(
        { error: "Waitlist isn't configured yet — check back soon." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Couldn't save your email right now. Try again in a minute." },
      { status: 502 }
    );
  }
}

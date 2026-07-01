"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("done");
        setMessage("You're on the list. Watch your inbox.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="text-gold border border-line rounded px-4 py-3 text-sm">
        {message}
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`flex w-full max-w-md gap-2 ${compact ? "" : "flex-col sm:flex-row"}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded border border-line bg-ink-2 px-4 py-3 text-sm text-bone placeholder:text-faded focus:border-gold focus:outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 sm:basis-full">{message}</p>
      )}
    </form>
  );
}

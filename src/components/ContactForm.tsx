"use client";

import { useState } from "react";

const endpoint = "https://formspree.io/f/xaqqpogb";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get("website");

    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    const email = String(formData.get("email") ?? "").trim();
    const reason = String(formData.get("reason") ?? "").trim();

    if (!email.includes("@") || !reason) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-2xl border border-stone-200/80 bg-white px-4 py-3 text-base text-stone-900 shadow-sm transition focus-visible:border-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          placeholder="you@company.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700" htmlFor="reason">
          Why are you reaching out?
        </label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-stone-200/80 bg-white px-4 py-3 text-base text-stone-900 shadow-sm transition focus-visible:border-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="Partnership">Partnership</option>
          <option value="Investment">Investment</option>
          <option value="Employment/Job Request">
            Employment/Job Request
          </option>
          <option value="Beta access">Beta access</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700" htmlFor="note">
          Tell us more, if you want...
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          className="w-full resize-none rounded-2xl border border-stone-200/80 bg-white px-4 py-3 text-base text-stone-900 shadow-sm transition focus-visible:border-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          placeholder="Share a few details to help us respond."
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-stone-600">
            Thanks &mdash; I&#39;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-stone-600">
            Something went wrong. Please email charlie@formiolabs.com
          </p>
        )}
      </div>
    </form>
  );
}

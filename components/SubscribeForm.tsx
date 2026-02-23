"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/content/site";

export default function SubscribeForm() {
  const [value, setValue] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    window.open(siteData.newsletter.subscribeUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={siteData.newsletter.name}
        className="h-11 flex-1 rounded-full border border-border bg-card px-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
      />
      <button
        type="submit"
        className="h-11 rounded-full border border-accent bg-accent px-5 text-sm text-white transition-colors hover:bg-accent-hover"
      >
        {siteData.header.cta.label}
      </button>
    </form>
  );
}

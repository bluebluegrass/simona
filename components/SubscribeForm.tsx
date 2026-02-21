"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export default function SubscribeForm() {
  const [value, setValue] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    window.location.href = withBasePath(siteData.newsletter.subscribeUrl);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={siteData.newsletter.name}
        className="h-11 flex-1 rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none transition focus:border-neutral-500"
      />
      <button type="submit" className="h-11 rounded-full border border-neutral-900 bg-neutral-900 px-5 text-sm text-white">
        {siteData.header.cta.label}
      </button>
    </form>
  );
}

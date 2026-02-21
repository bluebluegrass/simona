"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteData } from "@/content/site";
import { cx } from "@/lib/cx";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-[rgba(248,248,247,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-base font-medium tracking-[0.06em] text-neutral-900">
          {siteData.meta.siteName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-5 text-sm text-neutral-600">
            {siteData.header.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "transition-colors hover:text-neutral-900",
                    active && "text-neutral-900 underline decoration-1 underline-offset-4",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={siteData.header.cta.href}
            className="rounded-full border border-neutral-400 bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
          >
            {siteData.header.cta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={siteData.header.cta.label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition-transform duration-150 active:scale-95 md:hidden"
        >
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      <div
        className={cx(
          "pointer-events-none fixed inset-0 top-[58px] z-30 bg-[rgba(20,20,20,0.22)] opacity-0 transition-opacity duration-300 md:hidden",
          open && "pointer-events-auto opacity-100",
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={cx(
          "grid transition-[grid-template-rows,opacity] duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-neutral-200 bg-[rgba(248,248,247,0.98)]">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 md:px-8">
            {siteData.header.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteData.header.cta.href}
              className="mt-2 rounded-full border border-neutral-400 bg-neutral-900 px-4 py-2 text-center text-sm text-white"
              onClick={() => setOpen(false)}
            >
              {siteData.header.cta.label}
            </Link>
          </nav>
        </div>
        </div>
      </div>
    </header>
  );
}

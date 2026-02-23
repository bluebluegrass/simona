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
    <header className="sticky top-0 z-40 border-b border-border bg-bg backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-base font-medium tracking-[0.06em] text-ink">
          {siteData.meta.siteName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-5 text-sm text-muted">
            {siteData.header.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "transition-colors hover:text-ink",
                    active && "text-ink underline decoration-accent decoration-1 underline-offset-4",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={siteData.header.cta.href}
            className="btn-newsletter px-4 py-2"
          >
            {siteData.header.cta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="打开导航"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-transform duration-150 active:scale-95 md:hidden"
        >
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      <div
        className={cx(
          "pointer-events-none fixed inset-0 top-[58px] z-30 bg-black/20 opacity-0 transition-opacity duration-300 md:hidden",
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
          <div className="border-t border-border bg-bg">
            <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 md:px-8">
              {siteData.header.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-sm text-muted transition-colors hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={siteData.header.cta.href}
                className="btn-newsletter mt-2 px-4 py-2 text-center"
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

import { ReactNode } from "react";
import { isInternalHref, withBasePath } from "@/lib/basePath";
import { cx } from "@/lib/cx";

type EditorialCardProps = {
  kicker?: string;
  title: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  children?: ReactNode;
  className?: string;
};

export default function EditorialCard({
  kicker,
  title,
  description,
  href,
  ctaLabel,
  children,
  className,
}: EditorialCardProps) {
  const resolvedHref = href ? (isInternalHref(href) ? withBasePath(href) : href) : undefined;
  const isExternal = href?.startsWith("http");

  return (
    <article className={cx("rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm", className)}>
      {kicker ? <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{kicker}</p> : null}
      <h3 className={cx("text-lg font-medium tracking-tight text-ink", kicker ? "mt-2" : undefined)}>{title}</h3>
      {description ? <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p> : null}
      {children}
      {resolvedHref && ctaLabel ? (
        <a
          href={resolvedHref}
          className="mt-4 inline-block text-sm underline underline-offset-4"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
        >
          {ctaLabel}
        </a>
      ) : null}
    </article>
  );
}

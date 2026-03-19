import { isInternalHref, withBasePath } from "@/lib/basePath";
import { cx } from "@/lib/cx";

type EditorialListItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type EditorialListProps = {
  items: readonly EditorialListItem[];
  className?: string;
};

export default function EditorialList({ items, className }: EditorialListProps) {
  return (
    <div className={cx("divide-y divide-border border-y border-border", className)}>
      {items.map((item) => {
        const href = isInternalHref(item.href) ? withBasePath(item.href) : item.href;
        const isExternal = item.href.startsWith("http");

        return (
          <a
            key={`${item.title}-${item.href}`}
            href={href}
            className="group grid gap-2 py-5 no-underline transition-colors hover:no-underline lg:grid-cols-[1.05fr_1.45fr_auto] lg:items-center lg:gap-6"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
          >
            <h3 className="text-base font-medium tracking-tight text-ink transition-colors group-hover:text-accent">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            <span className="pt-1 text-sm text-ink underline underline-offset-4 lg:pt-0">{item.ctaLabel}</span>
          </a>
        );
      })}
    </div>
  );
}

import Badge from "@/components/Badge";
import { isInternalHref, withBasePath } from "@/lib/basePath";

type TagItem =
  | string
  | {
      label: string;
      href?: string;
    };

type TagListProps = {
  items: readonly TagItem[];
  linkClassName?: string;
  itemClassName?: string;
};

export default function TagList({ items, linkClassName, itemClassName }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        if (typeof item === "string") {
          return (
            <Badge key={item} className={itemClassName}>
              {item}
            </Badge>
          );
        }

        const href = item.href ? (isInternalHref(item.href) ? withBasePath(item.href) : item.href) : undefined;
        const isExternal = item.href?.startsWith("http");

        if (!href) {
          return (
            <Badge key={item.label} className={itemClassName}>
              {item.label}
            </Badge>
          );
        }

        return (
          <a
            key={`${item.label}-${href}`}
            href={href}
            className={`rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted no-underline transition-colors hover:bg-card hover:text-ink hover:no-underline ${linkClassName ?? ""}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

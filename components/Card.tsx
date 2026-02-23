"use client";

import { ReactNode, useMemo, useState } from "react";
import { cx } from "@/lib/cx";
import { withBasePath } from "@/lib/basePath";

type CardProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  className?: string;
};

export default function Card({ title, description, imageSrc, imageAlt, children, className }: CardProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const src = useMemo(() => (imageSrc ? withBasePath(imageSrc) : ""), [imageSrc]);
  const showImage = Boolean(src) && !hasImageError;

  return (
    <article
      className={cx(
        "overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-sm",
        className,
      )}
    >
      <div className="aspect-[16/10] w-full border-b border-border bg-surface">
        {showImage ? (
          <img
            src={src}
            alt={imageAlt || title || ""}
            className="h-full w-full object-cover"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted">{title}</div>
        )}
      </div>
      <div className="space-y-3 p-6">
        {title ? <h3 className="text-lg font-medium tracking-tight text-ink">{title}</h3> : null}
        {description ? <p className="leading-relaxed text-muted">{description}</p> : null}
        {children}
      </div>
    </article>
  );
}

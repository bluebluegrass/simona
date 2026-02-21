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
        "overflow-hidden rounded-2xl border border-neutral-200 bg-[rgba(252,252,251,0.9)] transition duration-300 hover:-translate-y-0.5 hover:shadow-sm",
        className,
      )}
    >
      <div className="aspect-[16/10] w-full border-b border-neutral-200 bg-neutral-100">
        {showImage ? (
          <img
            src={src}
            alt={imageAlt || title || ""}
            className="h-full w-full object-cover"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-neutral-500">{title}</div>
        )}
      </div>
      <div className="space-y-3 p-6">
        {title ? <h3 className="text-lg font-medium tracking-tight">{title}</h3> : null}
        {description ? <p className="leading-relaxed text-neutral-600">{description}</p> : null}
        {children}
      </div>
    </article>
  );
}

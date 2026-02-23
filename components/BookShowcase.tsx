"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { withBasePath } from "@/lib/basePath";

type BookItem = {
  title: string;
  subtitle: string;
  platform: string;
  publishDate: string;
  wordCount: number;
  category: string;
  url: string;
  topics: string[];
};

type BookShowcaseProps = {
  coverImage?: string;
  fallbackTitle: string;
  description: string;
  item: BookItem;
};

function formatWordCount(value: number) {
  return `${value.toLocaleString("zh-CN")} 字`;
}

export default function BookShowcase({ coverImage, fallbackTitle, description, item }: BookShowcaseProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSrc = useMemo(() => (coverImage ? withBasePath(coverImage) : ""), [coverImage]);
  const showImage = Boolean(imageSrc) && !hasImageError;

  return (
    <article className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-[280px_1fr] md:gap-10 md:p-8">
      <div className="mx-auto w-full max-w-[280px]">
        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border bg-surface">
          {showImage ? (
            <img
              src={imageSrc}
              alt={item.title}
              className="h-full w-full object-cover"
              onError={() => setHasImageError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm leading-relaxed text-muted">
              {fallbackTitle}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">{item.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{item.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">{item.publishDate}</span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">{formatWordCount(item.wordCount)}</span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">{item.category}</span>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.topics.map((topic) => (
            <span key={topic} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            去微信读书阅读
          </a>
          <Link href="/podcasts" className="btn-secondary">
            听《噢妈妈》
          </Link>
        </div>
      </div>
    </article>
  );
}

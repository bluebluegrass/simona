import type { Metadata } from "next";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "书 | 穿堂风Simona",
};

export default function BookPage() {
  const { book } = siteData;

  return (
    <Section title={book.title} intro={book.why}>
      <Card title={book.bookTitle} description={book.blurb} imageSrc={book.coverImage} imageAlt={book.bookTitle}>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-700">
          {book.buyLinks.map((item) => (
            <a key={item.label} href={isInternalHref(item.url) ? withBasePath(item.url) : item.url} className="underline underline-offset-4">
              {item.label}
            </a>
          ))}
        </div>
      </Card>
    </Section>
  );
}

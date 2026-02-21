import type { Metadata } from "next";
import BookShowcase from "@/components/BookShowcase";
import Section from "@/components/Section";
import { siteData } from "@/content/site";

export const metadata: Metadata = {
  title: "书 | 穿堂风Simona",
};

export default function BookPage() {
  const { book } = siteData;
  const featured = book.items[0];

  return (
    <Section title={book.title} intro={book.why}>
      <p className="mb-4 font-mono text-xs tracking-[0.14em] text-neutral-500">{book.relationshipNote}</p>
      {featured ? (
        <BookShowcase
          coverImage={book.coverImage}
          fallbackTitle={book.bookTitle}
          description={book.blurb}
          item={featured}
        />
      ) : null}
    </Section>
  );
}

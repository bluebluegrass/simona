import { ReactNode } from "react";
import { cx } from "@/lib/cx";

type SectionProps = {
  title?: string;
  intro?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ title, intro, kicker, children, className }: SectionProps) {
  return (
    <section className={cx("border-t border-neutral-200/80 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {kicker ? <p className="font-mono text-xs tracking-[0.16em] text-neutral-500">{kicker}</p> : null}
        {title ? (
          <h2 className={cx("text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl", kicker ? "mt-3" : undefined)}>
            {title}
          </h2>
        ) : null}
        {intro ? <p className="mt-5 max-w-3xl whitespace-pre-line leading-relaxed text-neutral-600">{intro}</p> : null}
        <div className={title || intro ? "mt-8" : undefined}>{children}</div>
      </div>
    </section>
  );
}

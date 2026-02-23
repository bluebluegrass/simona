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
    <section className={cx("border-t border-border py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {kicker ? <p className="font-mono text-xs tracking-[0.16em] text-muted">{kicker}</p> : null}
        {title ? (
          <h2 className={cx("text-3xl font-medium tracking-tight text-ink md:text-4xl", kicker ? "mt-3" : undefined)}>
            {title}
          </h2>
        ) : null}
        {intro ? <p className="mt-5 max-w-3xl whitespace-pre-line leading-relaxed text-muted">{intro}</p> : null}
        <div className={title || intro ? "mt-8" : undefined}>{children}</div>
      </div>
    </section>
  );
}

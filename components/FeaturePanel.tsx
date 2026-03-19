import { ReactNode } from "react";
import { cx } from "@/lib/cx";

type FeaturePanelProps = {
  kicker?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export default function FeaturePanel({
  kicker,
  title,
  description,
  children,
  footer,
  className,
}: FeaturePanelProps) {
  return (
    <article className={cx("rounded-2xl border border-border bg-surface p-5 md:p-6", className)}>
      {kicker ? <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{kicker}</p> : null}
      <h2 className={cx("text-xl font-medium tracking-tight text-ink md:text-2xl", kicker ? "mt-3" : undefined)}>{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-5">{footer}</div> : null}
    </article>
  );
}

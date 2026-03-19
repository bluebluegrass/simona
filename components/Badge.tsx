import { ReactNode } from "react";
import { cx } from "@/lib/cx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cx("rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted", className)}>
      {children}
    </span>
  );
}

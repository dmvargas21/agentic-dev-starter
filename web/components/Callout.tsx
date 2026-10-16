import type { ReactNode } from "react";

export default function Callout({
  label,
  warn = false,
  children,
}: {
  label?: string;
  warn?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={warn ? "callout warn" : "callout"}>
      {label ? <span className="note-label">{label}</span> : null}
      {children}
    </div>
  );
}

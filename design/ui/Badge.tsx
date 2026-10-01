// design/ui/Badge.tsx

export type BadgeStatus = "current" | "stable" | "draft" | "deprecated";

export interface BadgeProps {
  status: BadgeStatus;
  /** override the visible text — defaults to the status name itself */
  label?: string;
}

/**
 * Status is never conveyed by color alone (colorblind-safe): each status
 * also gets its own dot shape (round vs square-ish/dashed) plus a text
 * label, so it still reads correctly even if the accent color is lost.
 */
export function Badge({ status, label }: BadgeProps) {
  return (
    <span className={`badge ${status}`}>
      <span className="dot" aria-hidden="true" />
      {label ?? status}
    </span>
  );
}

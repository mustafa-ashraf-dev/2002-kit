// design/ui/ComponentCard.tsx
import type { ReactNode } from "react";
import { Badge, type BadgeStatus } from "./Badge";

export interface ComponentCardProps {
  href: string;
  title: string;
  description: string;
  tag?: string;
  status: BadgeStatus;
  preview: ReactNode; // caller decides: icon, or a LivePreviewThumbnail
}

export function ComponentCard({
  href,
  title,
  description,
  tag,
  status,
  preview,
}: ComponentCardProps) {
  return (
    <a className="card" href={href}>
      <div className="card-preview">{preview}</div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-desc">{description}</div>
        <div className="card-footer">
          {tag && <span className="card-tag">{tag}</span>}
          <Badge status={status} />
        </div>
      </div>
    </a>
  );
}

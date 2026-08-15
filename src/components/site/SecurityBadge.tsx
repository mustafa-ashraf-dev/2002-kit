import { SecurityBadge as SecurityBadgeType } from "@/lib/types";
import styles from "./SecurityBadge.module.css";

export function SecurityBadge({ badge }: { badge: SecurityBadgeType }) {
  return (
    <span className={styles.badge} title={badge.description}>
      <span className={styles.dot} aria-hidden="true" />
      {badge.label}
    </span>
  );
}

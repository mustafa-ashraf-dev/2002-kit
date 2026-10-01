// design/ui/ComingSoon.tsx

export interface ComingSoonProps {
  title: string;
  description?: string;
  items?: string[];
  /** "section" = embedded inline inside another page (small, like the homepage patterns teaser)
   *  "page"    = the whole route's content (bigger, centered, meant to fill a page on its own) */
  variant?: "section" | "page";
}

export function ComingSoon({
  title,
  description,
  items = [],
  variant = "section",
}: ComingSoonProps) {
  if (variant === "page") {
    return (
      <div className="coming-soon-page">
        <span className="coming-soon-tag">coming soon</span>
        <h1 className="coming-soon-title">{title}</h1>
        {description && <p className="coming-soon-desc">{description}</p>}
        {items.length > 0 && (
          <div className="soon-chips" style={{ justifyContent: "center" }}>
            {items.map((item) => (
              <span key={item} className="soon-chip">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <section>
      <div className="section-head">
        <span className="section-title">{title}</span>
        <span className="section-count" style={{ marginLeft: 8 }}>
          coming soon
        </span>
      </div>
      {items.length > 0 && (
        <div className="soon-chips">
          {items.map((item) => (
            <span key={item} className="soon-chip">
              {item}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

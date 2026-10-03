import Link from "next/link";

const NotFound = () => {
  return (
    <main className="not-found">
      {" "}
      <div className="not-found__container">
        {" "}
        <div className="not-found__brand">
          {" "}
          <span /> <span>2002 KIT</span> <span />{" "}
        </div>{" "}
        <div className="not-found__code">404</div>{" "}
        <h1 className="not-found__title">This page doesn&apos;t exist.</h1>{" "}
        <p className="not-found__description">
          {" "}
          The route you&apos;re looking for couldn&apos;t be found. Maybe it was
          moved, removed, or never existed in the first place.{" "}
        </p>{" "}
        <div className="not-found__terminal">
          {" "}
          <div className="not-found__terminal-path">
            {" "}
            <span>~/2002-kit</span> <span>→</span>{" "}
          </div>{" "}
          <div className="not-found__terminal-error">
            {" "}
            <span>error:</span> route_not_found{" "}
          </div>{" "}
        </div>{" "}
        <Link href="/" className="not-found__button">
          {" "}
          <span>←</span> Back to 2002 KIT{" "}
        </Link>{" "}
      </div>{" "}
    </main>
  );
};
export default NotFound;

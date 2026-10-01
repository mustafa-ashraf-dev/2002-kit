"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); // reads the current URL's ?query=...
  const pathname = usePathname(); // the current path, e.g. "/components"
  const { replace } = useRouter(); // lets you change the URL without a full page reload
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  function handleSearch(term: string) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (term) params.set("query", term);
      else params.delete("query");
      replace(`${pathname}?${params.toString()}`);
    }, 300);
  }
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}

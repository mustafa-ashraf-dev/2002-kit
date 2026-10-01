import { ComingSoon } from "@/design/ui/ComingSoon";

export default async function PatternsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; tag?: string }>;
}) {
  return (
    <ComingSoon
      variant="page"
      title="Problem-solving patterns"
      description="Real decisions, written down — debounce vs throttle, optimistic UI, when to extract a hook."
      items={["debounce vs throttle", "optimistic UI updates", "custom hooks"]}
    />
  );
}

import { ComingSoon } from "@/design/ui/ComingSoon";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; tag?: string }>;
}) {
  return (
    <ComingSoon
      variant="page"
      title="Articles"
      description="Thoughts and insights on various topics."
      items={["How ai works?", "Juniors Positions in era of ai"]}
    />
  );
}

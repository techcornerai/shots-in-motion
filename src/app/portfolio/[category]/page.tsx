import { notFound } from "next/navigation";
import ComingSoonPage from "@/app/components/shared/ComingSoonPage";

const categoryMap: Record<string, { title: string; description: string }> = {
  portraits: {
    title: "Portrait Photography",
    description:
      "Our portrait collection is currently being curated. This section will soon feature cinematic portrait sessions captured across Tampa Bay.",
  },

  events: {
    title: "Event Photography",
    description:
      "A collection of live events, social gatherings, and celebrations captured in motion will be available here soon.",
  },

  weddings: {
    title: "Wedding Photography",
    description:
      "Timeless wedding moments, emotion, and storytelling photography will soon be presented in this section.",
  },

  nature: {
    title: "Nature Photography",
    description:
      "A quiet exploration of landscapes, light, and the natural world captured through cinematic photography.",
  },

  editorial: {
    title: "Editorial Photography",
    description:
      "Creative editorial photography exploring mood, fashion, and artistic storytelling.",
  },
};

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = categoryMap[category];

  if (!data) {
    notFound();
  }

  return (
    <ComingSoonPage
      eyebrow="Portfolio"
      title={data.title}
      description={data.description}
    />
  );
}

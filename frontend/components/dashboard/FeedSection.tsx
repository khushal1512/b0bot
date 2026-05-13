import type { FeedItem } from "@/components/dashboard/dashboard-data";

type FeedSectionProps = {
  items: FeedItem[];
};

export function FeedSection({ items }: FeedSectionProps) {
  return (
    <section className="rounded-2xl border border-[#d3d3d3] bg-white p-6">
      <h2 className="text-2xl text-black">Your Feed</h2>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="flex gap-12 px-6 py-2 text-xl text-black">
            <span className="w-40 shrink-0">TIME</span>
            <span className="w-44 shrink-0">SOURCE</span>
            <span className="min-w-[232px] flex-1">SUMMARY</span>
            <span className="w-24 shrink-0 text-center">ANALYZE</span>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {items.map((item, index) => (
              <article
                key={`${item.time}-${item.source}-${index}`}
                className="flex items-start gap-12 rounded-2xl px-6 py-6"
              >
                <p className="w-40 shrink-0 text-xl text-black">{item.time}</p>
                <p className="w-44 shrink-0 text-2xl text-black">
                  {item.source}
                </p>
                <div className="min-w-[232px] flex-1 text-black">
                  <p className="text-base leading-snug">{item.title}</p>
                  <p className="mt-1 text-xs leading-snug text-black/80">
                    {item.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  className="w-24 shrink-0 rounded-lg bg-[#fe4d00] px-3 py-2 text-xl text-white transition-colors hover:bg-[#e54500]"
                >
                  Ask AI
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

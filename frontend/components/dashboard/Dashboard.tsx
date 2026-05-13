import Image from "next/image";
import {
  cveRows,
  cveWatchlistColumns,
  feedItems,
  topNewsColumns,
} from "@/components/dashboard/dashboard-data";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTable } from "@/components/dashboard/DashboardTable";
import { FeedFilters } from "@/components/dashboard/FeedFilters";
import { FeedSection } from "@/components/dashboard/FeedSection";

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-6 border-b border-[#f2f2f2] px-8 py-7 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-[32px] text-black">Home</h1>

          <label className="flex w-full max-w-[600px] items-center gap-4 rounded-[39px] border border-[#d3d3d3] bg-[#fbf4ea] px-4 py-4">
            <Image
              src="/images/dashboard/search-icon.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
            />
            <input
              type="search"
              placeholder="Search anything globally"
              className="min-w-0 flex-1 bg-transparent text-base text-black/70 outline-none placeholder:text-black/66"
            />
          </label>
        </header>

        <div className="flex flex-col gap-8 px-8 py-8">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <DashboardTable
              title="CVE Watchlist"
              columns={cveWatchlistColumns}
              rows={cveRows}
            />
            <DashboardTable
              title="TOP NEWS"
              columns={topNewsColumns}
              rows={cveRows}
            />
          </div>

          <FeedFilters />
          <FeedSection items={feedItems} />
        </div>
      </main>
    </div>
  );
}

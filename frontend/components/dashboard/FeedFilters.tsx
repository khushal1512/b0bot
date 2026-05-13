"use client";

import Image from "next/image";
import { useState } from "react";
import { feedFilters } from "@/components/dashboard/dashboard-data";

export function FeedFilters() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof feedFilters)[number]>("Newest");

  return (
    <div className="flex flex-wrap items-center gap-3">
      {feedFilters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-[10px] px-6 py-3 text-sm transition-colors ${
              isActive
                ? "bg-[#fe4d00] font-medium text-white"
                : "border border-[#d3d3d3] bg-[#fbf4ea] text-black"
            }`}
          >
            {filter}
          </button>
        );
      })}

      <button
        type="button"
        className="flex items-center gap-16 rounded-[10px] border border-[#d3d3d3] bg-[#fbf4ea] px-6 py-3 text-sm text-black"
      >
        Select Source
        <Image
          src="/images/dashboard/chevron-down.svg"
          alt=""
          width={11}
          height={6}
          aria-hidden
        />
      </button>
    </div>
  );
}

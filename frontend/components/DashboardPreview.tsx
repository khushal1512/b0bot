import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[1200px] px-4">
      <div className="overflow-hidden rounded-t-2xl shadow-[-2px_-2px_3.3px_rgba(0,0,0,0.25),3px_-1px_6.5px_rgba(0,0,0,0.25)]">
        <Image
          src="/images/dashboard.png"
          alt="0Bot dashboard showing CVE Watchlist and Top News tables"
          width={1200}
          height={779}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export function AnnouncementBadge() {
  return (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-3 rounded-[81px] border border-[#fff2ea] bg-[rgba(254,126,51,0.82)] px-4 py-2.5 backdrop-blur-[2px] transition-colors hover:bg-[rgba(254,126,51,0.92)]"
    >
      <span className="rounded bg-[#f69259] px-1.5 py-1 text-lg text-white backdrop-blur-[1px]">
        NEW
      </span>
      <span className="text-lg text-white">Chat with BugBot</span>
      <Image
        src="/images/arrow.svg"
        alt=""
        width={18}
        height={14}
        aria-hidden
      />
    </Link>
  );
}

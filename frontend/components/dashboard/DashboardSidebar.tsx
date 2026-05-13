import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/dashboard",
    icon: "/images/dashboard/home-icon.svg",
    active: true,
  },
  {
    label: "Sources",
    href: "/dashboard",
    icon: "/images/dashboard/sources-icon.svg",
    active: false,
  },
  {
    label: "Chat",
    href: "/dashboard",
    icon: "/images/dashboard/chat-icon.svg",
    active: false,
  },
] as const;

export function DashboardSidebar() {
  return (
    <aside className="flex w-[330px] shrink-0 flex-col border-r border-[#fbf4ea] bg-[#fbf4ea]">
      <div className="flex items-center gap-3 px-10 pt-7">
        <div className="flex h-11 w-12 items-center justify-center bg-[#fd4d00]">
          <Image
            src="/images/dashboard/bug-logo.svg"
            alt="0Bot logo"
            width={24}
            height={27}
          />
        </div>
        <span className="text-[32px] text-black">0Bot</span>
      </div>

      <nav className="mt-10 flex flex-col gap-5 px-7">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex h-10 items-center gap-7 rounded-[5px] pl-4 pr-12 ${
              item.active
                ? "bg-[#ffeadf] text-[#fa4e02]"
                : "text-[#a09d9c] hover:bg-[#ffeadf]/50"
            }`}
          >
            <Image src={item.icon} alt="" width={24} height={24} aria-hidden />
            <span className="text-2xl">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

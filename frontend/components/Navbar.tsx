import Image from "next/image";

export function Navbar() {
  return (
    <nav className="mx-auto grid h-20 w-full max-w-[756px] grid-cols-[1fr_auto_1fr] items-center rounded-[45px] bg-[#fff2ea] px-12 shadow-[4px_3px_15px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2">
        <div className="flex h-[35px] w-9 items-center justify-center overflow-hidden bg-[#fd4d00]">
          <Image
            src="/images/bug-logo.png"
            alt="0Bot logo"
            width={27}
            height={30}
            className="object-contain"
          />
        </div>
        <span className="text-[32px] font-normal text-black">0Bot</span>
      </div>

      <div className="hidden items-center gap-16 md:flex">
        <a href="#" className="text-2xl text-[#020202]">
          Hacker News
        </a>
        <a href="#" className="text-2xl text-[#585d66]">
          Features
        </a>
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="hidden h-[22px] w-px bg-black/20 sm:block" />
        <Image
          src="/images/sun-icon.svg"
          alt="Theme toggle"
          width={35}
          height={35}
          className="hidden sm:block"
        />
      </div>
    </nav>
  );
}

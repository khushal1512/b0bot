import Image from "next/image";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="bg-[#191919]">
      <div className="bg-[#0d0d0d] px-4 py-16">
        <div className="mx-auto flex max-w-[1308px] flex-col items-center gap-8 text-center">
          <p className="max-w-3xl font-serif text-3xl leading-snug text-white md:text-[32px]">
            Stop reacting to outdated intel. Automate your threat intelligence
            today.
          </p>
          <Link
            href="/dashboard"
            className="rounded-full bg-[#fe4d00] px-10 py-2.5 text-xl text-white transition-colors hover:bg-[#e54500]"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-[#0a0a0a] px-4 py-10">
        <div className="mx-auto flex max-w-[1308px] items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-12 items-center justify-center overflow-hidden bg-[#fd4d00]">
              <Image
                src="/images/footer-bug-logo.png"
                alt="0Bot logo"
                width={25}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-[32px] text-white">0Bot</span>
          </div>

          <Image
            src="/images/footer-cci-logo.png"
            alt="C2 SI - Ceylon Computer Science Institute"
            width={76}
            height={44}
            className="h-11 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

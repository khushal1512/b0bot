import { AnnouncementBadge } from "@/components/AnnouncementBadge";
import { DashboardPreview } from "@/components/DashboardPreview";
import { EmailSubscribe } from "@/components/EmailSubscribe";
import { Navbar } from "@/components/Navbar";

export function HeroSection() {
  return (
    <section
      className="min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(187deg, rgb(255, 120, 36) 18.891%, rgb(250, 78, 2) 92.716%)",
      }}
    >
      <div className="mx-auto flex max-w-[1512px] flex-col items-center px-4 pb-16 pt-6">
        <Navbar />

        <div className="mt-12 flex flex-col items-center gap-8 text-center">
          <AnnouncementBadge />

          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-5xl">
            Autonomous Threat Intelligence. Powered by AI
          </h1>

          <p className="max-w-3xl text-xl leading-normal text-white md:text-[32px]">
            Chat with B0Bot AI agents to instantly analyze CVEs, zero-day
            vulnerabilities, and global hacker news in real-time.
          </p>

          <div className="mt-4">
            <EmailSubscribe />
          </div>
        </div>

        <div className="mt-16 w-full">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

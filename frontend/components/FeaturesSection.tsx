import { ApiAccessIcon } from "@/components/ApiAccessIcon";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Multi-Agent Architecture",
    description:
      "Powered by LangGraph, specialized AI agents autonomously scrape, analyze, and route cybersecurity data, drastically reducing response times and manual oversight.",
    imageSrc: "/images/feature-multi-agent.png",
    imageAlt: "Multi-agent network diagram",
    imageClassName: "-rotate-[19deg]",
    imageWidth: 176,
    imageHeight: 96,
  },
  {
    title: "Instant Threat Detection",
    description:
      "Built on an event-driven Kafka bus with CDC integration, b0bot detects and processes breaking zero-day vulnerabilities the moment they hit RSS feeds or social media.",
    imageSrc: "/images/feature-threat-detection.png",
    imageAlt: "Radar threat detection illustration",
    imageClassName: "-scale-y-100 rotate-[-178deg]",
    imageWidth: 198,
    imageHeight: 108,
  },
  {
    title: "Seamless API Access",
    description:
      "Effortlessly plug real-time hacker news into your own security dashboards, automated social media bots, or Slack integrations with our high-speed endpoints.",
    illustration: <ApiAccessIcon />,
  },
  {
    title: "Multi-Turn Dialogue",
    description:
      "Go beyond single queries. Engage in continuous, context-aware conversations with the API to drill down into specific malware campaigns or CVE details.",
    imageSrc: "/images/feature-dialogue.png",
    imageAlt: "Conversation sparkles illustration",
    imageClassName: "rotate-[7deg]",
    imageWidth: 100,
    imageHeight: 100,
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="bg-[#fbf4ea] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-[1308px]">
        <header className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[627px]">
            <p className="text-2xl text-[#fe4d00]">
              YOUR AUTONOMOUS THREAT INTELLIGENCE HUB
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#3c1800]">
              Next Generation Threat Intelligence
            </h2>
          </div>
          <p className="max-w-[472px] text-2xl leading-normal text-[#6d6d6d] lg:pt-2 lg:text-right">
            Built for modern security operations. Automate threat discovery,
            analysis, and alerting at scale.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

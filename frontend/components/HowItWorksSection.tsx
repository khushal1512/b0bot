import { StepCard } from "@/components/StepCard";

const steps = [
  {
    step: "01",
    title: "Continuous Scraping",
    description:
      "The Scraper Agent constantly monitors top cybersecurity sources (like The Hacker News and Cyware) and social platforms, instantly pulling in raw data via high-speed data pipelines.",
  },
  {
    step: "02",
    title: "Vectorization & LLM Processing",
    description:
      "Raw news is instantly embedded into a Pinecone vector database. The Analyzer Agent uses advanced Large Language Models to read, summarize, and categorize the threats in real-time.",
  },
  {
    step: "03",
    title: "Alerts Subscribers",
    description:
      "The processed intelligence is instantly available via our API for your custom apps, accessible through the interactive web dashboard, or pushed directly to your inbox via automated summaries.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="bg-[#191919] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-[1308px]">
        <header className="mb-12 max-w-[761px]">
          <p className="text-2xl text-[#fe4d00]">HOW IT WORKS</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
            From Raw Data to Actionable Intelligence
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

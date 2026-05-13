type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="flex h-[300px] flex-col rounded-[20px] bg-white px-6 pt-2">
      <span className="font-serif text-[40px] text-[#fe4d00]">{step}</span>
      <h3 className="mt-6 text-2xl text-black">{title}</h3>
      <p className="mt-8 max-w-[349px] text-base leading-normal text-black">
        {description}
      </p>
    </article>
  );
}

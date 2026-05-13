import Image from "next/image";
import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  illustration?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function FeatureCard({
  title,
  description,
  illustration,
  imageSrc,
  imageAlt = "",
  imageClassName = "",
  imageWidth = 176,
  imageHeight = 96,
}: FeatureCardProps) {
  return (
    <article className="relative h-[300px] overflow-hidden rounded-[20px] bg-white">
      <div className="relative z-10 max-w-[414px] px-12 pt-9">
        <h3 className="font-serif text-xl text-black">{title}</h3>
        <p className="mt-5 text-xl leading-normal text-[#6c737a]">
          {description}
        </p>
      </div>

      {illustration ? (
        <div className="pointer-events-none absolute bottom-0 right-8 z-0">
          {illustration}
        </div>
      ) : null}

      {imageSrc ? (
        <div
          className={`pointer-events-none absolute bottom-4 right-6 z-0 ${imageClassName}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>
      ) : null}
    </article>
  );
}

import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BackgroundImage({ src, alt, className = "" }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`relative w-[90vw] h-[50vh] sm:w-[90vw] sm:h-[55vh] md:w-[85vw] md:h-[60vh] lg:w-[80vw] lg:h-[65vh] xl:w-[75vw] xl:h-[70vh] ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 
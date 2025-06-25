import Image from "next/image";

interface PersonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PersonImage({ src, alt, className = "" }: PersonImageProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={`relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] ${className}`}>
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
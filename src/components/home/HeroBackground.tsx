import Image from "next/image";

interface HeroBackgroundProps {
  src: string;
  alt: string;
  overlay?: boolean;
  overlayOpacity?: string;
  className?: string;
}

export default function HeroBackground({ 
  src, 
  alt, 
  overlay = true, 
  overlayOpacity = "bg-black/10",
  className = ""
}: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      {/* Overlay for better text readability */}
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`}></div>}
    </div>
  );
} 
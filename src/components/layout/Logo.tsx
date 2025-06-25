import Image from "next/image";

interface LogoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ src, width = 120, height = 32, className = "h-8 w-auto" }: LogoProps) {
  return (
    <Image
      src={src}
      alt="AMOR Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
} 
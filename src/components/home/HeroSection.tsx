import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";

interface HeroSectionProps {
  backgroundSrc: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  height?: string;
  className?: string;
}

export default function HeroSection({ 
  backgroundSrc, 
  backgroundAlt, 
  title, 
  subtitle,
  height = "h-[600px]",
  className = ""
}: HeroSectionProps) {
  return (
    <div className={`relative ${height} ${className}`}>
      {/* Background Image */}
      <HeroBackground src={backgroundSrc} alt={backgroundAlt} />

      {/* Hero Content */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <HeroTitle title={title} subtitle={subtitle} />
      </div>
    </div>
  );
} 
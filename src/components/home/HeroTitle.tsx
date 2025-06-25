interface HeroTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function HeroTitle({ 
  title, 
  subtitle, 
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: HeroTitleProps) {
  const defaultTitleStyles = "text-white font-normal text-center text-[24px] md:text-[48px]";
  const defaultSubtitleStyles = "text-white font-normal text-center text-[24px] md:text-[48px] mt-2";
  const fontFamily = { fontFamily: 'trajan, serif' };

  return (
    <div className={`text-center px-6 ${className}`}>
      <h1
        className={`${defaultTitleStyles} ${titleClassName}`}
        style={fontFamily}
      >
        <span className="block">{title}</span>
      </h1>
      <h2
        className={`${defaultSubtitleStyles} ${subtitleClassName}`}
        style={fontFamily}
      >
        <span className="block">{subtitle}</span>
      </h2>
    </div>
  );
} 
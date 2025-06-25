import BackgroundImage from "./BackgroundImage";
import PersonImage from "./PersonImage";
import WelcomeTitle from "./WelcomeTitle";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20">
      {/* Large AMOR Image Background */}
      <BackgroundImage src="/amor-banner.png" alt="AMOR" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-6">
        {/* Woman Image - Positioned in front */}
        <PersonImage src="/woman-banner.png" alt="Ty Anh Nguyen" />

        {/* Content Text */}
        <WelcomeTitle />
      </div>
    </section>
  );
} 
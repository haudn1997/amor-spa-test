import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="min-h-[1600px]">
      <HeroSection
        backgroundSrc="/banner.png"
        backgroundAlt="AMOR Background"
        title="AMOR THẢO MỘC"
        subtitle="NƠI LƯU GIỮ BÌNH YÊN"
      />
    </div>
  );
}

interface WelcomeTitleProps {
  className?: string;
}

export default function WelcomeTitle({ className = "" }: WelcomeTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-xl md:text-[38px] font-medium text-[#824435] mb-8 md:mt-16 mt-4 leading-7 uppercase" style={{ fontFamily: 'trajan, serif' }}>
        Mến chào quý khách,
        <br />
        <span className="block mt-2 md:mt-6">tôi là Ty Anh Nguyễn</span>
      </h1>
    </div>
  );
} 
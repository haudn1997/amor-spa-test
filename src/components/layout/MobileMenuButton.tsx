import Image from "next/image";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  menuIconSrc: string;
  iconColor: string;
}

export default function MobileMenuButton({ 
  isMenuOpen, 
  setIsMenuOpen, 
  menuIconSrc, 
  iconColor 
}: MobileMenuButtonProps) {
  return (
    <button
      className="lg:hidden text-white z-50 relative p-2 flex items-center justify-center"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {!isMenuOpen ? ( 
        <Image
          src={menuIconSrc}
          alt="Menu"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ) : (
        <svg
          className={`w-6 h-6 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
} 
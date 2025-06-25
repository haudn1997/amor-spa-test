import Link from "next/link";
import Logo from "./Logo";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { getMobileTextColor, getItemClasses } from "../../utils/styling";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  logoSrc: string;
  iconColor: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
  isScrolled: boolean;
  isAboutPage: boolean;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  logoSrc,
  iconColor,
  activeItem,
  setActiveItem,
  isScrolled,
  isAboutPage
}: MobileMenuProps) {

  const handleItemClick = (key: string) => {
    setActiveItem(key);
    setIsMenuOpen(false);
  };

  return (
    <div
      data-state={isMenuOpen ? 'open' : 'closed'}
      className={`
        lg:hidden fixed inset-x-0 top-0 z-50 w-full h-screen flex flex-col
        bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]
        transition ease-in-out
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:duration-300 data-[state=open]:duration-500
        data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        ${isMenuOpen ? 
          'pointer-events-auto opacity-100 translate-y-0' : 
          'pointer-events-none opacity-0 -translate-y-full'
        }
      `}
      style={{
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header with Logo and Close Button */}
      <div 
        className={`
          flex items-center justify-between p-6 transition-all ease-out
          ${isMenuOpen ? 
            'opacity-100 translate-y-0 duration-700 delay-200' : 
            'opacity-0 -translate-y-4 duration-300'
          }
        `}
      >
        <div className="flex items-center">
          <Logo src={logoSrc} width={100} height={27} className="h-7 w-auto" />
        </div>
        
        <button 
          className="text-white p-2 hover:scale-110 transition-transform duration-200 hover:bg-white/10 rounded-lg" 
          onClick={() => setIsMenuOpen(false)}
        >
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
        </button>
      </div>

      {/* Menu Items Container */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
        {NAVIGATION_ITEMS.map((item, index) => (
          <div
            key={item.key}
            className={`
              transition-all ease-out
              ${isMenuOpen ? 
                'opacity-100 translate-y-0' : 
                'opacity-0 translate-y-8'
              }
            `}
            style={{
              transitionDuration: isMenuOpen ? '0.6s' : '0.3s',
              transitionDelay: isMenuOpen ? `${index * 150 + 300}ms` : '0ms',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(2rem)',
            }}
          >
            {item.href.startsWith('#') ? (
              <a
                href={item.href}
                className={`
                  ${getItemClasses(
                    item.key, 
                    activeItem, 
                    getMobileTextColor(item.key, isScrolled, isAboutPage),
                    'tracking-[0.2em] text-xl font-medium'
                  )} 
                  hover:scale-105 transition-all duration-300 
                  hover:text-white/90 cursor-pointer
                  block py-3 px-6 rounded-lg hover:bg-white/5
                `}
                onClick={() => handleItemClick(item.key)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className={`
                  ${getItemClasses(
                    item.key, 
                    activeItem, 
                    getMobileTextColor(item.key, isScrolled, isAboutPage),
                    'tracking-[0.2em] text-xl font-medium'
                  )} 
                  hover:scale-105 transition-all duration-300 
                  hover:text-white/90 cursor-pointer
                  block py-3 px-6 rounded-lg hover:bg-white/5
                `}
                onClick={() => handleItemClick(item.key)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 
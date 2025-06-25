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
      className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`absolute inset-0 backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A] transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center">
            <Logo src={logoSrc} width={100} height={27} className="h-7 w-auto" />
          </div>
          
          <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
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

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center mt-10 space-y-12">
          {NAVIGATION_ITEMS.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.key}
                href={item.href}
                className={getItemClasses(
                  item.key, 
                  activeItem, 
                  getMobileTextColor(item.key, isScrolled, isAboutPage),
                  'tracking-[0.2em]'
                )}
                onClick={() => handleItemClick(item.key)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={getItemClasses(
                  item.key, 
                  activeItem, 
                  getMobileTextColor(item.key, isScrolled, isAboutPage),
                  'tracking-[0.2em]'
                )}
                onClick={() => handleItemClick(item.key)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('TRANG CHỦ');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isAboutPage = pathname === '/about';

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles based on scroll and page
  const headerBg = isScrolled ?
    (isAboutPage ? 'bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]' : 'bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]')
    : 'bg-transparent';
  
  const textColor = (isScrolled || isAboutPage) ? 'text-[#2E333D]' : 'text-white';
  const activeTextColor = (isScrolled || isAboutPage) ? 'text-[#824435]' : 'text-white';
  const logoSrc = (isScrolled || isAboutPage) ? '/amor-logo-color.png' : '/amor-logo.png';
  const menuIconSrc = (isScrolled || isAboutPage) ? '/hamburger_menu_black.png' : '/hamburger_menu.png';
  const iconColor = (isScrolled || isAboutPage) ? 'text-[#2E333D]' : 'text-white';

  return {
    isMenuOpen,
    setIsMenuOpen,
    activeItem,
    setActiveItem,
    isScrolled,
    isAboutPage,
    headerBg,
    textColor,
    activeTextColor,
    logoSrc,
    menuIconSrc,
    iconColor
  };
}; 
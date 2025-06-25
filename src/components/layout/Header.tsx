'use client';

import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { useHeader } from "../../hooks/useHeader";

export default function Header() {
  const {
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
  } = useHeader();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="flex flex-row items-center justify-between lg:justify-center px-6 lg:px-10 py-6">
        {/* Logo */}
        <div className="flex-shrink-0 lg:absolute lg:left-6 xl:left-12 flex items-center">
          <Logo src={logoSrc} />
        </div>

        {/* Desktop Navigation */}
        <Navigation 
          textColor={textColor}
          activeTextColor={activeTextColor}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuIconSrc={menuIconSrc}
          iconColor={iconColor}
        />
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        logoSrc={logoSrc}
        iconColor={iconColor}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isScrolled={isScrolled}
        isAboutPage={isAboutPage}
      />
    </header>
  );
} 
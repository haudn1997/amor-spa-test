export interface HeaderStyleProps {
  textColor: string;
  activeTextColor: string;
  logoSrc: string;
  menuIconSrc: string;
  iconColor: string;
  headerBg: string;
}

export interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export interface PageStateProps {
  isScrolled: boolean;
  isAboutPage: boolean;
} 
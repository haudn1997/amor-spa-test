export const getTextColor = (key: string, isScrolled: boolean, isAboutPage: boolean) => {
  if (key === 'VỀ AMOR') {
    return (isScrolled || isAboutPage) ? 'text-[#824435]' : 'text-white';
  }
  return (isScrolled || isAboutPage) ? 'text-[#2E333D]' : 'text-white';
};

export const getMobileTextColor = (key: string, isScrolled: boolean, isAboutPage: boolean) => {
  if (key === 'VỀ AMOR') {
    return (isScrolled || isAboutPage) ? 'text-[#15171B]' : 'text-white';
  }
  return (isScrolled || isAboutPage) ? 'text-[#2E333D]' : 'text-white';
};

export const getItemClasses = (
  key: string, 
  activeItem: string, 
  textColor: string, 
  additionalClasses = ''
) => {
  const weight = activeItem === key ? 'font-bold' : 'font-normal';
  const baseClasses = 'text-sm tracking-wider hover:opacity-80 transition-opacity';
  return `${textColor} ${baseClasses} ${weight} ${additionalClasses}`.trim();
}; 
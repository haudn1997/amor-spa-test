import Link from "next/link";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { getItemClasses } from "../../utils/styling";

interface NavigationProps {
  textColor: string;
  activeTextColor: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function Navigation({ textColor, activeTextColor, activeItem, setActiveItem }: NavigationProps) {
  const getItemColor = (key: string) => {
    return key === 'VỀ AMOR' ? activeTextColor : textColor;
  };

  return (
    <div className="hidden lg:flex items-center space-x-15">
      {NAVIGATION_ITEMS.map((item) => (
        item.href.startsWith('#') ? (
          <a
            key={item.key}
            href={item.href}
            className={getItemClasses(item.key, activeItem, getItemColor(item.key))}
            onClick={() => setActiveItem(item.key)}
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.key}
            href={item.href}
            className={getItemClasses(item.key, activeItem, getItemColor(item.key))}
            onClick={() => setActiveItem(item.key)}
          >
            {item.label}
          </Link>
        )
      ))}
    </div>
  );
} 
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

export const CategoryCard = ({ title, icon: Icon, description, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block">
      <div 
        className="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up bg-gradient-to-br from-secondary to-white"
      >
        <div className="flex flex-col items-center space-y-4">
          <Icon size={32} className="text-primary animate-bounce" />
          <h3 className="text-xl font-display font-semibold text-gray-900 hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
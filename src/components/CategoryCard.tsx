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
      <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
        <Icon size={32} className="text-primary mb-4" />
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};
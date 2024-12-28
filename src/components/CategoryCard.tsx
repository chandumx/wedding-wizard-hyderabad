import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
  location?: string;
}

export const CategoryCard = ({ title, icon: Icon, description, link, location }: CategoryCardProps) => {
  // Construct the correct URL format for category-location pages
  const href = location 
    ? `/category/${link}/location/${location}`
    : `categories/${link}`; // Removed the leading slash to prevent double slashes

  return (
    <Link to={href}>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
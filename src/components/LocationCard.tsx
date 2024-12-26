import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  link: string;
}

export const LocationCard = ({ name, link }: LocationCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="relative rounded-lg overflow-hidden animate-fade-up">
        <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary hover:from-primary/20 hover:to-secondary/80 transition-all duration-300">
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="w-8 h-8 text-primary animate-bounce" />
            <h3 className="text-xl font-display font-semibold text-gray-900 hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="text-sm text-gray-600 text-center">
              Discover venues in {name}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
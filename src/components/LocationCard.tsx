import { Link } from "react-router-dom";

interface LocationCardProps {
  name: string;
  image: string;
  vendorCount: number;
  link: string;
}

export const LocationCard = ({ name, image, vendorCount, link }: LocationCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="relative rounded-lg overflow-hidden card-hover">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-xl font-display font-semibold mb-1">{name}</h3>
            <p className="text-sm">{vendorCount} vendors</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
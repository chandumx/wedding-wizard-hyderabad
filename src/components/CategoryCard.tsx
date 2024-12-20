import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getRandomImage } from "../services/imageService";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

export const CategoryCard = ({ title, icon: Icon, description, link }: CategoryCardProps) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const image = await getRandomImage(`${title} wedding service`);
      setBackgroundImage(image);
    };

    loadImage();
  }, [title]);

  return (
    <Link to={link} className="block">
      <div 
        className="p-6 rounded-lg shadow-sm card-hover relative overflow-hidden"
        style={{
          backgroundImage: backgroundImage ? `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Icon size={32} className="text-primary mb-4" />
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};
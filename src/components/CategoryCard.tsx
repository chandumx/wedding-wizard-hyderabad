import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getRandomImage } from "../services/imageService";
import { Skeleton } from "./ui/skeleton";
import { toast } from "sonner";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

export const CategoryCard = ({ title, icon: Icon, description, link }: CategoryCardProps) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        // Use optimized placeholder images from Unsplash
        const optimizedFallbacks = {
          'Wedding Venues': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
          'default': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
        };
        
        const image = await getRandomImage(`${title} wedding service`);
        setBackgroundImage(image);
      } catch (error) {
        console.error('Error loading image:', error);
        setBackgroundImage(optimizedFallbacks[title] || optimizedFallbacks.default);
        toast.error('Using optimized fallback image');
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [title]);

  if (isLoading) {
    return (
      <div className="block">
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
    );
  }

  return (
    <Link to={link} className="block">
      <div 
        className="p-6 rounded-lg shadow-sm card-hover relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        style={{
          backgroundImage: backgroundImage ? `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'auto'
        }}
      >
        <Icon size={32} className="text-primary mb-4" />
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};
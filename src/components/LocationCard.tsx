import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRandomImage } from "../services/imageService";
import { Skeleton } from "./ui/skeleton";
import { toast } from "sonner";

interface LocationCardProps {
  name: string;
  image: string;
  link: string;
}

export const LocationCard = ({ name, image, link }: LocationCardProps) => {
  const [imageUrl, setImageUrl] = useState(image);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      if (image === '/placeholder.svg') {
        try {
          setIsLoading(true);
          const newImage = await getRandomImage(`${name} location hyderabad india`);
          setImageUrl(newImage);
          setError(false);
        } catch (err) {
          console.error('Error loading image:', err);
          setImageUrl('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7');
          setError(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [name, image]);

  if (isLoading) {
    return <Skeleton className="h-48 w-full rounded-lg" />;
  }

  return (
    <Link to={link} className="block">
      <div className="relative rounded-lg overflow-hidden card-hover">
        <img 
          src={imageUrl} 
          alt={name} 
          className={`w-full h-48 object-cover ${error ? 'opacity-80' : ''}`}
          onError={() => {
            setImageUrl('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7');
            setError(true);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-xl font-display font-semibold mb-1">{name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
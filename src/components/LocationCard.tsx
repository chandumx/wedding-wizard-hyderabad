import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
          const optimizedImages = {
            'Jubilee Hills': '/images/jubilee-hills.jpg',
            'Banjara Hills': '/images/banjara-hills.jpg',
            'Hitech City': '/images/hitech-city.jpg',
            'Old City': '/images/old-city.jpg',
            'default': '/images/default-location.jpg'
          };
          
          setImageUrl(optimizedImages[name] || optimizedImages.default);
          setError(false);
        } catch (err) {
          console.error('Error loading image:', err);
          setImageUrl('/images/default-location.jpg');
          setError(true);
          toast.error('Error loading location image');
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
            setImageUrl('/images/default-location.jpg');
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { locations } from "../data/locations";
import { categories } from "../data/categories";

export const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  // Flatten all locations and their areas into a single array
  const allLocations = locations.flatMap(location => 
    [
      // Include the main location
      { name: location.name, slug: location.slug },
      // Include all areas within the location
      ...location.areas.map(area => ({
        name: `${area.name} (${location.name})`,
        slug: `${location.slug}/${area.slug}`
      }))
    ]
  );

  const handleSearch = () => {
    if (!selectedCategory || !selectedLocation) {
      toast.error("Please select both a category and location");
      return;
    }

    const [locationSlug, areaSlug] = selectedLocation.split('/');
    if (areaSlug) {
      navigate(`/location/${locationSlug}/${areaSlug}/${selectedCategory}`);
    } else {
      navigate(`/location/${locationSlug}/${selectedCategory}`);
    }
  };

  return (
    <section className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Find Wedding Services in Hyderabad
          </h1>
          <p className="text-xl text-gray-600">
            Discover and book the best wedding vendors in your area
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-1/3">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.link} value={category.link}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full sm:w-1/3">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {allLocations.map((location) => (
                <SelectItem key={location.slug} value={location.slug}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={handleSearch}
            className="w-full sm:w-1/3"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
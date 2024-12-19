import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-up">
          Find Perfect Wedding Venues in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up">
          Discover top-rated wedding halls, caterers, and more in your area
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-lg shadow-md p-2">
            <input
              type="text"
              placeholder="Search venues, services, or locations..."
              className="flex-1 p-2 outline-none"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
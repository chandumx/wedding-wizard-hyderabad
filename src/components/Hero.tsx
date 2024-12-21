import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 text-center">
        <div className="animate-fade-up space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Your Perfect Wedding<br />
            in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover exquisite venues, top-rated vendors, and everything you need 
            to create magical moments in the City of Pearls. From traditional ceremonies 
            to modern celebrations, we've got you covered.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
            <input
              type="text"
              placeholder="Search for venues, services, or locations..."
              className="flex-1 p-3 outline-none text-lg"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              <Search size={24} />
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/90 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              Wedding Venues
            </span>
            <span className="px-4 py-2 bg-white/90 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              Catering Services
            </span>
            <span className="px-4 py-2 bg-white/90 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              Photography
            </span>
            <span className="px-4 py-2 bg-white/90 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              Decorations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
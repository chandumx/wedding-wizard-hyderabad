import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 py-20 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Your Dream Wedding in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover perfect wedding venues, top-rated vendors, and everything you need 
            to create magical moments in the City of Pearls
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
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="px-3 py-1 bg-white/80 rounded-full shadow-sm">
              Wedding Venues
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full shadow-sm">
              Catering Services
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full shadow-sm">
              Photography
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full shadow-sm">
              Decorations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
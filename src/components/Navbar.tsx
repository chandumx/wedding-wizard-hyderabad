import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display text-primary">
            Hyderabad Weddings
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/categories" className="text-gray-600 hover:text-primary">
              Categories
            </Link>
            <Link to="/locations" className="text-gray-600 hover:text-primary">
              Locations
            </Link>
            <Link to="/vendors" className="text-gray-600 hover:text-primary">
              Vendors
            </Link>
          </div>

          <button className="p-2 text-gray-600 hover:text-primary">
            <Search size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
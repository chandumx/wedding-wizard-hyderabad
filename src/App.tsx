import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LocationPage from "./pages/LocationPage";
import SubLocationPage from "./pages/SubLocationPage";
import Categories from "./pages/Categories";
import Locations from "./pages/Locations";
import CategoryLocationPage from "./pages/CategoryLocationPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/location/:location" element={<LocationPage />} />
      <Route path="/location/:location/:subLocation" element={<SubLocationPage />} />
      <Route path="/location/:location/:subLocation/:category" element={<CategoryLocationPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/category/:category/:location/:subLocation" element={<CategoryLocationPage />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import Categories from "./pages/Categories";
import LocationPage from "./pages/LocationPage";
import SubLocationPage from "./pages/SubLocationPage";
import CategoryLocationPage from "./pages/CategoryLocationPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/location/:location" element={<LocationPage />} />
      <Route path="/location/:location/:subLocation" element={<SubLocationPage />} />
      <Route path="/location/:location/:subLocation/:category" element={<CategoryLocationPage />} />
    </Routes>
  );
}

export default App;
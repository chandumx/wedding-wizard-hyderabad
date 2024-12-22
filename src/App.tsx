import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LocationPage from "./pages/LocationPage";
import SubLocationPage from "./pages/SubLocationPage";
import Categories from "./pages/Categories";
import Locations from "./pages/Locations";
import CategoryLocationPage from "./pages/CategoryLocationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:location" element={<LocationPage />} />
        <Route path="/location/:location/:subLocation" element={<SubLocationPage />} />
        <Route path="/location/:location/:subLocation/:category" element={<CategoryLocationPage />} />
        <Route path="/category/:category/:location/:subLocation" element={<CategoryLocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
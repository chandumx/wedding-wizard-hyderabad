import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import LocationPage from "./pages/LocationPage";
import SubLocationPage from "./pages/SubLocationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/location/:location" element={<LocationPage />} />
      <Route path="/location/:location/:subLocation" element={<SubLocationPage />} />
    </Routes>
  );
}

export default App;
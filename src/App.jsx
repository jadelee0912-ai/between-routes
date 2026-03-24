import { BrowserRouter, Routes, Route } from "react-router-dom";
import BetweenRoutesWebsite from "./BetweenRoutesWebsite";
import CulturalJourneysPage from "./pages/CulturalJourneysPage";
import BusinessVisitsPage from "./pages/BusinessVisitsPage";
import TailorMadeTravelPage from "./pages/TailorMadeTravelPage";
import BespokeExperiencesPage from "./pages/BespokeExperiencesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BetweenRoutesWebsite />} />
        <Route path="/china-cultural-journeys" element={<CulturalJourneysPage />} />
        <Route path="/china-business-visits" element={<BusinessVisitsPage />} />
        <Route path="/tailor-made-china-travel" element={<TailorMadeTravelPage />} />
        <Route path="/bespoke-experiences-china" element={<BespokeExperiencesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
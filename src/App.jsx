import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageWrapper from "./components/LanguageWrapper";
import BetweenRoutesWebsite from "./BetweenRoutesWebsite";
import CulturalJourneysPage from "./pages/CulturalJourneysPage";
import BusinessVisitsPage from "./pages/BusinessVisitsPage";
import TailorMadeTravelPage from "./pages/TailorMadeTravelPage";
import BespokeExperiencesPage from "./pages/BespokeExperiencesPage";

const pages = (
  <>
    <Route index element={<BetweenRoutesWebsite />} />
    <Route path="china-cultural-journeys" element={<CulturalJourneysPage />} />
    <Route path="china-business-visits" element={<BusinessVisitsPage />} />
    <Route path="tailor-made-china-travel" element={<TailorMadeTravelPage />} />
    <Route path="bespoke-experiences-china" element={<BespokeExperiencesPage />} />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* English (default, no prefix) */}
        <Route element={<LanguageWrapper />}>
          {pages}
        </Route>
        {/* Other languages with /:lang prefix */}
        <Route path=":lang" element={<LanguageWrapper />}>
          {pages}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

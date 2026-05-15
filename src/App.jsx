import { Route, Routes } from "react-router-dom";
import ConsentEffects from "./components/ConsentEffects";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <>
      <ConsentEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/leistungen" element={<ServicesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/impressum" element={<LegalPage pageKey="impressum" />} />
          <Route path="/datenschutz" element={<LegalPage pageKey="datenschutz" />} />
          <Route path="/agb" element={<LegalPage pageKey="agb" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

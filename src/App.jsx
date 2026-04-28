import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/leistungen" element={<ServicesPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ServiceDetailsPage from "@/pages/ServiceDetailsPage";
import ServicesPage from "@/pages/ServicesPage";
import WorksPage from "@/pages/WorksPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

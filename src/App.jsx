import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ScrollToHash from "./components/ScrollToHash";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

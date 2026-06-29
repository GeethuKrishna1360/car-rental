import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Listings from "./components/Listings";
import Deals from "./components/Deals";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Listings />
        <Deals />
        <AboutUs />
        <Team />
        <AppDownload />
      </main>

      <Footer />
    </div>
  );
}

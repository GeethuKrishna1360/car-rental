import { useState } from "react";
import { Car, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "Listings",
    "How it Works",
    "About Us",
    "Blog",
    "Contact",
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-[#E53E3E] p-2.5 rounded-xl">
              <Car className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Millennium</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-[#E53E3E] font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-[#E53E3E] text-white px-7 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-500/25">
              Choose Car
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#E53E3E] text-white px-7 py-3 rounded-xl font-semibold mt-2 w-full">
              Choose Car
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

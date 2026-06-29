import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white py-16 lg:py-24 overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Subtle modern architectural background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Typography & Copy */}
          <div className="lg:col-span-5 z-10">
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight uppercase leading-[0.95] mb-4">
              Pure Power.
              <span className="block text-gray-900">Zero Limits.</span>
              <span className="block text-[#EF4444] text-red-500 filter drop-shadow-sm">
                All Electric.
              </span>
            </h1>

            <p className="text-base text-gray-600 font-medium max-w-md mb-10 leading-relaxed">
              VoltSprint is redefining performance with precision engineering,
              cutting-edge technology, and a vision for a sustainable future.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-[#EF4444] bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-md hover:bg-red-600 transition-all shadow-md shadow-red-500/20">
                Explore Models
              </button>

              <button className="flex items-center gap-2 border-2 border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-gray-50 transition-all">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Side: Car Image Showcase */}
          <div className="lg:col-span-7 relative flex justify-end">
            {/* Soft geometric architectural backdrop shape */}
            <div className="absolute -top-20 -right-20 w-[120%] h-[140%] bg-gradient-to-b from-gray-100 to-transparent rounded-bl-[120px] -z-10 pointer-events-none" />

            <div className="relative w-full max-w-[740px]">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1000&auto=format&fit=crop&q=80" // Replace with your exact Voltsprint image asset link
                alt="VoltSprint Premium All Electric Sports Car"
                className="w-full h-auto object-contain transform scale-105 select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

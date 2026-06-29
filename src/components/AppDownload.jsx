import { Apple, Play, Car } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="bg-gradient-to-r from-[#E53E3E] to-red-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Download Our App to Manage Your Rentals
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl">
              Book, manage, and track your rentals from anywhere. Available for
              iOS and Android.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-3">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <Car className="w-48 h-48 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

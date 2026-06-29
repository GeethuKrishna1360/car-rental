import { ArrowRight } from "lucide-react";

export default function Deals() {
  return (
    <section id="deals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E53E3E] font-semibold text-sm uppercase tracking-wider">
            Special Offers
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Discover Our Exclusive Deals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save big with our limited-time promotions and seasonal offers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop"
              alt="Weekly Specials"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E53E3E]/90 to-red-800/80" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <span className="text-red-200 text-sm font-semibold uppercase tracking-wider mb-2">
                Limited Time
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">
                Weekly Specials
              </h3>
              <p className="text-red-100 mb-6 max-w-sm">
                Get up to 30% off on premium sedans and SUVs every week. Book
                early to secure the best rates!
              </p>
              <button className="bg-white text-[#E53E3E] px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all w-fit flex items-center gap-2">
                View Offers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop"
              alt="Weekend Discounts"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
                Exclusive
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">
                Weekend Discounts
              </h3>
              <p className="text-gray-300 mb-6 max-w-sm">
                Plan your weekend getaway with our special rates. Economy cars
                starting at just $49/day!
              </p>
              <button className="bg-[#E53E3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all w-fit flex items-center gap-2">
                View Offers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

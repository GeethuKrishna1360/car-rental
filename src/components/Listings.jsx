import { Users, Settings, Fuel } from "lucide-react";

export default function Listings() {
  const cars = [
    {
      name: "Toyota Camry 2022",
      seats: 5,
      transmission: "Automatic",
      fuel: "Gasoline",
      price: 72,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    },
    {
      name: "Nissan Altima 2021",
      seats: 5,
      transmission: "Automatic",
      fuel: "Hybrid",
      price: 62,
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19ba27c5?w=600&h=400&fit=crop",
    },
    {
      name: "Ford Mustang 2023",
      seats: 4,
      transmission: "Manual",
      fuel: "Gasoline",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1584345604476-8ec5f162d238?w=600&h=400&fit=crop",
    },
    {
      name: "Jeep Wrangler 2022",
      seats: 5,
      transmission: "Automatic",
      fuel: "Diesel",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="listings" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E53E3E] font-semibold text-sm uppercase tracking-wider">
            Our Fleet
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Popular Rental Cars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="text-[#E53E3E] font-bold text-lg">
                    ${car.price}
                  </span>
                  <span className="text-gray-500 text-xs">/day</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {car.name}
                </h3>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel className="w-4 h-4" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
                <button className="w-full bg-[#E53E3E] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-all">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Car, Clock, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Car className="w-7 h-7" />,
      title: "Wide Range of Vehicles",
      desc: "From economy to luxury, find the perfect car for every occasion and budget.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Flexible Rental Plans",
      desc: "Daily, weekly, or monthly — choose a plan that fits your schedule perfectly.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "24/7 Customer Support",
      desc: "Our dedicated team is always here to help you whenever you need assistance.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center text-[#E53E3E] mb-5 group-hover:bg-[#E53E3E] group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

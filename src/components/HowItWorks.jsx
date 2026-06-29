import { Search, Car, Check, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: <Search className="w-6 h-6" />,
      title: "Search Cars",
      desc: "Browse our extensive fleet and find your perfect match",
    },
    {
      num: 2,
      icon: <Car className="w-6 h-6" />,
      title: "Choose",
      desc: "Select your vehicle based on preferences and budget",
    },
    {
      num: 3,
      icon: <Check className="w-6 h-6" />,
      title: "Book & Confirm",
      desc: "Complete your reservation with instant confirmation",
    },
    {
      num: 4,
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Pickup & Drive",
      desc: "Collect your keys and hit the road",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E53E3E] font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get on the road in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#E53E3E] via-red-300 to-[#E53E3E]" />
          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="relative z-10">
                <div className="bg-[#E53E3E] text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25">
                  {step.icon}
                </div>
                <div className="bg-white border-2 border-[#E53E3E] w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-10 mb-4 text-[#E53E3E] font-bold text-sm shadow-md">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check, Heart, X, Shield, Quote, Star } from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Easy Online Booking",
      desc: "Book in minutes with our simple, secure platform",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "No Hidden Fees",
      desc: "Transparent pricing with no surprise charges",
    },
    {
      icon: <X className="w-6 h-6" />,
      title: "Free Cancellation",
      desc: "Cancel anytime up to 24 hours before pickup",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Best Price Guarantee",
      desc: "We match any competitor price on the same vehicle",
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E53E3E] font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Why Choose Millennium?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We\'re committed to providing the best car rental experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreValues.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center text-[#E53E3E] mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-[#E53E3E] opacity-20">
            <Quote className="w-32 h-32" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
              alt="Client"
              className="w-24 h-24 rounded-2xl object-cover shadow-lg"
            />
            <div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "The car rental experience was absolutely seamless from start to
                finish. Professional staff, amazing service, and the vehicles
                are in pristine condition. I\'ve been a loyal customer for over
                two years now and couldn\'t recommend them more highly!"
              </p>
              <div>
                <p className="font-bold text-gray-900">Laura Stevenson</p>
                <p className="text-gray-500 text-sm">
                  Premium Member since 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

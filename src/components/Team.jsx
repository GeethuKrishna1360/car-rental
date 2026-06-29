import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "James Wilson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    },
    {
      name: "Sarah Anderson",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Fleet Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Relations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E53E3E] font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Affordable and Secure Car Rental Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind your exceptional rental
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <a
                    href="#"
                    className="bg-white/90 p-2 rounded-lg hover:bg-white"
                  >
                    <Facebook className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 p-2 rounded-lg hover:bg-white"
                  >
                    <Twitter className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 p-2 rounded-lg hover:bg-white"
                  >
                    <Linkedin className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#E53E3E] text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

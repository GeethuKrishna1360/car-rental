import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Car,
  Clock,
  Sparkles,
  Wrench,
  HeartHandshake,
  Quote,
} from "lucide-react";

const stats = [
  { label: "Years on the Road", value: 18, suffix: "+" },
  { label: "Vehicles in Fleet", value: 950, suffix: "+" },
  { label: "Happy Customers", value: 64000, suffix: "+" },
  { label: "Cities Served", value: 27, suffix: "" },
];

const values = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Reliability First",
    desc: "Every vehicle is inspected and serviced on a strict schedule, so the car you book is the car you can trust.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Honest Pricing",
    desc: "No hidden fees, no last-minute surprises. The price you see at booking is the price you pay at pickup.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Genuine Care",
    desc: "Our team treats every rental like it's for a friend — clear advice, real answers, zero pressure.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Always Road-Ready",
    desc: "In-house technicians keep our fleet maintained to manufacturer standard, mile after mile.",
  },
];

const milestones = [
  {
    year: "2007",
    title: "Millennium Group is founded",
    desc: "Started with a single lot and twelve cars, built on one promise: treat every renter like family.",
  },
  {
    year: "2012",
    title: "First citywide expansion",
    desc: "Opened five new branches and introduced our first hybrid and fuel-efficient vehicles.",
  },
  {
    year: "2017",
    title: "950+ vehicle fleet milestone",
    desc: "Grew into one of the region's largest independent rental networks without losing the personal touch.",
  },
  {
    year: "2023",
    title: "Digital-first booking",
    desc: "Launched instant online booking, transparent pricing, and 24/7 live support across every location.",
  },
];

const team = [
  {
    name: "Daniel Carter",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Nandan",
    role: "Head of Fleet Operations",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Webb",
    role: "Customer Experience Lead",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rossi",
    role: "Regional Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

/** Reveals an element with a fade/slide the first time it scrolls into view. */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/** Counts a number up from 0 once it enters view. */
function Counter({ value, suffix = "", inView, duration = 1600 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function Reveal({ children, className = "", style = {}, as: Tag = "div" }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`au-reveal ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default function AboutUs() {
  const [statsRef, statsInView] = useReveal(0.4);

  return (
    <main className="bg-white">
      <style>{`
        .au-reveal { transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        @keyframes au-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .au-blob { animation: au-float 10s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .au-reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
          .au-blob { animation: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F1115] py-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=900&fit=crop"
          alt="Millennium Group fleet on the road"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-[#0F1115]/40" />
        <div className="au-blob pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400">
            About Millennium Group
          </span>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Eighteen years of getting you
            <span className="block text-[#E53E3E]">where you're going</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Millennium Group Rent A Car started with twelve vehicles and a
            simple idea: rental cars should be easy to trust. Today we're a
            27-city network built on that same idea — just with a much bigger
            fleet.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="border-b border-gray-100 bg-[#F8F9FA] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#E53E3E] sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} inView={statsInView} />
              </div>
              <p className="mt-1.5 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
              Our Story
            </span>
            <h2 className="mb-5 mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built on a lot in 2007. Still driven by the same idea today.
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Millennium Group Rent A Car opened with a single lot and twelve
              cars, founded on a frustration with an industry that felt
              transactional. We set out to do the opposite: clear pricing,
              well-kept vehicles, and people on the other side of the counter
              who actually wanted to help.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              That approach grew with us. We now operate close to a thousand
              vehicles across 27 cities, but the standard hasn't changed —
              every car in our fleet is maintained to the same standard as
              the first twelve, and every renter gets the same straight
              answers we gave on day one.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's a weekend trip, a business stay, or a one-way
              move across the state, we built Millennium Group to make the
              car part of your plans the easiest part.
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&h=700&fit=crop"
                alt="Millennium Group rental lot"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#E53E3E]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Top-Rated Rental Network
                  </p>
                  <p className="text-xs text-gray-500">5 years running</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
              What We Stand For
            </span>
            <h2 className="mb-4 mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Renting a car shouldn't feel like a gamble
            </h2>
            <p className="text-gray-600">
              These four principles guide every vehicle we buy, every branch
              we open, and every conversation our team has with a renter.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#E53E3E]">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {value.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
              Our Journey
            </span>
            <h2 className="mb-4 mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              From one lot to a regional network
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200 sm:left-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal
                  key={m.year}
                  className={`relative flex flex-col gap-2 pl-10 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E53E3E] text-[10px] font-bold text-white sm:left-1/2 sm:-translate-x-1/2">
                    <Car className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-[#E53E3E]">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
              The People Behind It
            </span>
            <h2 className="mb-4 mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet the team keeping the fleet moving
            </h2>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, i) => (
              <Reveal
                key={person.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto mb-6 h-10 w-10 text-red-200" />
          <p className="text-xl font-medium leading-relaxed text-gray-800 sm:text-2xl">
            "We've rented from Millennium Group for every company trip the
            last three years. The cars are always clean, the pickup takes
            ten minutes, and they've never once tried to upsell us on
            something we didn't ask for."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
              alt="Customer"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Sara Whitfield</p>
              <p className="text-xs text-gray-500">Operations Manager, Larkspur Co.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0F1115] py-20 text-white">
        <div className="au-blob pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to hit the road with us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Browse the fleet, pick your dates, and get a confirmation in
            minutes — no lines, no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/#listings"
              className="rounded-xl bg-[#E53E3E] px-7 py-3.5 font-semibold text-white transition hover:bg-red-700 active:scale-[0.98]"
            >
              Browse the Fleet
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/50"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> 27 cities
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 24/7 support
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" /> 64,000+ renters served
            </span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
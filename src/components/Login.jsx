import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Car,
  Quote,
  Sparkles,
  Users,
  Building2,
} from "lucide-react";

const features = [
  { icon: <ShieldCheck className="h-4 w-4" />, label: "RERA Certified" },
  { icon: <Car className="h-4 w-4" />, label: "500+ Vehicles" },
  { icon: <Users className="h-4 w-4" />, label: "50,000+ Customers" },
];

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "123456";

function FloatingField({
  label,
  type = "text",
  value,
  onChange,
  error,
  name,
  icon,
  endAdornment,
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <div
        className={`relative rounded-xl transition-shadow ${
          focused && !error ? "shadow-[0_0_0_4px_rgba(229,62,62,0.1)]" : ""
        }`}
      >
        {icon && (
          <span
            className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              focused ? "text-[#E53E3E]" : "text-gray-400"
            }`}
          >
            {icon}
          </span>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`peer w-full rounded-xl border bg-white py-4 pb-2.5 pt-5 text-sm text-gray-900 outline-none transition-colors ${
            icon ? "pl-11 pr-11" : "px-4 pr-11"
          } ${
            error
              ? "border-red-300 focus:border-red-400"
              : "border-gray-200 focus:border-[#E53E3E]"
          }`}
        />
        <label
          className={`pointer-events-none absolute transition-all duration-200 ${
            icon ? "left-11" : "left-4"
          } ${
            focused || hasValue
              ? "top-2 text-[11px] font-medium text-[#E53E3E]"
              : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
          }`}
        >
          {label}
        </label>
        {endAdornment && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {endAdornment}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const isAdminEmail = form.email.trim().toLowerCase() === ADMIN_EMAIL;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.password || form.password.length < 6)
      next.password = "Password must be at least 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Admin email must match the admin password exactly; any other valid
    // email/password combo is treated as a customer login (demo only —
    // there's no real backend/auth here).
    if (isAdminEmail && form.password !== ADMIN_PASSWORD) {
      setErrors((er) => ({
        ...er,
        password: "Incorrect password for the admin account",
      }));
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        if (isAdminEmail) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }, 1200);
    }, 1300);
  };

  return (
    <main className="min-h-screen bg-white">
      <style>{`
        .lg-reveal { transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        @keyframes lg-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        .lg-blob { animation: lg-float 11s ease-in-out infinite; }
        @keyframes lg-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -12px); }
        }
        .lg-car-ghost { animation: lg-drift 8s ease-in-out infinite; }
        @keyframes lg-pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .lg-pop { animation: lg-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes lg-progress { from { width: 0%; } to { width: 100%; } }
        .lg-progress { animation: lg-progress 1.2s linear both; }
        @keyframes lg-shine {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .lg-btn:hover .lg-shine { animation: lg-shine 0.9s ease; }
        @media (prefers-reduced-motion: reduce) {
          .lg-reveal, .lg-blob, .lg-pop, .lg-car-ghost, .lg-shine, .lg-progress { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; width: 100% !important; }
        }
      `}</style>

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT — brand panel */}
        <div className="relative hidden overflow-hidden bg-[#0F1115] lg:block">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=1400&fit=crop"
            alt="Millennium Group fleet on the road"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/85 to-[#0F1115]/60" />
          <div className="lg-blob pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />
          <div
            className="lg-blob pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-red-600/15 blur-3xl"
            style={{ animationDelay: "3s" }}
          />
          <Car
            className="lg-car-ghost pointer-events-none absolute -right-6 bottom-24 h-64 w-64 text-white/[0.04]"
            strokeWidth={0.8}
          />

          <div className="relative flex h-full flex-col justify-between p-12 text-white">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-extrabold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E53E3E] to-red-700 shadow-lg shadow-red-900/30">
                <Car className="h-5 w-5" />
              </span>
              Millennium Group
            </Link>

            <div
              className="lg-reveal max-w-md"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Welcome Back
              </span>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Your one hub for mobility,{" "}
                <span className="text-[#E53E3E]">property & more</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Sign in to manage bookings, track your fleet, or check in on
                your properties — all from one place.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {features.map((f, i) => (
                  <span
                    key={f.label}
                    className="lg-reveal flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(12px)",
                      transitionDelay: `${150 + i * 100}ms`,
                    }}
                  >
                    <span className="text-[#E53E3E]">{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <Quote className="mb-3 h-6 w-6 text-red-300/50" />
                <p className="text-sm font-medium leading-relaxed text-white/85">
                  "Our mission is simple: to earn your trust every single day."
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"
                    alt="Mr. Patrick Gomez"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Mr. Patrick Gomez
                    </p>
                    <p className="text-[11px] text-white/50">
                      Founder & Managing Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50">
              <Building2 className="h-4 w-4 text-emerald-400" />
              25+ years of trusted mobility, construction & real estate services
              in Trivandrum.
            </div>
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="relative flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-16 sm:px-6 lg:bg-white lg:px-12">
          <div className="pointer-events-none absolute -right-32 -top-32 hidden h-72 w-72 rounded-full bg-red-50 blur-3xl lg:block" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 hidden h-72 w-72 rounded-full bg-red-50/70 blur-3xl lg:block" />

          <div
            className="lg-reveal relative w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60 sm:p-9"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="absolute inset-x-8 top-0 h-1 -translate-y-px rounded-full bg-gradient-to-r from-[#E53E3E] via-red-400 to-[#E53E3E]" />

            {/* Mobile-only logo */}
            <Link
              to="/"
              className="mb-8 flex items-center gap-2 text-lg font-extrabold text-gray-900 lg:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E53E3E] to-red-700 text-white shadow-lg shadow-red-200">
                <Car className="h-5 w-5" />
              </span>
              Millennium Group
            </Link>

            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="lg-pop mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Welcome back
                </h2>
                <p className="mt-2 max-w-xs text-sm text-gray-500">
                  {isAdminEmail
                    ? "You're signed in as admin. Redirecting you to your dashboard now."
                    : "You're signed in. Redirecting you home now."}
                </p>
                <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-gray-100">
                  <div className="lg-progress h-full rounded-full bg-[#E53E3E]" />
                </div>
              </div>
            ) : (
              <>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
                  Sign In
                </span>
                <h1 className="mb-2 mt-2 text-3xl font-bold text-gray-900">
                  Good to see you again
                </h1>
                <p className="mb-4 text-sm text-gray-500">
                  Manage your bookings, fleet, and properties in one place.
                </p>

                <p className="mb-6 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-400">
                  Demo admin login:{" "}
                  <span className="font-medium text-gray-500">
                    admin@gmail.com / 123456
                  </span>
                  . Any other email signs in as a customer.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <FloatingField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    icon={<Mail className="h-4 w-4" />}
                  />

                  <FloatingField
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                    icon={<Lock className="h-4 w-4" />}
                    endAdornment={
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="text-gray-400 transition hover:text-gray-600"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    }
                  />

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-[#E53E3E] focus:ring-[#E53E3E]"
                      />
                      Remember me
                    </label>
                    <Link
                      to="/forgot-password"
                      className="font-medium text-[#E53E3E] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="lg-btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#E53E3E] to-red-600 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition-all hover:shadow-red-300 active:scale-[0.98] disabled:opacity-80"
                  >
                    <span className="lg-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25" />
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Signing in…
                      </>
                    ) : (
                      <>
                        Sign In <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-7 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                  <span className="h-px flex-1 bg-gray-100" />
                  Or
                  <span className="h-px flex-1 bg-gray-100" />
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.43 3.58v3h3.93c2.3-2.12 3.62-5.25 3.62-8.82z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.93-3c-1.09.73-2.48 1.16-4 1.16-3.08 0-5.68-2.08-6.61-4.87H1.34v3.09C3.31 21.3 7.34 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.39 14.38c-.24-.73-.38-1.5-.38-2.38s.14-1.65.38-2.38V6.53H1.34C.49 8.2 0 10.05 0 12s.49 3.8 1.34 5.47z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0 7.34 0 3.31 2.7 1.34 6.53l4.05 3.09C6.32 6.83 8.92 4.75 12 4.75z"
                    />
                  </svg>
                  Continue with Google
                </button>

                <p className="mt-8 text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-[#E53E3E] hover:underline"
                  >
                    Create one
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

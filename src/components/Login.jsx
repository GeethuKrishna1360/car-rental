import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

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
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

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
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1300);
  };

  return (
    <main className="min-h-screen bg-white">
      <style>{`
        .lg-reveal { transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        @keyframes lg-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .lg-blob { animation: lg-float 10s ease-in-out infinite; }
        @keyframes lg-pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .lg-pop { animation: lg-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .lg-reveal, .lg-blob, .lg-pop { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT — brand panel */}
        <div className="relative hidden overflow-hidden bg-[#0F1115] lg:block">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=1400&fit=crop"
            alt="Millennium Group fleet on the road"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/85 to-[#0F1115]/50" />
          <div className="lg-blob pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
          <div
            className="lg-blob pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-red-600/15 blur-3xl"
            style={{ animationDelay: "3s" }}
          />

          <div className="relative flex h-full flex-col justify-between p-12 text-white">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-extrabold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E53E3E]">
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
              <Quote className="mb-5 h-9 w-9 text-red-300/60" />
              <p className="text-2xl font-medium leading-snug">
                "Our mission is simple: to earn your trust every single day."
              </p>
              <p className="mt-4 text-sm text-white/60">
                — Mr. Patrick Gomez, Founder & Managing Director
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              25+ years of trusted mobility, construction & real estate services
              in Trivandrum.
            </div>
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-12">
          <div
            className="lg-reveal w-full max-w-sm"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Mobile-only logo */}
            <Link
              to="/"
              className="mb-8 flex items-center gap-2 text-lg font-extrabold text-gray-900 lg:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E53E3E] text-white">
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
                  You're signed in. Redirecting you to your dashboard now.
                </p>
              </div>
            ) : (
              <>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#E53E3E]">
                  Welcome Back
                </span>
                <h1 className="mb-2 mt-2 text-3xl font-bold text-gray-900">
                  Sign in to your account
                </h1>
                <p className="mb-8 text-sm text-gray-500">
                  Manage your bookings, fleet, and properties in one place.
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E53E3E] py-3.5 font-semibold text-white transition-all hover:bg-red-700 active:scale-[0.98] disabled:opacity-80"
                  >
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

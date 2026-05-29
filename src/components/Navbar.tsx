import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils';
import { CLINIC_WHATSAPP, CLINIC_PHONE } from '../config';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const passed = latest > 50;
    if (passed !== isScrolled) {
      setIsScrolled(passed);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400",
          // Mobile: tighter padding, desktop: original
          isScrolled
            ? "px-4 sm:px-6 md:px-12 py-3 sm:py-3.5 bg-[#040508]/96 backdrop-blur-3xl border-b border-white/[0.04]"
            : "px-4 sm:px-6 md:px-12 py-4 sm:py-5 bg-transparent"
        )}
      >
        {/* Logo — sized up slightly for mobile presence */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 text-white shrink-0">
          <span className="font-mono font-black tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[15px] sm:text-base md:text-lg text-white">DENTO</span>
          <span className="w-[1px] h-3.5 sm:h-4 bg-white/15 mx-0.5" />
          <span className="font-mono font-light tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-[11px] text-slate-500 pt-0.5">DENTAL</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-normal text-[13px] tracking-wide text-slate-400">
          {["about", "services", "doctor", "reviews", "address"].map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative group transition-colors duration-300 lg:hover:text-white active:opacity-70"
            >
              {["About", "Services", "Expertise", "Reviews", "Contact"][i]}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-neon-blue/60 transition-all duration-300 lg:group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="#address"
            className="hidden md:flex h-8 px-5 items-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80 font-medium text-[12px] tracking-wider lg:hover:bg-white lg:hover:text-[#040508] lg:hover:border-white transition-all duration-300 active:scale-[0.98]"
          >
            Book Now
          </a>

          {/* Mobile menu toggle — slightly larger for better presence */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center justify-center z-[60] relative transition-all duration-200 active:scale-[0.95] active:opacity-70 shadow-lg"
          >
            <div className="w-[18px] h-[13px] flex flex-col justify-between relative">
              {isOpen ? (
                <X className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <>
                  <span className="h-[1.5px] w-full bg-white/85 rounded-full" />
                  <span className="h-[1.5px] w-[65%] bg-white/85 rounded-full" />
                  <span className="h-[1.5px] w-[85%] bg-white/85 rounded-full" />
                </>
              )}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-[#040508] flex flex-col pt-24 px-6 sm:px-10 md:hidden overflow-y-auto"
          >
            {/* Atmospheric glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(91,141,239,0.06),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.04),transparent_70%)] pointer-events-none" />

            <div className="flex flex-col gap-4 sm:gap-5 font-heading font-light tracking-tight text-white/70">
              {[
                ["#about", "About Clinic"],
                ["#services", "Treatments"],
                ["#doctor", "Our Expert"],
                ["#reviews", "Patient Stories"],
                ["#address", "Find Us"],
              ].map(([href, label], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="transition-colors duration-200 active:opacity-50 italic py-1"
                  style={{ fontSize: "clamp(1.9rem, 8vw, 2.5rem)" }}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.04] space-y-4 pb-8">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center gap-4 text-[15px] font-medium text-white/70 transition-all duration-200 active:opacity-50"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.025] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <span>{CLINIC_PHONE}</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[15px] font-medium text-white/70 transition-all duration-200 active:opacity-50"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.025] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                </div>
                <span>WhatsApp Consult</span>
              </a>

              {/* Book CTA in mobile menu */}
              <div className="pt-4">
                <a
                  href="#address"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full h-12 rounded-full bg-white text-[#040508] font-semibold text-[13px] tracking-[0.04em] active:scale-[0.97] transition-all duration-200 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

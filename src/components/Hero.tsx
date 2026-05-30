import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { Calendar, MessageSquare, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { CLINIC_WHATSAPP } from "../config";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax — cards drift slightly faster than BG on scroll
  const cardParallax = useTransform(scrollY, [0, windowHeight], [0, -40]);
  const textParallax = useTransform(scrollY, [0, windowHeight], [0, -20]);
  const bgParallax = useTransform(scrollY, [0, windowHeight], [0, 80]);
  const cardParallaxSpring = useSpring(cardParallax, { stiffness: 60, damping: 20 });
  const textParallaxSpring = useSpring(textParallax, { stiffness: 60, damping: 20 });
  const bgParallaxSpring = useSpring(bgParallax, { stiffness: 40, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-[#040508] min-h-[100svh] flex flex-col"
    >
      {/* ── FULL-BLEED BACKGROUND IMAGE with parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgParallaxSpring }}>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85&fm=webp"
          alt="Clinic Interior"
          fetchPriority="high"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.2) contrast(1.15) brightness(0.5)" }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-[#040508]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040508]/95 via-[#040508]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040508]/65 via-transparent to-transparent" />
      </motion.div>

      {/* ── SCAN-LINE ANIMATION ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="hero-scanline" />
      </div>

      {/* ── ARCHITECTURAL GRID TEXTURE ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_30%_50%,black_40%,transparent_100%)] pointer-events-none z-[1]" />

      {/* ── AMBIENT GRADIENT MOVEMENT ── */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="hero-ambient-orb-1" />
        <div className="hero-ambient-orb-2" />
        <div className="hero-ambient-orb-3" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* ── SPACER FOR NAVBAR ── */}
        <div className="h-[47px] md:h-[92px] flex-shrink-0" />

        {/* ── HERO BODY ── */}
        <div className="flex-1 flex flex-col justify-center container mx-auto px-5 sm:px-6 lg:px-10 xl:px-14 w-full py-10 md:py-0">

          {/* DESKTOP (lg+): Two-column balanced grid */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_0.9fr] items-center gap-12 xl:gap-20 w-full min-h-[calc(100svh-200px)]">

            {/* ── LEFT COLUMN: Text content with slight rightward nudge ── */}
            <motion.div
              className="flex flex-col items-start justify-center pl-0 lg:pl-4 xl:pl-6"
              style={{ y: textParallaxSpring }}
            >
              {/* Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md self-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/80 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-400 uppercase">
                  Delhi NCR's Premier Smile Atelier
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading tracking-tight mb-7 flex flex-col items-start leading-[1.04] text-white"
              >
                <span className="font-light text-slate-300/90 text-[3.4rem] lg:text-[4.2rem] xl:text-[5.2rem]">
                  The Pinnacle of
                </span>
                <span className="font-semibold italic text-white text-[3.4rem] lg:text-[4.2rem] xl:text-[5.2rem] tracking-tight mt-0.5">
                  Indian Dentistry.
                </span>
              </motion.h1>

              {/* Subtitle — improved contrast */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14.5px] xl:text-[16px] text-slate-400 max-w-[390px] lg:max-w-[430px] mb-11 font-light leading-[1.78] tracking-wide"
              >
                Where advanced clinical architecture meets bespoke digital cosmetic
                care — for a completely predictable, artistic dental experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-row items-center gap-4"
              >
                {/* Primary */}
                <a
                  href="#address"
                  aria-label="Book Consultation"
                  className="h-[3.1rem] px-8 lg:px-9 flex items-center justify-center gap-2.5 rounded-full bg-white text-[#040508] font-semibold text-[12.5px] lg:text-[13px] tracking-[0.04em] transition-all duration-300 active:scale-[0.97] active:opacity-85 font-sans whitespace-nowrap shadow-[0_4px_28px_rgba(255,255,255,0.15)] lg:hover:shadow-[0_4px_40px_rgba(255,255,255,0.25)] lg:hover:scale-[1.02]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#040508] flex-shrink-0" />
                  <span>Schedule Appointment</span>
                </a>

                {/* Secondary — enhanced glow */}
                <a
                  href={`https://wa.me/${CLINIC_WHATSAPP}`}
                  aria-label="WhatsApp Consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-cta h-[3.1rem] px-7 lg:px-8 flex items-center justify-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.18] transition-all duration-300 active:scale-[0.97] active:opacity-70 text-white/80 font-medium text-[12.5px] lg:text-[13px] tracking-[0.04em] backdrop-blur-md whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 opacity-75 flex-shrink-0" />
                  <span>Virtual Consult</span>
                </a>
              </motion.div>

            
            {/* ── RIGHT COLUMN: Floating stats card cluster — reduced visual weight ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center h-full min-h-[380px] lg:min-h-[460px]"
              style={{ y: cardParallaxSpring }}
            >
              {/* Central glowing orb — reduced intensity */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.05)_0%,transparent_70%)]" />
              </div>

              {/* Primary card — reduced max width for better balance */}
              <div className="relative z-10 w-full max-w-[270px] lg:max-w-[305px] xl:max-w-[330px]">

                {/* Main stat panel — slightly reduced opacity/blur depth */}
                <div className="relative rounded-3xl bg-white/[0.022] border border-white/[0.055] backdrop-blur-xl p-7 lg:p-9 shadow-[0_28px_56px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.055)] overflow-hidden glass-shimmer-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/[0.035] via-transparent to-transparent pointer-events-none rounded-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none rounded-3xl" />
                  {/* Glass shimmer effect */}
                  <div className="glass-shimmer absolute inset-0 rounded-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/70 animate-pulse" />
                      <span className="font-mono text-[9px] tracking-[0.25em] text-slate-500 uppercase">Clinical Outcomes</span>
                    </div>

                    <div className="mb-5">
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="font-heading text-[4rem] lg:text-[5rem] font-light text-white leading-none tracking-tight"
                          style={{ textShadow: "0 0 50px rgba(91,141,239,0.25)" }}
                        >
                          10K
                        </span>
                        <span className="font-heading text-2xl font-light text-neon-blue/55 mb-1">+</span>
                      </div>
                      <p className="font-mono text-[9.5px] tracking-[0.22em] text-slate-600 uppercase mt-1.5">
                        Successful Cases
                      </p>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent mb-5" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-heading text-[2.4rem] lg:text-[2.8rem] font-light text-white/80 tracking-tight leading-none">15</p>
                        <p className="font-mono text-[8.5px] tracking-[0.2em] text-slate-600 uppercase mt-1.5">
                          Years Expertise
                        </p>
                      </div>
                      <div>
                        <p className="font-heading text-[2.4rem] lg:text-[2.8rem] font-light text-white/80 tracking-tight leading-none">4.9</p>
                        <p className="font-mono text-[8.5px] tracking-[0.2em] text-slate-600 uppercase mt-1.5">
                          Google Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent card — top right — lighter depth */}
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: [0, -5, 0], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 4.5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="absolute -top-8 -right-6 lg:-right-10 z-20 rounded-2xl bg-white/[0.03] border border-white/[0.065] backdrop-blur-lg px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.45)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/[0.07] to-transparent pointer-events-none rounded-2xl" />
                  <div className="glass-shimmer absolute inset-0 rounded-2xl pointer-events-none" />
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.5)" }} />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-slate-300 uppercase">Zero Pain Protocol</span>
                  </div>
                </motion.div>

                {/* Floating accent card — bottom left — heavier, more grounded */}
                <motion.div
                  initial={{ opacity: 0, y: -12, scale: 0.95 }}
                  animate={{ opacity: 1, y: [0, 5, 0], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 5.5, delay: 1.8, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="absolute -bottom-7 -left-6 lg:-left-10 z-20 rounded-2xl bg-white/[0.025] border border-white/[0.06] backdrop-blur-xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] to-transparent pointer-events-none rounded-2xl" />
                  <div className="glass-shimmer glass-shimmer--gold absolute inset-0 rounded-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <p className="font-mono text-[8.5px] tracking-[0.22em] text-slate-600 uppercase mb-1.5">
                      Smile Success Rate
                    </p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-[2rem] font-light text-white/90" style={{ textShadow: "0 0 30px rgba(201,169,110,0.2)" }}>98</span>
                      <span className="font-heading text-lg font-light text-gold/65">%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Third micro card — upper left — extra depth layer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: [0, -3, 0], scale: 1 }}
                  transition={{
                    opacity: { duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 6, delay: 2.4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="absolute top-[45%] -left-10 lg:-left-16 z-20 rounded-xl bg-white/[0.018] border border-white/[0.04] backdrop-blur-md px-3.5 py-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/[0.04] to-transparent pointer-events-none rounded-xl" />
                  <div className="relative z-10 flex flex-col gap-0.5">
                    <span className="font-mono text-[7.5px] tracking-[0.18em] text-slate-600 uppercase">Digital DSD</span>
                    <span className="font-heading text-base font-light text-white/70">AI Planned</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── TABLET (md to lg): Single centered column, no card ── */}
          <div className="hidden md:flex lg:hidden flex-col items-center text-center justify-center w-full min-h-[calc(100svh-200px)]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/80 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.22em] text-slate-400 uppercase">
                Delhi NCR's Premier Smile Atelier
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading tracking-tight mb-7 flex flex-col items-center leading-[1.04] text-white"
            >
              <span className="font-light text-slate-300/90 text-[3.6rem]">
                The Pinnacle of
              </span>
              <span className="font-semibold italic text-white text-[3.6rem] tracking-tight mt-0.5">
                Indian Dentistry.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-slate-400 max-w-[500px] mb-11 font-light leading-[1.78] tracking-wide mx-auto"
            >
              Where advanced clinical architecture meets bespoke digital cosmetic
              care — for a completely predictable, artistic dental experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row items-center gap-4 mb-12"
            >
              <a
                href="#address"
                aria-label="Book Consultation"
                className="h-[3.1rem] px-9 flex items-center justify-center gap-2.5 rounded-full bg-white text-[#040508] font-semibold text-[13px] tracking-[0.04em] transition-all duration-300 active:scale-[0.97] active:opacity-85 font-sans whitespace-nowrap shadow-[0_4px_28px_rgba(255,255,255,0.15)]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#040508] flex-shrink-0" />
                <span>Schedule Appointment</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_WHATSAPP}`}
                aria-label="WhatsApp Consult"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-cta h-[3.1rem] px-8 flex items-center justify-center gap-2.5 rounded-full bg-white/[0.05] border border-white/[0.18] transition-all duration-300 active:scale-[0.97] active:opacity-70 text-white/80 font-medium text-[13px] tracking-[0.04em] backdrop-blur-md whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 opacity-75 flex-shrink-0" />
                <span>Virtual Consult</span>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="flex items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest"
            >
              <span>10,000+ Cases</span>
              <span className="w-[1px] h-3 bg-white/10" />
              <span>15+ Years</span>
              <span className="w-[1px] h-3 bg-white/10" />
              <span>Zero Pain</span>
            </motion.div>
          </div>

          {/* ── MOBILE: Centered cinematic layout ── */}
          <div className="flex md:hidden flex-col items-center text-center justify-center min-h-[calc(100svh-200px)] pt-4 pb-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/[0.025] border border-white/[0.06] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/80 animate-pulse" />
              <span className="font-mono text-[8.5px] tracking-[0.18em] text-slate-500 uppercase">Delhi NCR's Premier Smile Atelier</span>
            </motion.div>

            {/* Headline — bold, dominant, cinematic */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading tracking-tight mb-6 flex flex-col items-center text-white w-full"
            >
              <span
                className="font-light text-slate-300/90 leading-[1.05]"
                style={{ fontSize: "clamp(2.75rem, 11vw, 3.5rem)" }}
              >
                The Pinnacle of
              </span>
              <span
                className="font-semibold italic text-white leading-[1.05] mt-1"
                style={{ fontSize: "clamp(2.75rem, 11vw, 3.5rem)", textShadow: "0 0 60px rgba(255,255,255,0.06)" }}
              >
                Indian Dentistry.
              </span>
            </motion.h1>

            {/* Subtitle — improved contrast */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] sm:text-[15px] text-slate-400 max-w-[320px] sm:max-w-[390px] mb-8 font-light leading-[1.78] tracking-wide mx-auto"
            >
              Where clinical architecture meets bespoke digital cosmetic care — for
              a predictable, artistic dental experience.
            </motion.p>

            {/* CTA Buttons — mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 w-full max-w-[300px] sm:max-w-[340px] mx-auto mb-8"
            >
              <a
                href="#address"
                aria-label="Book Consultation"
                className="w-full h-[3.2rem] px-9 flex items-center justify-center gap-2.5 rounded-full bg-white text-[#040508] font-semibold text-[13px] tracking-[0.04em] transition-all duration-200 active:scale-[0.97] active:opacity-85 font-sans shadow-[0_4px_24px_rgba(255,255,255,0.12)]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#040508] flex-shrink-0" />
                <span>Schedule Appointment</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_WHATSAPP}`}
                aria-label="WhatsApp Consult"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-cta w-full h-[3.2rem] px-8 flex items-center justify-center gap-2.5 rounded-full bg-white/[0.04] border border-white/[0.18] transition-all duration-300 active:scale-[0.97] active:opacity-70 text-white/80 font-medium text-[13px] tracking-[0.04em] backdrop-blur-md"
              >
                <MessageSquare className="w-3.5 h-3.5 opacity-75 flex-shrink-0" />
                <span>Virtual Consultation</span>
              </a>
            </motion.div>

            {/* ── MOBILE TRUST INDICATORS — inline, no box ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.42 }}
              className="flex items-center justify-center gap-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest"
            >
              <span>10,000+ Cases</span>
              <span className="w-[1px] h-3 bg-white/10" />
              <span>15+ Years</span>
              <span className="w-[1px] h-3 bg-white/10" />
              <span>4.9 Rating</span>
            </motion.div>
          </div>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="relative z-10 flex justify-center pb-8 md:pb-10"
        >
          <a
            href="#about"
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 group active:opacity-60 transition-opacity"
          >
            <span className="font-mono text-[8px] tracking-[0.3em] text-slate-700 uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 text-slate-700" strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>

      {/* ── INLINE STYLES FOR ANIMATIONS ── */}
      <style>{`
        /* Ambient orbs — continuous, not disabled on scroll */
        .hero-ambient-orb-1 {
          position: absolute;
          top: 12%;
          left: 5%;
          width: 32vw;
          height: 32vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(91,141,239,0.07) 0%, transparent 70%);
          mix-blend-mode: screen;
          animation: ambientDrift1 14s ease-in-out infinite;
          will-change: transform;
        }
        .hero-ambient-orb-2 {
          position: absolute;
          bottom: 8%;
          right: 18%;
          width: 26vw;
          height: 26vw;
          max-width: 400px;
          max-height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(56,189,248,0.05) 0%, transparent 70%);
          mix-blend-mode: screen;
          animation: ambientDrift2 18s ease-in-out infinite;
          will-change: transform;
        }
        .hero-ambient-orb-3 {
          position: absolute;
          top: 40%;
          right: 35%;
          width: 18vw;
          height: 18vw;
          max-width: 280px;
          max-height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(201,169,110,0.04) 0%, transparent 70%);
          mix-blend-mode: screen;
          animation: ambientDrift3 22s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes ambientDrift1 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(3vw, -2vw) scale(1.06); }
          66%  { transform: translate(-2vw, 3vw) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes ambientDrift2 {
          0%   { transform: translate(0, 0) scale(1); }
          40%  { transform: translate(-3vw, 2vw) scale(0.93); }
          80%  { transform: translate(2vw, -3vw) scale(1.07); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes ambientDrift3 {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(2vw, 2.5vw) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        /* Scan-line */
        .hero-scanline {
          position: absolute;
          top: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(91,141,239,0.18) 20%, rgba(91,141,239,0.35) 50%, rgba(91,141,239,0.18) 80%, transparent 100%);
          animation: scanDown 10s linear infinite;
          will-change: transform;
          opacity: 0.5;
        }
        @keyframes scanDown {
          0%   { transform: translateY(0); opacity: 0; }
          5%   { opacity: 0.6; }
          95%  { opacity: 0.2; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        /* Glass shimmer */
        .glass-shimmer-card { overflow: hidden; }
        .glass-shimmer {
          background: linear-gradient(
            105deg,
            transparent 35%,
            rgba(255,255,255,0.022) 45%,
            rgba(255,255,255,0.05) 50%,
            rgba(255,255,255,0.022) 55%,
            transparent 65%
          );
          background-size: 200% 100%;
          animation: glassShimmer 6s ease-in-out infinite;
          will-change: background-position;
        }
        .glass-shimmer--gold {
          background: linear-gradient(
            105deg,
            transparent 35%,
            rgba(201,169,110,0.03) 45%,
            rgba(201,169,110,0.07) 50%,
            rgba(201,169,110,0.03) 55%,
            transparent 65%
          );
          background-size: 200% 100%;
          animation: glassShimmer 8s ease-in-out infinite;
        }
        @keyframes glassShimmer {
          0%   { background-position: -100% 0; }
          50%  { background-position: 200% 0; }
          100% { background-position: -100% 0; }
        }

        /* Secondary CTA hover glow */
        @media (hover: hover) and (pointer: fine) {
          .secondary-cta:hover {
            border-color: rgba(91, 141, 239, 0.4);
            background: rgba(91, 141, 239, 0.08);
            box-shadow: 0 0 20px rgba(91, 141, 239, 0.15), 0 0 40px rgba(91, 141, 239, 0.06), inset 0 0 12px rgba(91, 141, 239, 0.04);
            color: rgba(255,255,255,0.92);
          }
        }
      `}</style>
    </section>
  );
}

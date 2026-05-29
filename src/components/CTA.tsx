import { motion } from "motion/react";
import { MessageSquare, Calendar } from "lucide-react";
import { CLINIC_WHATSAPP } from "../config";

export function CTA() {
  return (
    <section
      id="book"
      className="py-32 md:py-48 relative z-10 w-full overflow-hidden bg-[#040508] scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030408] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.07)_0%,transparent_70%)] hidden md:block pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative z-20 text-center max-w-4xl">
        {/* Background wordmark */}
        <motion.div
           initial={{ opacity: 0, scale: 0.97 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.1, margin: "-100px" }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <div className="font-mono text-[clamp(5rem,18vw,15rem)] font-bold text-transparent leading-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.02)' }}>
            DENTO
          </div>
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-[1px] w-8 bg-neon-blue/30" />
            <span className="text-[9.5px] md:text-[11px] font-mono uppercase tracking-widest text-neon-blue/70 font-medium">
              Accepting Priority Consultations
            </span>
            <span className="h-[1px] w-8 bg-neon-blue/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-white tracking-tight leading-[1.05]"
          >
            Begin Your <br /> <span className="font-semibold italic text-white/85">Transformation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 max-w-xl text-base md:text-lg mb-12 font-light leading-relaxed"
          >
            Secure your private consultation with Dr. Sharma. Experience the
            pinnacle of cosmetic dentistry with transparent pricing and zero
            pain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center"
          >
            <a 
              href="#address" 
              aria-label="Book Priority Slot" 
              className="w-full sm:w-auto h-12 md:h-[3.4rem] px-10 flex items-center justify-center gap-2.5 rounded-full bg-white text-[#040508] font-semibold text-[13px] tracking-wide transition-all duration-200 active:scale-[0.97] active:opacity-85 lg:hover:bg-slate-100 lg:hover:scale-[1.01] lg:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] relative"
            >
              <Calendar className="w-4 h-4 text-[#040508] flex-shrink-0" />
              <span>Book Appointment</span>
            </a>

            <a 
              href={`https://wa.me/${CLINIC_WHATSAPP}`} 
              aria-label="Expert WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto h-12 md:h-[3.4rem] px-10 flex items-center justify-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.015] backdrop-blur-md text-white/70 font-medium text-[13px] tracking-wide transition-all duration-200 active:scale-[0.97] active:opacity-70 lg:hover:border-white/[0.15] lg:hover:bg-white/[0.035]"
            >
              <MessageSquare className="w-4 h-4 text-neon-blue/70 flex-shrink-0" />
              <span>Discuss Needs</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Target, Activity, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { 
    icon: Activity, 
    title: "Zero-Pain Philosophy", 
    desc: "Advanced computer-controlled delivery systems for a completely imperceptible experience.", 
    tags: ["Sensory-Free", "Advanced"],
    accent: "#5B8DEF",
    glow: "rgba(91, 141, 239, 0.12)"
  },
  { 
    icon: ShieldCheck, 
    title: "Sterilization Matrix", 
    desc: "US-FDA approved 6-step sterilization protocols guaranteeing absolute clinical safety.", 
    tags: ["US-FDA", "Protocol"],
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.1)"
  },
  { 
    icon: Target, 
    title: "Mathematical Precision", 
    desc: "Digital Smile Design ensures your architectural results are modeled before we even begin.", 
    tags: ["DSD", "Predictable"],
    accent: "#C9A96E",
    glow: "rgba(201, 169, 110, 0.1)"
  }
];

function AdvCard({ item, i }: { item: typeof ITEMS[0], i: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="adv-card touch-card-visible"
      style={{ '--accent': item.accent, '--glow': item.glow } as any}
    >
      {/* Static ambient glow */}
      <div 
        className="adv-ambient"
        style={{ background: `radial-gradient(circle at 30% 30%, ${item.glow}, transparent 65%)` }}
      />
      
      {/* Corner accents */}
      <div className="adv-corner top-left" />
      <div className="adv-corner bottom-right" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.025] border border-white/[0.06] flex items-center justify-center mb-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
           <item.icon className="w-4.5 h-4.5 relative z-10" strokeWidth={1.4} style={{ color: item.accent }}/>
        </div>
        
        <h3 className="font-heading text-[1.6rem] md:text-[1.85rem] font-light text-white mb-4 tracking-tight leading-tight">
          {item.title}
        </h3>
        
        <p className="text-slate-400 text-[13.5px] md:text-[14.5px] font-light leading-relaxed mb-8 flex-grow">
          {item.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((tag, tIndex) => (
            <span key={tIndex} className="px-3 py-1 bg-white/[0.025] border border-white/[0.05] rounded-full text-[9.5px] uppercase tracking-widest text-slate-500 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function AboutClinic() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 w-full overflow-hidden bg-transparent scroll-mt-24">
      <style>{`
        .adv-card {
          position: relative;
          background: rgba(255, 255, 255, 0.022);
          border-radius: 20px;
          padding: 28px 28px 30px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.045);
          display: flex;
          flex-direction: column;
          height: 100%;
          user-select: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.6s ease;
        }

        @media (min-width: 768px) {
          .adv-card { padding: 32px; }
        }
        
        .adv-card::after {
          content: '';
          position: absolute;
          inset: -20%;
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(255,255,255,0.025) 45%,
            rgba(255,255,255,0.06) 50%,
            rgba(255,255,255,0.025) 55%,
            transparent 65%
          );
          transform: translateX(-120%) skewX(-12deg);
          animation: architecturalScan 6s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes architecturalScan {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(120%) skewX(-12deg); }
        }

        @media (hover: hover) and (pointer: fine) {
          .adv-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 48px -16px rgba(0,0,0,0.55);
            border-color: rgba(255,255,255,0.08);
          }
        }

        @media (hover: none), (pointer: coarse) {
          .adv-card {
            transform: none !important;
            transition: none;
          }
        }

        .adv-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.9;
        }

        .adv-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          pointer-events: none;
          opacity: 0.28;
        }
        .adv-corner::before,
        .adv-corner::after {
          content: '';
          position: absolute;
          background: var(--accent, #5B8DEF);
          border-radius: 1px;
        }
        .adv-corner.top-left { top: 14px; left: 14px; }
        .adv-corner.top-left::before { width: 10px; height: 1px; top: 0; left: 0; }
        .adv-corner.top-left::after { width: 1px; height: 10px; top: 0; left: 0; }
        .adv-corner.bottom-right { bottom: 14px; right: 14px; }
        .adv-corner.bottom-right::before { width: 10px; height: 1px; bottom: 0; right: 0; }
        .adv-corner.bottom-right::after { width: 1px; height: 10px; bottom: 0; right: 0; }
      `}</style>
      
      {/* Balanced atmospheric accents — both sides */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_0%,transparent_70%)] hidden md:block pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.035)_0%,transparent_70%)] hidden md:block pointer-events-none" />
      
      <div className="container mx-auto px-5 lg:px-8">
        {/* Section header — perfectly centered */}
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full"
          >
            <div className="flex items-center justify-center gap-3 mb-7 mx-auto">
              <span className="h-[1px] w-8 bg-neon-blue/30" />
              <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.22em] text-neon-blue/70 uppercase font-medium">The Dento Standard</span>
              <span className="h-[1px] w-8 bg-neon-blue/30" />
            </div>
            
            <h2
              className="font-heading font-light mb-6 tracking-tight text-white leading-[1.06] relative"
              style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
            >
              <span className="font-semibold italic text-white/85">Architectural Precision.</span>{" "}
              <br className="hidden sm:block" />
              <span className="relative text-slate-400 font-light">
                Uncompromising Aesthetics.
              </span>
            </h2>
            
            <p className="text-slate-400 text-[14.5px] md:text-[15.5px] font-light leading-relaxed max-w-lg mx-auto">
              Dento represents a singular vision: to strip away the clinical anxiety of traditional dentistry and replace it with a hyper-modern, pain-free, and predictable digital experience.
            </p>
          </motion.div>
        </div>

        {/* Cards grid — symmetrical 3-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 relative z-10 max-w-5xl mx-auto">
          {ITEMS.map((item, i) => (
            <AdvCard key={i} item={item} i={i} />
          ))}
        </div>

        {/* Bottom accent — centered decorative element for balance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mt-14"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/30" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-slate-700 uppercase">Leading with Compassion</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/30" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

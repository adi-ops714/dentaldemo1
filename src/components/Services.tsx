import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Wand2, Smile, Activity, ShieldCheck, Sparkles, ScanLine } from 'lucide-react';
import imgSmile from '../assets/images/smile_makeover_cosmetic_1780064752790.png';
import imgInvisalign from '../assets/images/invisalign_orthodontics_1780064770988.png';
import imgEndo from '../assets/images/dental_treatment_endo_1780064787052.png';
import imgImplant from '../assets/images/surgery_implant_1780064801821.png';
import imgWhitening from '../assets/images/laser_whitening_1780064820031.png';
import imgDiagnostics from '../assets/images/digital_diagnostics_1780064836701.png';

const services = [
  {
    name: "Smile Makeovers",
    tag: "COSMETIC",
    desc: "Comprehensive cosmetic correction using bespoke porcelain veneers and Digital Smile Design protocols.",
    icon: Wand2,
    image: imgSmile,
    colors: { tint: "rgba(91, 141, 239, 0.35)", status: "#5B8DEF", glow: "rgba(91,141,239,0.15)" }
  },
  {
    name: "Invisalign Aligners",
    tag: "ORTHODONTICS",
    desc: "Invisible, comfortable alignment correction with zero lifestyle compromise and strict 3D modeling.",
    icon: Smile,
    image: imgInvisalign,
    colors: { tint: "rgba(56, 189, 248, 0.35)", status: "#38BDF8", glow: "rgba(56,189,248,0.12)" }
  },
  {
    name: "Rotary Endodontics",
    tag: "TREATMENT",
    desc: "Single-sitting microscopic root canal therapy. Completely pain-free and anatomically precise.",
    icon: Activity,
    image: imgEndo,
    colors: { tint: "rgba(201, 169, 110, 0.3)", status: "#C9A96E", glow: "rgba(201,169,110,0.12)" }
  },
  {
    name: "Titanium Implants",
    tag: "SURGERY",
    desc: "CBCT-guided permanent replacements. Architecturally stable roots integrated intuitively.",
    icon: ShieldCheck,
    image: imgImplant,
    colors: { tint: "rgba(91, 141, 239, 0.3)", status: "#5B8DEF", glow: "rgba(91,141,239,0.12)" }
  },
  {
    name: "Laser Whitening",
    tag: "AESTHETICS",
    desc: "Advanced therapeutic oxidation protocols to lift deep stains instantly, revealing a natural white.",
    icon: Sparkles,
    image: imgWhitening,
    colors: { tint: "rgba(232, 213, 163, 0.25)", status: "#E8D5A3", glow: "rgba(232,213,163,0.1)" }
  },
  {
    name: "Digital Diagnostics",
    tag: "IMAGING",
    desc: "Ultra-precise 4D mapping of your oral architecture before any structural intervention begins.",
    icon: ScanLine,
    image: imgDiagnostics,
    colors: { tint: "rgba(56, 189, 248, 0.3)", status: "#38BDF8", glow: "rgba(56,189,248,0.1)" }
  }
];

const renderTitle = (title: string) => {
  const parts = title.split(' ');
  const first = parts.shift();
  const rest = parts.join(' ');
  return (
    <>
      <span className="font-semibold text-white">{first}</span>{' '}
      <span className="text-white/75">{rest}</span>
    </>
  );
};

const ServiceCard = ({ svc, index }: { svc: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.09, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`lux-card ${isInView ? 'is-visible' : ''}`}
      style={{
        '--tint': svc.colors.tint,
        '--status': svc.colors.status,
        '--glow': svc.colors.glow,
      } as any}
    >
      {/* Full-bleed background image */}
      <div className="lux-img-wrapper">
        <img
          src={svc.image}
          className="lux-image"
          alt={svc.name}
          loading="lazy"
        />
        {/* Multi-layer gradient for premium card feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-[#040508]/75 via-40% to-transparent pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#040508]/60 via-transparent to-transparent pointer-events-none z-[2]" />
        <div className="lux-ambient-tint" />
      </div>

      {/* Decorative corner lines */}
      <div className="lux-corner-tl" />
      <div className="lux-corner-br" />

      {/* Noise grain overlay */}
      <div className="lux-noise" />
      {/* Inner border ring */}
      <div className="lux-inner-ring" />

      {/* Number index — decorative watermark */}
      <div className="lux-index-num">{String(index + 1).padStart(2, '0')}</div>
      
      {/* Card content */}
      <div className="relative z-10 p-7 md:p-9 flex flex-col h-full pointer-events-none">
        {/* Top row: tag + icon */}
        <div className="flex justify-between items-start w-full">
          <div className="lux-tag">
            <span className="lux-status-dot" />
            {svc.tag}
          </div>
          
          <div className="lux-icon-wrap pointer-events-auto">
            <div className="lux-icon-glow" />
            <svc.icon className="lux-icon" strokeWidth={1.2} />
          </div>
        </div>

        {/* Spacer pushes content to bottom */}
        <div className="flex-1 min-h-[100px]" />
        
        {/* Bottom text block */}
        <div className="pointer-events-auto">
          <h3 className="lux-title">{renderTitle(svc.name)}</h3>
          <p className="lux-desc">{svc.desc}</p>
          
          {/* CTA row */}
          <div className="lux-cta-premium mt-7">
            <span className="lux-cta-text">Explore Protocol</span>
            <svg className="lux-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="lux-cta-line" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 relative w-full bg-[#040508] border-y border-white/[0.025] scroll-mt-24">
      <style>{`
        /* ─── CARD BASE ─── */
        .lux-card {
          position: relative;
          background: linear-gradient(160deg, #07080f 0%, #040508 100%);
          border-radius: 24px;
          isolation: isolate;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), box-shadow 0.8s ease;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.4), 0 20px 40px -20px rgba(0,0,0,0.8);
        }

        /* ─── IMAGE WRAPPER ─── */
        .lux-img-wrapper {
          position: absolute; inset: 0;
          border-radius: 24px;
          overflow: hidden;
          z-index: 0;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }

        .lux-image {
          width: 100%; height: 100%;
          object-fit: cover;
          transform-origin: center center;
          will-change: transform;
          transform: scale(1.0);
          transition: transform 2.4s cubic-bezier(0.22,1,0.36,1);
          filter: saturate(0.45) contrast(1.2) brightness(0.7);
        }

        /* ─── AMBIENT COLOR TINT ─── */
        .lux-ambient-tint {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% -10%, var(--tint), transparent 60%);
          mix-blend-mode: screen;
          opacity: 0.18;
          pointer-events: none;
          z-index: 3;
          transition: opacity 1s ease;
        }

        /* ─── DECORATIVE CORNER LINES ─── */
        .lux-corner-tl,
        .lux-corner-br {
          position: absolute;
          width: 20px; height: 20px;
          pointer-events: none;
          z-index: 22;
          opacity: 0.25;
          transition: opacity 0.8s ease;
        }
        .lux-corner-tl {
          top: 16px; left: 16px;
          border-top: 1px solid var(--status);
          border-left: 1px solid var(--status);
          border-radius: 4px 0 0 0;
        }
        .lux-corner-br {
          bottom: 16px; right: 16px;
          border-bottom: 1px solid var(--status);
          border-right: 1px solid var(--status);
          border-radius: 0 0 4px 0;
        }

        /* ─── GRAIN OVERLAY ─── */
        .lux-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          opacity: 0.04;
          pointer-events: none;
          z-index: 15;
          border-radius: 24px;
        }

        /* ─── INNER BORDER RING ─── */
        .lux-inner-ring {
          position: absolute; inset: 0;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.038);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            inset 0 -16px 48px rgba(0,0,0,0.7),
            0 0 0 0 transparent;
          pointer-events: none;
          z-index: 20;
          transition: border-color 0.9s ease, box-shadow 1s ease;
        }

        /* ─── INDEX NUMBER WATERMARK ─── */
        .lux-index-num {
          position: absolute;
          top: 20px; right: 24px;
          font-family: ui-monospace, "JetBrains Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--status);
          opacity: 0.22;
          z-index: 21;
          transition: opacity 0.8s ease;
        }

        /* ─── ICON ─── */
        .lux-icon-wrap {
          position: relative;
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.055);
          mix-blend-mode: normal;
        }
        .lux-icon-glow {
          position: absolute; inset: -4px;
          background: var(--glow);
          border-radius: 14px;
          filter: blur(10px);
          opacity: 0.6;
        }
        .lux-icon {
          width: 17px; height: 17px;
          color: rgba(255,255,255,0.4);
          transition: color 0.6s ease;
          position: relative; z-index: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        /* ─── TYPOGRAPHY ─── */
        .lux-tag {
          font-family: ui-monospace, "JetBrains Mono", monospace;
          font-size: 9px;
          letter-spacing: 0.24em;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; gap: 7px;
          text-transform: uppercase;
        }
        .lux-status-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--status);
          box-shadow: 0 0 8px var(--status);
          flex-shrink: 0;
        }
        .lux-title {
          color: #fff;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(1.85rem, 3.2vw, 2.25rem);
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.08;
          margin-bottom: 12px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.7);
        }
        .lux-desc {
          color: rgba(255,255,255,0.32);
          font-size: 0.875rem;
          line-height: 1.7;
          font-weight: 300;
          max-width: 88%;
          transition: color 0.6s ease;
          letter-spacing: 0.015em;
        }

        /* ─── CTA ─── */
        .lux-cta-premium {
          display: flex; align-items: center; gap: 10px;
          cursor: pointer; padding: 6px 0;
          width: fit-content; position: relative;
        }
        .lux-cta-text {
          font-size: 9.5px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-weight: 500;
          color: rgba(255,255,255,0.28);
          transition: color 0.6s ease;
          font-family: ui-monospace, "JetBrains Mono", monospace;
        }
        .lux-cta-line {
          position: absolute; bottom: 0; left: 0;
          width: 0%;  height: 1px;
          background: linear-gradient(90deg, var(--status), transparent);
          transition: width 0.85s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 0 6px var(--status);
        }
        .lux-cta-arrow {
          width: 12px; height: 12px;
          color: rgba(255,255,255,0.22);
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), color 0.6s ease;
        }

        /* ─── MOBILE / TOUCH: viewport-triggered ─── */
        @media (hover: none), (pointer: coarse) {
          .lux-card { transform: none !important; }
          .lux-card.is-visible .lux-image { transform: scale(1.07); }
          .lux-card.is-visible .lux-ambient-tint { opacity: 0.5; }
          .lux-card.is-visible .lux-inner-ring {
            border-color: rgba(255,255,255,0.07);
            box-shadow: inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -16px 48px rgba(0,0,0,0.7), 0 0 20px var(--glow);
          }
          .lux-card.is-visible .lux-corner-tl,
          .lux-card.is-visible .lux-corner-br { opacity: 0.55; }
          .lux-card.is-visible .lux-index-num { opacity: 0.45; }
          .lux-card.is-visible .lux-icon { color: rgba(255,255,255,0.85); }
          .lux-card.is-visible .lux-desc { color: rgba(255,255,255,0.55); }
          .lux-card.is-visible .lux-cta-text { color: rgba(255,255,255,0.8); }
          .lux-card.is-visible .lux-cta-line { width: 100%; }
          .lux-card.is-visible .lux-cta-arrow { transform: translateX(4px); color: var(--status); }
        }

        /* ─── DESKTOP: hover enhancements ─── */
        @media (hover: hover) and (pointer: fine) {
          .lux-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 40px 80px -24px rgba(0,0,0,0.95), 0 0 40px var(--glow);
          }
          .lux-card:hover .lux-image { transform: scale(1.08); }
          .lux-card:hover .lux-ambient-tint { opacity: 0.5; }
          .lux-card:hover .lux-inner-ring {
            border-color: rgba(255,255,255,0.07);
            box-shadow: inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -16px 48px rgba(0,0,0,0.6), 0 0 20px var(--glow);
          }
          .lux-card:hover .lux-corner-tl,
          .lux-card:hover .lux-corner-br { opacity: 0.6; }
          .lux-card:hover .lux-index-num { opacity: 0.5; }
          .lux-card:hover .lux-icon { color: rgba(255,255,255,0.9); }
          .lux-card:hover .lux-desc { color: rgba(255,255,255,0.58); }
          .lux-cta-premium:hover .lux-cta-text { color: rgba(255,255,255,0.9); }
          .lux-cta-premium:hover .lux-cta-line { width: 100%; }
          .lux-cta-premium:hover .lux-cta-arrow { transform: translateX(5px); color: var(--status); }
        }

        /* ─── MOBILE SIZING ─── */
        @media (max-width: 768px) {
          .lux-card { min-height: 400px; border-radius: 20px; }
          .lux-img-wrapper, .lux-inner-ring, .lux-noise { border-radius: 20px; }
          .lux-corner-tl { top: 14px; left: 14px; }
          .lux-corner-br { bottom: 14px; right: 14px; }
          .lux-title { font-size: 1.7rem; }
          .lux-desc { font-size: 0.85rem; max-width: 100%; }
        }
      `}</style>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(91,141,239,0.025),#040508_75%)] pointer-events-none" />
      
      <div className="container mx-auto px-5 lg:px-8 relative z-10 w-full">
        {/* Section header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-neon-blue/30" />
            <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.22em] text-neon-blue/70 uppercase font-medium">Clinical Excellence</span>
            <span className="h-[1px] w-8 bg-neon-blue/30" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]"
          >
            Advanced <span className="font-semibold italic text-white/85">Treatments.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-base md:text-lg max-w-xl font-light leading-relaxed tracking-wide"
          >
            We employ world-class technologies and ultra-precise mathematical protocols to ensure every treatment is predictable and completely painless.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

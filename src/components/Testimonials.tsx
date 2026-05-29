import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sneha Patel",
    initials: "SP",
    treatment: "Digital Smile Design",
    text: "An experience completely devoid of the usual clinical anxiety. The environment feels like a high-end spa, and the digital 3D preview was exactly what I got. Perfect.",
  },
  {
    name: "Rahul Desai",
    initials: "RD",
    treatment: "Laser Whitening",
    text: "Fast, painless, and startlingly effective right before my wedding. The technology they use is clearly a lap ahead of standard clinics in Mumbai. The results speak for themselves.",
  },
  {
    name: "Anjali Mehta",
    initials: "AM",
    treatment: "Invisalign Aligners",
    text: "From the CBCT scan to the final result, the precision was incredible. Dr. Sharma doesn't just fix teeth, he engineers confidence. Pure luxury and zero pain.",
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative z-10 w-full overflow-hidden bg-[#040508] border-y border-white/[0.025] scroll-mt-24">
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.07)_0%,transparent_70%)] hidden md:block pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.055)_0%,transparent_70%)] hidden md:block pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative z-20">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-neon-blue/30" />
              <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.22em] text-neon-blue/70 uppercase font-medium">Patient Experiences</span>
              <span className="h-[1px] w-8 bg-neon-blue/30" />
            </div>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-light mb-5 tracking-tight text-white relative inline-block leading-[1.05]"
          >
            Verified <span className="font-semibold italic text-white/85">Stories.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="text-slate-500 text-base md:text-lg font-light leading-relaxed mb-8"
          >
            Don't just take our word for it. Explore the experiences of those who have transformed their smiles at Dento. 
          </motion.p>
          
          {/* Scrolling ticker */}
          <div aria-hidden="true" className="w-[150vw] ml-[-25vw] overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex items-center shrink-0 select-none mb-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="inline-flex gap-8 items-center"
            >
               {[...Array(2)].fill(
                 "Sneha P. ★★★★★ · Rahul D. ★★★★★ · Anjali M. ★★★★★ · Priya K. ★★★★★ · Rohan V. ★★★★★ · Vikram S. ★★★★★ · Meera T. ★★★★★ · Kabir O. ★★★★★ · "
               ).map((str, i) => (
                 <span key={i} className="text-[10px] font-mono text-neon-blue/35 uppercase tracking-widest">{str}</span>
               ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.012] border border-white/[0.035] p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col h-full z-10 backdrop-blur-sm"
            >
              {/* Static ambient glow — no hover */}
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle_at_top_right,rgba(91,141,239,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-7 relative z-10 gap-4 md:gap-0">
                 <Quote className="w-7 h-7 text-white/[0.04]" strokeWidth={1.5} />
                 <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-neon-blue/70 text-neon-blue/70 drop-shadow-[0_0_6px_rgba(91,141,239,0.4)]" />
                    ))}
                 </div>
              </div>
              
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-light relative z-10 text-center md:text-left italic font-heading">&ldquo;{t.text}&rdquo;</p>
              
              <div className="flex flex-col md:flex-row items-center gap-4 mt-auto pt-6 border-t border-white/[0.035] relative z-10 text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-white/70 font-medium text-center text-xs font-mono">
                  {t.initials}
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-heading font-medium text-white text-lg tracking-tight">{t.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-neon-blue/70 drop-shadow-[0_0_4px_rgba(91,141,239,0.4)]" />
                  </div>
                  <p className="text-[9.5px] font-mono font-bold text-slate-600 uppercase tracking-widest">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

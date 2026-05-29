import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function AboutDentist() {
  return (
    <section id="doctor" className="py-24 md:py-32 relative z-10 container mx-auto px-5 lg:px-8 bg-transparent overflow-hidden scroll-mt-24 border-y border-white/[0.025]">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.055)_0%,transparent_70%)] hidden md:block pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden relative ring-1 ring-white/[0.05] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80&fm=webp" 
              alt="Dr. Sharma - Chief Cosmetic Dentist"
              loading="lazy" 
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.2) contrast(1.1) brightness(0.85)' }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 rounded-2xl bg-gradient-to-t from-[#040508]/95 via-[#040508]/50 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-mono text-[9.5px] text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-neon-blue/60 text-neon-blue/60" strokeWidth={0} /> Chief Dental Director
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-light italic text-white mb-2 tracking-tight drop-shadow-md">Dr. Vikram Sharma</h3>
              <p className="text-slate-500 text-sm font-light tracking-wide font-mono">BDS, MDS · FICOI (USA)</p>
            </div>
          </div>
          {/* Background blur accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] -z-10 rounded-full opacity-40 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <span className="h-[1px] w-8 bg-neon-blue/30" />
            <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.22em] text-neon-blue/70 uppercase font-medium">Meet The Expert</span>
          </div>
          
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-light mb-10 tracking-tight leading-[1] text-white">
             Leading <br className="hidden sm:block"/>
             with <span className="font-semibold italic text-white/85">Compassion.</span>
          </h2>
          
          <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light mb-12 max-w-xl text-center lg:text-left">
            <div className="relative lg:pl-8 lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-[1.5px] lg:before:bg-gradient-to-b lg:before:from-neon-blue/50 lg:before:to-transparent">
              <p className="font-heading text-xl md:text-2xl text-white/90 font-light italic mb-4">
                &ldquo;We built Dento not just to house the best dental technology in India, but to completely erase the anxiety associated with visiting the dentist.&rdquo;
              </p>
              <p className="font-mono text-[9.5px] font-medium tracking-widest uppercase text-slate-600">— Dr. Vikram Sharma</p>
            </div>
            
            <p className="text-slate-500 text-base">
              With over 15 years of exclusive practice in advanced cosmetic dentistry, Dr. Sharma brings international clinical protocols to Mumbai. Combining architectural precision with genuine compassion, we ensure your cosmetic journey is predictable and completely pain-free.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-8 px-7 py-8 border border-white/[0.035] rounded-2xl bg-white/[0.012] backdrop-blur-md max-w-xl">
            {[
              { label: "AIIMS", sub: "Clinical Associate" },
              { label: "15+", sub: "Years Masters" },
              { label: "DSD", sub: "Master Specialist" },
              { label: "FICOI", sub: "Fellow (USA)" },
            ].map(({ label, sub }) => (
              <div key={label}>
                 <p className="font-heading text-3xl md:text-4xl font-semibold text-white tracking-tight">{label}</p>
                 <p className="text-[9.5px] font-mono text-neon-blue/60 uppercase tracking-widest mt-2 font-medium">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

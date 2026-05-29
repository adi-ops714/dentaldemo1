import { motion } from 'motion/react';

export function QuoteSection() {
  return (
    <section className="py-32 md:py-56 relative z-10 w-full overflow-hidden bg-[#040508] scroll-mt-24 border-y border-white/[0.025]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.04)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 w-[70vw] h-[35vw] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)] hidden md:block -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 32 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center px-5 lg:px-8 relative"
      >
        <div className="font-heading text-[9rem] md:text-[13rem] leading-none text-neon-blue/[0.07] select-none -mb-8 md:-mb-16 font-light">
          &ldquo;
        </div>
        
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-light text-white/90 mb-10 leading-[1.2] md:leading-[1.12] tracking-tight relative z-10 italic">
          We don't just treat teeth. <br className="hidden md:block"/> We <span className="font-semibold not-italic text-white">engineer confidence</span> and restore human dignity through architectural precision.
        </h2>
        
        <div className="flex items-center justify-center gap-5 mb-16">
          <div className="w-8 md:w-14 h-[1px] bg-neon-blue/25"></div>
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-600 font-medium">Dento Hospital Board</p>
          <div className="w-8 md:w-14 h-[1px] bg-neon-blue/25"></div>
        </div>
        <div className="w-24 h-[1px] bg-white/[0.06] mx-auto" />
      </motion.div>
    </section>
  );
}

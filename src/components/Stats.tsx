import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star } from 'lucide-react';

function useCountUp(target: number, duration: number = 1500, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });
  const cases = useCountUp(10000, 1800, inView);
  const years = useCountUp(15, 1200, inView);
  const ratingRaw = useCountUp(49, 1000, inView);

  return (
    <section ref={ref} className="relative w-full bg-[#040508] py-20 md:py-24 overflow-hidden border-y border-white/[0.025]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.04)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/4 w-[50vw] h-[80px] bg-[radial-gradient(ellipse_at_center,rgba(91,141,239,0.07)_0%,transparent_70%)] hidden md:block -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-center divide-y md:divide-y-0 md:divide-x divide-white/[0.04] gap-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex items-baseline gap-1 mb-2 text-white">
              <span className="font-heading text-5xl md:text-7xl font-light tracking-tight text-glow">{cases.toLocaleString()}</span>
              <span className="font-heading text-3xl md:text-4xl font-light text-slate-500">+</span>
            </div>
            <p className="text-slate-600 font-mono text-[9.5px] tracking-[0.22em] uppercase">Successful Cases</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
          >
           <div className="flex items-baseline gap-2 mb-2 text-white">
             <span className="font-heading text-5xl md:text-7xl font-light tracking-tight text-glow">{years}</span>
             <span className="font-heading text-3xl md:text-4xl font-light text-slate-500">Yrs</span>
           </div>
           <p className="text-slate-600 font-mono text-[9.5px] tracking-[0.22em] uppercase">Clinical Excellence</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex items-center gap-3 mb-2">
               <span className="font-heading text-5xl md:text-7xl font-light tracking-tight text-white pr-1 text-glow">{(ratingRaw / 10).toFixed(1)}</span>
               <div className="flex gap-0.5 mt-1">
                 {[...Array(5)].map((_, j) => (
                   <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-neon-blue/70 text-neon-blue/70 drop-shadow-[0_0_6px_rgba(91,141,239,0.3)]" />
                 ))}
               </div>
            </div>
            <p className="text-slate-600 font-mono text-[9.5px] tracking-[0.22em] uppercase">Google Reviews</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

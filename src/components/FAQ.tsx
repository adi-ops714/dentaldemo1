import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils';

const faqs = [
  {
    q: "Is the Smile Makeover Process Painful?",
    a: "Not at all. We utilize computer-controlled local anesthesia and minimally invasive techniques to ensure a completely pain-free experience. Most patients report zero discomfort."
  },
  {
    q: "How Much Does a Cosmetic Consultation Cost?",
    a: "Your initial digital consultation starts from ₹500, which is fully credited toward your treatment plan. We discuss financing options and transparent pricing before beginning any clinical work."
  },
  {
    q: "Do You Offer EMI or Financing Options?",
    a: "Yes. We understand premium dentistry is an investment. We offer 0% interest EMI options through major credit cards and partnered financial institutions to make your treatment accessible."
  },
  {
    q: "How Long Do Porcelain Veneers Last?",
    a: "With proper care, our custom-milled E-max veneers typically last 15-20 years. They are highly resistant to staining from tea, coffee, and spices common in the Indian diet."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 relative z-10 w-full bg-[#040508] border-y border-white/[0.025]">
      <div className="absolute top-1/2 left-0 w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_left,rgba(91,141,239,0.055)_0%,transparent_70%)] hidden md:block -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <span className="h-[1px] w-8 bg-neon-blue/30" />
                <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.22em] text-neon-blue/70 uppercase font-medium">Inquiries</span>
             </div>
             <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light mb-6 tracking-tight text-white leading-[1.05]"
            >
              Absolute <br/> <span className="font-semibold italic text-white/85">Clarity.</span>
            </motion.h2>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed mb-8">
              Transparent answers regarding our procedures, technology, and patient financing. Absolute clarity before you decide.
            </p>
          </div>

          <div className="w-full lg:w-2/3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className={cn(
                  "border rounded-xl overflow-hidden transition-all duration-400 relative backdrop-blur-md",
                  open === i ? "bg-white/[0.018] border-white/[0.06]" : "bg-white/[0.008] border-white/[0.025] lg:hover:border-white/[0.06] lg:hover:bg-white/[0.015]"
                )}
              >
                {/* Accent bar */}
                <div 
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-neon-blue/60 to-transparent transition-all duration-500 origin-top",
                    open === i ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  )}
                />
                
                <button 
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none transition-all duration-200 active:opacity-70"
                >
                  <span className={cn(
                    "font-heading font-light text-lg md:text-xl pr-6 tracking-tight transition-colors duration-300",
                    open === i ? "text-white italic" : "text-slate-300 lg:hover:text-white"
                  )}>{faq.q}</span>
                  <div className={cn(
                    "p-2 rounded-full border transition-all duration-400 flex-shrink-0",
                    open === i ? "bg-neon-blue/[0.08] rotate-180 border-neon-blue/25" : "border-white/[0.04] bg-white/[0.015]"
                  )}>
                    <ChevronDown className={cn("w-4 h-4 transition-colors duration-400", open === i ? "text-neon-blue/80" : "text-slate-500")} strokeWidth={1.5} />
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={cn(
                    "px-6 md:px-8 overflow-hidden transition-all duration-500 ease-out",
                    open === i ? "max-h-60 pb-6 md:pb-7 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="h-[1px] w-full bg-white/[0.035] mb-5" />
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed max-w-3xl pl-2">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

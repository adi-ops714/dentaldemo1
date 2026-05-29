import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import { CLINIC_PHONE } from '../config';

export function Address() {
  return (
    <section id="address" className="py-24 md:py-32 relative z-10 w-full bg-transparent overflow-hidden border-y border-white/[0.03] scroll-mt-24">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08)_0%,transparent_70%)] hidden md:block pointer-events-none" />
      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-16 pt-8 lg:pt-16 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1.5px] w-8 bg-[#00d4aa]/60" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#00d4aa] uppercase font-bold">Location & Booking</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white m-0 leading-none"
          >
            Visit <span className="font-semibold text-white/90">Clinic.</span>
          </motion.h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <motion.address 
            itemScope itemType="https://schema.org/Dentist"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[35%] xl:w-[30%] shrink-0 space-y-6 not-italic flex flex-col items-center lg:items-start text-center lg:text-left relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
              <div className="p-3 rounded-xl bg-[#0a0f1e] border border-white/5 mt-1 lg:group-hover:border-[#00d4aa]/30 transition-colors duration-500">
                 <MapPin className="w-5 h-5 text-[#00d4aa] lg:group-hover:text-[#00e5ff] transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div>
                 <h3 className="font-heading text-[17px] font-semibold text-white mb-2 mt-2 lg:mt-0">Clinic Address</h3>
                 <span className="text-[#9ca3af] font-normal text-[15px] leading-[1.6] block">
                   12th Floor, Horizon Tower,<br/>Waterfield Rd, Bandra W,<br/>Mumbai, 400050
                 </span>
              </div>
            </div>

            <hr className="border-t border-white/5 my-2 w-[80%] mx-auto lg:mx-0" />

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
              <div className="p-3 rounded-xl bg-[#0a0f1e] border border-white/5 mt-1 lg:group-hover:border-[#00d4aa]/30 transition-colors duration-500">
                 <Phone className="w-5 h-5 text-[#00d4aa] lg:group-hover:text-[#00e5ff] transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div>
                 <h3 className="font-heading text-[17px] font-semibold text-white mb-2 mt-2 lg:mt-0">Contact</h3>
                 <div className="text-[#9ca3af] font-normal text-[15px] leading-[1.6]">
                   {CLINIC_PHONE}<br/> 
                   contact@dento.in
                 </div>
              </div>
            </div>
          </motion.address>
          
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1 h-[240px] md:h-[320px] lg:h-auto flex flex-col z-10"
          >
            <div className="w-full h-full min-h-[220px] rounded-2xl lg:rounded-3xl overflow-hidden ring-1 ring-[#00d4aa]/30 bg-[#111827] shadow-[0_0_30px_rgba(0,212,170,0.05)] relative flex flex-col group">
               <div className="w-full flex-grow relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4984252377313!2d72.8315183!3d19.0571933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93883a93e3d%3A0xe10ff36ebd7fe794!2sWaterfield%20Road%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Clinic Map Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale-0 mix-blend-normal opacity-90 lg:grayscale-[30%] lg:opacity-80 lg:mix-blend-luminosity lg:hover:grayscale-0 lg:hover:mix-blend-normal lg:hover:opacity-100 transition-all duration-700"
                  ></iframe>
               </div>
               
               <div className="w-full bg-[#111827] border-t border-white/5 p-4 flex items-center justify-between z-20 shrink-0">
                  <div className="text-[14px] text-white font-medium pl-2 hidden sm:block">Open in Maps for Directions</div>
                  <a href="https://maps.google.com/?q=The+Horizon+Tower,+Waterfield+Road,+Bandra+West,+Mumbai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto h-[40px] px-6 flex items-center justify-center rounded-full bg-[#0a0f1e] border border-white/10 text-white font-semibold text-[13px] tracking-wide transition-all duration-200 active:scale-[0.98] active:opacity-90 lg:hover:bg-[#00d4aa] lg:hover:border-[#00d4aa] lg:hover:-translate-y-0.5">
                    Open Map ↗
                  </a>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

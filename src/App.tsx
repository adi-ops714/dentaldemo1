/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JSX } from 'react';
import { Background } from './components/Background';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutClinic } from './components/AboutClinic';
import { QuoteSection } from './components/QuoteSection';
import { Services } from './components/Services';
import { AboutDentist } from './components/AboutDentist';
import { Testimonials } from './components/Testimonials';
import { Address } from './components/Address';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { CLINIC_PHONE } from './config';

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-deep-black text-white font-sans selection:bg-neon-blue/30 selection:text-white relative">
      {/* Global subtle film grain texture for premium feel */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <Background />
      <CustomCursor />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <AboutClinic />
          <QuoteSection />
          <Services />
          <AboutDentist />
          <Testimonials />
          <Address />
          <FAQ />
          <CTA />
        </main>
        
        <footer className="pt-24 pb-12 bg-[#030712] border-t border-white/[0.03] relative z-10 w-full overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08)_0%,transparent_70%)] hidden md:block pointer-events-none" />
          <div className="container mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm max-w-7xl relative z-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 block w-max">
                <span className="font-mono font-bold tracking-[0.4em] uppercase text-sm text-white">DENTO</span>
                <span className="w-[1px] h-4 bg-neon-blue/40 mx-1" />
                <span className="font-mono font-light tracking-[0.3em] uppercase text-xs text-slate-400">DENTAL</span>
              </div>
              <p className="text-slate-500 mb-8 font-thin tracking-wide text-base">Premium Cosmetic & Smile Architecture Clinic.</p>
              <div className="flex gap-3 text-slate-300 font-mono text-[10px] uppercase font-bold tracking-widest justify-center md:justify-start">
                <span className="px-3 py-1.5 bg-white/[0.02] rounded border border-white/[0.05] shadow-[0_0_10px_rgba(255,255,255,0.02)]">UPI/Cards</span>
                <span className="px-3 py-1.5 bg-white/[0.02] rounded border border-white/[0.05] shadow-[0_0_10px_rgba(255,255,255,0.02)]">0% EMI</span>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-medium text-white mb-8 text-base tracking-tight">Our Location</h4>
              <address className="text-slate-400 font-light text-sm not-italic space-y-3">
                <p>12th Floor, The Horizon Tower,</p>
                <p>Bandra West, Mumbai, 400050</p>
                <p className="pt-4 text-white font-mono text-xs tracking-wider">contact@dento.in</p>
                <p className="font-mono text-xs tracking-wider">{CLINIC_PHONE}</p>
              </address>
            </div>
            <div>
              <h4 className="font-heading font-medium text-white mb-8 text-base tracking-tight">Navigation</h4>
              <ul className="text-slate-400 space-y-3 font-light text-sm">
                <li><a href="#about" className="lg:hover:text-white transition-all duration-200 active:scale-[0.98] active:opacity-80">About Us</a></li>
                <li><a href="#services" className="lg:hover:text-white transition-all duration-200 active:scale-[0.98] active:opacity-80">Clinical Treatments</a></li>
                <li><a href="#doctor" className="lg:hover:text-white transition-all duration-200 active:scale-[0.98] active:opacity-80">Meet the Expert</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-medium text-white mb-8 text-base tracking-tight">Operational Hours</h4>
              <ul className="text-slate-400 space-y-3 font-light text-sm">
                <li className="flex justify-between border-b border-white/[0.03] pb-3"><span>Monday - Saturday</span> <span>10AM - 8PM</span></li>
                <li className="flex justify-between pt-1"><span>Sunday</span> <span className="text-neon-blue">Priority Only</span></li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center justify-center pt-8 overflow-hidden select-none relative h-[250px] md:h-[350px]">
             <span className="font-mono text-[clamp(6rem,22vw,18rem)] font-bold tracking-[0.2em] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent' }}>DENTO</span>
             <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10" />
          </div>

          <div className="container mx-auto px-5 lg:px-8 relative z-20 pb-4">
            <div className="text-center text-slate-500 font-mono text-[10px] sm:text-xs tracking-widest uppercase font-bold pt-4 pb-2">
              <p>© {new Date().getFullYear()} Dento Advanced Dentistry</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

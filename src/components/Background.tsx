import { JSX, useState, useEffect } from 'react';

export function Background(): JSX.Element {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#040508] overflow-hidden">
      {/* Atmospheric drifting orbs — always visible, never disabled on scroll */}
      {!prefersReducedMotion && (
        <>
          {/* Indigo orb */}
          <div 
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(91,141,239,0.04)_0%,transparent_70%)] animate-[drift_28s_infinite_alternate_ease-in-out] pointer-events-none mix-blend-screen transform-gpu" 
          />
          {/* Cyan orb */}
          <div 
            className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] animate-[drift-reverse_38s_infinite_alternate_ease-in-out] pointer-events-none mix-blend-screen transform-gpu" 
          />
          {/* Gold accent orb */}
          <div 
            className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.02)_0%,transparent_70%)] animate-[drift_33s_infinite_alternate-reverse_ease-in-out] pointer-events-none transform-gpu" 
          />
        </>
      )}

      {/* Fine dot matrix — always visible */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#040508_92%)] pointer-events-none" 
      />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowConfig = { damping: 40, stiffness: 100, mass: 1 };
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const glowX = useSpring(mouseX, glowConfig);
  const glowY = useSpring(mouseY, glowConfig);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', moveCursor);
    }
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none z-[100] mix-blend-screen hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,184,255,0.08)_0%,transparent_75%)] pointer-events-none z-0 hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}

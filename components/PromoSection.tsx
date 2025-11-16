
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import VideoModal from './VideoModal';

const PromoSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };
    
    const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { scale: 0.8, opacity: 0, duration: 0.3 });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);


    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[60vh] w-full bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')" }}
        onClick={() => setIsVideoModalOpen(true)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </section>
      
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 opacity-0 scale-50"
      >
        <div className="w-28 h-28 rounded-full bg-white/30 backdrop-blur-sm flex justify-center items-center">
          <span className="text-white font-bold text-lg tracking-widest">PLAY</span>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default PromoSection;

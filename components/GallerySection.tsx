import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './GallerySection.css';

const topImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
];

const bottomImages = [
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop',
];

const GallerySection: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);
    const topTween = useRef<gsap.core.Tween | null>(null);
    const bottomTween = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const topRow = topRowRef.current;
        const bottomRow = bottomRowRef.current;
        const gallery = galleryRef.current;
        if (!topRow || !bottomRow || !gallery) return;

        // Set initial positions
        gsap.set(topRow, { xPercent: 0 });
        gsap.set(bottomRow, { xPercent: -50 });
        
        // Right to Left animation for top row
        topTween.current = gsap.to(topRow, {
            xPercent: -50,
            duration: 40,
            ease: 'none',
            repeat: -1,
        });

        // Left to Right animation for bottom row
        bottomTween.current = gsap.to(bottomRow, {
            xPercent: 0,
            duration: 40,
            ease: 'none',
            repeat: -1,
        });

        const handleMouseEnter = () => {
            topTween.current?.timeScale(0.1);
            bottomTween.current?.timeScale(0.1);
        };

        const handleMouseLeave = () => {
            topTween.current?.timeScale(1);
            bottomTween.current?.timeScale(1);
        };

        gallery.addEventListener('mouseenter', handleMouseEnter);
        gallery.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            gallery.removeEventListener('mouseenter', handleMouseEnter);
            gallery.removeEventListener('mouseleave', handleMouseLeave);
            topTween.current?.kill();
            bottomTween.current?.kill();
        };
    }, []);

    return (
        <section ref={galleryRef} className="gallery-section">
            <div className="gallery-row-wrapper">
                <div ref={topRowRef} className="gallery-row">
                    {[...topImages, ...topImages].map((src, index) => (
                        <div key={`top-${index}`} className="gallery-image-container">
                            <img src={src} alt={`Top gallery image ${index + 1}`} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery-row-wrapper">
                <div ref={bottomRowRef} className="gallery-row">
                    {[...bottomImages, ...bottomImages].map((src, index) => (
                        <div key={`bottom-${index}`} className="gallery-image-container">
                            <img src={src} alt={`Bottom gallery image ${index + 1}`} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
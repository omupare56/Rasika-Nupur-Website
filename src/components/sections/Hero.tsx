import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const rev = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

const revX = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay, ease },
});

const services = [
  'Designer Outfits',
  'Outfit Rentals',
  'Fashion Institute',
  'Modelling Academy',
  'Fashion Shows',
  'Beauty Pageants',
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section ref={ref} id="home" className="relative w-full h-[100dvh] min-h-[650px] overflow-hidden flex items-end">
      {/* Parallax background */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=90&w=2400&auto=format&fit=crop"
          alt="Ms. Rasika Nupur – Luxury Fashion, Nashik"
          className="w-full h-[115%] object-cover object-[center_15%]"
          style={{ animation: 'heroZoom 2.4s cubic-bezier(0.22,1,0.36,1) forwards' }}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080808]/60 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080808]/95 via-[#080808]/45 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#080808]/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-16 pb-24 md:pb-32">
        <motion.div {...revX(0.2)} className="flex items-center gap-3 mb-6">
          <span className="block h-[1px] w-10 bg-[#c9a96e]" />
          <span className="font-sans text-[9.5px] tracking-[0.38em] uppercase text-[#c9a96e]">
            Ghungroo – The Designer Brand
          </span>
        </motion.div>

        <motion.h1 {...rev(0.35)} className="font-serif text-[#faf8f4] leading-[1.06] mb-7 text-4xl sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem]">
          Where Fashion<br />
          <em className="not-italic" style={{ color: '#e8d5a3' }}>Meets Confidence</em>
        </motion.h1>

        <motion.div {...rev(0.55)} className="mb-9 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#c9a96e]/50 block" />
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#faf8f4]/50">Ms. Rasika Nupur</span>
          </div>
          <p className="font-serif italic text-[#faf8f4]/45 text-sm leading-relaxed">
            Fashion Stylist · Beauty Consultant · Fashion Choreographer
          </p>
          <p className="font-sans text-[#faf8f4]/35 text-[11px] tracking-wide mt-1.5">
            Nashik, Maharashtra
          </p>
        </motion.div>

        {/* Service tags */}
        <motion.div {...rev(0.7)} className="flex flex-wrap gap-2 mb-11">
          {services.map(s => (
            <span key={s} className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#c9a96e]/70 border border-[#c9a96e]/22 px-3 py-1.5 hover:border-[#c9a96e]/65 hover:text-[#c9a96e] transition-all duration-300">
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...rev(0.88)} className="flex flex-col sm:flex-row gap-4">
          <a href="#ghungroo" className="group relative inline-flex items-center gap-3 overflow-hidden bg-[#c9a96e] text-[#080808] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase">
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5">Explore Services</span>
            <span className="absolute inset-0 bg-[#e8d5a3] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">→</span>
          </a>
          <a href="#contact" className="group inline-flex items-center gap-3 bg-transparent border border-[#faf8f4]/40 text-[#faf8f4] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase hover:border-[#faf8f4]/80 hover:bg-[#faf8f4]/8 transition-all duration-400">
            Book Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[7.5px] tracking-[0.4em] uppercase text-[#faf8f4]/30">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#c9a96e]/55 to-transparent" style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

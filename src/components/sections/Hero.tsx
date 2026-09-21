import { motion } from 'framer-motion';

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
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[650px] overflow-hidden flex items-end"
      style={{ background: '#1a0a0e' }}
    >
      {/* ─────────────────────────────────────────────────────────────────
          BACKGROUND LAYERS  (z-0 → z-[4])
          Rendered back-to-front. All pure CSS / SVG, no images.
      ───────────────────────────────────────────────────────────────── */}

      {/* Layer 1 - Deep obsidian base with subtle warm offset
          The ellipse center is slightly above-right so the canvas feels
          'open' in the upper area and progressively darker toward edges. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 130% 90% at 55% 25%, #2a1018 0%, #1a0a0e 38%, #1a0a0e00 100%), #1a0a0e',
        }}
      />

      {/* Layer 2 - Primary champagne focal glow, upper-center
          This is the 'editorial spotlight' - the warm tone that reads as
          intentional studio light. Slightly increased from 9% → 15% so
          it registers on calibrated and uncalibrated screens alike. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 48% 20%, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.06) 45%, transparent 72%)',
        }}
      />

      {/* Layer 3 - Secondary warm bloom anchored bottom-left
          Sits directly behind the typographic content area so there is
          perceptible depth below the heading without any box/card. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(180,140,75,0.10) 0%, rgba(160,120,55,0.04) 50%, transparent 72%)',
        }}
      />

      {/* Layer 4 - Right-edge dark counterweight
          Keeps the right side moody and prevents the warm glow from
          bleeding uniformly across the full width. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 80% at 108% 50%, rgba(10,3,5,0.7) 0%, transparent 65%)',
        }}
      />

      {/* Layer 5 - Bottom-to-top vignette for text legibility
          Heavier at the very bottom (where content lives) and fades to
          transparent before reaching the mid-section so the upper glow
          remains visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to top, #240c12 0%, rgba(26,10,14,0.88) 20%, rgba(26,10,14,0.42) 44%, transparent 65%)',
        }}
      />

      {/* Layer 6 - Top dark band (navbar region contrast) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,10,14,0.60) 0%, rgba(26,10,14,0.12) 18%, transparent 32%)',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────
          Layer 7 - SVG atmospheric silk / fabric flows
          Three wide Bézier sweeps with champagne fill that read as
          light catching draped fabric.  Corner ornaments add quiet
          editorial geometry.  All hard lines removed.
      ───────────────────────────────────────────────────────────────── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Upper sweep - warm champagne, heaviest at arc peak */}
          <linearGradient id="hSilk1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c9a96e" stopOpacity="0" />
            <stop offset="35%"  stopColor="#e8d5a3" stopOpacity="0.055" />
            <stop offset="62%"  stopColor="#c9a96e" stopOpacity="0.028" />
            <stop offset="100%" stopColor="#a07840" stopOpacity="0" />
          </linearGradient>
          {/* Mid sweep - slightly cooler so it reads as shadow not glow */}
          <linearGradient id="hSilk2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#b89060" stopOpacity="0" />
            <stop offset="40%"  stopColor="#d4b87a" stopOpacity="0.038" />
            <stop offset="100%" stopColor="#a07840" stopOpacity="0" />
          </linearGradient>
          {/* Lower sweep - very faint, gives depth to the lower canvas */}
          <linearGradient id="hSilk3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#c9a96e" stopOpacity="0" />
            <stop offset="50%"  stopColor="#c9a96e" stopOpacity="0.022" />
            <stop offset="100%" stopColor="#e8d5a3" stopOpacity="0" />
          </linearGradient>

          {/* Soft blur applied only to corner ornaments */}
          <filter id="ornGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.8" />
          </filter>
        </defs>

        {/* Silk arc 1 - wide upper sweep, filled shape */}
        <path
          d="M -120 380 C 180 160, 500 500, 780 280 S 1160 60, 1560 220 L 1560 -10 L -120 -10 Z"
          fill="url(#hSilk1)"
        />

        {/* Silk arc 2 - mid-canvas floating drape */}
        <path
          d="M -120 620 C 240 430, 560 720, 860 510 S 1260 300, 1560 480"
          fill="none"
          stroke="url(#hSilk2)"
          strokeWidth="220"
        />

        {/* Silk arc 3 - lower anchoring drape */}
        <path
          d="M 200 920 C 460 730, 800 890, 1080 680 S 1380 490, 1560 640"
          fill="none"
          stroke="url(#hSilk3)"
          strokeWidth="160"
        />

        {/* Corner ornament - top left only, very restrained */}
        <path
          d="M 40 40 L 40 86 M 40 40 L 86 40"
          stroke="#c9a96e"
          strokeWidth="0.7"
          fill="none"
          opacity="0.22"
          filter="url(#ornGlow)"
        />
        {/* Corner ornament - top right */}
        <path
          d="M 1400 40 L 1400 86 M 1400 40 L 1354 40"
          stroke="#c9a96e"
          strokeWidth="0.7"
          fill="none"
          opacity="0.18"
          filter="url(#ornGlow)"
        />
      </svg>

      {/* ─────────────────────────────────────────────────────────────────
          Layer 8 - Warm editorial glow BEHIND THE HEADING
          Content sits at the bottom-left of the viewport.
          The h1 starts at roughly 65–72% from the top.
          This bloom is therefore anchored at ~(20%, 70%) so it wraps
          around the heading rather than glowing in empty upper space.
          Uses vw/vh units so it scales gracefully on mobile.
      ───────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute z-[2] pointer-events-none"
        style={{
          left: '0',
          bottom: '12%',
          width: '80vw',
          maxWidth: '820px',
          height: '55vh',
          background:
            'radial-gradient(ellipse at 28% 68%, rgba(201,169,110,0.13) 0%, rgba(201,169,110,0.05) 38%, transparent 68%)',
          filter: 'blur(28px)',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────
          Layer 9 - Film grain / silk texture
          SVG feTurbulence noise tiled at small scale.
          soft-light blend is effective on near-black; overlay is not.
          Opacity kept low - just enough to break up flat digital bands.
      ───────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          opacity: 0.045,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ng'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ng)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────
          CONTENT  (z-20, unchanged)
      ───────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-16 pb-28 sm:pb-20 md:pb-24">
        <motion.div {...revX(0.2)} className="flex items-center gap-3 mb-4 md:mb-5">
          <span className="block h-[1px] w-10 bg-[#c9a96e]" />
          <span className="font-sans text-[9.5px] tracking-[0.38em] uppercase text-[#c9a96e]">
            Ghhunggroo – The Designer Brand
          </span>
        </motion.div>

        <motion.h1
          {...rev(0.35)}
          className="font-serif text-[#faf8f4] leading-[1.06] mb-5 md:mb-6 text-4xl sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] max-w-[680px]"
        >
          Where Fashion<br />
          <em className="not-italic" style={{ color: '#e8d5a3' }}>Meets Confidence</em>
        </motion.h1>

        <motion.div {...rev(0.55)} className="mb-6 md:mb-7 max-w-lg">
          <div className="flex items-center gap-3 mb-3">
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
        <motion.div {...rev(0.7)} className="flex flex-wrap gap-2 mb-8 md:mb-9 max-w-[520px]">
          {services.map(s => (
            <span
              key={s}
              className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#c9a96e]/70 border border-[#c9a96e]/22 px-3 py-1.5 hover:border-[#c9a96e]/65 hover:text-[#c9a96e] transition-all duration-300"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...rev(0.88)} className="flex flex-col sm:flex-row gap-4">
          <a
            href="#ghungroo"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-[#c9a96e] text-[#080808] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5">Explore Services</span>
            <span className="absolute inset-0 bg-[#e8d5a3] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">→</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-transparent border border-[#faf8f4]/40 text-[#faf8f4] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase hover:border-[#faf8f4]/80 hover:bg-[#faf8f4]/8 transition-all duration-400"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[7.5px] tracking-[0.4em] uppercase text-[#faf8f4]/30">Scroll</span>
        <div
          className="w-[1px] h-10 bg-gradient-to-b from-[#c9a96e]/55 to-transparent"
          style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}

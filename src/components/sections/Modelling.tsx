import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import modBg from '../../../client-photos/FB_IMG_1786900499931.jpg.jpeg';
import modFg from '../../../client-photos/FB_IMG_1786900504857.jpg.jpeg';

const ease = [0.22, 1, 0.36, 1] as const;

const modules = [
  { name: 'Complete Grooming',          icon: '◈' },
  { name: 'Personality Development',    icon: '◈' },
  { name: 'Pageant Grooming',           icon: '◈' },
  { name: 'Runway Walking',             icon: '◈' },
  { name: 'Posing & Facial Expressions',icon: '◈' },
  { name: 'Camera Confidence',          icon: '◈' },
  { name: 'Portfolio Development',      icon: '◈' },
  { name: 'Diet & Fitness Awareness',   icon: '◈' },
  { name: 'Hair, Makeup & Styling',     icon: '◈' },
  { name: 'Business of Modelling',      icon: '◈' },
];

export function Modelling() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="modelling" className="relative bg-[#080808] text-[#faf8f4] py-28 md:py-36 overflow-hidden">

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={modBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-12"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Left: header col */}
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-7 block"
            >
              Modelling Academy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#faf8f4] text-4xl sm:text-5xl leading-tight mb-6"
            >
              First Modelling<br />Institute in<br />
              <span className="text-gold-shimmer">Nashik</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="font-sans text-[#faf8f4]/55 text-sm leading-[1.9] mb-10"
            >
              A trailblazing institution dedicated to grooming confident, camera-ready models from the ground up, covering every dimension of professional modelling, from posture to personal branding.
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="img-placeholder aspect-[4/3] max-w-sm"
            >
              <img
                src={modFg}
                alt="Modelling Academy Nashik"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
            </motion.div>
          </div>

          {/* Right: module list */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/80 mb-8"
            >
              Training Curriculum
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#faf8f4]/6">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.06, ease }}
                  className="group bg-[#080808] hover:bg-[#0f0e0b] transition-colors duration-300 px-6 py-5 flex items-center gap-4"
                >
                  <span className="text-[#c9a96e]/50 group-hover:text-[#c9a96e] transition-colors text-xs">◈</span>
                  <span className="font-sans text-[#faf8f4]/70 text-[12.5px] tracking-wide group-hover:text-[#faf8f4] transition-colors duration-300">{m.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="mt-10"
            >
              <a href="#contact" className="inline-flex items-center gap-3 bg-[#c9a96e] text-[#080808] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase hover:bg-[#e8d5a3] transition-colors duration-300">
                Apply for Modelling/Pageants Training
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

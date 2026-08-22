import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

import gal1 from '../../../client-photos/FB_IMG_1786900592590.jpg.jpeg';
import gal2 from '../../../client-photos/FB_IMG_1786900486332.jpg.jpeg';
import gal3 from '../../../client-photos/FB_IMG_1738668608742.jpg.jpeg';
import gal4 from '../../../client-photos/FB_IMG_1786900647530.jpg.jpeg';
import gal5 from '../../../client-photos/IMG_20250902_211003.jpg.jpeg';
import gal6 from '../../../client-photos/FB_IMG_1786900542881.jpg.jpeg';

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const placeholders = [
    { src: gal1, aspect: 'aspect-[3/4]', span: '' },
    { src: gal2, aspect: 'aspect-square', span: '' },
    { src: gal3, aspect: 'aspect-[3/4]', span: '' },
    { src: gal4, aspect: 'aspect-square', span: '' },
    { src: gal5, aspect: 'aspect-[4/3]', span: 'col-span-2' },
    { src: gal6, aspect: 'aspect-[3/4]', span: '' },
  ];

  return (
    <section ref={ref} id="gallery" className="bg-[#080808] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-6 block"
            >
              Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#faf8f4] text-4xl sm:text-5xl leading-tight"
            >
              Moments of<br />Elegance
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans text-[#faf8f4]/40 text-xs leading-relaxed max-w-xs"
          >
            A curated collection of our finest moments, events, and the beautiful people who bring our designs to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.07, ease }}
              className={`group relative overflow-hidden img-placeholder cursor-pointer ${p.aspect} ${p.span}`}
            >
              <img
                src={p.src}
                alt="Moments of Elegance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/35 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-[#faf8f4]">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

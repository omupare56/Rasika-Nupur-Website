import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const placeholders = [
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[3/4]', span: '' },
    { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-square', span: '' },
    { src: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[3/4]', span: '' },
    { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-square', span: '' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[4/3]', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[3/4]', span: '' },
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
            Image placeholders — the client's photography will be placed here to showcase real work and events.
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
                alt="Gallery placeholder"
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

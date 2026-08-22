import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

import ev1 from '../../../client-photos/FB_IMG_1786900682471.jpg.jpeg';
import ev2 from '../../../client-photos/FB_IMG_1786900596580.jpg.jpeg';
import ev3 from '../../../client-photos/FB_IMG_1786900741646.jpg.jpeg';
import ev4 from '../../../client-photos/FB_IMG_1786900592590.jpg.jpeg';
import ev5 from '../../../client-photos/FB_IMG_1786900486332.jpg.jpeg';
import ev6 from '../../../client-photos/20260110_154812.jpg.jpeg';

const events = [
  {
    title: 'Fashion Shows',
    desc: 'End-to-end conceptualisation, choreography and production of high-impact fashion runway shows.',
    img: ev1,
    wide: true,
  },
  {
    title: 'Beauty Pageants',
    desc: 'Comprehensive organisation and grooming for beauty pageants — from auditions to crowning night.',
    img: ev2,
    wide: false,
  },
  {
    title: 'Corporate Fashion Events',
    desc: 'Curated fashion experiences tailored for corporate audiences and brand activations.',
    img: ev3,
    wide: false,
  },
  {
    title: 'Grooming Competitions',
    desc: 'Competitive grooming events that celebrate personality, poise and presentation.',
    img: ev4,
    wide: false,
  },
  {
    title: 'Talent Competitions',
    desc: 'Platforms that discover and celebrate exceptional talent across fashion and performance.',
    img: ev5,
    wide: false,
  },
  {
    title: 'Event Planning & Execution',
    desc: 'Full-spectrum event management — from creative ideation through flawless on-the-night execution.',
    img: ev6,
    wide: true,
  },
];

export function Events() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="events" className="bg-[#faf8f4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-6 block"
              style={{ color: '#c9a96e' }}
            >
              Events
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#080808] text-4xl sm:text-5xl md:text-6xl leading-tight"
            >
              Fashion Shows &<br />Beauty Pageants
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            className="font-sans text-[#080808]/55 text-sm leading-[1.9] max-w-sm md:text-right"
          >
            From intimate grooming showcases to large-scale fashion productions — every event is crafted with vision, precision and artistry.
          </motion.p>
        </div>

        {/* Event grid – alternates wide/narrow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((ev, i) => {
            const ref2 = useRef<HTMLDivElement>(null);
            const iv = useInView(ref2, { once: true, margin: '-50px' });
            return (
              <motion.div
                key={ev.title}
                ref={ref2}
                initial={{ opacity: 0, y: 24 }}
                animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.07, ease }}
                className={`group relative overflow-hidden cursor-pointer ${ev.wide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="img-placeholder aspect-[4/3]">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-[#080808]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c9a96e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-[#faf8f4] text-xl leading-snug mb-2">{ev.title}</h3>
                  <p className="font-sans text-[#faf8f4]/55 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-14 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-3 border border-[#080808] text-[#080808] px-10 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase hover:bg-[#080808] hover:text-[#faf8f4] transition-all duration-400">
            Plan Your Event With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

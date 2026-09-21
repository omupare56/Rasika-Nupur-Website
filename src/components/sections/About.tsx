import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '../../../client-photos/about_image.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { title: 'Fashion Styling', desc: 'Curated styling for every occasion with a keen eye for detail and elegance.' },
  { title: 'Beauty Consultation', desc: 'Personalised beauty guidance blending contemporary trends with timeless grace.' },
  { title: 'Fashion Choreography', desc: 'Orchestrating runway shows and fashion events with precision and artistry.' },
  { title: 'Designer Clothing', desc: 'Bespoke outfits crafted and customised according to your vision and occasion.' },
  { title: 'Fashion Education', desc: 'Structured courses nurturing the next generation of fashion designers.' },
  { title: 'Modelling/Pageants Training', desc: 'Grooming confident models, from posture to portfolio.' },
  { title: 'Fashion Events', desc: 'End-to-end planning of fashion shows, pageants and corporate events.' },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="about" className="bg-[#240C12] text-[#faf8f4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease }}
            className="relative"
          >
            <div className="img-placeholder aspect-[3/4] w-full max-w-[480px] mx-auto lg:mx-0">
              <img
                src={aboutImage}
                alt="Ms. Rasika Nupur – Fashion Professional"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Floating label card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-[#c9a96e] px-6 py-4 max-w-[200px]">
              <p className="font-serif text-[#080808] text-sm leading-snug">Fashion Stylist &amp; Choreographer</p>
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-[#080808]/70 mt-1">Nashik, Maharashtra</p>
            </div>
          </motion.div>

          {/* Right: text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease }}
              className="section-eyebrow mb-8 block"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="font-serif text-[#faf8f4] text-3xl sm:text-4xl md:text-5xl leading-tight mb-8"
            >
              Ms. Rasika Nupur
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.28, ease }}
            >
              <p className="font-sans text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-5">
                Fashion Stylist · Beauty Consultant · Fashion Choreographer
              </p>
              <p className="font-sans text-[#faf8f4]/60 text-sm leading-[1.9] mb-5">
                Ms. Rasika Nupur is a multifaceted creative professional who has brought together the worlds of fashion styling, beauty consultation, and choreography under a single, distinctive identity rooted in Nashik.
              </p>
              <p className="font-sans text-[#faf8f4]/60 text-sm leading-[1.9] mb-8">
                Every service she delivers, from bespoke designer outfits and outfit rentals to structured fashion education and professional modelling training, is executed with creativity, elegance, and deeply personalised attention.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.28em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/40 pb-1 hover:border-[#c9a96e] transition-colors duration-300">
                Get in Touch →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Pillars grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mb-5"
        >
          <div className="divider-gold text-[#c9a96e]/40 mb-14">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/60">What We Do</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#faf8f4]/6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.07, ease }}
              className="bg-[#080808] px-7 py-8 group hover:bg-[#111] transition-colors duration-300"
            >
              <div className="w-6 h-[1px] bg-[#c9a96e]/50 mb-5 group-hover:w-10 transition-all duration-500" />
              <h3 className="font-serif text-[#faf8f4] text-base mb-3 leading-snug">{p.title}</h3>
              <p className="font-sans text-[#faf8f4]/45 text-[11.5px] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
          {/* Fill last cell if odd */}
          <div className="bg-[#080808] px-7 py-8 hidden lg:flex items-end">
            <a href="#ghungroo" className="font-sans text-[9px] tracking-[0.28em] uppercase text-[#c9a96e] border-b border-[#c9a96e]/35 pb-0.5 hover:border-[#c9a96e] transition-colors">
              Explore All Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

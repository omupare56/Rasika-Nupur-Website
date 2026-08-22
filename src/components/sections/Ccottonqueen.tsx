import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import cottonQueenImg from '../../../client-photos/FB_IMG_1738668405119.jpg.jpeg';

const ease = [0.22, 1, 0.36, 1] as const;

export function Ccottonqueen() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="ccottonqueen" className="bg-[#080808] text-[#faf8f4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Right: image — shown first on mobile via order */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease }}
            className="order-first lg:order-last relative"
          >
            <div className="img-placeholder aspect-[4/5] max-w-[520px] ml-auto">
              <img
                src={cottonQueenImg}
                alt="Ccottonqueen – Jaipur Cotton Collection"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute top-6 -left-4 lg:-left-10 bg-[#080808] border border-[#c9a96e]/30 px-5 py-4">
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#c9a96e] mb-1">Speciality</p>
              <p className="font-serif text-[#faf8f4] text-sm">Jaipur Cotton</p>
            </div>
          </motion.div>

          {/* Left: text */}
          <div className="order-last lg:order-first">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-7 block"
            >
              Second Brand
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#faf8f4] text-4xl sm:text-5xl leading-tight mb-3"
            >
              Ccottonqueen
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[#c9a96e] text-[10px] tracking-[0.28em] uppercase mb-8"
            >
              Manufacturer · Wholesaler · Retailer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease }}
            >
              <p className="font-sans text-[#faf8f4]/58 text-sm leading-[1.95] mb-6">
                Ccottonqueen is a dedicated fashion brand specialising in the manufacture, wholesale, and retail of high-quality Jaipur cotton dresses — bringing the craftsmanship and heritage of Jaipur's celebrated textile tradition to modern wardrobes.
              </p>
              <p className="font-sans text-[#faf8f4]/58 text-sm leading-[1.95] mb-10">
                Every piece in the collection is chosen for its fabric quality, comfort, and authenticity — making Ccottonqueen the preferred destination for those who value effortless elegance in everyday fashion.
              </p>

              {/* Three pillars */}
              <div className="grid grid-cols-3 gap-px bg-[#faf8f4]/8 mb-10">
                {['Manufacturer', 'Wholesaler', 'Retailer'].map(role => (
                  <div key={role} className="bg-[#080808] px-4 py-5 text-center hover:bg-[#111] transition-colors">
                    <p className="font-serif text-[#faf8f4]/80 text-sm">{role}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.28em] uppercase text-[#c9a96e] border border-[#c9a96e]/35 px-8 py-3.5 hover:bg-[#c9a96e] hover:text-[#080808] transition-all duration-400">
                Request Wholesale Info
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const collections = [
  { name: 'Bridal Wear',    img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800&auto=format&fit=crop', span: 'lg:col-span-2 lg:row-span-2' },
  { name: 'Designer Sarees', img: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Blouses',        img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Navari Sarees',  img: 'https://images.unsplash.com/photo-1583394293184-7ca1a04f8a39?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Party Wear',     img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Ball Gowns',     img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Formal Shirts',  img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Pant Blazers',   img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Sherwanis',      img: 'https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Fetas',          img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop', span: '' },
  { name: 'Mojaris',        img: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop', span: '' },
];

function CollectionCard({ item, index }: { item: typeof collections[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.06, ease }}
      className={`group relative overflow-hidden cursor-pointer ${item.span}`}
    >
      <div className="img-placeholder aspect-[3/4]">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        {/* Gold line reveal */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c9a96e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        <p className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-[#c9a96e]/80 mb-1.5">Collection</p>
        <h3 className="font-serif text-[#faf8f4] text-lg leading-tight">{item.name}</h3>
      </div>
    </motion.div>
  );
}

export function Ghungroo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="ghungroo" className="bg-[#faf8f4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-6 block"
              style={{ color: '#c9a96e' }}
            >
              Primary Brand
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#080808] text-4xl sm:text-5xl md:text-6xl leading-tight"
            >
              Ghungroo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.22, ease }}
              className="font-sans text-[#c9a96e] text-[10px] tracking-[0.28em] uppercase mt-3"
            >
              The Designer Brand
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="lg:max-w-md"
          >
            <p className="font-sans text-[#080808]/60 text-sm leading-[1.95] mb-4">
              At Ghungroo – The Designer Brand, we design and customise premium outfits according to each customer's unique needs, occasion, and budget. Whether it is an intimate ceremony or a grand celebration, every creation is crafted with care and artistry.
            </p>
            <p className="font-sans text-[#080808]/60 text-sm leading-[1.95]">
              Premium designer outfits are also available on rent — allowing you to wear exquisite fashion for every occasion without compromise.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <span className="h-[1px] w-8 bg-[#c9a96e]/50 block" />
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-[#080808]/40">Design · Customise · Rent</span>
            </div>
          </motion.div>
        </div>

        {/* Two feature callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#c9a96e]/15 mb-6">
          {[
            { icon: '✦', label: 'Custom Design', desc: 'Outfits tailored to your vision, occasion and budget.' },
            { icon: '◇', label: 'Rental Studio', desc: 'Premium designer outfits available for rent.' },
          ].map(f => (
            <div key={f.label} className="bg-[#faf8f4] px-8 py-8 flex items-start gap-5">
              <span className="text-[#c9a96e] text-lg mt-0.5">{f.icon}</span>
              <div>
                <h4 className="font-serif text-[#080808] text-base mb-2">{f.label}</h4>
                <p className="font-sans text-[#080808]/55 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Collections heading */}
        <div className="divider-gold my-16">
          <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#080808]/40 whitespace-nowrap">Our Collections</span>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {collections.map((item, i) => (
            <CollectionCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="group inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.28em] uppercase border border-[#080808] text-[#080808] px-10 py-4 hover:bg-[#080808] hover:text-[#faf8f4] transition-all duration-400">
            Enquire About a Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}

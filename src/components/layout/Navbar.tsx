import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home',      href: '#home' },
  { name: 'About',     href: '#about' },
  { name: 'Ghhunggroo',  href: '#ghungroo' },
  { name: 'Ccottonqueen', href: '#ccottonqueen' },
  { name: 'Pageant',      href: '#face-of-maharashtra' },
  { name: 'Institute', href: '#institute' },
  { name: 'Modelling', href: '#modelling' },
  { name: 'Events',    href: '#events' },
  { name: 'Gallery',   href: '#gallery' },
  { name: 'Contact',   href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);
  const [active,   setActive]   = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf8f4]/85 backdrop-blur-xl border-b border-[#c9a96e]/15 py-3.5 shadow-[0_1px_40px_rgba(0,0,0,0.07)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none" aria-label="Ms. Rasika Nupur Home">
            <span className={`font-serif font-bold tracking-[0.14em] uppercase transition-all duration-500 ${scrolled ? 'text-[#080808] text-[1.1rem]' : 'text-[#faf8f4] text-[1.2rem]'}`}>
              Rasika Nupur
            </span>
            <span className={`font-sans tracking-[0.32em] uppercase text-[7.5px] mt-0.5 transition-colors duration-500 ${scrolled ? 'text-[#c9a96e]' : 'text-[#c9a96e]/90'}`}>
              Luxury Fashion · Nashik
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative font-sans text-[10.5px] tracking-[0.16em] uppercase pb-1 group transition-colors duration-300 ${
                    scrolled ? 'text-[#080808]/70 hover:text-[#080808]' : 'text-[#faf8f4]/75 hover:text-[#faf8f4]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-[#c9a96e] transition-all duration-500 ease-out ${active === link.name ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden lg:inline-flex px-6 py-2.5 font-sans text-[9.5px] tracking-[0.24em] uppercase border transition-all duration-400 ${
                scrolled
                  ? 'border-[#080808] text-[#080808] hover:bg-[#080808] hover:text-[#faf8f4]'
                  : 'border-[#faf8f4]/55 text-[#faf8f4] hover:bg-[#faf8f4] hover:text-[#080808]'
              }`}
            >
              Book Session
            </a>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-[#080808]' : 'text-[#faf8f4]'}`}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#080808]/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] bg-[#080808] flex flex-col px-8 py-8"
            >
              <button onClick={() => setIsOpen(false)} aria-label="Close" className="self-end text-[#faf8f4]/50 hover:text-[#c9a96e] transition-colors mb-10">
                <X size={24} strokeWidth={1.5} />
              </button>
              <div className="mb-10">
                <span className="font-serif text-xl text-[#faf8f4] tracking-[0.1em] uppercase block">Rasika Nupur</span>
                <span className="font-sans text-[8px] tracking-[0.3em] text-[#c9a96e] uppercase">Luxury Fashion · Nashik</span>
              </div>
              <nav className="flex flex-col gap-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.045, duration: 0.35 }}
                    onClick={() => { setIsOpen(false); setActive(link.name); }}
                    className="font-serif text-lg text-[#faf8f4]/75 hover:text-[#c9a96e] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 border border-[#c9a96e]/40 text-[#c9a96e] text-center py-3.5 font-sans text-[9px] tracking-[0.28em] uppercase hover:bg-[#c9a96e] hover:text-[#080808] transition-all duration-300"
              >
                Book a Session
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

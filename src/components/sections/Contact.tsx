import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#faf8f4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="max-w-xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="section-eyebrow mb-6 block"
            style={{ color: '#c9a96e' }}
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="font-serif text-[#080808] text-4xl sm:text-5xl md:text-6xl leading-tight mb-5"
          >
            Let's Create<br />Something Beautiful
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="font-sans text-[#080808]/55 text-sm leading-[1.9]"
          >
            Reach out to book a consultation, enquire about a course, or plan your next fashion event.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Info blocks */}
            {[
              {
                icon: <Phone size={15} strokeWidth={1.5} />,
                label: 'Phone',
                content: (
                  <a href="tel:+919545147559" className="font-sans text-[#080808] text-sm hover:text-[#c9a96e] transition-colors">
                    +91 95451 47559
                  </a>
                ),
              },
              {
                icon: <Mail size={15} strokeWidth={1.5} />,
                label: 'Email',
                content: (
                  <a href="mailto:rasika9487@yahoo.com" className="font-sans text-[#080808] text-sm hover:text-[#c9a96e] transition-colors break-all">
                    rasika9487@yahoo.com
                  </a>
                ),
              },
              {
                icon: <MapPin size={15} strokeWidth={1.5} />,
                label: 'Address',
                content: (
                  <p className="font-sans text-[#080808]/70 text-sm leading-[1.85]">
                    Arunodaya Apartment, Basement<br />
                    Ghungroo – The Designer Brand<br />
                    Opposite Variya TVS Showroom<br />
                    Samarth Nagar, Mahatma Nagar<br />
                    Nashik, Maharashtra
                  </p>
                ),
              },
              {
                icon: <Clock size={15} strokeWidth={1.5} />,
                label: 'Hours',
                content: (
                  <p className="font-sans text-[#080808]/70 text-sm">
                    Open by Appointment Only
                  </p>
                ),
              },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="w-8 h-8 border border-[#c9a96e]/40 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-2">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            {/* WhatsApp quick link */}
            <a
              href="https://wa.me/919545147559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 font-sans text-[9.5px] tracking-[0.24em] uppercase hover:bg-[#1ebe5d] transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 2C6.487 2 2 6.468 2 12.003c0 1.77.468 3.492 1.36 5.01L2 22l5.117-1.34A10.015 10.015 0 0012.04 22c5.553 0 10.04-4.468 10.04-10.003C22.08 6.467 17.593 2 12.04 2z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#c9a96e]/20">
                <div className="w-10 h-10 border border-[#c9a96e] flex items-center justify-center mb-6">
                  <span className="text-[#c9a96e]">✓</span>
                </div>
                <h3 className="font-serif text-[#080808] text-2xl mb-3">Message Received</h3>
                <p className="font-sans text-[#080808]/55 text-sm">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={f.id} className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#080808]/55">
                        {f.label}{f.required && ' *'}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required={f.required}
                        className="border border-[#080808]/15 bg-transparent px-4 py-3 text-[#080808] text-sm font-sans placeholder-[#080808]/30 focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                        placeholder={f.label}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#080808]/55">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="border border-[#080808]/15 bg-transparent px-4 py-3 text-[#080808] text-sm font-sans placeholder-[#080808]/30 focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#080808]/55">Service of Interest</label>
                  <select
                    id="service"
                    className="border border-[#080808]/15 bg-[#faf8f4] px-4 py-3 text-[#080808] text-sm font-sans focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                  >
                    <option value="">Select a service…</option>
                    <option>Custom Designer Outfit</option>
                    <option>Outfit Rental</option>
                    <option>Fashion Designing Course</option>
                    <option>Modelling Training</option>
                    <option>Fashion Show / Event</option>
                    <option>Beauty Pageant</option>
                    <option>Ccottonqueen – Cotton Dresses</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#080808]/55">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="border border-[#080808]/15 bg-transparent px-4 py-3 text-[#080808] text-sm font-sans placeholder-[#080808]/30 focus:outline-none focus:border-[#c9a96e] transition-colors duration-300 resize-none"
                    placeholder="Tell us a little about what you're looking for…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto group relative overflow-hidden bg-[#080808] text-[#faf8f4] px-12 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase transition-colors duration-300 hover:bg-[#c9a96e] hover:text-[#080808]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

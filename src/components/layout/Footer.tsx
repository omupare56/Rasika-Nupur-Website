const services = [
  'Custom Designer Outfits',
  'Premium Outfit Rentals',
  'Fashion Designing Courses',
  'Modelling Academy',
  'Fashion Shows & Events',
  'Beauty Pageants',
  'Grooming & Personality Dev.',
  'Event Planning & Execution',
];

const navigate = [
  { label: 'Home',             href: '#home' },
  { label: 'About',            href: '#about' },
  { label: 'Ghungroo Brand',   href: '#ghungroo' },
  { label: 'Ccottonqueen',     href: '#ccottonqueen' },
  { label: 'Fashion Institute', href: '#institute' },
  { label: 'Modelling Academy', href: '#modelling' },
  { label: 'Events',           href: '#events' },
  { label: 'Gallery',          href: '#gallery' },
  { label: 'Contact',          href: '#contact' },
];

const socials = ['Instagram', 'Facebook', 'YouTube', 'Pinterest'];

const hours = [
  { day: 'All Days', time: 'By Appointment Only' },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] text-[#faf8f4]">

      {/* Newsletter strip */}
      <div className="border-b border-[#faf8f4]/8">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e] block mb-2.5">
              Stay in the Fashion Circle
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f4] leading-snug">
              Subscribe for Exclusive Updates
            </h3>
          </div>
          <form onSubmit={e => e.preventDefault()} className="flex w-full md:w-auto md:min-w-[380px]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-[#faf8f4]/6 border border-[#faf8f4]/15 text-[#faf8f4] placeholder-[#faf8f4]/35 px-5 py-3.5 font-sans text-xs focus:outline-none focus:border-[#c9a96e]/70 transition-colors"
            />
            <button type="submit" className="bg-[#c9a96e] text-[#080808] px-6 py-3.5 font-sans text-[9px] tracking-[0.28em] uppercase hover:bg-[#e8d5a3] transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            <a href="#home" className="flex flex-col leading-none mb-6 w-fit">
              <span className="font-serif text-2xl tracking-[0.1em] uppercase text-[#faf8f4]">Rasika Nupur</span>
              <span className="font-sans text-[7.5px] tracking-[0.32em] uppercase text-[#c9a96e] mt-1">Luxury Fashion · Nashik</span>
            </a>
            <p className="font-sans text-[#faf8f4]/42 text-[12.5px] leading-[1.9] max-w-[290px] mb-8">
              A multifaceted luxury fashion house under the creative vision of Ms. Rasika Nupur — bringing designer clothing, education, modelling, and event excellence under one identity.
            </p>
            {/* Brands */}
            <div className="space-y-2 mb-7">
              <p className="font-sans text-[8px] tracking-[0.28em] uppercase text-[#c9a96e]/60 mb-3">Our Brands</p>
              <p className="font-serif text-[#faf8f4]/70 text-sm">Ghungroo – The Designer Brand</p>
              <p className="font-serif text-[#faf8f4]/70 text-sm">Ccottonqueen</p>
            </div>
            {/* Socials */}
            <div className="flex gap-5 flex-wrap">
              {socials.map(s => (
                <a key={s} href="#" aria-label={s} className="font-sans text-[8.5px] tracking-[0.18em] uppercase text-[#faf8f4]/35 hover:text-[#c9a96e] transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-7">Services</h5>
            <ul className="space-y-3.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#" className="font-sans text-[#faf8f4]/50 text-[11.5px] tracking-wide hover:text-[#c9a96e] hover:pl-1 transition-all duration-300">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-7">Navigate</h5>
            <ul className="space-y-3.5">
              {navigate.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-sans text-[#faf8f4]/50 text-[11.5px] tracking-wide hover:text-[#c9a96e] hover:pl-1 transition-all duration-300">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h5 className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-7">Contact</h5>
            <address className="not-italic space-y-3.5 mb-8">
              <div>
                <p className="font-sans text-[11.5px] text-[#faf8f4]/50 leading-[1.85]">
                  Arunodaya Apartment, Basement<br />
                  Ghungroo – The Designer Brand<br />
                  Opp. Variya TVS Showroom<br />
                  Samarth Nagar, Mahatma Nagar<br />
                  Nashik, Maharashtra
                </p>
              </div>
              <a href="tel:+919545147559" className="block font-sans text-[11.5px] text-[#faf8f4]/50 hover:text-[#c9a96e] transition-colors">
                +91 95451 47559
              </a>
              <a href="mailto:rasika9487@yahoo.com" className="block font-sans text-[11.5px] text-[#faf8f4]/50 hover:text-[#c9a96e] transition-colors break-all">
                rasika9487@yahoo.com
              </a>
            </address>

            <h5 className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-5">Hours</h5>
            {hours.map(h => (
              <div key={h.day} className="flex flex-col gap-0.5">
                <span className="font-sans text-[#faf8f4]/65 text-[10.5px]">{h.day}</span>
                <span className="font-sans text-[#faf8f4]/38 text-[10.5px]">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#faf8f4]/8">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[8.5px] text-[#faf8f4]/28 tracking-[0.18em] uppercase">
            &copy; {new Date().getFullYear()} Ms. Rasika Nupur. All Rights Reserved.
          </p>
          <div className="flex gap-7">
            {['Privacy Policy', 'Terms', 'Sitemap'].map(l => (
              <a key={l} href="#" className="font-sans text-[8.5px] text-[#faf8f4]/28 tracking-[0.15em] uppercase hover:text-[#c9a96e] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

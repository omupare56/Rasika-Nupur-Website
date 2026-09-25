import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import instituteImg          from '../../../client-photos/institute_new.jpg';
import course6MonthImg       from '../../../client-photos/course_6month_fashion_designing.jpg';
import courseIllustrationImg from '../../../client-photos/course_3month_fashion_illustration.jpg';
import courseEmbroideryImg   from '../../../client-photos/course_hand_embroidery_aari.jpg';
import courseDyeingImg       from '../../../client-photos/course_dyeing_printing.jpg';

/* ── shared easing ─────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ── tiny helpers ───────────────────────────── */
function Gold({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#c9a96e' }}>{children}</span>;
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-14">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.35), transparent)' }} />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#c9a96e]/50" />
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.35), transparent)' }} />
    </div>
  );
}

function SlideLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/60">{number}</span>
      <div className="w-5 h-px bg-[#c9a96e]/40" />
      <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]">{label}</span>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 items-start font-sans text-[12.5px] leading-relaxed text-[#080808]/60">
      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a96e]/70" />
      <span>{children}</span>
    </li>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-serif text-[#080808] text-[15px] leading-snug mb-3 mt-6">
      {children}
    </h4>
  );
}

/* ── Slide 1: Introduction ──────────────────── */
function SlideIntroduction({ inView }: { inView: boolean }) {
  return (
    <div>
      <SlideLabel number="01" label="Introduction" />

      {/* Header row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="font-serif text-[#c9a96e] text-4xl sm:text-5xl md:text-[3.25rem] leading-tight mb-4"
          >
            Ghhunggroo The Fashion{' '}
            Designing Institute
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease }}
            className="font-serif italic text-[#c9a96e] text-base sm:text-lg leading-relaxed mb-8"
          >
            Where Creativity Takes Shape &amp; Dreams Become Designs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.35, ease }}
            className="space-y-4"
          >
            <p className="font-sans text-[#080808]/60 text-sm leading-[1.95]">
              Fashion is not just about clothes. It is about creativity, craftsmanship, confidence,
              individuality and the ability to turn an idea into something people want to wear.
            </p>
            <p className="font-sans text-[#080808]/60 text-sm leading-[1.95]">
              At Ghhunggroo The Fashion Designing Institute, we believe that every aspiring designer
              has a unique creative voice. Our aim is to help students discover that voice, develop
              professional skills and gain the confidence to transform their creativity into a career
              or their own fashion venture.
            </p>
            <p className="font-sans text-[#080808]/60 text-sm leading-[1.95]">
              Our approach combines creative learning with practical, hands-on experience, helping
              students understand fashion from concept to creation.
            </p>
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease }}
          className="img-placeholder aspect-[2/3] max-w-sm lg:ml-auto"
        >
          <img
            src={instituteImg}
            alt="Ghhunggroo The Fashion Designing Institute"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Why Choose */}
      <div className="mt-14 border-t border-[#c9a96e]/12 pt-12">
        <h3 className="font-serif text-[#080808] text-2xl sm:text-3xl mb-10">
          Why Choose <Gold>Ghhunggroo?</Gold>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: '1',
              title: 'Learn Fashion Beyond the Classroom',
              body: 'Fashion is a practical field, and therefore learning should be practical too. Students are encouraged to understand the complete design journey from an initial concept and sketch to fabric selection, pattern development, garment construction, finishing and presentation.',
            },
            {
              num: '2',
              title: 'Creativity + Technical Skills',
              body: 'A successful fashion designer needs both imagination and technical knowledge.',
              bullets: [
                'Fashion Illustration', 'Design Development', 'Colour & Design Concepts',
                'Textile & Fabric Understanding', 'Pattern Making', 'Garment Construction',
                'Draping', 'Embroidery & Surface Ornamentation', 'Dyeing & Printing',
                'Styling', 'Fashion Accessories', 'Portfolio Development',
                'Fashion Presentation', 'Boutique & Fashion Business Understanding',
              ],
            },
            {
              num: '3',
              title: 'Learn to Create, Not Just Memorise',
              body: 'Instead of limiting learning to theory, students get opportunities to practice, experiment and create. The objective is to help students gradually build the confidence to take an idea from imagination to an actual fashion product.',
            },
            {
              num: '4',
              title: 'Develop Your Own Creative Identity',
              body: 'We don\'t want students to simply copy existing designs. At Ghhunggroo, students are encouraged to explore their own aesthetics, experiment with silhouettes, fabrics, colours, techniques and styling and gradually develop a distinctive design identity.',
            },
            {
              num: '5',
              title: 'Portfolio-Oriented Learning',
              body: 'A designer needs more than a certificate. A strong portfolio can help communicate creativity and skills to potential clients, employers or collaborators.',
              inlineList: 'Ideas · Illustrations · Design Concepts · Garments · Techniques · Projects · Collections',
            },
            {
              num: '6',
              title: 'Fashion + Styling + Presentation',
              body: 'Fashion does not end when a garment is created. Understanding styling, presentation, grooming, fashion communication and how a finished garment is presented can help students see the complete fashion ecosystem. Ghhunggroo\'s wider fashion environment also provides exposure to modelling, grooming, fashion shows and presentation-related activities.',
            },
            {
              num: '7',
              title: 'Learn With an Entrepreneurial Mindset',
              body: 'Not every fashion student wants the same career. Some want to become designers. Some want to work with established brands. Some want to become stylists. Some want to start boutiques. Some want to create their own labels. Some want to work independently. That is why we encourage students to understand the business side of fashion too.',
            },
          ].map((item) => (
            <div key={item.num} className="group relative border border-[#c9a96e]/12 p-7 hover:border-[#c9a96e]/35 hover:shadow-[0_6px_32px_rgba(0,0,0,0.05)] transition-all duration-400">
              <div className="flex items-start justify-between mb-4">
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a96e] border border-[#c9a96e]/35 px-2 py-0.5">
                  0{item.num}
                </span>
              </div>
              <div className="w-6 h-px bg-[#c9a96e]/40 mb-4 group-hover:w-12 transition-all duration-500" />
              <h4 className="font-serif text-[#080808] text-[17px] leading-snug mb-3">{item.title}</h4>
              <p className="font-sans text-[#080808]/55 text-[12.5px] leading-relaxed mb-3">{item.body}</p>
              {item.bullets && (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 items-start font-sans text-[11.5px] text-[#080808]/50">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a96e]/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {item.inlineList && (
                <p className="font-sans text-[11.5px] text-[#c9a96e]/80 italic mt-2">{item.inlineList}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Ghhunggroo Different */}
      <div className="mt-14 border-t border-[#c9a96e]/12 pt-12">
        <h3 className="font-serif text-[#080808] text-2xl sm:text-3xl mb-6">
          What Makes Ghhunggroo <Gold>Different?</Gold>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: 'A Fashion Ecosystem, Not Just a Classroom',
              body: 'Along with fashion designing, Ghhunggroo brings together Fashion Designing, Designer Boutique, Modelling, Grooming, Styling, Fashion Shows and Personality Development, creating an environment where students can see different sides of the fashion industry.',
            },
            {
              title: 'Learn From Real Fashion Experiences',
              body: 'Ghhunggroo is built around an active fashion environment rather than learning fashion only from textbooks. Students can gain exposure to the realities of designing, styling, presentation and fashion-related activities while developing their own skills.',
            },
            {
              title: 'From Student to Creator',
              body: 'Our goal is to help students understand how to think like a designer, create like an artist, work like a professional, present like a fashion expert and, for those who choose it, think like a fashion entrepreneur.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-[#080808] p-7">
              <div className="w-6 h-px bg-[#c9a96e] mb-5" />
              <h4 className="font-serif text-[#faf8f4] text-base leading-snug mb-3">{card.title}</h4>
              <p className="font-sans text-[#faf8f4]/50 text-[12px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Join */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-[#080808] text-xl mb-5">Who Can <Gold>Join?</Gold></h3>
          <ul className="space-y-2">
            {[
              'Aspiring Fashion Designers',
              'Students interested in the fashion industry',
              'Beginners who want to learn fashion designing',
              'Homemakers looking to develop a professional skill',
              'Entrepreneurs planning to start a boutique or fashion label',
              'Existing boutique owners who want to upgrade their skills',
              'Creative individuals who want to turn their passion into a profession',
              'Anyone who wants to understand the complete fashion-design process',
            ].map((item) => <BulletItem key={item}>{item}</BulletItem>)}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-[#080808] text-xl mb-5">Career &amp; Business <Gold>Pathways</Gold></h3>
          <p className="font-sans text-[#080808]/55 text-[12.5px] leading-relaxed mb-4">
            Depending on their interests, skills and qualifications, students can explore opportunities such as:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Fashion Designer', 'Assistant Designer', 'Boutique Designer',
              'Fashion Stylist', 'Costume Designer', 'Pattern Maker',
              'Fashion Illustrator', 'Fashion Consultant', 'Apparel Entrepreneur',
              'Boutique Owner', 'Fashion Merchandiser', 'Production Assistant',
              'Fashion Coordinator',
            ].map((role) => (
              <span key={role} className="font-sans text-[10.5px] tracking-wide text-[#c9a96e] border border-[#c9a96e]/30 px-3 py-1">
                {role}
              </span>
            ))}
          </div>
          <p className="font-sans text-[#080808]/35 text-[10.5px] mt-3 leading-relaxed">
            Formal qualifications, internships and industry requirements vary by career path and employer.
          </p>
        </div>
      </div>

      {/* Journey CTA */}
      <div className="mt-12 border border-[#c9a96e]/20 p-8 text-center">
        <h3 className="font-serif text-[#080808] text-2xl mb-3">Your Journey <Gold>Starts Here</Gold></h3>
        <p className="font-sans text-[#080808]/55 text-sm leading-[1.9] max-w-2xl mx-auto mb-2">
          You don't need to be born a designer. You need creativity, curiosity, dedication and the willingness to learn.
        </p>
        <p className="font-sans text-[#080808]/55 text-sm leading-[1.9] max-w-2xl mx-auto mb-5">
          At Ghhunggroo The Fashion Designing Institute, we aim to give your creativity the right direction, your ideas the right platform and your dreams at the right beginning.
        </p>
        <p className="font-sans text-[10.5px] tracking-[0.25em] uppercase text-[#c9a96e]">
          Learn &nbsp;·&nbsp; Create &nbsp;·&nbsp; Design &nbsp;·&nbsp; Present &nbsp;·&nbsp; Build
        </p>
      </div>
    </div>
  );
}

/* ── Course slide (reusable) ────────────────── */
interface CourseSlideProps {
  slideNum: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
  courseTitle: string;
  subtitle: string;
  children: React.ReactNode;
  feesActual: string;
  feesDiscounted: string;
  highlights?: string[];
}

function CourseSlide({
  slideNum, label, imageSrc, imageAlt, imageRight = false,
  courseTitle, subtitle, children, feesActual, feesDiscounted, highlights,
}: CourseSlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const contentCol = (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.15, ease }}
      className={imageRight ? 'flex flex-col justify-center order-2 lg:order-1' : 'flex flex-col justify-center'}
    >
      <SlideLabel number={slideNum} label={label} />
      <h3 className="font-serif text-[#080808] text-2xl sm:text-3xl leading-tight mb-3">
        {courseTitle}
      </h3>
      <p className="font-serif italic text-[#c9a96e] text-sm sm:text-base mb-6">{subtitle}</p>
      <div className="font-sans text-[#080808]/60 text-[13px] leading-[1.9] space-y-3">
        {children}
      </div>

      {highlights && (
        <div className="mt-6">
          <p className="font-sans text-[9.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-3">What You'll Learn</p>
          <ul className="space-y-1.5">
            {highlights.map((h) => <BulletItem key={h}>{h}</BulletItem>)}
          </ul>
        </div>
      )}

      {/* Fees panel */}
      <div className="mt-10 border-t border-[#c9a96e]/12 pt-8">
        <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/70 mb-5">Special Course Offer</p>
        <div className="flex items-stretch gap-0 self-start w-fit">
          <div className="border border-[#c9a96e]/25 px-6 py-5 text-center min-w-[130px]">
            <p className="font-sans text-[8.5px] tracking-[0.22em] uppercase text-[#080808]/35 mb-2">Actual Fees</p>
            <p className="font-serif text-[#080808]/40 text-xl line-through decoration-[#c9a96e]/50">{feesActual}</p>
          </div>
          <div className="border border-[#c9a96e] bg-[#080808] px-6 py-5 text-center min-w-[130px]">
            <p className="font-sans text-[8.5px] tracking-[0.22em] uppercase text-[#c9a96e]/70 mb-2">Discounted Fees</p>
            <p className="font-serif text-[#c9a96e] text-2xl tracking-tight">{feesDiscounted}</p>
            <p className="font-sans text-[8.5px] text-[#faf8f4]/40 mt-1 tracking-widest uppercase">Only</p>
          </div>
        </div>
        <p className="font-sans text-[11px] text-[#080808]/35 mt-4 leading-relaxed">
          Limited admissions. &nbsp;Contact: <a href="tel:9545147559" className="text-[#c9a96e] hover:opacity-75 transition-opacity">9545147559</a>
        </p>
      </div>
    </motion.div>
  );

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: imageRight ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.1, ease }}
      className={imageRight ? 'flex items-center justify-center py-4 order-1 lg:order-2' : 'flex items-center justify-center py-4'}
    >
      <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-[400px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain block"
          loading="lazy"
          style={{ maxHeight: '700px' }}
        />
      </div>
    </motion.div>
  );

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {imageRight
          ? <>{contentCol}{imageCol}</>
          : <>{imageCol}{contentCol}</>
        }
      </div>
    </div>
  );
}

/* ── Slide 6: Registration & Enquiry ────────── */
const COURSES = [
  '6-Month Professional Fashion Designing Course',
  '3-Month Certificate Course in Fashion Illustration',
  'Short Course in Hand Embroidery & Aari Work',
  'Short Course in Dyeing & Printing',
] as const;

type Course = typeof COURSES[number];

function SlideRegistration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function handleEnquire(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to continue.');
      return;
    }
    setError('');
    const phoneLine = phone.trim() ? `\nPhone: ${phone.trim()}` : '';
    const message = encodeURIComponent(
      `Hello Ma'am, I am interested in the ${selectedCourse} at Ghhunggroo The Fashion Designing Institute.\n\nMy Name: ${name.trim()}${phoneLine}\n\nI would like to know more about the course, admission and registration process.\n\nPlease guide me regarding the next steps.`
    );
    window.open(`https://wa.me/919545147559?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  /* shared input style */
  const inputCls = 'w-full border border-[#080808]/12 bg-white px-4 py-3 font-sans text-[13px] text-[#080808] placeholder:text-[#080808]/25 focus:outline-none focus:border-[#c9a96e]/60 transition-colors rounded-none appearance-none';
  const labelCls = 'font-sans text-[9.5px] tracking-[0.25em] uppercase text-[#080808]/40 block mb-2';

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <SlideLabel number="06" label="Registration & Inquiry" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <h3 className="font-serif text-[#080808] text-3xl sm:text-4xl leading-tight mb-4">
              Register &amp; <Gold>Enquire</Gold>
            </h3>
            <p className="font-sans text-[#080808]/55 text-sm leading-[1.9] mb-8">
              Choose your course, enter your name and we will open WhatsApp with a pre-filled
              message ready for you to send directly to the institute.
            </p>

            {/* Address card */}
            <div className="border border-[#c9a96e]/20 p-6">
              <div className="w-5 h-px bg-[#c9a96e] mb-4" />
              <p className="font-sans text-[9.5px] tracking-[0.28em] uppercase text-[#c9a96e] mb-3">Visit Us</p>
              <p className="font-sans text-[#080808]/60 text-[12.5px] leading-[1.85]">
                Ghhunggroo The Fashion Institute<br />
                1st Floor, Above Samrat Fabrics,<br />
                Opposite Topchi, Between ABB &amp; ITI Circle,<br />
                Trambak Road, Nashik.
              </p>
              <a
                href="tel:9545147559"
                className="inline-flex items-center gap-2 mt-4 font-sans text-sm text-[#c9a96e] hover:opacity-75 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                9545147559
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="border border-[#c9a96e]/20 p-8">
              <div className="w-6 h-px bg-[#c9a96e] mb-6" />
              <h4 className="font-serif text-[#080808] text-xl mb-1">
                Send Your Enquiry
              </h4>
              <p className="font-sans text-[#080808]/40 text-[11px] mb-7 leading-relaxed">
                WhatsApp will open with your message pre-filled. You send it manually.
              </p>

              <form onSubmit={handleEnquire} noValidate>
                {/* Course select dropdown */}
                <div className="mb-5">
                  <label
                    htmlFor="inst-enquiry-course"
                    className={labelCls}
                  >
                    Selected Course <span className="text-[#c9a96e]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="inst-enquiry-course"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value as Course)}
                      className="w-full border border-[#c9a96e]/40 bg-[#faf8f4] px-4 py-3 pr-10 font-sans text-[12.5px] text-[#c9a96e] focus:outline-none focus:border-[#c9a96e]/80 transition-colors cursor-pointer appearance-none"
                    >
                      {COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {/* chevron icon */}
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#c9a96e]/70">
                      <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div className="mb-5">
                  <label
                    htmlFor="inst-enquiry-name"
                    className={labelCls}
                  >
                    Your Name <span className="text-[#c9a96e]">*</span>
                  </label>
                  <input
                    id="inst-enquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(''); }}
                    placeholder="Enter your full name"
                    className={inputCls}
                    autoComplete="name"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label
                    htmlFor="inst-enquiry-phone"
                    className={labelCls}
                  >
                    Phone Number <span className="text-[#080808]/25">(Optional)</span>
                  </label>
                  <input
                    id="inst-enquiry-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className={inputCls}
                    autoComplete="tel"
                  />
                </div>

                {error && (
                  <p className="font-sans text-[11.5px] text-red-600 mb-4">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25d366] text-white px-6 py-4 font-sans text-[10.5px] tracking-[0.25em] uppercase hover:bg-[#1fb558] transition-colors duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enquire on WhatsApp
                </button>

                <p className="font-sans text-[10.5px] text-[#080808]/35 text-center mt-3">
                  WhatsApp opens with your message pre-filled. You send it.
                </p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main Export ────────────────────────────── */
export function Institute() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="institute" className="bg-[#faf8f4] py-28 md:py-36">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="section-eyebrow mb-8 block"
          style={{ color: '#c9a96e' }}
        >
          Education
        </motion.span>

        {/* ── SLIDE 1: Introduction ── */}
        <SlideIntroduction inView={inView} />

        <SectionDivider />

        {/* ── SLIDE 2: 6-Month Course ── */}
        <CourseSlide
          slideNum="02"
          label="6-Month Course"
          imageSrc={course6MonthImg}
          imageAlt="6-Month Professional Fashion Designing Course - Ghhunggroo The Fashion Institute"
          imageRight={false}
          courseTitle="6-Month Professional Fashion Designing Course"
          subtitle="Turn Your Passion into a Profession with Ghhunggroo The Fashion Institute"
          feesActual="₹80,000/-"
          feesDiscounted="₹40,000/-"
          highlights={[
            'Fashion Illustration & Sketching',
            'Pattern Making & Draping',
            'Fabric Knowledge & Selection',
            'Garment Construction & Sewing Techniques',
            'Fashion Styling & Trend Analysis',
            'Portfolio Development & Presentation',
          ]}
        >
          <p>
            Have you always dreamed of creating your own designs, understanding fashion trends,
            designing garments, or building a career in the fashion industry?
          </p>
          <p>
            Ghhunggroo The Fashion Institute brings you a practical, career-focused 6-Month Fashion
            Designing Course designed to help you transform your creativity into professional fashion skills.
          </p>

          <SubHeading>Why Choose Ghhunggroo?</SubHeading>
          <ul className="space-y-1.5">
            {[
              'Practical Training', 'Expert Mentorship', 'Industry-Recognized Certificate',
              'Career Guidance', 'Placement Assistance', 'Portfolio Development',
              'Hands-on Fashion Projects',
            ].map((b) => <BulletItem key={b}>{b}</BulletItem>)}
          </ul>

          <p className="font-sans text-[12.5px] text-[#080808]/60 leading-relaxed">
            Whether you aspire to become a Fashion Designer, Stylist, Boutique Owner, Fashion
            Illustrator, Costume Designer or wish to start your own fashion venture, this course
            provides a foundation to take your creativity forward.
          </p>
        </CourseSlide>

        <SectionDivider />

        {/* ── SLIDE 3: 3-Month Illustration ── */}
        <CourseSlide
          slideNum="03"
          label="3-Month Course"
          imageSrc={courseIllustrationImg}
          imageAlt="3-Month Certificate Course in Fashion Illustration - Ghhunggroo The Fashion Institute"
          imageRight={true}
          courseTitle="3-Month Certificate Course in Fashion Illustration"
          subtitle="Turn Your Creativity into Fashion"
          feesActual="₹40,000/-"
          feesDiscounted="₹20,000/-"
        >
          <p>
            Fashion begins with an idea and Fashion Illustration is the art of bringing that idea
            to life. Our 3-month Fashion Illustration course is designed to help you develop the
            creative and technical skills required to transform your imagination into professional
            fashion illustrations.
          </p>

          <SubHeading>What You'll Learn</SubHeading>
          <ul className="space-y-2">
            {[
              { title: 'Basic Block & Fashion Figure Drawing', desc: 'Understand the fundamentals of creating fashion figures, body proportions and basic illustration techniques.' },
              { title: 'Fashion Poses', desc: 'Learn to illustrate different poses, postures and movements to make your fashion figures look stylish and dynamic.' },
              { title: 'Faces & Features', desc: 'Develop the ability to draw expressive fashion faces, hairstyles and essential facial features.' },
              { title: 'Accessories', desc: 'Learn to illustrate handbags, footwear, jewellery and other styling elements.' },
              { title: 'Fashion Clothing', desc: 'Explore how to sketch different garments, silhouettes, fabrics, details and fashion elements.' },
              { title: 'Mood Board Development', desc: 'Learn how to create inspiring mood boards that communicate your colour palette, theme, concept and design direction.' },
              { title: 'Creating a Fashion Collection', desc: 'Bring your ideas together and develop your own fashion collection from concept to final presentation.' },
            ].map((item) => (
              <li key={item.title} className="flex gap-2.5 items-start">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a96e]/70" />
                <span>
                  <span className="font-sans text-[12.5px] text-[#080808]/80 font-medium">{item.title}:</span>{' '}
                  <span className="font-sans text-[12.5px] text-[#080808]/55">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <SubHeading>What You Gain</SubHeading>
          <ul className="space-y-1.5">
            {[
              'Practical, hands-on learning', 'Expert mentorship and guidance',
              'Fashion illustration techniques', 'Creative concept development',
              'Mood board and collection development', 'Portfolio-oriented projects',
              'Industry-recognized certificate', 'Career guidance', 'Placement assistance',
            ].map((b) => <BulletItem key={b}>{b}</BulletItem>)}
          </ul>
        </CourseSlide>

        <SectionDivider />

        {/* ── SLIDE 4: Hand Embroidery & Aari ── */}
        <CourseSlide
          slideNum="04"
          label="Short Course"
          imageSrc={courseEmbroideryImg}
          imageAlt="Short Course in Hand Embroidery & Aari Work - Ghhunggroo The Fashion Institute"
          imageRight={false}
          courseTitle="Short Course in Hand Embroidery & Aari Work"
          subtitle="Turn Threads into Art with Ghhunggroo The Fashion Institute"
          feesActual="₹20,000/-"
          feesDiscounted="₹10,000/-"
        >
          <p>
            Discover the timeless art of embroidery and learn how to transform fabrics into
            beautiful, detailed and creative designer pieces.
          </p>
          <p>
            From traditional craftsmanship to contemporary embellishment techniques, this course
            combines hands-on learning, creativity and design development.
          </p>

          <SubHeading>What You'll Learn</SubHeading>
          <ul className="space-y-2">
            {[
              { title: 'Basic to Advanced Hand Embroidery', desc: 'Learn essential embroidery techniques and gradually develop the skills required to create intricate and professional designs.' },
              { title: 'Aari Work Techniques', desc: 'Explore traditional and contemporary Aari work techniques and understand how they can be applied to modern fashion and textiles.' },
              { title: 'Mirror Work & Embellishments', desc: 'Learn to create attractive surface embellishments using mirrors and decorative elements to enhance garments and accessories.' },
              { title: 'Fabric, Thread & Material Knowledge', desc: 'Understand different fabrics, threads, needles, embellishment materials and their suitability for different embroidery techniques.' },
              { title: 'Design Development & Project Work', desc: 'Develop your own embroidery concepts and translate creative ideas into practical textile projects.' },
              { title: 'Create Your Own Designer Pieces', desc: 'Apply your skills to create unique embroidery pieces that can be incorporated into garments, accessories and décor.' },
            ].map((item) => (
              <li key={item.title} className="flex gap-2.5 items-start">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a96e]/70" />
                <span>
                  <span className="font-sans text-[12.5px] text-[#080808]/80 font-medium">{item.title}:</span>{' '}
                  <span className="font-sans text-[12.5px] text-[#080808]/55">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <SubHeading>Who Can Join?</SubHeading>
          <ul className="space-y-1.5">
            {[
              'Aspiring fashion designers',
              'Fashion & textile students',
              'Boutique owners and aspiring entrepreneurs',
              'Embroidery enthusiasts',
              'Homemakers looking to develop a creative skill',
              'Artists and craft enthusiasts',
              'Anyone interested in starting a fashion or embroidery-based business',
            ].map((b) => <BulletItem key={b}>{b}</BulletItem>)}
          </ul>
        </CourseSlide>

        <SectionDivider />

        {/* ── SLIDE 5: Dyeing & Printing ── */}
        <CourseSlide
          slideNum="05"
          label="Short Course"
          imageSrc={courseDyeingImg}
          imageAlt="Short Course in Dyeing & Printing - Ghhunggroo The Fashion Institute"
          imageRight={true}
          courseTitle="Short Course in Dyeing & Printing"
          subtitle="Turn Fabrics into Art with Ghhunggroo The Fashion Institute"
          feesActual="₹20,000/-"
          feesDiscounted="₹10,000/-"
        >
          <p>
            Discover the creative world of textile surface design and learn how colour, patterns
            and traditional printing techniques can transform ordinary fabrics into unique fashion
            and lifestyle products.
          </p>
          <p>
            Whether you are an aspiring fashion designer, textile enthusiast, boutique owner,
            student, artist or someone looking to develop a creative skill, this course offers
            an opportunity to explore the fascinating world of fabric decoration.
          </p>

          <SubHeading>What You'll Learn</SubHeading>
          <ul className="space-y-2">
            {[
              { title: 'Dyeing', desc: 'Understand the fundamentals of fabric dyeing, colour application and creating attractive colour effects on textiles.' },
              { title: 'Tie & Dye', desc: 'Explore creative tie-and-dye techniques to create distinctive patterns, textures and colour combinations.' },
              { title: 'Screen Printing', desc: 'Learn the fundamentals of screen printing and how to transfer creative designs onto fabric.' },
              { title: 'Block Printing', desc: 'Discover the traditional art of block printing and learn how repeated motifs and patterns can be developed on textiles.' },
              { title: 'Fabric Painting', desc: 'Experiment with colours and painting techniques to create artistic designs directly on fabrics.' },
              { title: 'Batik Painting', desc: 'Explore the beautiful art of Batik and learn how resist techniques can be used to create distinctive textile patterns.' },
            ].map((item) => (
              <li key={item.title} className="flex gap-2.5 items-start">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#c9a96e]/70" />
                <span>
                  <span className="font-sans text-[12.5px] text-[#080808]/80 font-medium">{item.title}:</span>{' '}
                  <span className="font-sans text-[12.5px] text-[#080808]/55">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-[12.5px] text-[#080808]/60 leading-relaxed">
            Textile dyeing and printing skills can open creative opportunities across fashion
            designing, textile designing, boutique businesses, apparel, home décor, surface design
            and handmade products.
          </p>
        </CourseSlide>

        <SectionDivider />

        {/* ── SLIDE 6: Registration & Inquiry ── */}
        <SlideRegistration />

      </div>
    </section>
  );
}

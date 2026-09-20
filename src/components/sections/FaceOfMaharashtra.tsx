import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Session06Registration } from './Session06Registration';

const ease = [0.22, 1, 0.36, 1] as const;

// Session 1
import s1_1 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1786900486332.jpg (1).jpeg';
import s1_2 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1786900493989.jpg (1).jpeg';
import s1_3 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1786900499931.jpg (1).jpeg';
import s1_4 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1786900504857.jpg (1).jpeg';
import s1_5 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1786900511823.jpg (1).jpeg';
import s1_6 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1789389611515.jpg.jpeg';
import s1_7 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1789389632629.jpg.jpeg';
import s1_8 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1789389664352.jpg.jpeg';
import s1_9 from '../../../client-photos/face-of-maharashtra/session-1/FB_IMG_1789389671620.jpg.jpeg';
// Session 2
import s2_1 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389752349.jpg.jpeg';
import s2_2 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389760991.jpg.jpeg';
import s2_3 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389768514.jpg.jpeg';
import s2_4 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389787347.jpg.jpeg';
import s2_5 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389796942.jpg.jpeg';
import s2_6 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389823838.jpg.jpeg';
import s2_7 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389853014.jpg.jpeg';
import s2_8 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789389997026.jpg.jpeg';
import s2_9 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789390020776.jpg.jpeg';
import s2_10 from '../../../client-photos/face-of-maharashtra/session-2/FB_IMG_1789390025963.jpg.jpeg';
// Session 3
import s3_1 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390089370.jpg.jpeg';
import s3_2 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390098632.jpg.jpeg';
import s3_3 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390109130.jpg.jpeg';
import s3_4 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390116510.jpg.jpeg';
import s3_5 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390127008.jpg.jpeg';
import s3_6 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390139003.jpg.jpeg';
import s3_7 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390146130.jpg.jpeg';
import s3_8 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390177586.jpg.jpeg';
import s3_9 from '../../../client-photos/face-of-maharashtra/session-3/FB_IMG_1789390205738.jpg.jpeg';
// Session 4
import s4_1 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390299341.jpg.jpeg';
import s4_2 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390302888.jpg.jpeg';
import s4_3 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390306391.jpg.jpeg';
import s4_4 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390309838.jpg.jpeg';
import s4_5 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390320349.jpg.jpeg';
import s4_6 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390330167.jpg.jpeg';
import s4_7 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390338088.jpg.jpeg';
import s4_8 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390346717.jpg.jpeg';
import s4_9 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390353671.jpg.jpeg';
import s4_10 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390365399.jpg.jpeg';
import s4_11 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390371904.jpg.jpeg';
import s4_12 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390385025.jpg.jpeg';
import s4_13 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390393349.jpg.jpeg';
import s4_14 from '../../../client-photos/face-of-maharashtra/session-4/FB_IMG_1789390400683.jpg.jpeg';
// Session 5
import s5_1 from '../../../client-photos/face-of-maharashtra/session-5/IMG_20260114_190956.jpg (1).jpeg';
import s5_2 from '../../../client-photos/face-of-maharashtra/session-5/SRB_1674.JPG.jpeg';
import s5_3 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2199.JPG.jpeg';
import s5_4 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2205.JPG.jpeg';
import s5_5 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2245.JPG.jpeg';
import s5_6 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2247.JPG.jpeg';
import s5_7 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2252.JPG.jpeg';
import s5_8 from '../../../client-photos/face-of-maharashtra/session-5/SRB_2255.JPG.jpeg';

const sessions = [
  { id: 1, label: 'SESSION 01', photos: [s1_1, s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9] },
  { id: 2, label: 'SESSION 02', photos: [s2_1, s2_2, s2_3, s2_4, s2_5, s2_6, s2_7, s2_8, s2_9, s2_10] },
  { id: 3, label: 'SESSION 03', photos: [s3_1, s3_2, s3_3, s3_4, s3_5, s3_6, s3_7, s3_8, s3_9] },
  { id: 4, label: 'SESSION 04', photos: [s4_1, s4_2, s4_3, s4_4, s4_5, s4_6, s4_7, s4_8, s4_9, s4_10, s4_11, s4_12, s4_13, s4_14] },
  { id: 5, label: 'SESSION 05', photos: [s5_1, s5_2, s5_3, s5_4, s5_5, s5_6, s5_7, s5_8] },
];

const groomingItems = [
  { num: '01', label: 'Ramp Walk & Stage Presence', desc: 'Stage confidence, body language and professional ramp walk training.' },
  { num: '02', label: 'Communication & Public Speaking', desc: 'Clarity, articulation and confident expression in front of any audience.' },
  { num: '03', label: 'Personality Development', desc: 'Holistic grooming to build a well-rounded and authentic personality.' },
  { num: '04', label: 'Fitness & Wellness Guidance', desc: 'Expert guidance on maintaining a healthy, stage-ready physique.' },
  { num: '05', label: 'Self-Styling & Fashion', desc: 'Curating personal style that reflects individuality and occasion.' },
  { num: '06', label: 'Grooming & Presentation', desc: 'Complete presentation coaching for stage and professional settings.' },
  { num: '07', label: 'Camera Confidence', desc: 'Carrying yourself with ease and grace in front of the camera.' },
  { num: '08', label: 'Pageant Preparation', desc: 'End-to-end preparation covering every aspect of the pageant journey.' },
];

interface LightboxProps {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]/95"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-[#faf8f4]/70 hover:text-[#c9a96e] transition-colors text-4xl font-light z-10 w-12 h-12 flex items-center justify-center" aria-label="Close">&#215;</button>
      <span className="absolute top-6 left-6 font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/60">{index + 1} / {photos.length}</span>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-3 sm:left-6 text-[#faf8f4]/50 hover:text-[#c9a96e] transition-colors text-5xl font-thin z-10 w-12 h-12 flex items-center justify-center" aria-label="Previous">&#8249;</button>
      <motion.img key={index} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} src={photos[index]} alt={`Photo ${index + 1}`} className="max-h-[88vh] max-w-[88vw] object-contain" onClick={(e) => e.stopPropagation()} />
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-3 sm:right-6 text-[#faf8f4]/50 hover:text-[#c9a96e] transition-colors text-5xl font-thin z-10 w-12 h-12 flex items-center justify-center" aria-label="Next">&#8250;</button>
    </motion.div>
  );
}

function SessionGallery({ photos, sessionId }: { photos: string[]; sessionId: number }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = useCallback(() => setLightboxIndex(prev => prev === null ? null : (prev - 1 + photos.length) % photos.length), [photos.length]);
  const nextPhoto = useCallback(() => setLightboxIndex(prev => prev === null ? null : (prev + 1) % photos.length), [photos.length]);

  return (
    <>
      <motion.div
        key={`gallery-${sessionId}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
      >
        {photos.map((src, i) => (
          <motion.div
            key={`${sessionId}-${i}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.04, ease }}
            className="group cursor-pointer overflow-hidden bg-[#111]"
            onClick={() => setLightboxIndex(i)}
          >
            <img src={src} alt={`Session ${sessionId} photo ${i + 1}`} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox photos={photos} index={lightboxIndex} onClose={closeLightbox} onPrev={prevPhoto} onNext={nextPhoto} />
        )}
      </AnimatePresence>
    </>
  );
}

export function FaceOfMaharashtra() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSession, setActiveSession] = useState<number | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const toggleSession = (id: number) => setActiveSession(prev => prev === id ? null : id);
  const revY = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.85, delay, ease },
  });

  return (
    <>
      {/* ── Deep maroon-tinted dark background — pageant stage feel ─────── */}
      <section
        ref={ref}
        id="face-of-maharashtra"
        className="text-[#faf8f4] py-28 md:py-36 overflow-hidden relative"
        style={{ background: '#0a0406' }}
      >
        {/* Subtle warm radial tint — stage-lighting depth, barely perceptible */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(90,12,22,0.18) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 relative">

          {/* ── INTRO ────────────────────────────────────────────────────── */}
          <div className="max-w-2xl mb-24">
            {/* Pageant eyebrow — gold lines from site's section-eyebrow utility */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-8 block"
              style={{ color: '#c9a96e' }}
            >
              Pageant &middot; Est. 2020
            </motion.span>

            <motion.h2 {...revY(0.1)} className="font-serif text-[#faf8f4] text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
              Face of Maharashtra
            </motion.h2>

            <motion.p {...revY(0.18)} className="font-sans text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-10">
              Where Confidence Meets Opportunity, and Potential Becomes a Platform
            </motion.p>

            <motion.p {...revY(0.26)} className="font-sans text-[#faf8f4]/60 text-sm leading-[1.95] mb-10">
              Face of Maharashtra is a prestigious beauty and personality pageant established in 2020, created to discover, nurture and celebrate individuals across diverse age groups and backgrounds. With dedicated categories for Kids, Teens, Miss, Mr. and Mrs., the pageant provides a professional platform for aspiring models, performers and confident individuals to showcase their personality, talent, elegance and individuality.
            </motion.p>

            {/* Editorial pull-quote — gold left-border accent */}
            <motion.div
              {...revY(0.33)}
              style={{ borderLeft: '2px solid rgba(201,169,110,0.45)', paddingLeft: '1.25rem' }}
            >
              <p className="font-serif text-[#c9a96e]/85 text-base sm:text-lg leading-relaxed italic">
                More than a competition, Face of Maharashtra is a journey of transformation.
              </p>
            </motion.div>
          </div>

          {/* ── GROOMING EXPERIENCE ──────────────────────────────────────── */}
          <div className="divider-gold mb-16">
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/60 whitespace-nowrap">The Grooming Experience</span>
          </div>

          <motion.div {...revY(0.1)} className="mb-24">
            <h3 className="font-serif text-[#faf8f4] text-2xl sm:text-3xl mb-3">The Face of Maharashtra Grooming Experience</h3>
            <p className="font-sans text-[#faf8f4]/50 text-sm leading-[1.9] max-w-2xl mb-12">
              Every participant undergoes a professionally designed grooming programme, preparing them holistically for the stage and beyond.
            </p>

            {/* 2-column editorial numbered grid */}
            <div className="fom-grooming-grid">
              {groomingItems.map((item) => (
                <div key={item.num} className="fom-grooming-item group">
                  <span className="fom-grooming-num-bg" aria-hidden>{item.num}</span>
                  <div className="fom-grooming-content">
                    <span className="font-sans text-[8px] tracking-[0.36em] uppercase text-[#c9a96e]/55 block mb-2">{item.num}</span>
                    <h4 className="font-serif text-[#faf8f4] text-sm sm:text-base mb-1 group-hover:text-[#c9a96e] transition-colors duration-300">{item.label}</h4>
                    <p className="font-sans text-[#faf8f4]/40 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── BEYOND THE CROWN ─────────────────────────────────────────── */}
          <div className="divider-gold mb-16">
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/60 whitespace-nowrap">Beyond the Crown</span>
          </div>

          <motion.div {...revY(0.1)} className="mb-24">
            <h3 className="font-serif text-[#faf8f4] text-2xl sm:text-3xl mb-3">Beyond the Crown</h3>
            <div style={{ width: '2.5rem', height: '1px', background: 'rgba(201,169,110,0.55)', marginBottom: '1.75rem' }} />
            <p className="font-sans text-[#faf8f4]/60 text-sm leading-[1.95] max-w-3xl mb-10">
              Deserving participants may receive opportunities in modelling assignments, fashion shows, events, advertising and related creative industries, subject to suitable projects, industry requirements and professional selection processes. Face of Maharashtra is committed to a credible, enriching experience that builds a genuine foundation for each participant's personal and creative growth.
            </p>
            {/* 2-column opportunity cards with gold left-border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Modelling Assignments' },
                { label: 'Fashion Shows & Events' },
                { label: 'Advertising & Creative' },
                { label: 'Professional Network' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-[#150508]"
                  style={{ borderLeft: '2px solid rgba(201,169,110,0.35)' }}
                >
                  <span className="text-[#c9a96e] text-xs shrink-0">&#10022;</span>
                  <span className="font-serif text-[#faf8f4] text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── AGE / JOURNEY + OUR PROMISE ──────────────────────────────── */}
          <div className="divider-gold mb-16">
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/60 whitespace-nowrap">A Platform for Every Age</span>
          </div>

          <motion.div {...revY(0.1)} className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h3 className="font-serif text-[#faf8f4] text-2xl sm:text-3xl mb-4">
                  A Platform for Every Age, a Journey for Every Dream
                </h3>
                <p className="font-sans text-[#faf8f4]/55 text-sm leading-[1.95] mb-8">
                  Face of Maharashtra celebrates confidence, personality, talent, discipline, communication and individuality across all age groups — from children discovering their first stage to women and men reclaiming their spotlight.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kids', 'Teens', 'Miss', 'Mr.', 'Mrs.'].map((cat) => (
                    <span
                      key={cat}
                      className="font-serif text-[#faf8f4] text-sm px-5 py-2.5 transition-colors duration-300 hover:border-[#c9a96e]/60"
                      style={{ border: '1px solid rgba(201,169,110,0.25)' }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-10" style={{ border: '1px solid rgba(201,169,110,0.22)', background: 'rgba(90,12,22,0.10)' }}>
                <span className="section-eyebrow mb-8 block" style={{ color: '#c9a96e', fontSize: '8px' }}>Our Promise</span>
                <p className="font-serif text-[#faf8f4] text-lg leading-relaxed mb-2">We don&rsquo;t just look for a Face.</p>
                <p className="font-serif text-[#faf8f4] text-lg leading-relaxed mb-2">We discover the Personality behind the Face.</p>
                <p className="font-serif text-[#faf8f4] text-lg leading-relaxed mb-2">We nurture the Confidence behind the Personality.</p>
                <p className="font-serif text-[#c9a96e] text-lg leading-relaxed">And we create a Platform for the Potential.</p>
              </div>
            </div>
          </motion.div>

          {/* ── PREVIOUS SESSIONS ────────────────────────────────────────── */}
          <div className="divider-gold mb-16">
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e]/60 whitespace-nowrap">Previous Sessions</span>
          </div>

          <motion.div {...revY(0.1)}>
            <h3 className="font-serif text-[#faf8f4] text-2xl sm:text-3xl mb-3">Previous Sessions</h3>
            <p className="font-sans text-[#faf8f4]/45 text-sm mb-10">Select a session to view its gallery.</p>

            {/* Premium pageant-style session cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-2">
              {sessions.map((session) => {
                const isActive = activeSession === session.id;
                return (
                  <button
                    key={session.id}
                    onClick={() => toggleSession(session.id)}
                    className="relative overflow-hidden text-left transition-all duration-300 focus:outline-none px-5 py-6"
                    style={{
                      border: isActive ? '1px solid rgba(201,169,110,0.60)' : '1px solid rgba(201,169,110,0.18)',
                      background: isActive ? 'rgba(201,169,110,0.08)' : 'rgba(15,5,8,0.6)',
                    }}
                    onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.40)'; }}
                    onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.18)'; }}
                  >
                    {/* Decorative watermark number */}
                    <span
                      aria-hidden
                      className="absolute top-1 right-2 font-serif text-[#c9a96e] select-none pointer-events-none"
                      style={{ fontSize: '3rem', lineHeight: 1, opacity: isActive ? 0.09 : 0.05 }}
                    >
                      {session.id}
                    </span>
                    <span
                      className="font-sans text-[8px] tracking-[0.3em] uppercase block mb-2"
                      style={{ color: isActive ? 'rgba(201,169,110,0.8)' : 'rgba(250,248,244,0.35)' }}
                    >
                      {isActive ? 'Viewing' : 'Completed'}
                    </span>
                    <span className="font-serif text-[#faf8f4] text-base block">{session.label}</span>
                    <span className="block mt-2 text-[10px] font-sans tracking-wider" style={{ color: 'rgba(201,169,110,0.5)' }}>
                      {session.photos.length} photos
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0" style={{ height: '2px', background: 'rgba(201,169,110,0.7)' }} />
                    )}
                  </button>
                );
              })}

              {/* Session 06 — Upcoming (disabled) */}
              <button
                disabled
                className="relative overflow-hidden text-left px-5 py-6 opacity-55 cursor-default"
                style={{ border: '1px solid rgba(201,169,110,0.18)', background: 'rgba(15,5,8,0.6)' }}
              >
                <span aria-hidden className="absolute top-1 right-2 font-serif text-[#c9a96e] select-none pointer-events-none" style={{ fontSize: '3rem', lineHeight: 1, opacity: 0.05 }}>6</span>
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#c9a96e]/60 block mb-2">Upcoming</span>
                <span className="font-serif text-[#faf8f4] text-base block">SESSION 06</span>
                <span className="block mt-2 text-[10px] font-sans tracking-wider text-[#c9a96e]/40">Coming Soon</span>
              </button>
            </div>

            {/* Session gallery expand */}
            <AnimatePresence mode="wait">
              {activeSession !== null && (() => {
                const session = sessions.find(s => s.id === activeSession);
                if (!session) return null;
                return (
                  <motion.div
                    key={`session-gallery-${activeSession}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-4">
                      <div className="flex items-center gap-3 mb-7">
                        <span className="h-[1px] w-8 bg-[#c9a96e]/50 block" />
                        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/70">
                          {session.label} &#8212; {session.photos.length} Photos
                        </span>
                      </div>
                      <SessionGallery photos={session.photos} sessionId={session.id} />
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>

          {/* ── SESSION 06 — UPCOMING (full card) ────────────────────────── */}
          <motion.div {...revY(0.15)} className="mt-20">
            <div style={{ border: '1px solid rgba(201,169,110,0.28)' }} className="overflow-hidden">
              <div className="px-8 py-5 flex items-center justify-between gap-4" style={{ background: 'rgba(201,169,110,0.06)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[8px] tracking-[0.38em] uppercase text-[#c9a96e] px-3 py-1" style={{ border: '1px solid rgba(201,169,110,0.35)' }}>Upcoming</span>
                  <span className="font-serif text-[#faf8f4] text-base">SESSION 06</span>
                </div>
                <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-[#faf8f4]/40">Season 6</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: 'rgba(250,248,244,0.06)' }}>
                <div className="px-7 py-6" style={{ background: '#0a0406' }}>
                  <span className="font-sans text-[8px] tracking-[0.28em] uppercase text-[#c9a96e]/50 block mb-2">Auditions</span>
                  <p className="font-serif text-[#faf8f4] text-base">27 September 2026</p>
                  <p className="font-sans text-[#faf8f4]/45 text-[11px] mt-1">3 PM Sharp</p>
                </div>
                <div className="px-7 py-6" style={{ background: '#0a0406' }}>
                  <span className="font-sans text-[8px] tracking-[0.28em] uppercase text-[#c9a96e]/50 block mb-2">Venue</span>
                  <p className="font-sans text-[#faf8f4]/70 text-[12px] leading-relaxed">Ghhunggroo The Modelling Institute<br />Trimbak Road, Nashik</p>
                </div>
                <div className="px-7 py-6" style={{ background: '#0a0406' }}>
                  <span className="font-sans text-[8px] tracking-[0.28em] uppercase text-[#c9a96e]/50 block mb-2">Final Event</span>
                  <p className="font-serif text-[#faf8f4] text-base">3 January 2027</p>
                  <p className="font-sans text-[#c9a96e] text-[11px] mt-2">Audition Fee: &#8377;300/-</p>
                </div>
              </div>

              <div className="px-8 py-5 flex flex-wrap items-center gap-3" style={{ borderTop: '1px solid rgba(201,169,110,0.10)' }}>
                <span className="font-sans text-[8px] tracking-[0.28em] uppercase text-[#c9a96e]/50 mr-2">Categories</span>
                {['Kids 3\u201310', 'Teens 11\u201316', 'Miss 17\u201325', 'Mr 18\u201335', 'Mrs 20\u201370'].map(c => (
                  <span key={c} className="font-sans text-[10px] text-[#faf8f4]/60 px-3 py-1" style={{ border: '1px solid rgba(250,248,244,0.10)' }}>{c}</span>
                ))}
              </div>

              <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(201,169,110,0.10)' }}>
                <p className="font-sans text-[#faf8f4]/45 text-sm">Registration is now open for Season 6 Nashik Auditions.</p>
                <button
                  onClick={() => setShowRegistration(true)}
                  className="shrink-0 inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.28em] uppercase bg-[#c9a96e] text-[#080808] px-8 py-3.5 hover:bg-[#e8d5a3] transition-colors duration-300 focus:outline-none"
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Scoped grooming grid styles ──────────────────────────────── */}
        <style>{`
          .fom-grooming-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
          }
          .fom-grooming-item {
            position: relative;
            padding: 1.75rem 1.5rem;
            border-top: 1px solid rgba(201, 169, 110, 0.12);
            overflow: hidden;
            transition: background 0.3s;
          }
          .fom-grooming-item:hover {
            background: rgba(21, 5, 9, 0.7);
          }
          .fom-grooming-item:nth-child(even) {
            border-left: 1px solid rgba(201, 169, 110, 0.12);
          }
          .fom-grooming-num-bg {
            position: absolute;
            top: 0.5rem;
            right: 0.75rem;
            font-family: var(--font-serif, serif);
            font-size: 3.5rem;
            line-height: 1;
            color: #c9a96e;
            opacity: 0.06;
            pointer-events: none;
            user-select: none;
            transition: opacity 0.3s;
          }
          .fom-grooming-item:hover .fom-grooming-num-bg {
            opacity: 0.11;
          }
          .fom-grooming-content {
            position: relative;
            z-index: 1;
          }
          @media (max-width: 639px) {
            .fom-grooming-grid {
              grid-template-columns: 1fr;
            }
            .fom-grooming-item:nth-child(even) {
              border-left: none;
            }
          }
        `}</style>
      </section>

      {/* Registration modal */}
      <Session06Registration isOpen={showRegistration} onClose={() => setShowRegistration(false)} />
    </>
  );
}

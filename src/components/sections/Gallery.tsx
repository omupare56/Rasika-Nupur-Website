import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

// ── Gallery images served from public/gallery/ ────────────────────────────────
// Files in public/ are copied verbatim to the dist root by Vite and served at /
// in both development and Vercel production - no hashing, no path transforms.
// This replaces the deprecated `import.meta.glob(..., { as: 'url' })` approach
// which produced broken URLs on Vercel.
//
// One image needs object-fit: contain so its content isn't cropped:
//   SJT_4306.JPG.jpeg → stage/performance photo (tall subject, important content)
const CONTAIN_FILES = [
  'SJT_4306.JPG.jpeg',
];

// Filenames sorted alphabetically - same deterministic order as before.
const GALLERY_FILES = [
  'Body_Shape_Editor1758046932781.jpg (1).jpeg',
  'FB_IMG_1738668379261.jpg.jpeg',
  'FB_IMG_1779995595915.jpg (1).jpeg',
  'FB_IMG_1779995625777.jpg (1).jpeg',
  'FB_IMG_1779995639772.jpg (1).jpeg',
  'FB_IMG_1779995646515.jpg (1).jpeg',
  'IMG_20250112_224722.jpg.jpeg',
  'IMG_20250501_012200.jpg.jpeg',
  'IMG_20250902_210722.jpg.jpeg',
  'S34A0786.JPG.jpeg',
  'SJT_4306.JPG.jpeg',
  'SP141138.JPG (1).jpeg',
];

const photos: { src: string; alt: string; contain: boolean }[] = GALLERY_FILES.map(
  (filename, i) => ({
    // encodeURIComponent handles spaces, parentheses, and other special chars.
    src: `/gallery/${encodeURIComponent(filename)}`,
    alt: `Gallery image ${i + 1} – Moments of Elegance`,
    contain: CONTAIN_FILES.includes(filename),
  }),
);

// ── Lightbox component ────────────────────────────────────────────────────────
function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center w-full h-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#faf8f4]/20 flex items-center justify-center text-[#faf8f4]/70 hover:text-[#faf8f4] hover:border-[#faf8f4]/50 transition-all duration-200 bg-black/40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={photos[index].src}
            alt={photos[index].alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            draggable={false}
            className="max-h-[85vh] max-w-[88vw] object-contain rounded-sm shadow-2xl"
          />
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#faf8f4]/20 flex items-center justify-center text-[#faf8f4]/70 hover:text-[#faf8f4] hover:border-[#faf8f4]/50 transition-all duration-200 bg-black/40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full border border-[#faf8f4]/20 flex items-center justify-center text-[#faf8f4]/70 hover:text-[#faf8f4] hover:border-[#faf8f4]/50 transition-all duration-200 bg-black/40"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[0.3em] uppercase text-[#faf8f4]/40">
          {index + 1} / {photos.length}
        </div>
      </div>
    </motion.div>
  );
}

// ── Gallery section ───────────────────────────────────────────────────────────
export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [],
  );
  const nextPhoto = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  );

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <section ref={ref} id="gallery" className="bg-[#080808] py-28 md:py-36 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* == Section header - unchanged =========================== */}
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
              A curated collection of our finest moments, events, and the beautiful people who bring our designs to life.
            </motion.p>
          </div>

          {/* ── Structured 3-column grid (4 rows × 3 cols = 12 photos) ──
              Desktop: 3 columns
              Tablet (≤767px): 2 columns
              Mobile (≤480px): 1 column
              Consistent 4:3 aspect-ratio frames; object-fit: cover fills
              each frame without distorting the image.
          ─────────────────────────────────────────────────────────── */}
          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
                className="gallery-grid__item group relative overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${photo.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  draggable={false}
                  className={`gallery-grid__img transition-transform duration-700 group-hover:scale-[1.04]${
                    photo.contain ? ' gallery-grid__img--contain' : ''
                  }`}
                />
                {/* Hover darkening overlay */}
                <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/30 transition-colors duration-500 pointer-events-none" />
                {/* 'View' label on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-[#faf8f4]">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Responsive grid styles ───────────────────────────────────
            4:3 aspect-ratio per cell → consistent height across all photos.
            object-fit: cover + object-position: center top keeps faces
            visible without distorting the image frame.
        ──────────────────────────────────────────────────────────── */}
        <style>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .gallery-grid__item {
            aspect-ratio: 4 / 3;
            background: #111;
          }
          .gallery-grid__img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }
          /* Special treatment for newspaper clipping & stage photo:
             use contain so no content is cropped; dark bg fills the frame */
          .gallery-grid__item:has(.gallery-grid__img--contain) {
            background: #0d0d0d;
          }
          .gallery-grid__img--contain {
            object-fit: contain;
            object-position: center center;
          }
          /* Tablet: 2 columns */
          @media (max-width: 767px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
            }
          }
          /* Mobile: 1 column */
          @media (max-width: 480px) {
            .gallery-grid {
              grid-template-columns: 1fr;
              gap: 8px;
            }
          }
        `}</style>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}

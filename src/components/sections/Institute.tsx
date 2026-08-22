import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import instituteImg from '../../../client-photos/FB_IMG_1786900493989.jpg.jpeg';

const ease = [0.22, 1, 0.36, 1] as const;

const courses = [
  {
    name: 'Complete Designer Diploma',
    desc: 'A comprehensive programme covering the full spectrum of fashion design — from conceptualisation and sketching to garment construction and final presentation.',
    tag: 'Diploma',
  },
  {
    name: 'Stitching & Designing',
    desc: 'Master the fundamentals of garment stitching and pattern making, building a strong practical foundation for a career in fashion.',
    tag: 'Foundation',
  },
  {
    name: 'Textile Designing',
    desc: 'Explore the art of textile creation — understanding fabrics, weaves, prints, and surface design techniques.',
    tag: 'Specialisation',
  },
  {
    name: 'Hand Embroidery & Aari Work',
    desc: 'Learn the intricate crafts of hand embroidery and Aari needle work — a timeless skill in high demand across bridal and couture fashion.',
    tag: 'Craft',
  },
  {
    name: 'Dyeing & Printing Techniques',
    desc: 'Understand the science and artistry behind fabric dyeing and surface printing methods used in contemporary fashion.',
    tag: 'Techniques',
  },
  {
    name: 'Fashion Illustration',
    desc: 'Develop the ability to visualise and communicate fashion ideas through professional illustration — the language of every designer.',
    tag: 'Creative',
  },
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease }}
      className="group relative bg-[#faf8f4] border border-[#c9a96e]/12 p-8 hover:border-[#c9a96e]/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-400 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-sans text-[7.5px] tracking-[0.3em] uppercase text-[#c9a96e] border border-[#c9a96e]/35 px-2.5 py-1">
          {course.tag}
        </span>
        <span className="font-serif text-[#c9a96e]/20 text-4xl font-bold leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="w-8 h-[1px] bg-[#c9a96e]/40 mb-5 group-hover:w-14 transition-all duration-500" />
      <h3 className="font-serif text-[#080808] text-xl leading-snug mb-4 flex-1">{course.name}</h3>
      <p className="font-sans text-[#080808]/55 text-[12px] leading-relaxed">{course.desc}</p>
    </motion.div>
  );
}

export function Institute() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="institute" className="bg-[#faf8f4] py-28 md:py-36">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow mb-7 block"
              style={{ color: '#c9a96e' }}
            >
              Education
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="font-serif text-[#080808] text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
            >
              Fashion Designing<br />Institute
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="font-sans text-[#080808]/55 text-sm leading-[1.9]"
            >
              Our fashion designing institute offers structured, career-oriented courses designed to nurture creativity and technical skill — empowering the next generation of designers with knowledge, craft, and industry readiness.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease }}
            className="img-placeholder aspect-video max-w-lg lg:ml-auto"
          >
            <img
              src={instituteImg}
              alt="Fashion Designing Students"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={c.name} course={c} index={i} />
          ))}
        </div>

        {/* Enroll CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-[#c9a96e]/15 pt-10"
        >
          <p className="font-sans text-[#080808]/50 text-xs leading-relaxed max-w-xs">
            Enrolment is open. Contact us to learn about course schedules, fees and admission requirements.
          </p>
          <a href="#contact" className="shrink-0 inline-flex items-center gap-3 bg-[#080808] text-[#faf8f4] px-9 py-4 font-sans text-[9.5px] tracking-[0.28em] uppercase hover:bg-[#c9a96e] hover:text-[#080808] transition-all duration-400">
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

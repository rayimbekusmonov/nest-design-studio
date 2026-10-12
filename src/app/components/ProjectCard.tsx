import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
}

export function ProjectCard({ image, title, category, description, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer flex-shrink-0"
      style={{
        minWidth: '380px',
        maxWidth: '380px',
        border: isHovered ? '1px solid rgba(212,208,202,0.4)' : '1px solid rgba(212,208,202,0.1)',
        transition: 'border-color 0.4s ease',
      }}
    >
      {/* Image */}
      <div className="relative h-[480px] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: isHovered ? 'brightness(0.55)' : 'brightness(0.75)' }}
        />

        {/* Category tag */}
        <div
          className="absolute top-5 left-5"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            background: 'var(--paper)',
            padding: '5px 14px',
          }}
        >
          {category}
        </div>

        {/* Index number */}
        <div
          className="absolute top-5 right-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            color: 'rgba(248,245,240,0.4)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex flex-col justify-end p-7"
          style={{
            background: 'linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.4) 60%, transparent 100%)',
          }}
        >
          <motion.div
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--paper)',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--paper-muted)',
                letterSpacing: '0.02em',
              }}
            >
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ background: 'var(--ink-mid)', borderTop: '1px solid var(--accent-line)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 400,
            color: 'var(--paper-muted)',
          }}
        >
          {title}
        </span>
        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--silver)' }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
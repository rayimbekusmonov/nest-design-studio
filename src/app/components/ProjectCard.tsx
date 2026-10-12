import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ image, title, category, description, index, featured = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer w-full"
      style={{ background: 'var(--ink-mid)' }}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden"
        style={{ height: featured ? 540 : 380 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.07 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: isHovered ? 'brightness(0.45) contrast(1.05)' : 'brightness(0.72)' }}
        />

        {/* Category badge */}
        <div
          style={{
            position: 'absolute', top: 20, left: 20,
            fontFamily: 'var(--font-body)', fontSize: '0.58rem', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--ink)', background: 'var(--paper)',
            padding: '5px 13px',
          }}
        >
          {category}
        </div>

        {/* Index number */}
        <div
          style={{
            position: 'absolute', top: 20, right: 20,
            fontFamily: 'var(--font-display)', fontSize: '0.7rem',
            color: 'rgba(248,245,240,0.3)', letterSpacing: '0.1em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex flex-col justify-end"
          style={{
            padding: featured ? '2.5rem' : '1.75rem',
            background: 'linear-gradient(to top, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.55) 55%, transparent 100%)',
          }}
        >
          <motion.div
            animate={{ y: isHovered ? 0 : 18, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.04, duration: 0.4 }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: featured ? '1.9rem' : '1.35rem',
                fontWeight: 400,
                color: 'var(--paper)',
                letterSpacing: '-0.01em',
                marginBottom: 10,
                lineHeight: 1.15,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300,
                lineHeight: 1.75, color: 'var(--paper-muted)', letterSpacing: '0.02em',
              }}
            >
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: '14px 20px',
          borderTop: '1px solid var(--accent-line)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: featured ? '1.05rem' : '0.9rem',
            fontWeight: 400,
            color: 'var(--paper-muted)',
          }}
        >
          {title}
        </span>
        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--silver)', flexShrink: 0 }}
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
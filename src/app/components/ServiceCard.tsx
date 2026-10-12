import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
      style={{
        background: 'var(--ink-mid)',
        border: '1px solid var(--accent-line)',
        padding: '2.5rem 2rem',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      whileHover={{ y: -6 }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(212,208,202,0.5)';
        el.style.background = 'var(--ink-surface)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--accent-line)';
        el.style.background = 'var(--ink-mid)';
      }}
    >
      {/* Top numbered line */}
      <div
        className="flex items-center justify-between mb-8"
      >
        <div
          className="text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: 'var(--paper-dim)', fontFamily: 'var(--font-body)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        <div
          className="w-8 h-px transition-all duration-500 group-hover:w-16"
          style={{ background: 'var(--silver)' }}
        />
      </div>

      {/* Icon */}
      <div className="mb-6">
        <Icon
          size={24}
          strokeWidth={1}
          style={{ color: 'var(--silver)' }}
        />
      </div>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.35rem',
          fontWeight: 400,
          color: 'var(--paper)',
          letterSpacing: '0.01em',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 300,
          lineHeight: 1.8,
          color: 'var(--paper-dim)',
          letterSpacing: '0.02em',
        }}
      >
        {description}
      </p>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'var(--silver)' }}
      />
    </motion.div>
  );
}
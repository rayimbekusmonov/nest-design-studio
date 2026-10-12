import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-3 px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-400 overflow-hidden group';

  const variants = {
    primary: `
      bg-[var(--paper)] text-[var(--ink)]
      hover:bg-[var(--silver-bright)]
      after:absolute after:inset-0 after:bg-[var(--ink)] after:translate-y-full after:transition-transform after:duration-300
      hover:after:translate-y-0
    `,
    secondary: `
      bg-transparent text-[var(--paper)] border border-[var(--accent-line)]
      hover:border-[var(--silver)]
    `,
    outline: `
      bg-transparent text-[var(--silver)] border border-[var(--silver)]
      hover:bg-[var(--silver)] hover:text-[var(--ink)]
    `,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={
        variant === 'primary'
          ? { background: 'var(--paper)', color: 'var(--ink)' }
          : variant === 'outline'
          ? { border: '1px solid var(--silver)', color: 'var(--silver)', background: 'transparent' }
          : { border: '1px solid var(--accent-line)', color: 'var(--paper)', background: 'transparent' }
      }
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {Icon && <Icon size={14} strokeWidth={1.5} />}
      </span>
    </motion.button>
  );
}
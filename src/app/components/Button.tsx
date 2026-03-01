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

export function Button({ children, variant = 'primary', icon: Icon, onClick, type = 'button', className = '' }: ButtonProps) {
  const base = 'px-8 py-4 rounded-sm font-medium tracking-wider transition-all duration-300 flex items-center gap-3 justify-center text-sm';
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-dark hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]',
    secondary: 'bg-charcoal-light text-gold border border-gold hover:bg-gold hover:text-charcoal',
    outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-charcoal',
  };
  return (
    <motion.button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
      {Icon && <Icon size={18} />}
    </motion.button>
  );
}
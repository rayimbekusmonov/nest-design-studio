import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Bosh Sahifa', id: 'hero' },
    { label: 'Loyihalar', id: 'projects' },
    { label: 'Xizmatlar', id: 'services' },
    { label: 'Biz Haqimizda', id: 'about' },
    { label: 'Aloqa', id: 'contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5, 5, 5, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,208,202,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div
              className="text-xl tracking-[0.3em] font-semibold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--paper)' }}
            >
              NEST
              <span style={{ color: 'var(--paper-muted)', fontWeight: 300 }}> DESIGN CO</span>
            </div>
            <div
              className="text-[9px] tracking-[0.45em] uppercase mt-0.5"
              style={{ color: 'var(--paper-dim)', fontFamily: 'var(--font-body)' }}
            >
              Arxitektura & Dizayn — Toshkent
            </div>
            <motion.div
              className="h-px mt-2 bg-[var(--silver)]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex items-center gap-10"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--paper-muted)',
                }}
              >
                <span className="group-hover:text-[var(--paper)] transition-colors duration-300">
                  {item.label}
                </span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-400 group-hover:w-full"
                  style={{ background: 'var(--silver)' }}
                />
              </motion.button>
            ))}

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 text-[0.6rem] tracking-[0.25em] uppercase font-semibold transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                border: '1px solid var(--silver)',
                color: 'var(--silver)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = 'var(--paper)';
                el.style.color = 'var(--ink)';
                el.style.borderColor = 'var(--paper)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = 'transparent';
                el.style.color = 'var(--silver)';
                el.style.borderColor = 'var(--silver)';
              }}
            >
              Murojaat
            </motion.button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden transition-colors duration-300"
            style={{ color: 'var(--silver)' }}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1} /> : <Menu size={22} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-8 pt-8"
              style={{ borderTop: '1px solid var(--accent-line)' }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-4 transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--paper-muted)',
                    borderBottom: '1px solid var(--accent-line)',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--paper-muted)')}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
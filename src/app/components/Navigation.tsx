import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageDropdown } from './LanguageDropdown';

const FONT_DISP = 'var(--font-display)';
const FONT_HEAD = 'var(--font-heading)';
const FONT_BODY = 'var(--font-body)';
const PAPER     = 'var(--paper)';
const MUTED     = 'var(--paper-muted)';
const SILVER    = 'var(--silver)';
const DIM       = 'var(--paper-dim)';
const LINE      = 'var(--accent-line)';
const INK       = 'var(--ink)';
const INK_DEEP  = 'var(--ink-deep, #050505)';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.home,     id: 'hero' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about,    id: 'about' },
    { label: t.nav.contact,  id: 'contact' },
  ];

  return (
    <>
      {/* ── Sticky nav bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5,5,5,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,208,202,0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-5 md:py-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="cursor-pointer relative z-[70]"
              onClick={() => scrollToSection('hero')}
            >
              <div style={{ fontFamily: FONT_DISP, fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 600, letterSpacing: '0.3em', color: PAPER }}>
                NEST
                <span style={{ color: MUTED, fontWeight: 300 }}> DESIGN CO</span>
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: DIM, marginTop: 2 }}>
                {t.nav.subtitle}
              </div>
              <motion.div
                className="h-px mt-2"
                style={{ background: SILVER }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </motion.div>

            {/* Desktop nav + Language Dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:flex items-center gap-8 xl:gap-10"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.4 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                  style={{ fontFamily: FONT_BODY, fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED }}
                >
                  <span className="group-hover:text-[var(--paper)] transition-colors duration-300">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: SILVER }} />
                </motion.button>
              ))}

              {/* Language Dropdown in Desktop Nav */}
              <LanguageDropdown />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '10px 22px', border: `1px solid ${SILVER}`, color: SILVER, transition: 'all 0.3s ease' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = PAPER; el.style.color = INK; el.style.borderColor = PAPER; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = 'transparent'; el.style.color = SILVER; el.style.borderColor = SILVER; }}
              >
                {t.nav.inquireBtn}
              </motion.button>
            </motion.div>

            {/* Mobile / Tablet controls (Language Dropdown + Hamburger) */}
            <div className="flex lg:hidden items-center gap-3 relative z-[70]">
              {/* Language dropdown accessible directly on mobile/tablet */}
              <LanguageDropdown compact />

              {/* Hamburger toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="transition-colors duration-300 flex items-center justify-center p-2"
                style={{ color: SILVER, border: `1px solid ${LINE}`, background: 'var(--ink-mid)' }}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile menu overlay (100% SOLID BG) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: INK_DEEP }}
          >
            {/* Top spacer matching nav bar height */}
            <div style={{ height: 88, borderBottom: `1px solid ${LINE}`, flexShrink: 0 }} />

            {/* Nav links — large editorial style */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 overflow-auto py-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left w-full py-4 sm:py-5"
                  style={{
                    fontFamily: FONT_HEAD,
                    fontSize: 'clamp(1.7rem, 7vw, 2.6rem)',
                    fontWeight: 300,
                    color: PAPER,
                    borderBottom: `1px solid ${LINE}`,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = SILVER)}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = PAPER)}
                >
                  <span style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.3em', color: DIM, flexShrink: 0 }}>
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Footer bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 sm:px-12 py-6 flex items-center justify-between"
              style={{ borderTop: `1px solid ${LINE}` }}
            >
              <div>
                <p style={{ fontFamily: FONT_BODY, fontSize: '0.7rem', color: DIM, letterSpacing: '0.12em' }}>+998 90 606 19 03</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: '0.68rem', color: DIM, letterSpacing: '0.12em', marginTop: 2 }}>husravbekmehmonov@gmail.com</p>
              </div>
              <LanguageDropdown compact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
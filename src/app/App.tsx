import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Building2, Home, Trees, PenTool, Lightbulb,
  Phone, Mail, MapPin, Award, Users, Briefcase,
  Instagram, Send, X, ExternalLink
} from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { StatCounter } from './components/StatCounter';
import { useLanguage } from '../i18n/LanguageContext';
import { ProjectData } from '../i18n/translations';

/* ─── Inline style helpers ─── */
const INK       = 'var(--ink)';
const INK_MID   = 'var(--ink-mid)';
const PAPER     = 'var(--paper)';
const MUTED     = 'var(--paper-muted)';
const DIM       = 'var(--paper-dim)';
const SILVER    = 'var(--silver)';
const LINE      = 'var(--accent-line)';
const FONT_DISP = 'var(--font-display)';
const FONT_HEAD = 'var(--font-heading)';
const FONT_BODY = 'var(--font-body)';

/* ─── Section label / overline helper ─── */
function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 mb-5 ${center ? 'justify-center' : ''}`}
    >
      <div style={{ width: 32, height: 1, background: SILVER, flexShrink: 0 }} />
      <span style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: SILVER }}>
        {text}
      </span>
      {center && <div style={{ width: 32, height: 1, background: SILVER, flexShrink: 0 }} />}
    </div>
  );
}

export default function App() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'Interyer' | 'Eksteryer'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  /* Subtle ambient cursor glow */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const projects = t.portfolio.items;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const serviceIcons = [Building2, Home, PenTool, Trees, Lightbulb];

  return (
    <div style={{ minHeight: '100vh', background: INK, color: PAPER, fontFamily: FONT_BODY, position: 'relative' }}>

      {/* ── Subtle interactive cursor spotlight ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 208, 202, 0.04), transparent 60%)`,
        }}
      />

      <Navigation />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            src="https://i.pinimg.com/736x/cd/b0/8d/cdb08db904562fdf2e0cd25f51591282.jpg"
            alt="Arxitektura"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.32) contrast(1.1) grayscale(0.25)' }}
          />
          {/* Gradient veil */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.15) 45%, rgba(5,5,5,0.85) 100%)' }} />
        </div>


        {/* Hero content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.25, duration: 1 }}
              style={{ fontFamily: FONT_BODY, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: SILVER, marginBottom: '2.5rem' }}
            >
              {t.hero.overline}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              key={`hero-title-${language}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: FONT_HEAD,
                fontWeight: 300,
                fontSize: 'clamp(3.3rem, 9vw, 8rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: PAPER,
                marginBottom: '1.5rem',
              }}
            >
              {t.hero.title1}
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--silver-bright)' }}>
                {t.hero.title2}
              </span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center mx-auto mb-10"
              style={{ height: 1, background: SILVER }}
            />

            {/* Subtitle */}
            <motion.p
              key={`hero-subtitle-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ fontFamily: FONT_BODY, fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', fontWeight: 300, letterSpacing: '0.04em', color: MUTED, maxWidth: 580, margin: '0 auto 3.5rem', lineHeight: 1.9 }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 sm:gap-5 justify-center flex-wrap"
            >
              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.viewProjects}
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.contactBtn}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INFINITE RUNNING TICKER / MARQUEE
      ══════════════════════════════════════ */}
      <div
        className="overflow-hidden py-4 select-none"
        style={{
          background: 'var(--ink-deep, #050505)',
          borderTop: `1px solid ${LINE}`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div className="animate-marquee flex items-center gap-12">
          {[...t.marquee, ...t.marquee].map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 flex-shrink-0">
              <span
                style={{
                  fontFamily: FONT_DISP,
                  fontSize: '0.72rem',
                  letterSpacing: '0.3em',
                  fontWeight: 500,
                  color: idx % 2 === 0 ? PAPER : SILVER,
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </span>
              <span style={{ color: DIM, fontSize: '0.65rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          STATISTICS BAR
      ══════════════════════════════════════ */}
      <section style={{ background: INK_MID, borderBottom: `1px solid ${LINE}`, padding: '5rem 0' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            <StatCounter end={200} label={t.stats.completedProjects} suffix="+"  index={0} />
            <StatCounter end={5}   label={t.stats.yearsExp}           index={1} />
            <StatCounter end={10}  label={t.stats.architects}        suffix="+" index={2} />
            <StatCounter end={10}  label={t.stats.awards}            suffix="+" index={3} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS SECTION (EDITORIAL MASONRY GRID)
      ══════════════════════════════════════ */}
      <section id="projects" style={{ padding: '7rem 0', background: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <SectionLabel text={t.portfolio.overline} />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.02em', color: PAPER, lineHeight: 1.1 }}>
                  {t.portfolio.title}
                </h2>
                <p style={{ fontFamily: FONT_BODY, fontSize: '0.8rem', fontWeight: 300, color: MUTED, letterSpacing: '0.04em', marginTop: 10 }}>
                  {t.portfolio.subtitle}
                </p>
              </div>

              {/* Filter buttons with live item counters */}
              <div className="flex gap-2.5 flex-wrap">
                {[
                  { key: 'all',        label: t.portfolio.filterAll,      count: projects.length },
                  { key: 'Interyer',   label: t.portfolio.filterInterior, count: projects.filter(p => p.category === 'Interyer').length },
                  { key: 'Eksteryer',  label: t.portfolio.filterExterior, count: projects.filter(p => p.category === 'Eksteryer').length },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key as any)}
                    style={{
                      fontFamily: FONT_BODY,
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '9px 18px',
                      border: `1px solid ${activeFilter === f.key ? PAPER : LINE}`,
                      color: activeFilter === f.key ? INK : MUTED,
                      background: activeFilter === f.key ? PAPER : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span>{f.label}</span>
                    <span
                      style={{
                        fontFamily: FONT_DISP,
                        fontSize: '0.55rem',
                        opacity: activeFilter === f.key ? 0.7 : 0.5,
                      }}
                    >
                      ({f.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Editorial Gallery Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const isFeatured = (activeFilter === 'all' && (index === 0 || index === 5)) ||
                                 (activeFilter !== 'all' && index === 0);

              return (
                <div
                  key={`${project.title}-${index}-${language}`}
                  className={isFeatured ? 'md:col-span-2' : 'col-span-1'}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    category={project.categoryLabel}
                    description={project.description}
                    index={index}
                    featured={isFeatured}
                  />
                </div>
              );
            })}
          </div>

          {/* Under-grid bottom note & CTA */}
          <div
            className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ borderTop: `1px solid ${LINE}` }}
          >
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.72rem', fontWeight: 300, color: DIM, letterSpacing: '0.08em' }}>
              {t.portfolio.viewingCount(filteredProjects.length)}
            </p>
            <Button
              variant="outline"
              icon={ArrowRight}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.portfolio.startProjectBtn}
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section id="services" style={{ padding: '7rem 0', background: INK_MID }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <SectionLabel text={t.services.overline} center />
            <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1rem' }}>
              {t.services.title}
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, maxWidth: 500, margin: '0 auto', letterSpacing: '0.04em', lineHeight: 1.9 }}>
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px" style={{ background: LINE }}>
            {t.services.items.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                icon={serviceIcons[index] || Building2}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section id="about" style={{ padding: '7rem 0', background: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

            {/* Image block */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative frame */}
              <div style={{ position: 'absolute', top: -16, left: -16, right: 16, bottom: 16, border: `1px solid ${LINE}`, pointerEvents: 'none', zIndex: 0 }} />
              <div className="relative z-10">
                <img
                  src="https://i.pinimg.com/736x/3b/85/f4/3b85f44f9611a7a9309f2b5ed38e50be.jpg"
                  alt="NESTCO Jamoasi"
                  className="w-full object-cover"
                  style={{ height: 560, filter: 'grayscale(20%) contrast(1.05)' }}
                />
                {/* Year badge */}
                <div
                  className="absolute bottom-0 right-0 flex flex-col items-center justify-center"
                  style={{ background: INK, border: `1px solid ${LINE}`, width: 120, height: 120 }}
                >
                  <span style={{ fontFamily: FONT_DISP, fontSize: '1.8rem', fontWeight: 400, color: PAPER, lineHeight: 1 }}>2020</span>
                  <span style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: DIM, marginTop: 8 }}>
                    {t.about.sinceBadge}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel text={t.about.overline} />
              <h2
                style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1.5rem', lineHeight: 1.15 }}
              >
                {t.about.titleLine1}
                <br />
                <span style={{ fontStyle: 'italic' }}>{t.about.titleLine2}</span>
              </h2>
              <div style={{ width: 40, height: 1, background: SILVER, marginBottom: '2rem' }} />
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '1.5rem' }}>
                <strong style={{ color: PAPER, fontWeight: 500 }}>{t.about.p1Bold}</strong>{t.about.p1Rest}
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '3rem' }}>
                {t.about.p2}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-0 mb-12" style={{ borderTop: `1px solid ${LINE}`, borderLeft: `1px solid ${LINE}` }}>
                {[
                  { icon: Award,    val: '10+', label: t.about.metrics.awards },
                  { icon: Users,    val: '10+', label: t.about.metrics.experts },
                  { icon: Briefcase,val: '200+',label: t.about.metrics.projects },
                ].map(({ icon: Icon, val, label }, i) => (
                  <div
                    key={i}
                    className="text-center py-7 px-3 sm:px-4"
                    style={{ borderRight: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
                  >
                    <Icon size={20} strokeWidth={1} style={{ color: SILVER, margin: '0 auto 12px' }} />
                    <div style={{ fontFamily: FONT_DISP, fontSize: '1.6rem', fontWeight: 400, color: PAPER, lineHeight: 1, marginBottom: 8 }}>{val}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: DIM }}>{label}</div>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.about.startProjectBtn}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section id="contact" style={{ padding: '7rem 0', background: INK_MID }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <SectionLabel text={t.contact.overline} center />
            <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1rem' }}>
              {t.contact.title}
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, maxWidth: 440, margin: '0 auto', letterSpacing: '0.04em', lineHeight: 1.9 }}>
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Telegram CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <div
                  className="flex items-center justify-center mb-8"
                  style={{ width: 72, height: 72, border: `1px solid ${LINE}` }}
                >
                  <Send size={24} strokeWidth={1} style={{ color: SILVER }} />
                </div>
                <h3 style={{ fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.01em', color: PAPER, marginBottom: '1rem', lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                  {t.contact.telegramHeading}
                </h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '2rem' }}>
                  {t.contact.telegramDesc}
                </p>
                <motion.a
                  href="https://t.me/xusrave"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3"
                  style={{
                    background: PAPER,
                    color: INK,
                    padding: '16px 36px',
                    fontFamily: FONT_BODY,
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--silver-bright)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = PAPER; }}
                >
                  <Send size={14} strokeWidth={1.5} />
                  {t.contact.telegramBtn}
                </motion.a>
              </div>

              {/* Quick info bullets */}
              <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: '2rem' }} className="space-y-4">
                {t.contact.bullets.map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div style={{ width: 4, height: 4, background: i === 0 ? PAPER : SILVER, flexShrink: 0 }} />
                    <span style={{ fontFamily: FONT_BODY, fontSize: '0.78rem', fontWeight: 300, color: MUTED, letterSpacing: '0.02em' }}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {[
                { icon: Phone, title: t.contact.phoneLabel, content: <a href="tel:+998906061903" style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.9rem', fontWeight: 300, transition: 'color 0.3s' }} onMouseEnter={e => (e.currentTarget.style.color = PAPER)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>+998 90 606 19 03</a> },
                { icon: Mail,  title: t.contact.emailLabel, content: <a href="mailto:husravbekmehmonov@gmail.com" style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.3s' }} onMouseEnter={e => (e.currentTarget.style.color = PAPER)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>husravbekmehmonov@gmail.com</a> },
                { icon: MapPin, title: t.contact.addressLabel, content: <p style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>{t.contact.addressVal}</p> },
              ].map(({ icon: Icon, title, content }, i) => (
                <div
                  key={i}
                  className="flex gap-6 items-start"
                  style={{ background: INK, border: `1px solid ${LINE}`, padding: '1.75rem 2rem', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,208,202,0.35)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = LINE)}
                >
                  <Icon size={18} strokeWidth={1} style={{ color: SILVER, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: DIM, marginBottom: '0.5rem' }}>{title}</div>
                    {content}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ background: INK, border: `1px solid ${LINE}`, padding: '1.75rem 2rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,208,202,0.35)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = LINE)}
              >
                <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: DIM, marginBottom: '1.25rem' }}>
                  {t.contact.socialLabel}
                </div>
                <div className="flex gap-3">
                  {[
                    { href: 'https://instagram.com/nest.design.co', icon: Instagram, label: 'nest.design.co' },
                    { href: 'https://t.me/husrave',                 icon: Send,      label: '@husrave' },
                  ].map(({ href, icon: SIcon, label }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-2.5 transition-all duration-300"
                      style={{ border: `1px solid ${LINE}`, padding: '8px 16px', color: MUTED, fontFamily: FONT_BODY, fontSize: '0.7rem', letterSpacing: '0.08em', textDecoration: 'none' }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = SILVER; el.style.color = PAPER; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = LINE; el.style.color = MUTED; }}
                    >
                      <SIcon size={14} strokeWidth={1.5} />
                      <span>{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div style={{ border: `1px solid ${LINE}`, height: 200, overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3!2d69.3588!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzM5LjkiTiA2OcKwMjEnMzEuNyJF!5e0!3m2!1suz!2suz!4v1234567890!5m2!1suz!2suz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.6) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Nest Design Co manzili"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer style={{ background: INK_MID, borderTop: `1px solid ${LINE}`, padding: '5rem 0 2rem' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <div className="grid md:grid-cols-3 gap-14 md:gap-16 mb-16">
            {/* Brand */}
            <div>
              <div
                className="mb-1"
                style={{ fontFamily: FONT_DISP, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.25em', color: PAPER }}
              >
                NEST DESIGN CO
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: '1.5rem' }}>
                {t.footer.brandSubtitle}
              </div>
              <div style={{ width: 32, height: 1, background: LINE, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.8rem', fontWeight: 300, color: MUTED, lineHeight: 1.8, letterSpacing: '0.02em' }}>
                {t.footer.brandDesc}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: '1.5rem' }}>
                {t.footer.quickLinks}
              </div>
              <ul className="space-y-3">
                {[
                  { label: t.nav.home,     id: 'hero' },
                  { label: t.nav.projects, id: 'projects' },
                  { label: t.nav.services, id: 'services' },
                  { label: t.nav.about,    id: 'about' },
                  { label: t.nav.contact,  id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="transition-colors duration-300"
                      style={{ fontFamily: FONT_BODY, fontSize: '0.8rem', fontWeight: 300, color: MUTED, letterSpacing: '0.04em' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = PAPER)}
                      onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = MUTED)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: '1.5rem' }}>
                {t.footer.contactTitle}
              </div>
              <div className="space-y-3">
                {[
                  { icon: Phone,  text: '+998 90 606 19 03' },
                  { icon: Mail,   text: 'husravbekmehmonov@gmail.com' },
                  { icon: MapPin, text: t.contact.addressVal.replace('\n', ', ').replace('\n', ', ') },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon size={14} strokeWidth={1} style={{ color: SILVER, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontFamily: FONT_BODY, fontSize: '0.8rem', fontWeight: 300, color: MUTED, letterSpacing: '0.02em' }}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                {[
                  { href: 'https://instagram.com/nest.design.co', icon: Instagram },
                  { href: 'https://t.me/xusrave',                 icon: Send },
                ].map(({ href, icon: SIcon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all duration-300"
                    style={{ width: 36, height: 36, border: `1px solid ${LINE}`, color: MUTED }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = SILVER; el.style.color = PAPER; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = LINE; el.style.color = MUTED; }}
                  >
                    <SIcon size={14} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: `1px solid ${LINE}` }}
          >
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.7rem', fontWeight: 300, color: DIM, letterSpacing: '0.08em' }}>
              {t.footer.copyright}
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.7rem', fontWeight: 300, color: DIM, letterSpacing: '0.08em' }}>
              {t.footer.cityCountry}
            </p>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          PROJECT LIGHTBOX MODAL (LOCALIZED)
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            style={{ background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden"
              style={{ background: INK_MID, border: `1px solid ${SILVER}` }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center transition-colors"
                style={{ width: 40, height: 40, background: 'rgba(5,5,5,0.8)', border: `1px solid ${LINE}`, color: PAPER }}
              >
                <X size={20} strokeWidth={1.2} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Modal image */}
                <div className="relative h-72 md:h-[500px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    style={{
                      position: 'absolute', top: 16, left: 16,
                      fontFamily: FONT_BODY, fontSize: '0.58rem', fontWeight: 600,
                      letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: INK, background: PAPER,
                      padding: '5px 12px',
                    }}
                  >
                    {selectedProject.categoryLabel}
                  </div>
                </div>

                {/* Modal info */}
                <div className="p-8 md:p-10 flex flex-col justify-between" style={{ background: INK }}>
                  <div>
                    <div style={{ fontFamily: FONT_DISP, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: 8 }}>
                      {t.portfolio.modal.tagline}
                    </div>
                    <h3
                      style={{
                        fontFamily: FONT_HEAD,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        fontWeight: 400,
                        color: PAPER,
                        lineHeight: 1.15,
                        marginBottom: 16,
                      }}
                    >
                      {selectedProject.title}
                    </h3>
                    <div style={{ width: 36, height: 1, background: SILVER, marginBottom: 20 }} />
                    <p
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: '0.85rem',
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: MUTED,
                        marginBottom: 24,
                      }}
                    >
                      {selectedProject.description}
                    </p>

                    {/* Metadata specs */}
                    <div className="space-y-2.5 py-4 mb-6" style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: DIM, fontFamily: FONT_BODY, letterSpacing: '0.1em' }}>{t.portfolio.modal.locationLabel}</span>
                        <span style={{ color: PAPER, fontFamily: FONT_BODY }}>{t.portfolio.modal.locationVal}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: DIM, fontFamily: FONT_BODY, letterSpacing: '0.1em' }}>{t.portfolio.modal.disciplineLabel}</span>
                        <span style={{ color: PAPER, fontFamily: FONT_BODY }}>{selectedProject.categoryLabel}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: DIM, fontFamily: FONT_BODY, letterSpacing: '0.1em' }}>{t.portfolio.modal.statusLabel}</span>
                        <span style={{ color: SILVER, fontFamily: FONT_BODY }}>{t.portfolio.modal.statusVal}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://t.me/xusrave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full"
                    style={{
                      background: PAPER,
                      color: INK,
                      padding: '14px 24px',
                      fontFamily: FONT_BODY,
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{t.portfolio.modal.consultBtn}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
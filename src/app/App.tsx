import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Building2, Home, Trees, PenTool, Lightbulb,
  Phone, Mail, MapPin, Award, Users, Briefcase,
  ChevronLeft, ChevronRight, Instagram, Send
} from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { StatCounter } from './components/StatCounter';

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
  const [activeFilter, setActiveFilter] = useState<'all' | 'Interyer' | 'Eksteryer'>('all');

  const projects = [
    { image: '/projects/exterior-5.jpg',  title: 'Klassik villa',          category: 'Eksteryer', description: 'Favvora va landshaft bog\' bilan bezatilgan ikki qavatli klassik uslubdagi hashamatli villa.' },
    { image: '/projects/interior-1.jpg',  title: 'Yotoqxona — Yashil Lustra', category: 'Interyer',  description: 'Yashil kristall lusrto va oltin aksentlar bilan bezatilgan premium yotoqxona interyeri.' },
    { image: '/projects/exterior-3.png',  title: 'Neoklassik kottej',      category: 'Eksteryer', description: 'Korinfiya ustunlari va temir panjara balkoni bilan bezatilgan kechki yorug\'likdagi villa fasadi.' },
    { image: '/projects/interior-3.jpg',  title: 'Zamonaviy yotoqxona',    category: 'Interyer',  description: 'Marmar lustro va yog\'och panel dekorli zamonaviy minimalist yotoqxona dizayni.' },
    { image: '/projects/exterior-2.png',  title: 'Hashamatli uy fasadi',   category: 'Eksteryer', description: 'Kechki yoritish va neoklassik arxitektura elementlari bilan bezatilgan turar-joy binosi.' },
    { image: '/projects/interior-2.jpg',  title: 'Yotoqxona — TV zona',    category: 'Interyer',  description: 'Klassik gips bezaklar va zamonaviy mebel uyg\'unligidagi hashamatli yotoqxona TV burchagi.' },
    { image: '/projects/exterior-4.png',  title: 'Villa — Aerial Ko\'rinish', category: 'Eksteryer', description: 'Yuqoridan ko\'rinish: qora shifer tom va oq fasadli neoklassik uslubdagi kottej.' },
    { image: '/projects/interior-4.jpg',  title: 'Kiyinish xonasi',        category: 'Interyer',  description: 'Shisha kupe shkaf va chiziqli yoritish bilan yaratilgan zamonaviy walk-in closet dizayni.' },
    { image: '/projects/exterior-1.jpg',  title: 'Klassik villa fasadi',   category: 'Eksteryer', description: 'Arkali kirish va balkon panjuralari bilan bezatilgan oq rangli neoklassik villa.' },
    { image: '/projects/interior-5.jpg',  title: 'Mehmonxona burchagi',    category: 'Interyer',  description: 'Oltin aksent panel va gul bezagi bilan yaratilgan qulay o\'tirish burchagi dizayni.' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const services = [
    { icon: Building2, title: 'Arxitektura loyihalash', description: 'Kontseptsiyadan tugatishgacha bo\'lgan har tomonlama arxitektura yechimlari — aniqlik va ijodkorlik bilan ishlab chiqiladi.' },
    { icon: Home,      title: 'Interyer dizayn',        description: 'Nafislik, funksionallik va sizning o\'ziga xos tasavvuringizni aks ettiruvchi hashamatli ichki makonlar.' },
    { icon: PenTool,   title: 'Eksteryer dizayn',       description: 'Kuchli taassurot qoldiradigan va vaqt sinovidan o\'tadigan ajoyib tashqi fasad dizayni.' },
    { icon: Trees,     title: 'Landshaft dizayn',       description: 'Tabiatni zamonaviy qurilgan muhit bilan uyg\'unlashtiruvchi uyg\'un landshaft arxitekturasi.' },
    { icon: Lightbulb, title: 'Konsept loyihalar',      description: 'G\'oyadan haqiqatga — innovatsion konsept loyihalar orqali kelajak me\'morchiligini bugun yaratamiz.' },
  ];

  const scrollProjects = (direction: 'left' | 'right') => {
    const container = document.getElementById('projects-container');
    if (container) container.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: INK, color: PAPER, fontFamily: FONT_BODY }}>
      <Navigation />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/cd/b0/8d/cdb08db904562fdf2e0cd25f51591282.jpg"
            alt="Arxitektura"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) contrast(1.1) grayscale(0.3)' }}
          />
          {/* Gradient veil */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.1) 40%, rgba(5,5,5,0.7) 100%)' }} />
        </div>

        {/* Vertical text — left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
        >
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, var(--silver))' }} />
          <span
            className="rotate-90 whitespace-nowrap"
            style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--paper-dim)' }}
          >
            Toshkent — O'zbekiston
          </span>
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to top, transparent, var(--silver))' }} />
        </motion.div>

        {/* Scroll indicator — right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--silver), transparent)' }}
          />
          <span
            className="-rotate-90 whitespace-nowrap"
            style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--paper-dim)' }}
          >
            Scroll
          </span>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: SILVER, marginBottom: '2.5rem' }}
            >
              Nest Design Co — Premium Arxitektura & Dizayn
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: FONT_HEAD,
                fontWeight: 300,
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: PAPER,
                marginBottom: '1.5rem',
              }}
            >
              Arxitektura
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--silver-bright)' }}>
                Yangi Darajada
              </span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ height: 1, background: SILVER, margin: '0 auto 2.5rem' }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ fontFamily: FONT_BODY, fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', fontWeight: 300, letterSpacing: '0.06em', color: MUTED, maxWidth: 560, margin: '0 auto 3.5rem', lineHeight: 1.9 }}
            >
              Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratamiz
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-5 justify-center flex-wrap"
            >
              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Loyihalarni ko'rish
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bog'lanish
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATISTICS BAR
      ══════════════════════════════════════ */}
      <section style={{ background: INK_MID, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, padding: '5rem 0' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            <StatCounter end={200} label="Bajarilgan Loyiha" suffix="+"  index={0} />
            <StatCounter end={5}   label="Yillik Tajriba"              index={1} />
            <StatCounter end={10}  label="Mutaxassis Arxitektor" suffix="+" index={2} />
            <StatCounter end={10}  label="Mukofot va Sertifikat"  suffix="+" index={3} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS SECTION
      ══════════════════════════════════════ */}
      <section id="projects" style={{ padding: '7rem 0', background: INK }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <SectionLabel text="Portfolio" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: PAPER }}>
                Tanlangan loyihalar
              </h2>
              {/* Filter buttons */}
              <div className="flex gap-3">
                {(['all', 'Interyer', 'Eksteryer'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    style={{
                      fontFamily: FONT_BODY,
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '8px 18px',
                      border: `1px solid ${activeFilter === f ? PAPER : LINE}`,
                      color: activeFilter === f ? INK : MUTED,
                      background: activeFilter === f ? PAPER : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {f === 'all' ? 'Barchasi' : f}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards scrollable row */}
          <div className="relative">
            <div
              id="projects-container"
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-3 mt-8 justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollProjects('left')}
                className="flex items-center justify-center transition-all duration-300"
                style={{ width: 48, height: 48, border: `1px solid ${LINE}`, color: MUTED }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = SILVER; el.style.color = PAPER; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = LINE; el.style.color = MUTED; }}
              >
                <ChevronLeft size={18} strokeWidth={1} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollProjects('right')}
                className="flex items-center justify-center transition-all duration-300"
                style={{ width: 48, height: 48, border: `1px solid ${LINE}`, color: MUTED }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = SILVER; el.style.color = PAPER; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = LINE; el.style.color = MUTED; }}
              >
                <ChevronRight size={18} strokeWidth={1} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section id="services" style={{ padding: '7rem 0', background: INK_MID }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <SectionLabel text="Xizmatlar" center />
            <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1rem' }}>
              Bizning xizmatlar
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, maxWidth: 480, margin: '0 auto', letterSpacing: '0.04em', lineHeight: 1.9 }}>
              Sizning tasavvuringizga moslashtirilgan kompleks me'moriy yechimlar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px" style={{ background: LINE }}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section id="about" style={{ padding: '7rem 0', background: INK }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Image block */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative frame */}
              <div style={{ position: 'absolute', top: -20, left: -20, right: 20, bottom: 20, border: `1px solid ${LINE}`, pointerEvents: 'none', zIndex: 0 }} />
              <div className="relative z-10">
                <img
                  src="https://i.pinimg.com/736x/3b/85/f4/3b85f44f9611a7a9309f2b5ed38e50be.jpg"
                  alt="NESTCO Jamoasi"
                  className="w-full object-cover"
                  style={{ height: 580, filter: 'grayscale(20%) contrast(1.05)' }}
                />
                {/* Year badge */}
                <div
                  className="absolute bottom-0 right-0 flex flex-col items-center justify-center"
                  style={{ background: INK, border: `1px solid ${LINE}`, width: 120, height: 120 }}
                >
                  <span style={{ fontFamily: FONT_DISP, fontSize: '1.8rem', fontWeight: 400, color: PAPER, lineHeight: 1 }}>2020</span>
                  <span style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: DIM, marginTop: 8 }}>dan beri</span>
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
              <SectionLabel text="Biz haqimizda" />
              <h2
                style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1.5rem', lineHeight: 1.15 }}
              >
                2020-yildan buyon
                <br />
                <span style={{ fontStyle: 'italic' }}>orzu quramiz</span>
              </h2>
              <div style={{ width: 40, height: 1, background: SILVER, marginBottom: '2rem' }} />
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '1.5rem' }}>
                <strong style={{ color: PAPER, fontWeight: 500 }}>Nest Design Co</strong> — 10 yillik tajribaga ega malakali mutaxassislar jamoasi bo'lib, bizning missiyamiz zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratishdir.
              </p>
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '3rem' }}>
                Biz nafaqat binolar loyihalashtiramiz, balki ilg'or yondashuvlarimiz bilan yashash san'atini yangi darajaga olib chiqamiz.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-0 mb-12" style={{ borderTop: `1px solid ${LINE}`, borderLeft: `1px solid ${LINE}` }}>
                {[
                  { icon: Award,    val: '10+', label: 'Mukofotlar' },
                  { icon: Users,    val: '10+', label: 'Mutaxassislar' },
                  { icon: Briefcase,val: '200+',label: 'Loyihalar' },
                ].map(({ icon: Icon, val, label }, i) => (
                  <div
                    key={i}
                    className="text-center py-8 px-4"
                    style={{ borderRight: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
                  >
                    <Icon size={20} strokeWidth={1} style={{ color: SILVER, margin: '0 auto 12px' }} />
                    <div style={{ fontFamily: FONT_DISP, fontSize: '1.6rem', fontWeight: 400, color: PAPER, lineHeight: 1, marginBottom: 8 }}>{val}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: DIM }}>{label}</div>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Loyiha boshlash
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section id="contact" style={{ padding: '7rem 0', background: INK_MID }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <SectionLabel text="Aloqa" center />
            <h2 style={{ fontFamily: FONT_HEAD, fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: PAPER, marginBottom: '1rem' }}>
              Biz bilan bog'laning
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, maxWidth: 400, margin: '0 auto', letterSpacing: '0.04em', lineHeight: 1.9 }}>
              Keyingi me'moriy asaringizni birga yarataylik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
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
                <h3 style={{ fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.01em', color: PAPER, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Telegram orqali<br />bog'laning
                </h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, color: MUTED, lineHeight: 1.9, letterSpacing: '0.03em', marginBottom: '2rem' }}>
                  Loyihangiz haqida gaplashishga tayyormiz. Telegramda yozing — tez javob beramiz va bepul konsultatsiya o'tkazamiz.
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
                  Telegramda yozish
                </motion.a>
              </div>

              {/* Quick info */}
              <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: '2rem' }} className="space-y-4">
                {[
                  'Odatda 1 soat ichida javob beramiz',
                  'Birinchi konsultatsiya — bepul',
                  'Har qanday hajmdagi loyihalar',
                ].map((text, i) => (
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
                { icon: Phone, title: 'Telefon', content: <a href="tel:+998906061903" style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.9rem', fontWeight: 300, transition: 'color 0.3s' }} onMouseEnter={e => (e.currentTarget.style.color = PAPER)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>+998 90 606 19 03</a> },
                { icon: Mail,  title: 'Email',   content: <a href="mailto:husravbekmehmonov@gmail.com" style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.3s' }} onMouseEnter={e => (e.currentTarget.style.color = PAPER)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>husravbekmehmonov@gmail.com</a> },
                { icon: MapPin, title: 'Manzil', content: <p style={{ color: MUTED, fontFamily: FONT_BODY, fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>Maxtumquli ko'chasi, 114A,<br />Yashnobod tumani,<br />Toshkent, 100047</p> },
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
                <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: DIM, marginBottom: '1.25rem' }}>Ijtimoiy tarmoqlar</div>
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
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand */}
            <div>
              <div
                className="mb-1"
                style={{ fontFamily: FONT_DISP, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.25em', color: PAPER }}
              >
                NEST DESIGN CO
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: '1.5rem' }}>
                Arxitektura & Dizayn
              </div>
              <div style={{ width: 32, height: 1, background: LINE, marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: FONT_BODY, fontSize: '0.8rem', fontWeight: 300, color: MUTED, lineHeight: 1.8, letterSpacing: '0.02em' }}>
                Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay makonlar yaratamiz.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <div style={{ fontFamily: FONT_BODY, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: DIM, marginBottom: '1.5rem' }}>
                Tezkor havolalar
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Bosh sahifa', id: 'hero' },
                  { label: 'Loyihalar',   id: 'projects' },
                  { label: 'Xizmatlar',   id: 'services' },
                  { label: 'Biz haqimizda', id: 'about' },
                  { label: 'Aloqa',       id: 'contact' },
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
                Aloqa
              </div>
              <div className="space-y-3">
                {[
                  { icon: Phone,  text: '+998 90 606 19 03' },
                  { icon: Mail,   text: 'husravbekmehmonov@gmail.com' },
                  { icon: MapPin, text: "Maxtumquli ko'chasi 114A, Toshkent" },
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
              © 2026 Nest Design Co. Barcha huquqlar himoyalangan.
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: '0.7rem', fontWeight: 300, color: DIM, letterSpacing: '0.08em' }}>
              Toshkent, O'zbekiston
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        #projects-container::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
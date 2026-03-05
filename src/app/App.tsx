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

export default function App() {
  const projects = [
    {
      image: '/projects/exterior-5.jpg',
      title: 'Klassik Villa',
      category: 'Eksteryer',
      description: 'Favvora va landshaft bog\' bilan bezatilgan ikki qavatli klassik uslubdagi hashamatli villa.'
    },
    {
      image: '/projects/interior-1.jpg',
      title: 'Yotoqxona — Yashil Lustro',
      category: 'Interyer',
      description: 'Yashil kristall lusrto va oltin aksentlar bilan bezatilgan premium yotoqxona interyeri.'
    },
    {
      image: '/projects/exterior-3.png',
      title: 'Neoklassik Kottej',
      category: 'Eksteryer',
      description: 'Korinfiya ustunlari va temir panjara balkoni bilan bezatilgan kechki yorug\'likdagi villa fasadi.'
    },
    {
      image: '/projects/interior-3.jpg',
      title: 'Zamonaviy Yotoqxona',
      category: 'Interyer',
      description: 'Marmar lustro va yog\'och panel dekorli zamonaviy minimalist yotoqxona dizayni.'
    },
    {
      image: '/projects/exterior-2.png',
      title: 'Hashamatli Uy Fasadi',
      category: 'Eksteryer',
      description: 'Kechki yoritish va neoklassik arxitektura elementlari bilan bezatilgan turar-joy binosi.'
    },
    {
      image: '/projects/interior-2.jpg',
      title: 'Yotoqxona — TV Zona',
      category: 'Interyer',
      description: 'Klassik gips bezaklar va zamonaviy mebel uyg\'unligidagi hashamatli yotoqxona TV burchagi.'
    },
    {
      image: '/projects/exterior-4.png',
      title: 'Villa — Aerial Ko\'rinish',
      category: 'Eksteryer',
      description: 'Yuqoridan ko\'rinish: qora shifer tom va oq fasadli neoklassik uslubdagi kottej.'
    },
    {
      image: '/projects/interior-4.jpg',
      title: 'Kiyinish Xonasi',
      category: 'Interyer',
      description: 'Shisha kupe shkaf va chiziqli yoritish bilan yaratilgan zamonaviy walk-in closet dizayni.'
    },
    {
      image: '/projects/exterior-1.jpg',
      title: 'Klassik Villa Fasadi',
      category: 'Eksteryer',
      description: 'Arkali kirish va balkon panjuralari bilan bezatilgan oq rangli neoklassik villa.'
    },
    {
      image: '/projects/interior-5.jpg',
      title: 'Mehmonxona Burchagi',
      category: 'Interyer',
      description: 'Oltin aksent panel va gul bezagi bilan yaratilgan qulay o\'tirish burchagi dizayni.'
    },
  ];

  const services = [
    {
      icon: Building2,
      title: 'Arxitektura Loyihalash',
      description: 'Kontseptsiyadan tugatishgacha bo\'lgan har tomonlama arxitektura yechimlari — aniqlik va ijodkorlik bilan ishlab chiqiladi.'
    },
    {
      icon: Home,
      title: 'Interyer Dizayn',
      description: 'Nafislik, funksionallik va sizning o\'ziga xos tasavvuringizni aks ettiruvchi hashamatli ichki makonlar.'
    },
    {
      icon: PenTool,
      title: 'Eksteryer Dizayn',
      description: 'Kuchli taassurot qoldiradigan va vaqt sinovidan o\'tadigan ajoyib tashqi fasad dizayni.'
    },
    {
      icon: Trees,
      title: 'Landshaft Dizayn',
      description: 'Tabiatni zamonaviy qurilgan muhit bilan uyg\'unlashtiruvchi uyg\'un landshaft arxitekturasi.'
    },
    {
      icon: Lightbulb,
      title: 'Konsept Loyihalar',
      description: 'G\'oyadan haqiqatga — innovatsion konsept loyihalar orqali kelajak me\'morchiligini bugun yaratamiz.'
    },
  ];

  const scrollProjects = (direction: 'left' | 'right') => {
    const container = document.getElementById('projects-container');
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -450 : 450, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-off-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1755963969542-532056290459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjByZW5kZXIlMjBuaWdodHxlbnwxfHx8fDE3NzIzMTI3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Arxitektura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
            >
              Nest Design Co — Toshkent, O'zbekiston
            </motion.p>
            <h1 className="text-6xl md:text-8xl mb-6 text-off-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Me'morchilik
              <br />
              <span className="relative inline-block">
                Yangi Darajada
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gold"
                />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto"
            >
              Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratamiz
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Loyihalarni Ko'rish
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Bog'lanish
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-charcoal-light border-y border-gold/20 py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <StatCounter end={200} label="Bajarilgan Loyiha" suffix="+" index={0} />
            <StatCounter end={5} label="Yillik Tajriba" index={1} />
            <StatCounter end={10} label="Mutaxassis Arxitektor" suffix="+" index={2} />
            <StatCounter end={10} label="Mukofot va Sertifikat" suffix="+" index={3} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-charcoal">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Tanlangan Loyihalar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Amalga oshirilgan eng yaxshi me'moriy asarlarimiz bilan tanishing
            </p>
          </motion.div>

          <div className="relative">
            <div
              id="projects-container"
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
            <div className="flex gap-4 mt-8 justify-center">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollProjects('left')}
                className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center">
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scrollProjects('right')}
                className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center">
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-charcoal-light">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">Xizmatlar</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Bizning Xizmatlar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sizning tasavvuringizga moslashtirilgan kompleks me'moriy yechimlar
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-charcoal">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-gold/30 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1758599543112-311aa231f542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjB0ZWFtJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzIyMTM2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="NESTCO Jamoasi"
                className="relative rounded-lg w-full h-[600px] object-cover"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-gold" />
                <span className="text-gold text-sm tracking-widest uppercase">Biz Haqimizda</span>
              </div>
              <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                2020 Yildan Buyon Orzu Quramiz
              </h2>
              <div className="w-24 h-1 bg-gold mb-8" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-gold">Nest Design Co</strong> — 10 yillik tajribaga ega malakali mutaxassislar jamoasi bo'lib, bizning missiyamiz zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratishdir.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Biz nafaqat binolar loyihalashtiramiz, balki ilg'or yondashuvlarimiz bilan yashash san'atini yangi darajaga olib chiqamiz. Har bir loyihada mijozning orzusi va zamonaviy me'morchilik tamoyillarini muvozanatda saqlaymiz.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Award className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>10+</div>
                  <div className="text-sm text-muted-foreground">Mukofotlar</div>
                </div>
                <div className="text-center">
                  <Users className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>10+</div>
                  <div className="text-sm text-muted-foreground">Mutaxassislar</div>
                </div>
                <div className="text-center">
                  <Briefcase className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>200+</div>
                  <div className="text-sm text-muted-foreground">Loyihalar</div>
                </div>
              </div>

              <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Loyiha Boshlash
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-charcoal-light">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">Aloqa</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Biz Bilan Bog'laning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keyingi me'moriy asaringizni birga yarataylik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Telegram CTA */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Send size={36} className="text-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl text-off-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Telegram orqali<br />bog'laning
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Loyihangiz haqida gaplashishga tayyormiz. Telegramda yozing — tez javob beramiz va bepul konsultatsiya o'tkazamiz.
                </p>
                <motion.a
                  href="https://t.me/xusrave"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(201,168,76,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-gold text-charcoal px-10 py-5 text-base font-semibold tracking-wider transition-all duration-300 hover:bg-gold-dark"
                >
                  <Send size={20} />
                  Telegramda Yozish
                </motion.a>
              </div>

              {/* Quick info */}
              <div className="border-t border-gold/20 pt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-sm">Odatda 1 soat ichida javob beramiz</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold/60" />
                  <span className="text-sm">Birinchi konsultatsiya — bepul</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold/60" />
                  <span className="text-sm">Har qanday hajmdagi loyihalar</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-charcoal p-8 rounded-lg border border-gold/20">
                <Phone className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>Telefon</h3>
                <a href="tel:+998906061903" className="text-muted-foreground hover:text-gold transition-colors text-lg">
                  +998 90 606 19 03
                </a>
              </div>

              <div className="bg-charcoal p-8 rounded-lg border border-gold/20">
                <Mail className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>Email</h3>
                <a href="mailto:xusravbekmehmonov@gmail.com" className="text-muted-foreground hover:text-gold transition-colors text-lg">
                  xusravbekmehmonov@gmail.com
                </a>
              </div>

              <div className="bg-charcoal p-8 rounded-lg border border-gold/20">
                <MapPin className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>Manzil</h3>
                <p className="text-muted-foreground text-lg">
                  Maxtumquli ko'chasi, 114A,<br />
                  Yashnobod tumani,<br />
                  Toshkent, 100047
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-charcoal p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl mb-4 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>Ijtimoiy Tarmoqlar</h3>
                <div className="flex gap-4">
                  <motion.a href="https://instagram.com/nest.design.co" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-3 px-5 py-3 border border-gold/30 rounded-full text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300">
                    <Instagram size={20} />
                    <span className="text-sm">nest.design.co</span>
                  </motion.a>
                  <motion.a href="https://t.me/xusrave" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-3 px-5 py-3 border border-gold/30 rounded-full text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300">
                    <Send size={20} />
                    <span className="text-sm">@xusrave</span>
                  </motion.a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border border-gold/20 h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3!2d69.3588!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzM5LjkiTiA2OcKwMjEnMzEuNyJF!5e0!3m2!1suz!2suz!4v1234567890!5m2!1suz!2suz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Nest Design Co manzili"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-gold/20 py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="text-3xl font-bold mb-4 text-gold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                NEST DESIGN CO
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay makonlar yaratamiz.
              </p>
            </div>

            <div>
              <h4 className="text-off-white mb-4 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>Tezkor Havolalar</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Bosh Sahifa', id: 'hero' },
                  { label: 'Loyihalar', id: 'projects' },
                  { label: 'Xizmatlar', id: 'services' },
                  { label: 'Biz Haqimizda', id: 'about' },
                  { label: 'Aloqa', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-gold transition-colors">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-off-white mb-4 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>Aloqa</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +998 90 606 19 03</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-gold" /> xusravbekmehmonov@gmail.com</p>
                <p className="flex items-start gap-2"><MapPin size={16} className="text-gold mt-1 shrink-0" /> Maxtumquli ko'chasi 114A, Toshkent</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://instagram.com/nest.design.co" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="https://t.me/xusrave" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors">
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Nest Design Co. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
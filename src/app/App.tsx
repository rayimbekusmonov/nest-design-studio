import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Home, Trees, PenTool, Phone, Mail, MapPin, Award, Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { StatCounter } from './components/StatCounter';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjMxMjcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Skyline Residence',
      category: 'Exterior',
      description: 'Modern luxury residential complex featuring contemporary design elements and sustainable architecture.'
    },
    {
      image: 'https://images.unsplash.com/photo-1760888625668-8f9690b6759f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMHZpbGxhfGVufDF8fHx8MTc3MjMxMjcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vista Villa',
      category: 'Exterior',
      description: 'Contemporary villa design blending minimalist aesthetics with functional living spaces.'
    },
    {
      image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcyMjI4Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Living',
      category: 'Interior',
      description: 'Sophisticated interior design combining luxury materials with timeless elegance.'
    },
    {
      image: 'https://images.unsplash.com/photo-1758435260100-0c7be32a97bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbGFuZHNjYXBlJTIwbW9kZXJuJTIwZ2FyZGVufGVufDF8fHx8MTc3MjMxMjcwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Garden Oasis',
      category: 'Landscape',
      description: 'Thoughtfully designed landscape architecture creating serene outdoor environments.'
    },
    {
      image: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBnbGFzc3xlbnwxfHx8fDE3NzIyMjc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Corporate Tower',
      category: 'Exterior',
      description: 'Iconic commercial building showcasing innovative structural design and glass facades.'
    },
    {
      image: 'https://images.unsplash.com/photo-1643200087394-535b34a66ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaG91c2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzEyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Minimalist Haven',
      category: 'Exterior',
      description: 'Pure minimalist architecture emphasizing clean lines and geometric perfection.'
    },
  ];

  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Comprehensive architectural solutions from concept to completion, crafted with precision and creativity.'
    },
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Luxurious interior spaces that reflect elegance, functionality, and your unique vision.'
    },
    {
      icon: PenTool,
      title: 'Exterior Design',
      description: 'Stunning exterior facades that make powerful first impressions and stand the test of time.'
    },
    {
      icon: Trees,
      title: 'Landscape Design',
      description: 'Harmonious landscape architecture integrating nature with contemporary built environments.'
    },
  ];

  const scrollProjects = (direction: 'left' | 'right') => {
    const container = document.getElementById('projects-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting NESTCO. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-charcoal text-off-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1755963969542-532056290459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjByZW5kZXIlMjBuaWdodHxlbnwxfHx8fDE3NzIzMTI3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 text-off-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Architecture
              <br />
              <span className="relative inline-block">
                Beyond Boundaries
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
              Premium Uzbek architectural firm with 12 years of excellence in creating extraordinary spaces
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button variant="primary" icon={ArrowRight} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
            <StatCounter end={150} label="Projects Completed" suffix="+" index={0} />
            <StatCounter end={12} label="Years of Experience" index={1} />
            <StatCounter end={30} label="Expert Architects" suffix="+" index={2} />
            <StatCounter end={20} label="Awards Won" suffix="+" index={3} />
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our collection of award-winning architectural masterpieces
            </p>
          </motion.div>

          {/* Projects Carousel */}
          <div className="relative">
            <div
              id="projects-container"
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollProjects('left')}
                className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollProjects('right')}
                className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-charcoal-light">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">What We Do</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive architectural solutions tailored to your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-gold/30 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1758599543112-311aa231f542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjB0ZWFtJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzIyMTM2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="NESTCO Team"
                className="relative rounded-lg w-full h-[600px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-gold" />
                <span className="text-gold text-sm tracking-widest uppercase">About Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Building Dreams Since 2014
              </h2>
              <div className="w-24 h-1 bg-gold mb-8" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-gold">NESTCO</strong> is a premier architectural firm based in Tashkent, Uzbekistan, dedicated to creating extraordinary spaces that inspire and endure.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 12 years of experience and a team of 30+ expert architects, we have successfully completed 150+ projects across residential, commercial, and landscape architecture.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to transform visions into reality through innovative design, sustainable practices, and unwavering commitment to excellence.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Award className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>20+</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="text-center">
                  <Users className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>30+</div>
                  <div className="text-sm text-muted-foreground">Architects</div>
                </div>
                <div className="text-center">
                  <Briefcase className="text-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>150+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-charcoal-light border-y border-gold/20">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm tracking-widest uppercase">Trusted Partners</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50"
          >
            {['PARTNER 1', 'PARTNER 2', 'PARTNER 3', 'PARTNER 4'].map((partner, index) => (
              <div key={index} className="text-center text-gold text-2xl tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-charcoal">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold text-sm tracking-widest uppercase">Get In Touch</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
            <h2 className="text-5xl md:text-6xl text-off-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next architectural masterpiece
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-off-white mb-2 tracking-wide">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-charcoal-light border border-gold/30 rounded-sm px-6 py-4 text-off-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-off-white mb-2 tracking-wide">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-charcoal-light border border-gold/30 rounded-sm px-6 py-4 text-off-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-off-white mb-2 tracking-wide">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-charcoal-light border border-gold/30 rounded-sm px-6 py-4 text-off-white focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="primary" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20">
                <Phone className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Phone
                </h3>
                <a href="tel:+998712345678" className="text-muted-foreground hover:text-gold transition-colors text-lg">
                  +998 (71) 234-56-78
                </a>
              </div>

              <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20">
                <Mail className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Email
                </h3>
                <a href="mailto:info@nestco.uz" className="text-muted-foreground hover:text-gold transition-colors text-lg">
                  info@nestco.uz
                </a>
              </div>

              <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20">
                <MapPin className="text-gold mb-4" size={32} />
                <h3 className="text-2xl mb-2 text-off-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Address
                </h3>
                <p className="text-muted-foreground text-lg">
                  Amir Temur Street 42,
                  <br />
                  Tashkent, Uzbekistan
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-charcoal-light rounded-lg overflow-hidden border border-gold/20 h-[200px] flex items-center justify-center">
                <MapPin className="text-gold" size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light border-t border-gold/20 py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="text-3xl font-bold mb-4 text-gold tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                NESTCO
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Premier architectural firm creating extraordinary spaces that inspire and endure.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-off-white mb-4 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'Projects', 'Services', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-off-white mb-4 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
                Follow Us
              </h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, color: '#C9A84C' }}
                    className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-muted-foreground hover:border-gold transition-colors"
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gold/20 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 NESTCO. All rights reserved. Crafted with precision and passion.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

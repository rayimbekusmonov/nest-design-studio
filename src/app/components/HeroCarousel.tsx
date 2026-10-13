import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export interface HeroSlide {
  src: string;
  tag: string;
  caption: {
    uz: string;
    en: string;
    ru: string;
  };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/projects/1 (3).jpg',
    tag: '01',
    caption: {
      uz: 'Neoklassik Rezidensiya · Bosh Fasad Panoramasi',
      en: 'Neoclassical Residence · Grand Avenue Facade',
      ru: 'Неоклассическая Резиденция · Главный Фасад',
    },
  },
  {
    src: '/projects/2 (2).jpg',
    tag: '02',
    caption: {
      uz: "Me'moriy Tafsilotlar · Mansarda va Klassik Portik",
      en: 'Architectural Details · Mansard Roof & Portico',
      ru: 'Архитектурные Детали · Мансарда и Портик',
    },
  },
  {
    src: '/projects/3 (2).jpg',
    tag: '03',
    caption: {
      uz: 'Kechki Yoritish & Keng Avtoturargoh',
      en: 'Evening Illumination & Executive Garage',
      ru: 'Вечерняя Подсветка и Просторный Гараж',
    },
  },
  {
    src: '/projects/4 (3).jpg',
    tag: '04',
    caption: {
      uz: "Ichki Hovli & Landshaft Kolonnadasi",
      en: 'Private Courtyard & Classical Colonnade',
      ru: 'Внутренний Дворик и Ландшафтная Колоннада',
    },
  },
  {
    src: '/projects/5.jpg',
    tag: '05',
    caption: {
      uz: 'Bosh Kirish Portali · Hashamatli Kristall Qandil',
      en: 'Grand Entrance Portal · Crystal Chandelier',
      ru: 'Парадный Портал · Хрустальная Люстра',
    },
  },
];

const AUTOPLAY_DURATION_MS = 6000;

interface HeroCarouselProps {
  children?: React.ReactNode;
}

export function HeroCarousel({ children }: HeroCarouselProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number, dir?: 'next' | 'prev') => {
    setDirection(dir ?? (index > currentIndex ? 'next' : 'prev'));
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % HERO_SLIDES.length, 'next');
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length, 'prev');
  }, [currentIndex, goToSlide]);

  // Preload all 5 images on mount for instantaneous buttery transitions
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DURATION_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];
  const langKey = (language as 'uz' | 'en' | 'ru') || 'uz';

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* ── Background Slides with Ken Burns motion & Crossfade ── */}
      <div className="absolute inset-0 z-0 bg-[#070709] overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 7, ease: 'easeOut' },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.caption[langKey]}
              className="w-full h-full object-cover select-none"
              style={{
                filter: 'brightness(0.68) contrast(1.08) saturate(1.03)',
                transformOrigin: currentIndex % 2 === 0 ? 'center center' : '55% 45%',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Multi-layered Cinematic Architectural Gradient Veil ── */}
        {/* Top shadow for sticky nav readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0.45) 25%, rgba(5,5,7,0.3) 50%, rgba(5,5,7,0.65) 80%, rgba(7,7,9,0.98) 100%)',
          }}
        />

        {/* Radial vignette for central spotlight depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.1) 0%, rgba(5,5,7,0.55) 75%, rgba(5,5,7,0.85) 100%)',
          }}
        />

        {/* Subtle warm limestone / champagne ambient tint */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 60%, rgba(216,206,189,0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Foreground Hero Content ── */}
      <div className="relative z-10 w-full">{children}</div>

      {/* ── Carousel Bottom Architectural Control Panel ── */}
      <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 z-20 px-5 sm:px-10 md:px-16 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 pointer-events-auto">
          {/* Left: Active Slide Info / Architectural Caption */}
          <div className="flex flex-col gap-1 max-w-[280px] sm:max-w-md">
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  fontWeight: 600,
                  color: 'var(--silver-bright, #E8E4DE)',
                }}
              >
                {currentSlide.tag}
              </span>
              <span style={{ width: 20, height: 1, background: 'rgba(216,206,189,0.4)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(216,206,189,0.7)',
                }}
              >
                NEST RESIDENCE
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`caption-${currentIndex}-${langKey}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="line-clamp-2 sm:line-clamp-none"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.68rem, 1.1vw, 0.85rem)',
                  fontWeight: 300,
                  letterSpacing: '0.03em',
                  color: '#FAF8F5',
                  textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                }}
              >
                {currentSlide.caption[langKey]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Center / Right: Progress Trackers & Arrow Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 w-full sm:w-auto">
            {/* Progress Bars for all 5 slides */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.tag}
                    onClick={() => goToSlide(idx)}
                    className="group relative flex flex-col items-start gap-1 py-1.5 cursor-pointer focus:outline-none"
                    aria-label={`Slide ${idx + 1}`}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-300"
                      style={{
                        width: isActive ? 34 : 18,
                        height: 2,
                        background: 'rgba(255,255,255,0.22)',
                      }}
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${currentIndex}-${isPlaying}`}
                          initial={{ width: '0%' }}
                          animate={{ width: isPlaying ? '100%' : '100%' }}
                          transition={{
                            duration: isPlaying ? AUTOPLAY_DURATION_MS / 1000 : 0,
                            ease: 'linear',
                          }}
                          style={{
                            height: '100%',
                            background: '#FAF8F5',
                            boxShadow: '0 0 8px rgba(255,255,255,0.8)',
                          }}
                        />
                      )}
                      {!isActive && (
                        <div
                          className="h-full w-0 group-hover:w-full transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.5)' }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next & Play/Pause Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={prevSlide}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer text-white/80 hover:text-white"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(10,10,14,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={14} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer text-white/70 hover:text-white"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(10,10,14,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
              </button>

              <button
                onClick={nextSlide}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer text-white/80 hover:text-white"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(10,10,14,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-label="Next slide"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

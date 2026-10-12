import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Language } from '../../i18n/translations';
import { UzbekistanFlag, UnitedKingdomFlag, RussiaFlag } from '../../i18n/flags';

interface LanguageOption {
  code: Language;
  name: string;
  flag: React.ComponentType<{ width?: number; height?: number; className?: string }>;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'uz', name: "O'zbekcha", flag: UzbekistanFlag },
  { code: 'en', name: 'English',   flag: UnitedKingdomFlag },
  { code: 'ru', name: 'Русский',   flag: RussiaFlag },
];

interface LanguageDropdownProps {
  compact?: boolean;
}

export function LanguageDropdown({ compact = false }: LanguageDropdownProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const CurrentFlag = currentOption.flag;

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tilni tanlash / Select language"
        className="flex items-center gap-2.5 transition-all duration-300"
        style={{
          background: 'var(--ink-mid)',
          border: '1px solid var(--accent-line)',
          padding: compact ? '7px 12px' : '8px 14px',
          color: 'var(--paper)',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--silver)';
        }}
        onMouseLeave={e => {
          if (!isOpen) {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-line)';
          }
        }}
      >
        {/* Crisp vector flag */}
        <CurrentFlag width={20} height={14} />

        {/* Language code */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--paper)',
          }}
        >
          {currentOption.code.toUpperCase()}
        </span>

        {/* Animated Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: 'var(--silver)', display: 'flex', alignItems: 'center' }}
        >
          <ChevronDown size={13} strokeWidth={1.5} />
        </motion.div>
      </button>

      {/* Dropdown Menu Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-2 shadow-2xl"
            style={{
              minWidth: 170,
              background: 'var(--ink-deep, #050505)',
              border: '1px solid var(--silver)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div className="py-1 divide-y divide-[var(--accent-line)]">
              {LANGUAGES.map((item) => {
                const ItemFlag = item.flag;
                const isSelected = item.code === language;

                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 transition-colors duration-200 text-left"
                    style={{
                      background: isSelected ? 'rgba(212, 208, 202, 0.08)' : 'transparent',
                      color: isSelected ? 'var(--paper)' : 'var(--paper-muted)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212, 208, 202, 0.14)';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = isSelected ? 'rgba(212, 208, 202, 0.08)' : 'transparent';
                      (e.currentTarget as HTMLButtonElement).style.color = isSelected ? 'var(--paper)' : 'var(--paper-muted)';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Flag */}
                      <ItemFlag width={22} height={15} />

                      {/* Language full name */}
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.72rem',
                          fontWeight: isSelected ? 500 : 400,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Code badge or check */}
                    <div className="flex items-center gap-1.5 ml-2">
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.58rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          color: 'var(--paper-dim)',
                        }}
                      >
                        {item.code.toUpperCase()}
                      </span>
                      {isSelected && (
                        <Check size={12} strokeWidth={2} style={{ color: 'var(--paper)' }} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

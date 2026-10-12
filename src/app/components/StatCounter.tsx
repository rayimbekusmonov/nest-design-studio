import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  index: number;
}

export function StatCounter({ end, label, suffix = '', index }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) motionValue.set(end);
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center relative"
    >
      {/* Subtle top line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '40px' }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.3, duration: 0.5 }}
        className="mx-auto mb-6 h-px"
        style={{ background: 'var(--silver)' }}
      />

      {/* Number */}
      <div
        className="mb-3"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          fontWeight: 400,
          color: 'var(--paper)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        <motion.span>{displayValue}</motion.span>
        <span style={{ color: 'var(--silver)', fontSize: '70%' }}>{suffix}</span>
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--paper-dim)',
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}
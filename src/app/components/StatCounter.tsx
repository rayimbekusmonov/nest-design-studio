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
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className="text-5xl md:text-6xl mb-3 text-gold"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-off-white text-sm tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
}

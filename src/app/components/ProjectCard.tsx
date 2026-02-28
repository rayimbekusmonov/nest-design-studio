import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
}

export function ProjectCard({ image, title, category, description, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-w-[400px] max-w-[400px] rounded-lg overflow-hidden relative cursor-pointer group border-2 border-transparent hover:border-gold transition-all duration-500"
      style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="relative h-[500px] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-gold text-charcoal px-4 py-2 text-sm font-semibold tracking-wider">
          {category}
        </div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent flex flex-col justify-end p-6"
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl mb-2 text-off-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

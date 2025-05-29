import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
      )}
      <div className={`h-1 w-24 bg-saffron-500 mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;
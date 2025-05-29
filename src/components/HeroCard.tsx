import React from 'react';
import { motion } from 'framer-motion';

interface HeroCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
}

const HeroCard: React.FC<HeroCardProps> = ({
  name,
  role,
  description,
  image,
  index,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-1">{name}</h3>
        <p className="text-saffron-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default HeroCard;
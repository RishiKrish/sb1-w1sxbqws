import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  image,
  index,
}) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-heading font-bold text-xl">{name}</h3>
      <p className="text-saffron-600 mb-2">{role}</p>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  );
};

export default TeamMember;
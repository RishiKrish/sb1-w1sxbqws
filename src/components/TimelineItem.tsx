import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  index,
}) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot"></div>
      <div className="ml-2">
        <span className="text-sm font-medium text-saffron-600">{date}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
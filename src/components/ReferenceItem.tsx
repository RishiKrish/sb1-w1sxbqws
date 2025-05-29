import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

interface ReferenceItemProps {
  title: string;
  author: string;
  publisher?: string;
  year: string;
  url?: string;
  description: string;
  index: number;
}

const ReferenceItem: React.FC<ReferenceItemProps> = ({
  title,
  author,
  publisher,
  year,
  url,
  description,
  index,
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-saffron-100 p-3 rounded-full text-saffron-600">
          <BookOpen size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 mt-1">
            {author}, {year}
            {publisher && `, ${publisher}`}
          </p>
          <p className="mt-3 text-gray-700">{description}</p>
          
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-navy-600 hover:text-navy-800"
            >
              View Source <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ReferenceItem;
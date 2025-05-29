import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  year: string;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  description,
  year,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="gallery-item cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-white/80">{year}</p>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/50 rounded-full p-1 text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-saffron-600 mb-4">{year}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
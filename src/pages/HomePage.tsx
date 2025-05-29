import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Image } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Clock size={40} className="text-saffron-500" />,
      title: 'Interactive Timeline',
      description: 'Explore the key events that shaped the First War of Independence chronologically.',
      link: '/timeline',
    },
    {
      icon: <Users size={40} className="text-saffron-500" />,
      title: 'Key Figures',
      description: 'Discover the brave leaders and revolutionaries who fought for freedom.',
      link: '/heroes',
    },
    {
      icon: <MapPin size={40} className="text-saffron-500" />,
      title: 'Historical Map',
      description: 'Visualize the geographic spread of the rebellion across India.',
      link: '/map',
    },
    {
      icon: <Image size={40} className="text-saffron-500" />,
      title: 'Image Gallery',
      description: 'View historical photographs and illustrations from the period.',
      link: '/gallery',
    },
  ];

  return (
    <>
      <HeroSection 
        title="India's First War of Independence"
        subtitle="The untold story of the 1857 uprising that changed the course of Indian history"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="The Forgotten Revolution"
            subtitle="The events of 1857 marked the first large-scale rebellion against British colonial rule in India, uniting diverse communities in a struggle for freedom."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">A Nation's Awakening</h3>
              <p className="mb-4">
                Often referred to as the "Sepoy Mutiny" by British historians, the uprising of 1857 was much more than a military rebellion. It was India's first organized resistance against colonial oppression that spread across northern and central India.
              </p>
              <p>
                The rebellion began when sepoys (Indian soldiers) in the British East India Company's army refused to use new rifle cartridges that were rumored to be greased with cow and pig fat, offending both Hindu and Muslim religious sentiments. This spark ignited deeper resentments against British policies that had been building for decades.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">Legacy and Impact</h3>
              <p className="mb-4">
                Though ultimately suppressed by the British, the rebellion led to significant changes in colonial administration. The British Crown took direct control of India from the East India Company, beginning the period known as the British Raj.
              </p>
              <p>
                More importantly, the events of 1857 planted the seeds for the later independence movement and demonstrated the possibility of Hindu-Muslim unity against foreign rule. It remains a powerful symbol of resistance and the early stirrings of Indian nationalism.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/timeline" className="btn btn-primary">
              Explore the Timeline
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Explore the History"
            subtitle="Discover different aspects of India's First War of Independence through our interactive features."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-paper p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-saffron-600 hover:text-saffron-800 font-medium">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-navy-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Uncover the Complete Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our project aims to present a comprehensive view of the 1857 uprising, bringing together historical accounts, primary sources, and visual materials to provide a deeper understanding of this pivotal moment in Indian history.
              </p>
              <Link to="/references" className="btn bg-white text-navy-800 hover:bg-gray-100">
                View Our Sources
              </Link>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg" 
                alt="Historical document" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
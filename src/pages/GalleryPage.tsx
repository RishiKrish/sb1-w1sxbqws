import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GalleryItem from '../components/GalleryItem';

const GalleryPage: React.FC = () => {
  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/236151/pexels-photo-236151.jpeg',
      title: 'British Colonial Troops in India',
      year: 'c. 1857',
      description: `British troops and officers who fought to suppress the rebellion. The East India Company's forces were supplemented by British Army regiments shipped from Britain and other colonies.`,
    },
    {
      image: 'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg',
      title: 'Rani Lakshmibai of Jhansi',
      year: 'c. 1850s',
      description: 'Artistic representation of the Queen of Jhansi, one of the leading figures of the rebellion who fought British forces and died in battle in June 1858.',
    },
    {
      image: 'https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg',
      title: 'Bahadur Shah Zafar',
      year: '1857',
      description: 'The last Mughal Emperor who was proclaimed Emperor of Hindustan by the rebels. After the rebellion was suppressed, he was exiled to Rangoon, where he died in 1862.',
    },
    {
      image: 'https://images.pexels.com/photos/1707957/pexels-photo-1707957.jpeg',
      title: 'Red Fort, Delhi',
      year: '1857',
      description: 'The Red Fort in Delhi, which served as the residence of the Mughal Emperors and became a center of rebel activity during the uprising.',
    },
    {
      image: 'https://images.pexels.com/photos/9918280/pexels-photo-9918280.jpeg',
      title: 'The British Residency in Lucknow',
      year: '1858',
      description: 'Ruins of the British Residency in Lucknow after the siege, which lasted from July to November 1857. The Residency compound housed around 3,000 people, including British civilians and loyal Indian troops.',
    },
    {
      image: 'https://images.pexels.com/photos/10803032/pexels-photo-10803032.jpeg',
      title: 'Sepoys of the Bengal Army',
      year: '1850s',
      description: 'Indian soldiers (sepoys) who served in the East India Company\'s Bengal Army. Grievances among these troops sparked the initial rebellion.',
    },
    {
      image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
      title: 'Map of Rebellion Areas',
      year: '1858',
      description: 'Contemporary map showing the regions affected by the rebellion. The uprising was concentrated in the northern and central parts of India.',
    },
    {
      image: 'https://images.pexels.com/photos/5720775/pexels-photo-5720775.jpeg',
      title: 'Aftermath in Kanpur',
      year: '1858',
      description: 'The aftermath of fighting in Kanpur (then Cawnpore), which was a major site of the rebellion under the leadership of Nana Sahib.',
    },
  ];

  return (
    <>
      <HeroSection 
        title="Historical Gallery"
        subtitle="Visual glimpses into India's First War of Independence"
        backgroundImage="https://images.pexels.com/photos/4389573/pexels-photo-4389573.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Visual History"
            subtitle="Explore historical images and artistic representations from the period of the 1857 uprising."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                year={item.year}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-aged-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Visual Representations"
            subtitle="Understanding the visual documentation of the 1857 uprising"
            center
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              The visual record of the 1857 rebellion is complex and often biased. Most contemporary illustrations and early photographs were created from a British perspective, reflecting colonial viewpoints and often depicting the rebels as savage and uncivilized.
            </p>
            <p className="text-lg text-gray-700">
              Indian artistic representations emerged later, often romanticizing the rebellion and its leaders as heroic freedom fighters. These varying perspectives remind us that historical images are not neutral documents but shaped by the political and cultural contexts in which they were created.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
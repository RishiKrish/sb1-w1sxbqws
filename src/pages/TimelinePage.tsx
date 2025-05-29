import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

const TimelinePage: React.FC = () => {
  const timelineEvents = [
    {
      date: 'January 1857',
      title: 'Introduction of Enfield Rifles',
      description: 'The British East India Company introduces the new Enfield rifle to Indian sepoys, which required biting off the ends of cartridges rumored to be greased with cow and pig fat, offending both Hindu and Muslim soldiers.',
    },
    {
      date: 'March 29, 1857',
      title: `Mangal Pandey's Rebellion`,
      description: 'Sepoy Mangal Pandey of the 34th Bengal Native Infantry attacks British officers at the military garrison in Barrackpore. He is later hanged, becoming one of the first martyrs of the uprising.',
    },
    {
      date: 'May 10, 1857',
      title: 'Meerut Uprising',
      description: 'Sepoys in Meerut break rank, free imprisoned comrades, and kill several British officers and civilians. They then march to Delhi, marking the official beginning of the rebellion.',
    },
    {
      date: 'May 11, 1857',
      title: 'Capture of Delhi',
      description: 'Rebels capture Delhi and declare the elderly Mughal Emperor Bahadur Shah Zafar as the Emperor of Hindustan, providing a symbolic leader for the rebellion.',
    },
    {
      date: 'June 1857',
      title: 'Spread of the Rebellion',
      description: 'The rebellion spreads to other regions including Lucknow, Kanpur, Jhansi, and parts of Bihar. Local leaders like Nana Sahib, Tantia Tope, and Rani Lakshmibai join the uprising.',
    },
    {
      date: 'July 1857',
      title: 'Siege of Lucknow',
      description: 'Rebels lay siege to the British Residency in Lucknow, which would continue for 87 days before being relieved by British forces.',
    },
    {
      date: 'June 1858',
      title: 'Death of Rani Lakshmibai',
      description: 'The Rani of Jhansi, one of the leading figures of the rebellion, dies in battle while defending Gwalior against British forces.',
    },
    {
      date: 'September 1858',
      title: 'Fall of Delhi',
      description: 'British forces recapture Delhi after a prolonged siege. Emperor Bahadur Shah Zafar is captured and later exiled to Rangoon, ending the Mughal dynasty.',
    },
    {
      date: 'November 1, 1858',
      title: 'End of East India Company Rule',
      description: 'Queen Victoria issues a proclamation transferring the administration of India from the East India Company to the British Crown, marking the beginning of the British Raj.',
    },
    {
      date: 'April 8, 1859',
      title: 'Official End of the Rebellion',
      description: 'The British officially declare the rebellion over, though sporadic resistance continued in some areas for months afterward.',
    },
  ];

  return (
    <>
      <HeroSection 
        title="Timeline of the Uprising"
        subtitle="Explore the key events that shaped India's First War of Independence"
        backgroundImage="https://images.pexels.com/photos/6447936/pexels-photo-6447936.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Chronology of the Rebellion"
            subtitle="From the first sparks of dissent to the reorganization of British rule, follow the major events of the 1857 uprising."
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="border-l-2 border-gray-300 ml-4">
              {timelineEvents.map((event, index) => (
                <TimelineItem 
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-navy-800 text-white">
        <div className="container-custom">
          <SectionTitle 
            title="The Aftermath"
            subtitle="The rebellion's failure led to profound changes in how India was governed and set the stage for the later independence movement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-saffron-400">Political Reorganization</h3>
              <p className="text-gray-300 mb-4">
                The East India Company's rule ended, with the British Crown taking direct control of India. The new British Raj promised non-interference in religious matters and appointed more Indians to civil service positions.
              </p>
              <p className="text-gray-300">
                The princely states were assured that their territories would not be annexed, creating a dual system of administration that would last until independence in 1947.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-saffron-400">Military Reforms</h3>
              <p className="text-gray-300 mb-4">
                The British Indian Army was reorganized, with a higher proportion of British to Indian soldiers. Recruitment policies changed to favor "martial races" considered loyal to the British.
              </p>
              <p className="text-gray-300">
                Modern weapons and training methods were introduced, and steps were taken to prevent the possibility of another widespread military rebellion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimelinePage;
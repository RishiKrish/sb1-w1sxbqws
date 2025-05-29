import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import HeroCard from '../components/HeroCard';

const HeroesPage: React.FC = () => {
  const keyFigures = [
    {
      name: 'Mangal Pandey',
      role: 'Sepoy of the 34th Bengal Native Infantry',
      description: 'Often considered the first martyr of the uprising, Pandey attacked British officers at Barrackpore on March 29, 1857. His actions are viewed as one of the first acts of defiance that sparked the larger rebellion.',
      image: 'https://images.pexels.com/photos/7473891/pexels-photo-7473891.jpeg',
    },
    {
      name: 'Rani Lakshmibai',
      role: 'Queen of Jhansi',
      description: 'One of the leading figures of the rebellion, the Rani of Jhansi led her forces against the British after they annexed her kingdom. She became a symbol of resistance and is remembered as a fierce warrior who died in battle.',
      image: 'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg',
    },
    {
      name: 'Bahadur Shah Zafar',
      role: 'Last Mughal Emperor',
      description: 'Though elderly and with limited actual power, Zafar was proclaimed Emperor of Hindustan by the rebels. His involvement gave the rebellion legitimacy and a symbolic leader. After the fall of Delhi, he was exiled to Rangoon, where he died.',
      image: 'https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg',
    },
    {
      name: 'Nana Sahib',
      role: 'Peshwa of the Maratha Empire',
      description: `Adopted son of the last Peshwa, Nana Sahib rebelled after the British refused to continue his father's pension. He led rebel forces in Kanpur and was a key figure in organizing resistance in central India.`,
      image: 'https://images.pexels.com/photos/13518126/pexels-photo-13518126.jpeg',
    },
    {
      name: 'Tantia Tope',
      role: 'Military General',
      description: 'A close associate of Nana Sahib, Tantia Tope was a skilled military leader who commanded rebel forces in Kanpur and later helped the Rani of Jhansi. He conducted a brilliant guerrilla campaign before being captured and executed in 1859.',
      image: 'https://images.pexels.com/photos/37010/soldier-military-uniform-american.jpg',
    },
    {
      name: 'Begum Hazrat Mahal',
      role: 'Queen of Awadh',
      description: 'After her husband, the king of Awadh, was exiled, Begum Hazrat Mahal took control and led the rebellion in Lucknow. She declared her son as the rightful heir and resisted British forces before eventually fleeing to Nepal.',
      image: 'https://images.pexels.com/photos/6490597/pexels-photo-6490597.jpeg',
    },
    {
      name: 'Kunwar Singh',
      role: 'Zamindar of Jagdishpur',
      description: 'At the age of 80, Kunwar Singh led rebels in Bihar and defeated British forces multiple times despite his advanced age. He is remembered for his military tactics and determination in the face of overwhelming odds.',
      image: 'https://images.pexels.com/photos/12794038/pexels-photo-12794038.jpeg',
    },
    {
      name: 'Bakht Khan',
      role: 'Commander-in-Chief of Rebel Forces in Delhi',
      description: 'A former officer in the East India Company\'s army, Bakht Khan became the commander of rebel forces in Delhi. He attempted to organize the rebels into an effective fighting force and was a key military leader during the siege of Delhi.',
      image: 'https://images.pexels.com/photos/7942429/pexels-photo-7942429.jpeg',
    },
  ];

  return (
    <>
      <HeroSection 
        title="Heroes of the Rebellion"
        subtitle="The brave men and women who led India's first organized resistance against colonial rule"
        backgroundImage="https://images.pexels.com/photos/1046369/pexels-photo-1046369.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Key Figures"
            subtitle="From royal leaders to military commanders, these individuals risked everything for independence and inspired generations of freedom fighters."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFigures.map((figure, index) => (
              <HeroCard 
                key={index}
                name={figure.name}
                role={figure.role}
                description={figure.description}
                image={figure.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-aged-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Unsung Heroes"
            subtitle="Beyond the famous names, countless ordinary Indians participated in the rebellion, sacrificing their lives for the dream of freedom."
            center
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              While history remembers the leaders, the rebellion of 1857 was sustained by thousands of anonymous participants—sepoys who refused orders, villagers who harbored rebels, merchants who provided supplies, and ordinary people who chose to fight rather than submit to colonial rule.
            </p>
            <p className="text-lg text-gray-700">
              These unsung heroes came from all castes, religions, and regions, temporarily setting aside differences to unite against a common adversary. Their collective sacrifice laid the groundwork for the later independence movement and demonstrated the power of unified resistance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroesPage;
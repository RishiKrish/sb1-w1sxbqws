import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ReferenceItem from '../components/ReferenceItem';

const ReferencesPage: React.FC = () => {
  const references = [
    {
      title: 'The Great Mutiny: India 1857',
      author: 'Christopher Hibbert',
      publisher: 'Viking Press',
      year: '1978',
      description: 'A comprehensive account of the rebellion, examining both British and Indian perspectives. Hibbert draws on primary sources to provide a detailed narrative of the events and their consequences.',
    },
    {
      title: '1857: The Real Story of the Great Uprising',
      author: 'Vishnu Bhatt Godshe Versaikar',
      publisher: 'HarperCollins India',
      year: '2011',
      description: 'A translation of an eyewitness account written by a Brahmin priest who traveled through northern India during the rebellion. This firsthand narrative provides valuable insights into how ordinary Indians experienced the uprising.',
      url: 'https://www.harpercollins.co.in/product/1857-the-real-story-of-the-great-uprising/',
    },
    {
      title: 'The Last Mughal: The Fall of a Dynasty, Delhi 1857',
      author: 'William Dalrymple',
      publisher: 'Bloomsbury',
      year: '2006',
      description: 'A detailed examination of Bahadur Shah Zafar and the siege of Delhi during the rebellion. Dalrymple uses previously untranslated Urdu and Persian documents to present a nuanced view of the events in Delhi.',
      url: 'https://www.bloomsbury.com/uk/last-mughal-9781408800928/',
    },
    {
      title: 'Rebel Queen: A Novel',
      author: 'Michelle Moran',
      publisher: 'Atria Books',
      year: '2015',
      description: 'A historical fiction novel focusing on Rani Lakshmibai of Jhansi. While fictional, the book is well-researched and provides insights into the role of women during the rebellion.',
    },
    {
      title: 'The Indian Mutiny: 1857',
      author: 'Saul David',
      publisher: 'Penguin Books',
      year: '2002',
      description: 'A military history of the rebellion that examines the strategies and tactics used by both sides. David provides a balanced account that considers both the British and Indian perspectives.',
      url: 'https://www.penguin.co.uk/books/55726/the-indian-mutiny-1857-by-saul-david/9780141005546',
    },
    {
      title: 'Indian Uprising of 1857-8: Prisons, Prisoners and Rebellion',
      author: 'Clare Anderson',
      publisher: 'Anthem Press',
      year: '2007',
      description: 'A unique study that examines the rebellion through the lens of colonial prisons and transportation. Anderson explores how the British penal system was used to suppress and punish rebels.',
    },
  ];

  return (
    <>
      <HeroSection 
        title="References & Sources"
        subtitle="The historical foundations of our research and presentation"
        backgroundImage="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Our Sources"
            subtitle="These works form the foundation of our historical research and presentation of India's First War of Independence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {references.map((reference, index) => (
              <ReferenceItem 
                key={index}
                title={reference.title}
                author={reference.author}
                publisher={reference.publisher}
                year={reference.year}
                url={reference.url}
                description={reference.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Research Methodology"
            subtitle="Our approach to historical research and presentation"
            center
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Our project aims to present a balanced view of the 1857 uprising by drawing on diverse sources that represent multiple perspectives. We've consulted academic histories, primary sources from both British and Indian viewpoints, and cultural representations of the rebellion.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We recognize that historical interpretation is always evolving as new evidence emerges and as cultural and political contexts change. Our presentation seeks to acknowledge the complexity of historical events and the diverse experiences of those who lived through them.
            </p>
            <p className="text-lg text-gray-600">
              While we've made every effort to ensure historical accuracy, we welcome feedback and additional perspectives that can enhance our understanding of this pivotal moment in Indian history.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferencesPage;
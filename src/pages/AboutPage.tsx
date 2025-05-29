import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TeamMember from '../components/TeamMember';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rishikrish',
      role: 'Full Stack Developer',
      description: 'Designed and developed the entire website, including historical research, UI/UX design, and implementation of all interactive features.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    }
  ];

  return (
    <>
      <HeroSection 
        title="About Our Project"
        subtitle="The story behind India's First War of Independence"
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Our Mission"
            subtitle="Why we created this project and what we hope to achieve"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We created this project for the Hackstory hackathon with the goal of bringing to life a pivotal but often misunderstood chapter in Indian history. The events of 1857 are frequently reduced to a "mutiny" or "rebellion" in historical accounts, especially those written from a colonial perspective.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to present a more nuanced view that acknowledges the complexity of this historical moment—recognizing it as both a military uprising and a popular rebellion with diverse participants and motivations. By creating an engaging digital experience, we hope to make this history accessible to a wider audience and encourage deeper exploration of India's journey toward independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-4">Project Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-saffron-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-saffron-500 rounded-full"></div>
                  </div>
                  <p>Present a balanced historical account that considers multiple perspectives</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-saffron-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-saffron-500 rounded-full"></div>
                  </div>
                  <p>Highlight lesser-known aspects and participants of the 1857 uprising</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-saffron-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-saffron-500 rounded-full"></div>
                  </div>
                  <p>Create an engaging, interactive experience that makes history accessible</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-saffron-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-saffron-500 rounded-full"></div>
                  </div>
                  <p>Demonstrate the connections between this historical event and later independence movements</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Meet the Developer"
            subtitle="The mind behind this Hackstory project"
            center
          />
          
          <div className="flex justify-center mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-navy-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Participate in Hackstory</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            This project was created as part of Hackstory, a hackathon that challenges students to bring historical events to life through creative digital storytelling. If you're interested in participating in future events, visit the official Hackstory website.
          </p>
          <a 
            href="https://hackstory.devpost.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-white text-navy-800 hover:bg-gray-100"
          >
            Learn More About Hackstory
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
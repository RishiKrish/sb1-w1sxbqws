import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import 'leaflet/dist/leaflet.css';

const MapPage: React.FC = () => {
  useEffect(() => {
    // Fix Leaflet icon issues
    import('leaflet').then(L => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  const rebellionSites = [
    {
      name: 'Meerut',
      location: [28.9845, 77.7064],
      description: 'Site of the initial uprising on May 10, 1857, when sepoys broke into revolt and marched to Delhi.',
    },
    {
      name: 'Delhi',
      location: [28.7041, 77.1025],
      description: 'Captured by rebels on May 11, 1857. The rebels proclaimed Bahadur Shah Zafar as Emperor of Hindustan, making Delhi the symbolic center of the rebellion.',
    },
    {
      name: 'Kanpur',
      location: [26.4499, 80.3319],
      description: `Site of the Kanpur Massacre and a major center of rebellion under Nana Sahib's leadership.`,
    },
    {
      name: 'Lucknow',
      location: [26.8467, 80.9462],
      description: 'Capital of Awadh and site of the famous siege of the British Residency, which lasted for 87 days.',
    },
    {
      name: 'Jhansi',
      location: [25.4484, 78.5685],
      description: 'Rani Lakshmibai led the rebellion here after the British annexed her kingdom under the Doctrine of Lapse.',
    },
    {
      name: 'Gwalior',
      location: [26.2183, 78.1828],
      description: 'Captured by the forces of Rani Lakshmibai and Tantia Tope. The Rani died in battle near here on June 17, 1858.',
    },
    {
      name: 'Barrackpore',
      location: [22.7647, 88.3698],
      description: 'Where Mangal Pandey fired the first shot of the rebellion on March 29, 1857.',
    },
    {
      name: 'Arrah',
      location: [25.5500, 84.6700],
      description: 'Site of the Siege of Arrah, where a small group of Europeans and loyal Indian soldiers held out against thousands of rebels led by Kunwar Singh.',
    },
  ];

  return (
    <>
      <HeroSection 
        title="Interactive Historical Map"
        subtitle="Explore the geographic spread of the 1857 rebellion across India"
        backgroundImage="https://images.pexels.com/photos/6508955/pexels-photo-6508955.jpeg"
      />
      
      <section id="content" className="section bg-paper">
        <div className="container-custom">
          <SectionTitle 
            title="Key Locations"
            subtitle="The rebellion spread across northern and central India, with major events occurring in these locations."
          />
          
          <div className="mt-8">
            <MapContainer center={[26.8467, 80.9462]} zoom={5} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {rebellionSites.map((site, index) => (
                <Marker key={index} position={site.location}>
                  <Popup>
                    <div>
                      <h3 className="font-bold text-lg">{site.name}</h3>
                      <p>{site.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Geographic Context"
            subtitle="Understanding how geography influenced the spread and strategy of the rebellion"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Patterns of Uprising</h3>
              <p className="mb-4 text-gray-600">
                The rebellion primarily erupted in the Gangetic plain and central India, areas where the East India Company had recently annexed territories or implemented unpopular policies. The uprising was strongest in regions with a high concentration of sepoys and where traditional power structures had been disrupted.
              </p>
              <p className="text-gray-600">
                Southern and eastern India remained relatively calm during the rebellion, partly due to different administrative approaches and military compositions in these regions.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Communication and Coordination</h3>
              <p className="mb-4 text-gray-600">
                Despite lacking modern communication technologies, rebels managed to coordinate across vast distances. They used traditional networks like horse messengers, local markets, and religious gatherings to spread information and coordinate actions.
              </p>
              <p className="text-gray-600">
                The British, however, had the advantage of the newly constructed telegraph lines, which they used to rapidly communicate and coordinate their response to the uprising.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapPage;
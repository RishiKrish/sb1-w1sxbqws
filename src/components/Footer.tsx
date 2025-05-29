import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Flag className="h-8 w-8 text-saffron-500" />
              <span className="text-xl font-heading font-bold">
                <span className="text-saffron-500">1857</span>
                <span className="text-white"> | India's Uprising</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              Rediscovering India's First War of Independence through 
              interactive storytelling and historical research.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-saffron-500">
                <Github size={20} />
              </a>
              <a href="mailto:team@hackstory.com" className="text-gray-300 hover:text-saffron-500">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-navy-700 pb-2">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/timeline" className="text-gray-300 hover:text-saffron-500">Timeline</Link></li>
              <li><Link to="/heroes" className="text-gray-300 hover:text-saffron-500">Key Figures</Link></li>
              <li><Link to="/map" className="text-gray-300 hover:text-saffron-500">Interactive Map</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-saffron-500">Historical Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-navy-700 pb-2">About</h4>
            <ul className="space-y-2">
              <li><Link to="/references" className="text-gray-300 hover:text-saffron-500">References</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-saffron-500">Team</Link></li>
              <li><a href="https://hackstory.devpost.com" className="text-gray-300 hover:text-saffron-500">Hackstory</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-navy-700 text-center text-sm text-gray-400">
          <p>Created for Hackstory 2025 | Historical Hackathon Project</p>
          <p className="mt-2">© {new Date().getFullYear()} India's First War of Independence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
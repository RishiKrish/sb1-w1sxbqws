import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper p-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-heading font-bold text-saffron-600 mb-6">404</h1>
        <h2 className="text-3xl font-heading mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center btn btn-primary"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
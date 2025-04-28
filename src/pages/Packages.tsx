import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import packages from '../data/packages';

const PackageList: React.FC = () => {
  const location = useLocation();
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Parse search params from URL
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search') || '';
    setSearchTerm(search);

    if (search) {
      // Filter packages by title (case insensitive)
      const filtered = packages.filter(pkg => 
        pkg.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPackages(filtered);
    } else {
      setFilteredPackages(packages);
    }
  }, [location.search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-24">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Our Travel Packages
      </motion.h1>
      
      {searchTerm && (
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600">
            {filteredPackages.length > 0 
              ? `Showing results for "${searchTerm}"`
              : `No packages found for "${searchTerm}"`}
          </p>
          {filteredPackages.length === 0 && (
            <Link 
              to="/packages" 
              className="text-green-500 hover:text-green-600 font-medium mt-2 inline-block"
            >
              View all packages
            </Link>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <motion.div 
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-64">
              <img 
                src={pkg.images[0].src} 
                alt={pkg.images[0].alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-xl font-bold text-white">{pkg.title}</h2>
                <div className="flex items-center mt-1">
                  <span className="text-white text-sm">{pkg.duration}</span>
                  <span className="mx-2 text-white">|</span>
                  <span className="text-white font-semibold">
                    ₹{pkg.price} <span className="font-normal text-xs">/ Adult</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {pkg.shortDescription}
              </p>
              <Link 
                to={`/packages/${pkg.slug}`}
                className="block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;

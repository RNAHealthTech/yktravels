import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, Calendar, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Redirect to packages page with search query as URL parameter
      navigate(`/packages?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner-desktop.jpg')",
          backgroundSize: "cover",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Trekking, Expedition, Adventure
          </h1>
          <p className="text-xl md:text-2xl">
            Get great adventure holidays and activities around the planet.
          </p>
        </motion.div>

        {/* Top Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-3xl mb-16 px-4"
        >
          <div className="flex flex-row items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow p-3 text-gray-800 focus:outline-none"
            />
            <button 
              className="bg-green-500 hover:bg-green-600 transition-colors text-white px-6 py-3 flex items-center"
              onClick={handleSearch}
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingSection;
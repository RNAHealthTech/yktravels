import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HotelSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Hotel images data
  const hotelImages = [
    {
      id: 1,
      src: "/images/hotel-1.jpeg",
      alt: "5-Star Luxury Hotel in Mountains",
       
    },
    {
      id: 2,
      src: "/images/resort-2.jpeg",
      alt: "Premium Resort with Pool",
      
    },
    {
      id: 3,
      src: "/images/resort-3.jpeg",
      alt: "Comfortable 3-Star Hotel",
       
    },
    {
      id: 4,
      src: "/images/resort-4.jpeg",
      alt: "Elegant 5-Star Hotel Suite",
      
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-fraunces-slab">
            Premium Accommodations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer luxurious accommodations at 3-star, 5-star hotels and premium resorts, ensuring comfort and elegance for every traveler's preference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotelImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
 
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300"
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Hotel Preview" 
                className="w-full max-h-[80vh] object-contain" 
              />
            </div>
            {/* Close on backdrop click */}
            <div 
              className="absolute inset-0 z-[-1]" 
              onClick={closeModal}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelSection;
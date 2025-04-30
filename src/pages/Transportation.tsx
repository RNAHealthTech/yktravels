import React, { useState, useEffect } from 'react';

  

const TransportationPage:React.FC = () => {
  // Image carousel data
  const carouselImages = [
    "/images/car1.jpg",
    "/images/car2.png",
    "/images/car3.png",
    "/images/car4.jpg",
    "/images/car-5.jpg", 
    "/images/car-6.jpg", 
    "/images/car-7.png"
  ];
  // Locations with their details
  const locations = [
    {
      name: "Haridwar",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55253.39787354455!2d78.1229856!3d29.9456906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651077882270!5m2!1sen!2sin",
    },
    {
      name: "Rishikesh",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55149.34994560543!2d78.2334261!3d30.0869281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651077902234!5m2!1sen!2sin",
    },
    {
      name: "Chandigarh",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912921283!2d76.7199348!3d30.7333148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66db92d%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1651077924124!5m2!1sen!2sin",
    },
    {
      name: "Shimla",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54493.31301566513!2d77.1340577!3d31.0782194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1651077951484!5m2!1sen!2sin",
    },
    {
      name: "Delhi", 
      mapEmbedUrl: " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1950802431484!2d77.23835787592604!3d28.653876983110294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1746002619337!5m2!1sen!2sin"
    },
    {
      name: "Punjab",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758583.521895241!2d75.337076!3d31.1471305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1651077977484!5m2!1sen!2sin",
    },
    {
      name: "Uttarakhand",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530357.1366159126!2d78.0584482!3d30.0668023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sUttarakhand!5e0!3m2!1sen!2sin!4v1651078038074!5m2!1sen!2sin",
    },
    {
      name: "Himachal Pradesh",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727073.2880491342!2d76.1367598!3d31.8167802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390494937b6d6bfd%3A0xf88a72cd3f25abc3!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1651078067839!5m2!1sen!2sin",
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(Array(carouselImages.length).fill(false));
  const [imageDimensions, setImageDimensions] = useState<{width: number, height: number}[]>(
    Array(carouselImages.length).fill({ width: 0, height: 0 })
  );

  // Preload images and get their dimensions
  useEffect(() => {
    carouselImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        
        setImageDimensions(prev => {
          const newDimensions = [...prev];
          newDimensions[index] = {
            width: img.naturalWidth,
            height: img.naturalHeight
          };
          return newDimensions;
        });
      };
      img.src = src;
    });
  }, []);

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate the optimal carousel dimensions
  const getCarouselStyle = () => {
    const currentDimensions = imageDimensions[currentImageIndex];
    
    // Default dimensions if image hasn't loaded yet
    if (!imageLoaded[currentImageIndex] || !currentDimensions.width) {
      return {
        paddingTop: '56.25%', // 16:9 aspect ratio as fallback
        maxHeight: '70vh'
      };
    }
    
    // Calculate aspect ratio while maintaining responsive sizing
    const aspectRatio = (currentDimensions.height / currentDimensions.width) * 100;
    
    return {
      paddingTop: `${aspectRatio}%`,
      maxHeight: '70vh' // Maximum height constraint
    };
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white mt-32">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-teal-600">YK Travels - Transportation Services</h1>
        </div>
      </header>

      {/* Image Carousel */}
      <div className="container mx-auto px-4 py-4">
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100"
          style={getCarouselStyle()}
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image}
                alt={`Transport Service ${index + 1}`}
                className="w-full h-full object-contain mx-auto"
                style={{ 
                  maxHeight: '70vh'
                }}
              />
            </div>
          ))}
          
          {/* Navigation Controls */}
          <button 
            onClick={goToPrevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-white py-8">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Book Comfortable rides to your favorite destinations
        </h2>
      </div>

      {/* Destinations Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Destinations</h2>
          
          {/* Dropdown */}
          <div className="max-w-md mx-auto mb-8 relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span className="text-gray-700">
                {selectedLocation ? selectedLocation : "Select a destination"}
              </span>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {dropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {locations.map((location) => (
                  <div 
                    key={location.name}
                    className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
                    onClick={() => {
                      setSelectedLocation(location.name);
                      setDropdownOpen(false);
                    }}
                  >
                    {location.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Map display */}
          {selectedLocation && (
            <div className="max-w-3xl mx-auto border rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{selectedLocation}</h3>
              </div>
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe 
                  src={locations.find(loc => loc.name === selectedLocation)?.mapEmbedUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Map of ${selectedLocation}`}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to book your ride?</h2>
          <a
            href="tel:+918766274009"
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 8766274009
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
 
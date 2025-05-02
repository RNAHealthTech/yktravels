import React, { useState, useEffect } from 'react';
import { X, Flame, ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define types for better type safety
interface HotDeal {
  id: number;
  imageSrc: string;
  title: string;
 
  discount: string;
}

const HotDealsBanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const navigate = useNavigate();

  // Sample hot deals data - this could come from an API in production
  const hotDeals: HotDeal[] = [
    {
      id: 1,
      imageSrc: '/images/hot-1.png', // Replace with actual image paths
      title: 'Mountain Adventure',
      discount: '25% OFF',
    },
    {
      id: 2,
      imageSrc: '/images/hot-2.png',
      title: 'Himalayan Gateway',
       
      discount: '30% OFF',
    },
    {
      id: 3,
      imageSrc: '/images/hot-3.png',
      title: 'Safari Experience',
       
      discount: '20% OFF',
    },
  ];

  // Listen for window resize and update state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Automatic slide change for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleOpenModal = (index: number) => {
    setSelectedImage(index);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === hotDeals.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? hotDeals.length - 1 : prev - 1));
  };

  // Swipe functionality for mobile devices
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Get visible deals based on screen size
  const getVisibleDeals = () => {
    // For extra small screens - show 1
    if (windowWidth < 640) {
      return [hotDeals[currentSlide]];
    }
    // For small/medium screens - show 2 
    else if (windowWidth < 1024) {
      const secondIndex = (currentSlide + 1) % hotDeals.length;
      return [hotDeals[currentSlide], hotDeals[secondIndex]];
    }
    // For large screens - show all 3
    else {
      return hotDeals;
    }
  };

  const visibleDeals = getVisibleDeals();

  return (
    <div className="w-full bg-gradient-to-r from-orange-100 to-yellow-50 py-6 sm:py-8 px-3 sm:px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-yellow-300 rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-40 sm:w-64 h-40 sm:h-64 bg-orange-400 rounded-full opacity-20"></div>
      
      {/* Banner Header */}
      <div className="relative z-10 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <Flame className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">SEASON'S BEST DEALS</h2>
        </div>
        <div className="bg-yellow-400 rounded-full px-3 sm:px-5 py-1 sm:py-2 mt-2 sm:mt-0 shadow-lg">
          <span className="font-bold text-sm sm:text-base text-orange-800">LIMITED TIME OFFERS!</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Carousel for all screen sizes */}
        <div className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {visibleDeals.map((deal, index) => (
              <div 
                key={`${deal.id}-${index}`} 
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleOpenModal(hotDeals.findIndex(d => d.id === deal.id))}
              >
                <img 
                  src={deal.imageSrc} 
                  alt={deal.title} 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 sm:opacity-0 sm:group-hover:opacity-70 transition-opacity"></div>
                
                {/* Discount badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-yellow-400 text-orange-800 text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
                    {deal.discount}
                  </span>
                </div>
                
                {/* Title visible on all devices */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 sm:transform sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform">
                  <div className="bg-orange-500/90 text-white p-2 sm:rounded-t-lg">
                    <p className="font-bold text-center text-sm sm:text-base">{deal.title}</p>
 
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons - visible on all screen sizes */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full shadow-md z-10"
            aria-label="Previous deal"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full shadow-md z-10"
            aria-label="Next deal"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-3 sm:mt-4 gap-1">
          {hotDeals.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-5 sm:w-6 bg-orange-500" : "w-2 bg-orange-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-5 sm:mt-8 text-center">
        <button 
          onClick={() => navigate('/contact')} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto"
        >
          <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span>GET DEAL NOW!</span>
        </button>
      </div>

      {/* Image Modal - Responsive */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full mx-auto">
            {/* Close button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 p-1 sm:p-2 rounded-full z-10 shadow-md hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            </button>
            
            <div className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] overflow-auto">
              <img 
                src={hotDeals[selectedImage].imageSrc} 
                alt={hotDeals[selectedImage].title}
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-3 sm:p-4 bg-white">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{hotDeals[selectedImage].title}</h3>
              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Flame className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  <span className="text-orange-600 font-bold text-sm sm:text-base">{hotDeals[selectedImage].discount}</span>
                </div>
                <button 
                  onClick={() => {
                    handleCloseModal();
                    navigate('/contact');
                  }} 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors w-full sm:w-auto text-center flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4 mr-1" />
                  <span>Get This Deal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotDealsBanner;

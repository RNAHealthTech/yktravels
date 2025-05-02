import { useState, useEffect } from "react";
import Activities from "../data/activities";
import { useNavigate } from "react-router-dom";

const HomeActivitySection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // Check if screen is mobile size
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Convert activities object to array for easier mapping
    const activityItems = Object.values(Activities);

    // Determine how many cards to show based on screen size
    const cardsToShow = isMobile ? 1 : (window.innerWidth < 1024 ? 2 : 3);

    // Calculate maximum number of slides
    const maxSlides = Math.ceil(activityItems.length / cardsToShow) - 1;

    // Handle navigation
    const nextSlide = () => {
        setCurrentSlide(currentSlide =>
            currentSlide >= maxSlides ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide =>
            currentSlide <= 0 ? maxSlides : currentSlide - 1
        );
    };

    // Get current visible cards
    const visibleActivities = activityItems.slice(
        currentSlide * cardsToShow,
        (currentSlide * cardsToShow) + cardsToShow
    );

    return (
        <section className="bg-white">
            {/* Content Container */}
            <div className="relative px-4 py-16 md:py-24">
                <div
                    className="absolute inset-0 w-full h-[70vh] bg-cover bg-center bg-no-repeat z-0 brightness-30"
                    style={{
                        backgroundImage: "url('/images/activity-before.jpg')"
                    }}
                ></div>

                {/* Overlay for Text Readability */}
                <div className="absolute inset-0 opacity-60"></div>
                {/* Section Title with Background */}
                <div className="text-center mb-16 relative w-screen left-1/2 right-1/2 mx-[-50vw]">
                    {/* Background Image - Using absolute position instead of fixed */}

                    {/* Text Content */}
                    <div className="relative z-10 py-12 px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Adventure Activities
                        </h2>
                        <div className="w-16 h-1 bg-green-400 mx-auto mb-8"></div>
                        <p className="text-white text-base md:text-lg max-w-4xl mx-auto">
                            At YK Travels, we believe that adventure is the heart of a memorable journey. Our
                            itineraries are designed to take you off the beaten path and into the heart of
                            nature's wonders. Whether you're an adrenaline junkie seeking your next thrill or a
                            curious explorer wanting to experience the world's hidden gems, we have
                            something for everyone.
                        </p>
                    </div>
                </div>

                <div
                    className="relative px-4"
                >

                    {/* Activity Cards Carousel */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Cards Container */}
                        <div className="flex justify-center gap-6 overflow-hidden">
                            {visibleActivities.map((activity) => (
                                <div
                                    key={activity.activitySlug}
                                    onClick={()=>navigate(`/activity/${activity.activitySlug}`)}
                                    className="relative w-full md:w-72 h-96 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
                                >
                                    {/* Card Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${activity.cardBg})` }}
                                    >
                                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Card Content - Title Only */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${isMobile ? "block" : "opacity-0 group-hover:opacity-100"
                                            }`}
                                    >
                                        <h3 className="text-xl font-bold">{activity.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-0 -ml-4 md:-ml-6 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 focus:outline-none"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-0 -mr-4 md:-mr-6 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 focus:outline-none"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator (optional) */}
                        <div className="flex justify-center mt-8 gap-2">
                            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full focus:outline-none ${currentSlide === index ? "bg-green-400" : "bg-gray-300"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeActivitySection;
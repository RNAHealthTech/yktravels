import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package } from '../data/packages';

interface PackageTemplateProps {
    packageData: Package;
}

const PackageTemplate: React.FC<PackageTemplateProps> = ({ packageData }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const tabs = ['Overview', 'Itinerary', 'Cost', 'FAQs', 'Map'];

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === packageData.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? packageData.images.length - 1 : prev - 1
        );
    };

    const tabVariants = {
        active: { borderBottom: '2px solid #10b981', color: '#10b981' },
        inactive: { borderBottom: '2px solid transparent', color: '#6b7280' }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="py-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-gray-700 mb-4"
                        >
                            {packageData?.overview &&  packageData.overview.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 mb-6"
                        >
                            { packageData?.overview && packageData.overview.description}
                        </motion.p>
                        
                        
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4"
                        >
                            { packageData?.overview && packageData?.overview?.activities && packageData.overview.activities.map((activity, index) => (
                                <li key={index} className="mb-4">
                                    <div className="flex items-start">
                                        <span className="text-2xl mr-2">{activity.emoji}</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-700">{index + 1}. {activity.title}</h3>
                                            <p className="text-gray-600">{activity.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}


                        </motion.ul>
                    </div>
                );
            case 'Itinerary':
                return (
                    <div className="py-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-gray-700 mb-6"
                        >
                            Itinerary
                        </motion.h2>
                        { packageData?.itinerary && packageData.itinerary.map((day, index) => (
                            <motion.div
                                key={day.day}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="mb-8"
                            >
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Day {day.day}: {day.title}</h3>
                                <p className="text-gray-600 mb-3">{day.description}</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    {day?.activities  && day.activities.map((activity, actIndex) => (
                                        <li key={actIndex}>{activity}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                );
            case 'Cost':
                return (
                    <div className="py-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-gray-700 mb-6"
                        >
                            Cost Details
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">What's Included</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                { packageData?.cost && packageData.cost.includes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">What's Excluded</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                { packageData?.cost && packageData.cost.excludes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                        {packageData?.cost && packageData.cost.notes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Important Notes</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    {packageData.cost.notes.map((note, index) => (
                                        <li key={index}>{note}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                );
            case 'FAQs':
                return (
                    <div className="py-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-gray-700 mb-6"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <div className="space-y-6">
                            {packageData?.faqs && packageData.faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-b border-gray-200 pb-4"
                                >
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );
            case 'Map':
                return (
                    <div className="py-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-gray-700 mb-6"
                        >
                            Location
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden"
                        >
                            <iframe
                                src={packageData.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Package Location Map"
                            ></iframe>
                        </motion.div>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderStays = () => {
        if (!packageData.stays || packageData.stays.length === 0) return null;

        return (
            <div className="my-10 bg-gray-50 p-6 rounded-lg">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-semibold text-gray-700 mb-6"
                >
                    Accommodation Options
                </motion.h2>
                <div className="space-y-8">
                    {packageData.stays.map((stay) => (
                        <motion.div
                            key={stay.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    {stay.images.length > 0 && (
                                        <img
                                            src={stay.images[0].src}
                                            alt={stay.images[0].alt}
                                            className="w-full h-48 md:h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-6 md:w-2/3">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{stay.name}</h3>
                                    <p className="text-gray-600 mb-4">{stay.description}</p>
                                    <div>
                                        <h4 className="font-medium text-gray-700 mb-2">Amenities:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {stay.amenities.map((amenity, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-28">
            {/* Hero Section with Image Slider */}
            <div className="mb-10 relative rounded-lg overflow-hidden h-96">
                <img
                    src={packageData.images[currentImageIndex].src}
                    alt={packageData.images[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h1 className="text-4xl font-bold text-white">{packageData.title}</h1>
                    <div className="flex items-center mt-2">
                        <span className="text-white text-lg">{packageData.duration}</span>
                        <span className="mx-3 text-white">|</span>
                        <span className="text-white font-bold text-xl">₹{packageData.price} <span className="text-sm font-normal">/ Adult</span></span>
                    </div>
                </div>
            </div>

            {/* Package Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <p className="text-gray-600 text-lg">{packageData.shortDescription}</p>
            </motion.div>

            {/* Trip Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 bg-gray-50 p-6 rounded-lg"
            >
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Trip Info & Fact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Accommodation</span>
                            <span className="block text-gray-700">{ packageData?.tripInfo && packageData.tripInfo.accommodation.text}</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Arrival City</span>
                            <span className="block text-gray-700">{packageData?.tripInfo && packageData.tripInfo.arrivalCity.text}</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Best Season</span>
                            <span className="block text-gray-700">{ packageData?.tripInfo && packageData.tripInfo.bestSeason.text}</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Guide</span>
                            <span className="block text-gray-700">{ packageData.tripInfo  && packageData.tripInfo.guide.text}</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 12-8-10v6H5v8h8v6z" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Maximum Altitude</span>
                            <span className="block text-gray-700">{ packageData?.tripInfo  && packageData.tripInfo.maximumAltitude.text}</span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11V6a4 4 0 0 1 8 0v5M4 11h8" /><rect x="4" y="11" width="8" height="8" rx="2" /><path d="M8 11v8" /><path d="M12 11v4a2 2 0 0 0 4 0v-1a2 2 0 0 0-4 0v5h8" /></svg>
                        </div>
                        <div>
                            <span className="block text-green-500 text-sm">Transportation</span>
                            <span className="block text-gray-700">{ packageData?.tripInfo && packageData?.tripInfo.transportation.text}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6 overflow-x-hidden">
                <nav className="flex -mb-px space-x-8 min-w-max">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 text-center font-medium text-sm focus:outline-none ${activeTab === tab ? 'text-green-500' : 'text-gray-500 hover:text-gray-700'
                                }`}
                            animate={activeTab === tab ? 'active' : 'inactive'}
                            variants={tabVariants}
                            transition={{ duration: 0.3 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Accommodations Section */}
            {renderStays()}

            {/* Booking Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-10"
            >
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">From</h2>
                <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-gray-800">₹{packageData.price}</span>
                    <span className="text-gray-600 ml-2">/ Adult</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
                    CHECK AVAILABILITY
                </button>
                <div className="text-center mt-4 text-sm text-gray-600">
                    Need help with booking? <a href="#" className="text-green-500 hover:text-green-600">Send Us A Message</a>
                </div>
            </motion.div>
        </div>
    );
};

export default PackageTemplate;
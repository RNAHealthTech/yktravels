import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Define hotel categories
const hotelCategories = [
    {
        id: 'three-star',
        name: '3-Star Hotels',
        description: 'Comfortable accommodations with essential amenities.',
        amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Restaurant', 'Hot Water', 'Daily Housekeeping']
    },
    {
        id: 'four-star',
        name: '4-Star Hotels',
        description: 'Superior accommodations with additional amenities and services.',
        amenities: ['Free WiFi', 'Swimming Pool', 'Restaurant & Bar', 'Room Service', 'Gym', 'Parking', 'Conference Room']
    },
    {
        id: 'five-star',
        name: '5-Star Luxury Resorts',
        description: 'Exceptional luxury accommodations with premium amenities.',
        amenities: ['Free WiFi', 'Infinity Pool', 'Spa', 'Multiple Restaurants', 'Bar', 'Ocean View', 'Private Beach Access', 'Gym', 'Butler Service']
    }
];

// Image gallery for hotels
const hotelGallery = [
    { src: '/images/hotel-2.jpeg', alt: 'Hotel Room' },
    { src: '/images/pool.jpeg', alt: 'Resort Pool' },
    { src: '/images/resort-2.jpeg', alt: 'Hotel Restaurant' },
    { src: '/images/resort-3.jpeg', alt: 'Beach Resort' },
];

const BookHotelPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        adults: '2',
        hotel: '3-Star Hotels',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (Formspree integration would go here)
        console.log('Form submitted:', formData);
        alert('Your booking request has been submitted!');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            adults: '2',
            hotel: '3-Star Hotels',
            message: ''
        });
    };

    return (
        <>
            <Helmet>
                <title>Book Hotels & Resorts - YK Travels</title>
                <meta name="description" content="Book comfortable and luxury accommodations for your trip with YK Travels." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-28">
                {/* Hero Section */}
                <div className="mb-10 relative rounded-lg overflow-hidden h-80">
                    <img
                        src="/images/banner.jpeg"
                        alt="Luxury Hotel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h1 className="text-4xl font-bold text-white">Hotels & Resorts</h1>
                        <p className="text-white mt-2">Find your perfect accommodation for a comfortable stay</p>
                    </div>
                </div>


                {/* Hotel Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Hotel Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hotelCategories.map((category) => (

                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
                                <p className="text-gray-600 mt-1">{category.description}</p>
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-700 mb-2">Amenities:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.amenities.map((amenity, index) => (
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
                        ))}
                    </div>
                </motion.div>

                {/* Hotel Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-gray-700 mb-6">Photo Gallery</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {hotelGallery.map((image, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Booking Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-50 rounded-lg p-6"
                >
                    <h2 className="text-3xl font-semibold text-gray-700 mb-6">Book Your Stay</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                                    <input
                                        type="date"
                                        id="checkOut"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                                    <select
                                        id="adults"
                                        name="adults"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5+">5+ People</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-1">Hotel Category</label>
                                    <select
                                        id="hotel"
                                        name="hotel"
                                        value={formData.hotel}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    >
                                        {hotelCategories.map(category => (
                                            <option key={category.id} value={category.name}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                                >
                                    Request Booking
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Need Immediate Assistance?</h3>
                                <p className="text-gray-600 mb-4">Contact us directly on WhatsApp for quick booking assistance or custom requirements.</p>
                                <a
                                    href="https://wa.me/918766274009?text=I'm%20interested%20in%20booking%20a%20hotel."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                                        <path d="M12.063 0C5.41 0 0 5.41 0 12.063c0 2.502.761 4.829 2.067 6.752L.417 24l5.317-1.577c1.848 1.213 3.931 1.876 6.139 1.876h.507c6.564 0 11.881-5.36 11.881-11.963 0-3.198-1.237-6.199-3.487-8.448C18.326 1.237 15.324 0 12.063 0zm0 21.785h-.507c-2.084 0-4.082-.712-5.766-2.019l-.415-.248-4.296 1.28 1.203-4.296-.272-.433C1.043 14.272.243 12.174.243 10.004.243 5.534 3.97 1.741 8.382 1.581c2.689-.099 5.223.929 7.164 2.87 1.941 1.941 3.007 4.529 3.007 7.279-.016 5.471-4.492 10.055-9.963 10.055z"></path>
                                    </svg>
                                    Contact via WhatsApp
                                </a>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Book With Us?</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Best available hotel rates
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Verified quality accommodations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 bg-white bg-opacity-25 hover:bg-opacity-50 p-2 rounded-full z-10"
                            aria-label="Close image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Hotel view"
                            className="max-w-full max-h-[85vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default BookHotelPage;
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
        <img 
          src="/images/about-banner.jpg" 
          alt="Nag tibba trek" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 flex items-center justify-center h-full container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About YK Travels</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Your premier destination for thrilling outdoor experiences and unforgettable journeys</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded by a group of passionate adventurers and travel enthusiasts, YK Travels was born out of a desire to share the beauty and excitement of the great outdoors with others.
              </p>
              <p className="text-gray-700">
                With years of experience exploring some of the most stunning and remote destinations on Earth, our founders set out to create a travel company that combines expert knowledge, personalized service, and a commitment to sustainability. Today, YK Travels offers a wide range of adventures that cater to every level of adventurer, from beginners to seasoned explorers.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden order-1 lg:order-2">
              <img 
                src="/images/yktravels.avif" 
                alt="best travel and tours agency in delhi ncr" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
            At YK Travels, our mission is to provide exceptional outdoor experiences that inspire and challenge our clients while promoting responsible travel and environmental stewardship.
          </p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Inspiring Adventure</h3>
              <p className="text-gray-700">
                We aim to ignite the spirit of adventure in everyone, encouraging people to step outside their comfort zones and explore the wonders of the natural world.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-green-50 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Delivering Quality</h3>
              <p className="text-gray-700">
                We are committed to offering top-notch services, experienced guides, and high-quality equipment to ensure the safety, comfort, and enjoyment of our clients.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Promoting Sustainability</h3>
              <p className="text-gray-700">
                We practice and advocate for sustainable travel, minimizing our environmental impact and supporting local communities and conservation efforts.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* What We Offer Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-12 text-center">What We Offer</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={fadeIn} className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/images/har-ki-doon.jpeg" 
                  alt="Har ki doon trek" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">1. Trekking and Hiking</h3>
                <p className="text-gray-700">
                  Discover breathtaking trails and scenic landscapes with our trekking and hiking adventures. From leisurely day hikes to challenging multi-day treks, we offer routes that cater to all skill levels.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/2 h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/images/about-camping.jpg" 
                  alt="Bali Pass Trek" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-green-700 mb-4">2. Camping</h3>
                <p className="text-gray-700">
                  Immerse yourself in nature with our camping trips. Whether you prefer backcountry camping in remote locations or luxury glamping with all the comforts of home, we have the perfect camping experience for you.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/images/river-rafting.jpg" 
                  alt="River Rafting in Rishikesh" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">3. River Rafting</h3>
                <p className="text-gray-700">
                  Feel the rush of adrenaline as you navigate through thrilling rapids on our river rafting expeditions. Our experienced guides ensure a safe and exhilarating adventure on some of the most exciting rivers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/2 h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/images/expeditions.jpeg" 
                  alt="Expeditions" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-green-700 mb-4">4. Expeditions</h3>
                <p className="text-gray-700">
                  Embark on epic expeditions that take you to the farthest corners of the Earth. From the icy wilderness of Antarctica to the dense jungles of the Amazon, our expeditions are designed for those seeking extraordinary challenges and unique experiences.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-12 text-center">Our Values</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg shadow-md border border-green-100"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4">Safety First</h3>
              <p className="text-gray-700">
                Your safety is our top priority. We adhere to the highest safety standards, providing experienced guides, reliable equipment, and thorough briefings to ensure a secure and enjoyable adventure.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-md border border-blue-100"
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-700">
                We are dedicated to exceeding your expectations. From the moment you book with us until the end of your journey, we provide personalized service and support to make your adventure seamless and memorable.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg shadow-md border border-green-100"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4">Environmental Responsibility</h3>
              <p className="text-gray-700">
                We are committed to protecting the environment and promoting sustainable travel practices. Our adventures are designed to minimize environmental impact, and we actively support conservation initiatives and local communities.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-md border border-blue-100"
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Passion and Expertise</h3>
              <p className="text-gray-700">
                Our team consists of passionate adventurers and travel experts who bring their love for the outdoors and extensive knowledge to every trip. We are here to share our expertise and ensure you have an unforgettable experience.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Join Us CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Join Us on an Adventure</h2>
            <p className="text-gray-700 mb-6">
              At YK Travels, we believe that life is meant to be lived to the fullest, and there's no better way to do that than by exploring the great outdoors. Whether you're seeking the thrill of adventure, the peace of nature, or the joy of discovery, YK Travels is here to guide you every step of the way.
            </p>
            <p className="text-gray-700 mb-8">
              Join us and embark on a journey that will inspire your soul, challenge your limits, and connect you with the natural beauty of our world. Adventure awaits with YK Travels – where your journey begins.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors"
            >
              Explore Our Adventures
            </motion.button>
          </div>
        </motion.section>

        {/* Image Grid Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-12 text-center">Adventure Gallery</h2>
          
          {/* First row - larger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="h-80 bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for adventure image */}
              <img 
                src="/api/placeholder/800/600" 
                alt="Adventure scene 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="h-80 bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for adventure image */}
              <img 
                src="/api/placeholder/800/600" 
                alt="Adventure scene 2" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Second row - smaller images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for adventure image */}
              <img 
                src="/api/placeholder/600/400" 
                alt="Adventure scene 3" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for adventure image */}
              <img 
                src="/api/placeholder/600/400" 
                alt="Adventure scene 4" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for adventure image */}
              <img 
                src="/api/placeholder/600/400" 
                alt="Adventure scene 5" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
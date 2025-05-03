import React from "react"
import LandingSection from "../ui/LandingSection";
import ExperienceStats from "./StatsSection";
import HomeServices from "./HomeServices";
import HotDealsBanner from "./HotDealSection";
import HomeAbout from "../ui/HomeAbout";
import HomeActivitySection from "../ui/HomeActivitySection";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import YKTravelsServices from "../ui/YkTravelsServices";
import { Helmet } from "react-helmet";
import HotelSection from "../ui/HotelSection";


const SEOHelmet = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YK Travels - Services for Hotels, Trekking, Transport & Events</title>
      <meta name="description" content="YK Travels offers premium travel services including hotels, trekking, camping, transport, corporate events, family holidays, honeymoon packages, bachelor parties, school trips, and stargazing experiences." />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yktravels.com/" />
      <meta property="og:title" content="YK Travels - Your Complete Travel Experience Partner" />
      <meta property="og:description" content="Discover premium travel services from YK Travels: hotels, trekking, camping, transport, events, holidays, parties, trips, and unique experiences." />
      <meta property="og:image" content="https://www.yktravels.com/images/og-image.jpg" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.yktravels.com/" />
      <meta name="twitter:title" content="YK Travels - Premium Travel & Event Services" />
      <meta name="twitter:description" content="Plan your perfect trip with YK Travels' premium services - from hotels & trekking to transport, events, holidays, and special experiences." />
      <meta name="twitter:image" content="https://www.yktravels.com/images/twitter-image.jpg" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="travel services, hotels, trekking, camping, transport services, corporate events, family holidays, honeymoon packages, bachelor parties, school trips, college trips, office trips, stargazing events, holy trips, premium travel, YK Travels" />
      <meta name="author" content="YK Travels" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.yktravels.com/" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://www.yktravels.com/favicon.png" />
      <link rel="apple-touch-icon" href="https://www.yktravels.com/apple-touch-icon.png" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "YK Travels",
            "url": "https://www.yktravels.com",
            "logo": "https://www.yktravels.com/images/logo.png",
            "description": "Premium travel services including hotels, trekking, camping, transport, events, holidays, and unique experiences.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H.No 494, sadbhavna enclave, Sector 2C Rd, Sector 2C, Vasundhara, Ghaziabad, Uttar Pradesh",
              "addressLocality": "Ghaziabad",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201012",
              "addressCountry": "India"
            },
            "telephone": "+918766274009",
            "email": "singhpankaj008@gmail.com",
            "sameAs": [
              "https://www.instagram.com/y_k_adventure/",
             
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export  const handleClick = () => {
    const phoneNumber = '918766274009'; 

    // Format the message for WhatsApp
    const message = `Hello Yk Travels`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
};

const Home: React.FC = () => {

    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };
    return (
        <>
        <SEOHelmet />
            <main className="relative min-h-screen">
                <LandingSection />
                <HomeAbout />
                <HomeActivitySection />
                <HomeServices />
                <HotDealsBanner />
                <ExperienceStats />
                <HotelSection />
                <YKTravelsServices />
                <motion.section
                    id="contact"
                    className="relative w-full h-screen min-h-[400px] overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.img
                        src="/images/cta.jpg"
                        alt="best tours and travels agency in delhi ncr"
                        className="absolute w-full h-full object-cover object-center"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            className="max-w-3xl"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-fraunces-slab">
                                Get Ready
                            </h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-work-sans">
                                Book Adventure Now
                            </p>
                            <div className="flex flex-col">
                                <button
                                    className="bg-green-500 hover:bg-red-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    onClick={() => navigate('/packages')}
                                >
                                    BROWSE PACKAGES
                                </button>
                                <button
                                onClick={handleClick}
                                    className="bg-white hover:bg-green-700 text-green-700 hover:text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8">
                                    WhatsApp Now
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </motion.section>
            </main>
        </>
    )
}

export default Home; 
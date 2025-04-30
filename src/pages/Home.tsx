import React from "react"
import LandingSection from "../ui/LandingSection";
import ExperienceStats from "./StatsSection";
import HomeServices from "./HomeServices";
import HotDealsBanner from "./HotDealSection";
import HomeAbout from "../ui/HomeAbout";
import HomeActivitySection from "../ui/HomeActivitySection";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

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
        <main className="relative min-h-screen">
            <LandingSection />
            <HomeAbout />
            <HomeActivitySection />
            <HomeServices />
            <HotDealsBanner />
            <ExperienceStats />
            <motion.section
                id="contact"
                className="relative w-full h-screen min-h-[600px] overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.img
                    src="/images/cta.jpg"
                    alt="Kidsendo Clinic"
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
                                className="bg-white hover:bg-green-700 text-green-700 hover:text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8">
                                WhatsApp Now
                            </button>
                        </div>
                    </motion.div>
                </div>

            </motion.section>
        </main>
    )
}

export default Home; 
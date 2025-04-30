import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    ChevronRight,
     
} from "lucide-react";


const Footer: React.FC = () => {
    // Animation variants
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                staggerChildren: 0.1
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
    };

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Packages", path: "/packages" },
        { name: "Transportation", path: "/transportation" },
        { name: "Activities", path: "/activities" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const popularDestinations = [
        {name: "Nag Tibba Trek", path: '/packages/nag-tibba-trek'}, 
        { name: "Rishikesh", path: "/packages/rishikesh" },
        { name: "Manali", path: "/packages/manali" },
        { name: "Shimla", path: "/packages/shimla" },
        { name: "Nainital", path: "/packages/nainital" },
        { name: "Dharamshala", path: "/packages/dharamshala" },  
    ];

    const popularActivities = [
        { name: "Star Gazing", path: "/activity/star-gazing" },
        { name: "River Rafting", path: "/activity/river-rafting" },
        { name: "Jungle Safari", path: "/activity/jungle-safari" },
        { name: "Bungee Jumping", path: "/activity/bungee-jumping" },
        { name: "Paragliding", path: "/activity/paragliding" },
        { name: "Hiking", path: "/activity/hiking" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="bg-green-700 text-white pt-16 pb-6"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="YK travels best trekking groups"
                                className="h-12 bg-white p-1 rounded"
                            />
                            <span className="ml-3 font-bold text-xl text-white">
                                YK Travels
                            </span>
                        </Link>
                        <p className="text-green-100 mt-4">
                            Discover the beauty of India with our premium trekking and camping packages.
                            We specialize in creating unforgettable travel experiences across India.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <motion.a
                                href="https://instagram.com/y_k_adventure"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                className="bg-white text-green-600 p-2 rounded-full hover:bg-blue-300 transition-colors duration-300"
                            >
                                <Instagram size={18} />
                            </motion.a>

                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name} className="hover:translate-x-2 transition-transform duration-300">
                                    <Link to={link.path} className="flex items-center text-green-100 hover:text-white">
                                        <ChevronRight size={16} className="mr-2" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Popular Destinations & Activities */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Popular Destinations</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {popularDestinations.map((destination) => (
                                    <li key={destination.name} className="hover:translate-x-1 transition-transform duration-300">
                                        <Link to={destination.path} className="flex items-center text-green-100 hover:text-white">
                                            <ChevronRight size={14} className="mr-1" />
                                            {destination.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Activities</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {popularActivities.map((activity) => (
                                    <li key={activity.name} className="hover:translate-x-1 transition-transform duration-300">
                                        <Link to={activity.path} className="flex items-center text-green-100 hover:text-white">
                                            <ChevronRight size={14} className="mr-1" />
                                            {activity.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-green-400 pb-2 mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                                <p className="text-green-100">
                                : h.no 494, sadbhavna enclave, Sector 2C Rd, Sector 2C, Vasundhara, Ghaziabad, Uttar Pradesh 201012
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Phone size={20} className="mr-2 flex-shrink-0" />
                                <a href="tel:+91 8766274009" className="text-green-100 hover:text-white">
                                    +91 8766274009
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail size={20} className="mr-2 flex-shrink-0" />
                                <a href="mailto:singhpankaj008@gmail.com" className="text-green-100 hover:text-white">
                                singhpankaj008@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Footer */}
                <motion.div variants={itemVariants} className="mt-12 pt-6 border-t border-green-500">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-green-100 text-center md:text-left">
                            © {currentYear} Yk Travels. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link to="/terms-of-service" className="text-green-100 hover:text-white text-sm">
                                Terms of Service
                            </Link>
                            <Link to="/refund-policy" className="text-green-100 hover:text-white text-sm">
                                Refund Policy
                            </Link>
                            <p> Website by 
                                <a href="https://rnahealthtech.com" className="text-green-100 hover:text-white text-sm">
                                   {" "}Brand Growth Masters 
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
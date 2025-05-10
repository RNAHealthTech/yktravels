import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  logo?: string;
}

interface NavSubSubItem {
  name: string;
  path: string;
}

interface NavSubItem {
  name: string;
  path: string;
  submenu?: NavSubSubItem[];
}

interface NavItem {
  name: string;
  path: string;
  submenu?: NavSubItem[];
}

const Header: React.FC<HeaderProps> = ({ logo = "/images/logo.svg" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation links with submenus
  const navLinks: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/best-Tours-and-travels-agency-in-delhi-ncr" },
    {
      name: "Trekking & Camping Packages",
      path: "/packages",
      submenu: [
        {
          name: "Uttarakhand",
          path: "/packages/uttarakhand",
          submenu: [
            // { name: "Jim Corbett", path: "/packages/jim-corbett-yk-travels" },
            // { name: "Rishikesh", path: "/packages/rishikesh-yk-travels" },
            // { name: "Mussoorie", path: "/packages/mussoorie-yk-travels" },
            // { name: "Nainital", path: "/packages/nainital-yk-travels" },
            // { name: "Haridwar", path: "/packages/haridwar-yk-travels" },
            // {
            //   name: "Water Sports Tehri Dam", path: "/packages/water-sports-tehri-dam"
            // },
            {
              name: "Nag Tibba Trek", path: "/packages/nag-tibba-trek"
            },
            {
              name: "Ruinsara Tal Trek", path: "/packages/ruinsara-tal-trek"
            },
            {
              name: "Har ki Dun Trek", path: "/packages/har-ki-doon"
            },
            {
              name: "Ali Bedni Bugyal Trek", path: "/packages/ali-bedni-bugyal-trek"
            },
            { name: "Phulara Ridge Trek", path: "/packages/phulara-ridge-trek" },
            { name: "Dayara Bugyal Trek  ", path: "/packages/dayara-bugyal-trek" },
            { name: "Kauri Pass Trek", path: "/packages/kauri-pass-trek" },
            { name: "Bali Pass Trek", path: "/packages/bali-pass-trek" },
            { name: "Gaumukh Tapovan Trek", path: "/packages/gaumukh-tapovan-trek" },
            { name: "Chopta Chandrashila Trek", path: "/packages/chopta-chandrashila-trek" },
            { name: "Pangarchulla Trek", path: "/packages/pangarchulla-trek" },
            { name: "Char Dham Yatra", path: "/packages/char-dham-yatra" },
            { name: "Valley of Flowers", path: "/packages/valley-of-flowers" }
          ],
        },
        {
          name: "Himachal Pradesh",
          path: "/packages/himachal",
          submenu: [
            { name: "Manali", path: "/packages/manali-yk-travels" },
            { name: "Shimla", path: "/packages/shimla-yk-travels" },
            { name: "Dharamshala", path: "/packages/dharamshala-yk-travels" },
            { name: "Kasol", path: "/packages/kasol-yk-travels" },
          ],
        },
        {
          name: "Jammu & Kashmir",
          path: "/packages/j&k",
          submenu: [
            { name: "Jammu & Kashmir", path: "/packages/jammu-kashmir-yk-travels" },
            { name: "Srinagar", path: "/packages/srinagar-yk-travels" },
            { name: "Gulmarg", path: "/packages/gulmarg-yk-travels" },
            { name: "Pahalgam", path: "/packages/pahalgam-yk-travels" },
            { name: "Sonmarg", path: "/packages/sonmarg-yk-travels" },
            { name: "Leh & Ladakh", path: "/packages/leh-ladakh-yk-travels" },
          ],
        },
      ],
    },
    { name: "Book Hotels & Resorts", path: "/book-hotels-resorts-yk-travels" },
    { name: "Transportation Services", path: "/transportation" },
    {
      name: "Activities",
      path: "/activities",
      submenu: [
        { name: "Star Gazing", path: "/activity/star-gazing" },
        { name: "River Rafting / Water Sports", path: "/activity/river-rafting" },
        { name: "Jungle Safari", path: "/activity/jungle-safari" },
        { name: "Bungee Jumping", path: "/activity/bungee-jumping" },
        { name: "Camping", path: "/activity/camping" },
        { name: "Hiking", path: "/activity/hiking" },
        { name: "Paragliding", path: "/activity/paragliding" },
      ],
    },
    { name: "Blog/News", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset dropdowns when closing the menu
    if (isMenuOpen) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  const toggleDropdown = (name: string) => {
    // If clicking on the same dropdown, close it
    if (activeDropdown === name) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      // Otherwise, open this dropdown and close any subdropdown
      setActiveDropdown(name);
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (name: string, event: React.MouseEvent) => {
    // Stop event from bubbling up
    event.stopPropagation();
    // Toggle subdropdown
    setActiveSubDropdown(activeSubDropdown === name ? null : name);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="best adventure agency"
                className="h-28 w-38 md:h-24 lg:h-32"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-4 lg:space-x-6"
            ref={dropdownRef}
          >
            {navLinks.map((link, i) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center text-base font-medium hover:text-green-400 transition-colors px-3 py-2 text-green-700"
                    >
                      <motion.span custom={i} variants={linkVariants}>
                        {link.name}
                      </motion.span>
                      <svg
                        className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 mt-2 w-56 rounded-md shadow-lg text-green-700 bg-white z-50"
                        >
                          <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                            {link.submenu.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="relative group/sub"
                              >
                                {subItem.submenu ? (
                                  <>
                                    <button
                                      onClick={(e) =>
                                        toggleSubDropdown(subItem.name, e)
                                      }
                                      className="w-full text-left block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 flex justify-between items-center"
                                    >
                                      <span>{subItem.name}</span>
                                      <svg
                                        className={`h-4 w-4 transform transition-transform ${activeSubDropdown === subItem.name
                                          ? "rotate-180"
                                          : ""
                                          }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </button>
                                    <AnimatePresence>
                                      {activeSubDropdown === subItem.name && (
                                        <motion.div
                                          variants={dropdownVariants}
                                          initial="hidden"
                                          animate="visible"
                                          exit="exit"
                                          className="absolute left-full top-0 w-56 ml-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                                        >
                                          {subItem.submenu.map(
                                            (subSubItem) => (
                                              <Link
                                                key={subSubItem.name}
                                                to={subSubItem.path}
                                                className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
                                              >
                                                {subSubItem.name}
                                              </Link>
                                            )
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="text-base font-medium hover:text-green-400 transition-colors px-3 py-2 text-green-600"
                  >
                    <motion.span custom={i} variants={linkVariants}>
                      {link.name}
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? "text-green-800" : "text-white"
                }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-700 overflow-hidden max-h-[80vh] overflow-y-auto" // Added overflow-y-auto and max-h
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-600"
                      >
                        <motion.span
                          custom={i}
                          variants={linkVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {link.name}
                        </motion.span>
                        <svg
                          className={`ml-2 h-5 w-5 transform transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 bg-green-600 overflow-hidden"
                          >
                            {link.name === "Trekking & Camping Packages" ? (
                              <>
                                {/* Uttarakhand heading */}
                                <div className="px-3 py-2 text-sm font-bold bg-white text-green-700 ">
                                  Uttarakhand
                                </div>
                                {/* Uttarakhand items */}
                                {link.submenu
                                  .find((item) => item.name === "Uttarakhand")
                                  ?.submenu?.map((location) => (
                                    <Link
                                      key={location.name}
                                      to={location.path}
                                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {location.name}
                                    </Link>
                                  ))}

                                {/* Himachal Pradesh heading */}
                                <div className="px-3 py-2 text-sm font-bold bg-white text-green-700  mt-2">
                                  Himachal Pradesh
                                </div>
                                {/* Himachal Pradesh items */}
                                {link.submenu
                                  .find((item) => item.name === "Himachal Pradesh")
                                  ?.submenu?.map((location) => (
                                    <Link
                                      key={location.name}
                                      to={location.path}
                                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {location.name}
                                    </Link>
                                  ))}
                                {/* Jammu & Kashmir heading */}
                                <div className="px-3 py-2 text-sm font-bold text-green-700 bg-white mt-2">
                                  Jammu & Kashmir
                                </div>
                                {/* Jammu & Kashmir items */}
                                {link.submenu
                                  .find((item) => item.name === "Jammu & Kashmir")
                                  ?.submenu?.map((location) => (
                                    <Link
                                      key={location.name}
                                      to={location.path}
                                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {location.name}
                                    </Link>
                                  ))}
                              </>
                            ) : (
                              /* Handle regular submenu items for other menus */
                              link.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        custom={i}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;


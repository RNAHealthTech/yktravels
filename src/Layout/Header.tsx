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

const Header: React.FC<HeaderProps> = ({ logo = "/images/logo.png" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation links with submenus
  const navLinks: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Trekking & Camping Packages", 
      path: "/packages",
      submenu: [
        { 
          name: "Uttarakhand", 
          path: "/packages/uttarakhand",
          submenu: [
            { name: "Rishikesh", path: "/packages/uttarakhand/rishikesh" },
            { name: "Mussoorie", path: "/packages/uttarakhand/mussoorie" },
            { name: "Nainital", path: "/packages/uttarakhand/nainital" },
            { name: "Haridwar", path: "/packages/uttarakhand/haridwar" },
          ]
        },
        { 
          name: "Himachal Pradesh", 
          path: "/packages/himachal",
          submenu: [
            { name: "Manali", path: "/packages/himachal/manali" },
            { name: "Shimla", path: "/packages/himachal/shimla" },
            { name: "Dharamshala", path: "/packages/himachal/dharamshala" },
            { name: "Kasol", path: "/packages/himachal/kasol" },
          ]
        }
      ]
    },
    { name: "Transportation Services", path: "/transportation" },
    { 
      name: "Activities", 
      path: "/activities",
      submenu: [
        { name: "Star Gazing", path: "/activities/star-gazing" },
        { name: "River Rafting", path: "/activities/river-rafting" },
        { name: "Jungle Safari", path: "/activities/jungle-safari" },
        { name: "Bungee Jumping", path: "/activities/bungee-jumping" },
        { name: "Hiking", path: "/activities/hiking" },
        { name: "Paragliding", path: "/activities/paragliding" },
        { name: "Water Sports", path: "/activities/water-sports" },
      ]
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="best adventure agency" 
                className="h-16 w-26 md:h-12 lg:h-20" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6" ref={dropdownRef}>
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
                        className={`ml-1 h-4 w-4 transform transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
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
                              <div key={subItem.name} className="relative group/sub">
                                {subItem.submenu ? (
                                  <>
                                    <button
                                      className="w-full text-left block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 flex justify-between items-center"
                                    >
                                      <span>{subItem.name}</span>
                                      <svg
                                        className="h-4 w-4"
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
                                    <div className="absolute left-full top-0 w-56 opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-300">
                                      <div className="ml-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                                        {subItem.submenu.map((subSubItem) => (
                                          <Link
                                            key={subSubItem.name}
                                            to={subSubItem.path}
                                            className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
                                          >
                                            {subSubItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
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
              className="p-2 rounded-md focus:outline-none text-green-800"
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
            className="md:hidden bg-green-700 overflow-hidden"
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
                          className={`ml-2 h-5 w-5 transform transition-transform ${
                            activeDropdown === link.name ? "rotate-180" : ""
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
                            className="pl-4 bg-green-600"
                          >
                            {link.submenu.map((subItem) => (
                              <div key={subItem.name}>
                                {subItem.submenu ? (
                                  <>
                                    <button
                                      onClick={(e) => toggleSubDropdown(subItem.name, e)}
                                      className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                    >
                                      {subItem.name}
                                      <svg
                                        className={`ml-2 h-4 w-4 transform transition-transform ${
                                          activeSubDropdown === subItem.name ? "rotate-180" : ""
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
                                      {activeSubDropdown === subItem.name && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="pl-4 bg-green-700"
                                        >
                                          {subItem.submenu.map((subSubItem) => (
                                            <Link
                                              key={subSubItem.name}
                                              to={subSubItem.path}
                                              className="block px-3 py-2 text-xs font-medium text-white hover:bg-green-800"
                                              onClick={() => {
                                                setIsMenuOpen(false);
                                                setActiveDropdown(null);
                                                setActiveSubDropdown(null);
                                              }}
                                            >
                                              {subSubItem.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
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

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// interface HeaderProps {
//   logo?: string;
// }

// interface NavSubSubItem {
//     name: string;
//     path: string;
//   }
  
// interface NavSubItem {
//     name: string;
//     path: string;
//     submenu?: NavSubSubItem[];
//   }
  
// interface NavItem {
//     name: string;
//     path: string;
//     submenu?: NavSubItem[];
//   }

// const Header: React.FC<HeaderProps> = ({ logo = "/images/logo.png" }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Navigation links with submenus
//   const navLinks: NavItem[] = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { 
//       name: "Trekking & Camping Packages", 
//       path: "/packages",
//       submenu: [
//         { 
//           name: "Uttarakhand", 
//           path: "/packages/uttarakhand",
//           submenu: [
//             { name: "Rishikesh", path: "/packages/uttarakhand/rishikesh" },
//             { name: "Mussoorie", path: "/packages/uttarakhand/mussoorie" },
//             { name: "Nainital", path: "/packages/uttarakhand/nainital" },
//             { name: "Haridwar", path: "/packages/uttarakhand/haridwar" },
//           ]
//         },
//         { 
//           name: "Himachal Pradesh", 
//           path: "/packages/himachal",
//           submenu: [
//             { name: "Manali", path: "/packages/himachal/manali" },
//             { name: "Shimla", path: "/packages/himachal/shimla" },
//             { name: "Dharamshala", path: "/packages/himachal/dharamshala" },
//             { name: "Kasol", path: "/packages/himachal/kasol" },
//           ]
//         }
//       ]
//     },
//     { name: "Transportation Services", path: "/transportation" },
//     { 
//       name: "Activities", 
//       path: "/activities",
//       submenu: [
//         { name: "Star Gazing", path: "/activities/star-gazing" },
//         { name: "River Rafting", path: "/activities/river-rafting" },
//         { name: "Jungle Safari", path: "/activities/jungle-safari" },
//         { name: "Bungee Jumping", path: "/activities/bungee-jumping" },
//         { name: "Hiking", path: "/activities/hiking" },
//         { name: "Paragliding", path: "/activities/paragliding" },
//         { name: "Water Sports", path: "/activities/water-sports" },
//       ]
//     },
//     { name: "Blog/News", path: "/blogs" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Animation variants
//   const headerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const linkVariants = {
//     hidden: { opacity: 0 },
//     visible: (i: number) => ({
//       opacity: 1,
//       transition: { delay: i * 0.1, duration: 0.5 },
//     }),
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = (name: string) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   return (
//     <motion.header
//       initial="hidden"
//       animate="visible"
//       variants={headerVariants}
//       className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center">
//               <img 
//                 src={logo} 
//                 alt="best adventure agency" 
//                 className="h-16 w-26 md:h-12 lg:h-20" 
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-4 lg:space-x-6" ref={dropdownRef}>
//             {navLinks.map((link, i) => (
//               <div key={link.name} className="relative group">
//                 {link.submenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(link.name)}
//                       className={`flex items-center text-base font-medium hover:text-green-400 transition-colors px-3 py-2 text-green-700"
//                       }`}
//                     >
//                       <motion.span custom={i} variants={linkVariants}>
//                         {link.name}
//                       </motion.span>
//                       <svg
//                         className={`ml-1 h-4 w-4 transform transition-transform ${
//                           activeDropdown === link.name ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     <AnimatePresence>
//                       {activeDropdown === link.name && (
//                         <motion.div
//                           variants={dropdownVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                           className="absolute left-0 mt-2 w-56 rounded-md shadow-lg text-green-700 bg-white z-50"
//                         >
//                           <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
//                             {link.submenu.map((subItem) => (
//                               <div key={subItem.name} className="relative group/sub">
//                                 {subItem.submenu ? (
//                                   <>
//                                     <button
//                                       className="w-full text-left block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 flex justify-between items-center"
//                                     >
//                                       <span>{subItem.name}</span>
//                                       <svg
//                                         className="h-4 w-4"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                       >
//                                         <path
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                           strokeWidth={2}
//                                           d="M9 5l7 7-7 7"
//                                         />
//                                       </svg>
//                                     </button>
//                                     <div className="absolute left-full top-0 w-56 opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-300">
//                                       <div className="ml-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
//                                         {subItem.submenu.map((subSubItem) => (
//                                           <Link
//                                             key={subSubItem.name}
//                                             to={subSubItem.path}
//                                             className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
//                                           >
//                                             {subSubItem.name}
//                                           </Link>
//                                         ))}
//                                       </div>
//                                     </div>
//                                   </>
//                                 ) : (
//                                   <Link
//                                     to={subItem.path}
//                                     className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100"
//                                   >
//                                     {subItem.name}
//                                   </Link>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </>
//                 ) : (
//                   <Link
//                     to={link.path}
//                     className={`text-base font-medium hover:text-green-400 transition-colors px-3 py-2 text-green-600}`}
//                   >
//                     <motion.span custom={i} variants={linkVariants}>
//                       {link.name}
//                     </motion.span>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Toggle Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`p-2 rounded-md focus:outline-none text-green-800`}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-green-700 overflow-hidden"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link, i) => (
//                 <div key={link.name}>
//                   {link.submenu ? (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(link.name)}
//                         className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-600"
//                       >
//                         <motion.span
//                           custom={i}
//                           variants={linkVariants}
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           {link.name}
//                         </motion.span>
//                         <svg
//                           className={`ml-2 h-5 w-5 transform transition-transform ${
//                             activeDropdown === link.name ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === link.name && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="pl-4 bg-green-600"
//                           >
//                             {link.submenu.map((subItem) => (
//                               <div key={subItem.name}>
//                                 {subItem.submenu ? (
//                                   <>
//                                     <button
//                                       onClick={() => toggleDropdown(subItem.name)}
//                                       className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
//                                     >
//                                       {subItem.name}
//                                       <svg
//                                         className={`ml-2 h-4 w-4 transform transition-transform ${
//                                           activeDropdown === subItem.name ? "rotate-180" : ""
//                                         }`}
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                       >
//                                         <path
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                           strokeWidth={2}
//                                           d="M19 9l-7 7-7-7"
//                                         />
//                                       </svg>
//                                     </button>
//                                     <AnimatePresence>
//                                       {activeDropdown === subItem.name && (
//                                         <motion.div
//                                           initial={{ opacity: 0, height: 0 }}
//                                           animate={{ opacity: 1, height: "auto" }}
//                                           exit={{ opacity: 0, height: 0 }}
//                                           className="pl-4 bg-green-700"
//                                         >
//                                           {subItem.submenu.map((subSubItem) => (
//                                             <Link
//                                               key={subSubItem.name}
//                                               to={subSubItem.path}
//                                               className="block px-3 py-2 text-xs font-medium text-white hover:bg-green-800"
//                                               onClick={() => setIsMenuOpen(false)}
//                                             >
//                                               {subSubItem.name}
//                                             </Link>
//                                           ))}
//                                         </motion.div>
//                                       )}
//                                     </AnimatePresence>
//                                   </>
//                                 ) : (
//                                   <Link
//                                     to={subItem.path}
//                                     className="block px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
//                                     onClick={() => setIsMenuOpen(false)}
//                                   >
//                                     {subItem.name}
//                                   </Link>
//                                 )}
//                               </div>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </>
//                   ) : (
//                     <Link
//                       to={link.path}
//                       className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-600"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <motion.span
//                         custom={i}
//                         variants={linkVariants}
//                         initial="hidden"
//                         animate="visible"
//                       >
//                         {link.name}
//                       </motion.span>
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Header;
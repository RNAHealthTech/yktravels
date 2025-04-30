import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Package } from '../data/packages';
import { useNavigate } from 'react-router-dom';

// Card component for each trip package
const PackageCard = ({ pkg }: { pkg: Package }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.images[0]?.src || "/api/placeholder/400/300"}
          alt={pkg.images[0]?.alt || pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-20" />
      </div>

      <div className="flex-1 p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <span className="text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-gray-700 text-sm">{pkg.duration}</span>
          </div>

          <div className="bg-green-600 text-white px-4 py-2 rounded-md font-bold">
            ₹{pkg.price}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <motion.button
          className="w-full py-2 bg-white text-green-700 border border-green-700 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/packages/${pkg.slug}`)}
        >
          View Trip
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Extract day number from duration string (e.g. "3 Days, 2 Nights" => 3)
const extractDayNumber = (duration: string): number => {
  const match = duration.match(/(\d+)\s*Days?/i);
  return match ? parseInt(match[1], 10) : 0;
};

const HomeServices = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState<string[]>([]);
  const [dayOptions, setDayOptions] = useState<number[]>([]);

  // Filter states
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    import('../data/packages').then(module => {
      const allPackages = module.default || [];
      setPackages(allPackages);
      setFilteredPackages(allPackages);

      // Extract unique states
      const uniqueStates = Array.from(new Set(allPackages.map(pkg => pkg.state)));
      setStates(uniqueStates);

      // Extract unique day numbers and sort them
      const uniqueDays = Array.from(
        new Set(
          allPackages
            .map(pkg => extractDayNumber(pkg.duration))
            .filter(days => days > 0)
        )
      ).sort((a, b) => a - b);

      setDayOptions(uniqueDays);
      setLoading(false);
    }).catch(error => {
      console.error("Failed to load packages:", error);
      setLoading(false);
    });
  }, []);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...packages];

    // Filter by state
    if (selectedState) {
      filtered = filtered.filter(pkg => pkg.state === selectedState);
    }

    // Filter by days
    if (selectedDays) {
      const daysNum = parseInt(selectedDays, 10);
      filtered = filtered.filter(pkg => {
        const packageDays = extractDayNumber(pkg.duration);
        return packageDays === daysNum;
      });
    }

    setFilteredPackages(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedState("");
    setSelectedDays("");
    setFilteredPackages(packages);
  };

  return (
    <section className="py-16 bg-gray-50 z-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Adventure Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated adventure packages designed to give you unforgettable experiences in the most beautiful destinations.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          className="mb-10 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Destination Filter */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Destination</label>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">All Destinations</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Days Filter */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Duration (Days)</label>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedDays}
                onChange={(e) => setSelectedDays(e.target.value)}
              >
                <option value="">Any Duration</option>
                {dayOptions.map((days, index) => (
                  <option key={index} value={days.toString()}>{days} Day{days !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end gap-2">
              <button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                onClick={applyFilters}
              >
                <Search size={18} />
                Search
              </button>
              <button
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : (
          <>
            {filteredPackages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No packages found matching your criteria.</p>
                <button
                  className="mt-4 px-4 py-2 text-green-700 border border-green-700 rounded-md hover:bg-green-50 transition-colors"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}
          </>
        )}

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            className="px-6 py-3 border-2 border-green-700 text-green-700 bg-white rounded-md font-medium hover:bg-green-50 transition-colors flex items-center gap-2 mx-auto"
            onClick={() => navigate("/packages")}
          >
            View All Packages
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Package } from '../data/packages';
import Activities from '../data/activities';

// Card component for package (reused from HomeServices)
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
          onClick={()=>navigate(`/packages/${pkg.slug}`)}
        >
          View Trip
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ActivityTemplate = () => {
  const { activitySlug } = useParams<{ activitySlug: string }>();
  const [relatedPackages, setRelatedPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState<typeof Activities[keyof typeof Activities] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the activity by slug
    if (!activitySlug || !Activities[activitySlug]) {
      navigate('/not-found', { replace: true });
      return;
    }

    setActivity(Activities[activitySlug]);

    // Load packages and filter them based on the activityTags
    import('../data/packages').then(module => {
      const allPackages = module.default || [];
      
      // Find packages that have this activity slug in their activityTags array
      const packagesWithActivity = allPackages.filter(pkg => 
        pkg.activityTags?.includes(activitySlug)
      );
      
      setRelatedPackages(packagesWithActivity);
      setLoading(false);
    }).catch(error => {
      console.error("Failed to load packages:", error);
      setLoading(false);
    });
  }, [activitySlug, navigate]);

  if (!activity) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-80 lg:h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={activity.image || "/api/placeholder/1600/900"} 
          alt={activity.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{activity.title}</h1>
             <div className="w-24 h-1 bg-green-500 mx-auto mt-4" />
          </div>
        </div>
      </motion.div>
      
      {/* Activity Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Replace the dangerouslySetInnerHTML with ReactMarkdown */}
            <ReactMarkdown>
              {activity.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Trips Featuring {activity.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our adventure packages that include {activity.title.toLowerCase()} experiences in stunning locations.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : (
          <>
            {relatedPackages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No packages featuring {activity.title} are currently available.
                </p>
                <button 
                  className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  onClick={() => navigate('/packages')}
                >
                  Browse All Packages
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedPackages.map((pkg) => (
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
            onClick={()=>navigate("/contact")}>
            Contact Us Now! 
        <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ActivityTemplate;
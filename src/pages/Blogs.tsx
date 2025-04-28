import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import blogs from '../data/blogs';

const Blogs = () => {
  const [hoveredBlogImage, setHoveredBlogImage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-16 bg-white mt-28">
      <h1 className="text-4xl font-bold mb-10 text-blue-500 text-center">Our Trekking Adventures</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(blogs).map((blog) => (
          <motion.div
            key={blog.slug}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <motion.div 
              className="h-48 overflow-hidden cursor-pointer relative"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setHoveredBlogImage(blog.slug)}
              onMouseLeave={() => setHoveredBlogImage(null)}
              onClick={() => navigate(`/blogs/${blog.slug}`)}
            >
              <img 
                src={blog.image1} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Tags overlay that appears on hover */}
              <AnimatePresence>
                {hoveredBlogImage === blog.slug && (
                  <motion.div 
                    className="absolute inset-0 bg-blue-500 bg-opacity-80 flex flex-col justify-center items-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}> 
                    <div className="flex flex-wrap justify-center gap-2">
                      {blog.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-white text-blue-500 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-blue-500 mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-4">
                {blog.content.split('\n').filter(line => !line.startsWith('!')).join(' ').substring(0, 150)}...
              </p>
              
              <div className="mt-auto">
                <motion.button
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/blogs/${blog.slug}`)}
                >
                  Read More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogs from '../data/blogs';
import ReactMarkdown from 'react-markdown';

interface BlogProps {
  slug: string;
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  content: string;
  tags: string[];
}

const BlogTemplate: React.FC = () => {
  const { slug } = useParams<{ slug : string }>();
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const [suggestedBlogs, setSuggestedBlogs] = useState<BlogProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug && typeof slug === 'string') {
      // Fetch current blog
      const currentBlog = blogs[slug as string];
      
      if (currentBlog) {
        setBlog(currentBlog);
        
        // Get suggested blogs (excluding current one)
        const otherBlogs = Object.values(blogs)
          .filter(b => b.slug !== slug)
          .sort(() => 0.5 - Math.random()) // Shuffle
          .slice(0, 3); // Take 3 random blogs
        
        setSuggestedBlogs(otherBlogs);
      }
      
      setIsLoading(false);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Blog not found</h1>
        <p className="mt-4 text-lg text-gray-600">The blog you're looking for doesn't exist.</p>
        <Link to="/blogs" className="mt-8 inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300">
          Back to All Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
          <img 
            src={blog.image1}
            alt={blog.title}
            
           />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none">
            <div className="mb-6 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 text-green-800 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="blog-content">
              <ReactMarkdown
                components={{
                  img: ({node, ...props}) => (
                    <div className="my-8">
                      <img
                        src={props.src || ''}
                        alt={props.alt || ''}
                        width={800}
                        height={500}
                        className="rounded-lg w-full h-auto"
                      />
                      {props.alt && <p className="text-center text-gray-500 mt-2">{props.alt}</p>}
                    </div>
                  ),
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-green-800 mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-green-700 mt-6 mb-3" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold text-green-600 mt-5 mb-2" {...props} />,
                  p: ({node, ...props}) => <p className="my-4 text-gray-700 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-green-800" {...props} />,
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
            
            {/* Mobile suggested blogs (shown only on smaller screens) */}
            <div className="mt-12 lg:hidden">
              <h3 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-yellow-300">
                Suggested Adventures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suggestedBlogs.map((blog) => (
                  <SuggestedBlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar - suggested blogs (shown only on larger screens) */}
          <aside className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-8 bg-green-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-yellow-300">
                Suggested Adventures
              </h3>
              <div className="space-y-6">
                {suggestedBlogs.map((blog) => (
                  <SuggestedBlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-green-800 text-white mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Next Adventure?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Uttarakhand with YK Travels. 
            Our expert guides will ensure a safe and memorable journey.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-yellow-500 text-green-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300">
            Plan Your Trek Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// Suggested blog card component
const SuggestedBlogCard: React.FC<{ blog: BlogProps }> = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="block group">
      <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300">
        <div className="relative h-48 w-full">
          <img
            src={blog.image1}
            alt={blog.title}
          />
        </div>
        <div className="p-4">
          <h4 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition duration-300">
            {blog.title}
          </h4>
          <div className="mt-3 flex flex-wrap gap-1">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-green-800 rounded-full">
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogTemplate;
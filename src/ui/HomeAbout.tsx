import React from "react";


export default function HomeAbout() {
  
  return (
    <div className="relative w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/mountain-background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
 
     
      
      {/* About section */}
      <div className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Travel Your Destination
                <div className="h-1 w-16 bg-green-500 mt-4"></div>
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  At YK Travels, we believe that life is meant to be lived to the fullest, and there's
                  no better way to do that than by exploring the great outdoors. Whether you're
                  seeking the thrill of adventure, the peace of nature, or the joy of discovery, YK
                  Travels is here to guide you every step of the way.
                </p>
                <p>
                  Join us and embark on a journey that will inspire your soul, challenge your
                  limits, and connect you with the natural beauty of our world.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/homeabout.jpg" 
                  alt="A person standing on a mountain peak looking at a beautiful sunset" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/600/400";
                    e.currentTarget.alt = "Mountain view placeholder";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
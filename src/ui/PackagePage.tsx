import React from 'react';
import { useParams } from 'react-router-dom';
import PackageTemplate from './PackageTemplate';
import packages from '../data/packages';

const PackagePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const packageData = packages.find(pkg => pkg.slug === slug);

  if (!packageData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Package Not Found</h1>
        <p className="text-gray-600 mb-8">The package you're looking for doesn't exist or has been removed.</p>
        <a href="/" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
          Return to Home
        </a>
      </div>
    );
  }

  return <PackageTemplate packageData={packageData} />;
};

export default PackagePage;
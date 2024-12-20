import React from 'react';

interface CategoryContentProps {
  title: string;
  description: string;
  content: string;
}

export const CategoryContent = ({ title, description, content }: CategoryContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-6">
        {title}
      </h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          {description}
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-display font-semibold mb-4">
            About {title}
          </h2>
          <p className="text-gray-600">
            {content}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-display font-semibold">
            Why Choose Our Services?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Carefully vetted and trusted vendors</li>
            <li>Competitive prices and special packages</li>
            <li>Local expertise and knowledge</li>
            <li>Easy booking and scheduling</li>
            <li>Verified customer reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
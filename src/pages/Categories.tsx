import React from 'react';
import { SEOHead } from "../components/SEOHead";
import { Navbar } from "../components/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { categories } from '../data/categories';

const Categories = () => {
  return (
    <>
      <SEOHead
        title="Wedding Categories | Find Local Vendors"
        description="Explore our comprehensive list of wedding service categories. Find and book trusted vendors for your special day."
        keywords={["wedding categories", "wedding services", "wedding vendors", "wedding planning"]}
        canonicalUrl="https://yourwebsite.com/categories"
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            Wedding Service Categories
          </h1>
          <p className="text-lg text-gray-600">
            Browse through our comprehensive list of wedding services and find the perfect vendors for your special day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.link}
              title={category.title}
              icon={category.icon}
              description={category.description}
              link={`/categories/${category.link}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Categories;
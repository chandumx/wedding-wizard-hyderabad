import React from 'react';

interface BreadcrumbsProps {
  items: {
    label: string;
    link?: string;
  }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="text-sm breadcrumbs mb-6">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {item.link ? (
                <a href={item.link} className="text-primary hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </li>
            {index < items.length - 1 && (
              <li className="text-gray-400">/</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
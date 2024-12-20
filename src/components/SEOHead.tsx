import { Helmet } from "react-helmet";
import { SEOConfig } from "../types/seo";

interface SEOHeadProps extends SEOConfig {
  schema?: object;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "/og-image.png",
  ogType = "website",
  schema
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
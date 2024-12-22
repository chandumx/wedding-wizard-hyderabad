interface CategoryDescription {
  title: string;
  description: string;
  content: string;
}

export const categoryDescriptions: Record<string, CategoryDescription> = {
  "wedding-halls": {
    title: "Wedding Halls",
    description: "Elegant wedding halls for your special day",
    content: "Discover our collection of premium wedding halls in Hyderabad. Our venues offer state-of-the-art facilities, elegant decor, and professional services to make your wedding celebration truly memorable. From intimate gatherings to grand celebrations, we have the perfect venue for every occasion.",
  },
  "banquet-halls": {
    title: "Banquet Halls",
    description: "Elegant banquet halls for your celebrations",
    content: "Discover premium banquet halls perfect for your wedding celebrations. Our curated venues offer elegant spaces with modern amenities and professional services.",
  },
  "open-venues": {
    title: "Open Lawns & Gardens",
    description: "Beautiful outdoor venues for ceremonies",
    content: "Host your dream wedding in our stunning open-air venues. Our collection of open lawns and gardens provides the perfect natural backdrop for your special day. Each venue offers spacious layouts, lush greenery, and flexible arrangements to accommodate both intimate gatherings and grand celebrations. With professional landscaping and modern amenities, our open venues combine the beauty of nature with the convenience of modern facilities.",
  },
  "hotels-resorts": {
    title: "Hotels & Resorts",
    description: "Luxury hotels and resorts for weddings",
    content: "Choose from premium hotels and resorts that offer complete wedding packages with accommodation, catering, and event management services.",
  },
  "farmhouses": {
    title: "Farmhouses",
    description: "Spacious farmhouses for private celebrations",
    content: "Book spacious farmhouses for private wedding celebrations. Perfect for both intimate gatherings and grand celebrations with ample parking and amenities.",
  },
  "convention-centers": {
    title: "Convention Centers",
    description: "Large convention centers for grand events",
    content: "Plan your grand wedding at our spacious convention centers. Ideal for large gatherings with state-of-the-art facilities and professional management.",
  },
  "traditional-cuisine": {
    title: "Traditional Indian Cuisine",
    description: "Authentic Indian wedding cuisine and catering services",
    content: "Experience the rich flavors and cultural heritage of traditional Indian cuisine for your wedding celebrations. Our curated selection of traditional cuisine vendors specialize in authentic regional dishes, customized menus, and professional catering services. From elaborate wedding feasts to intimate family gatherings, our vendors ensure that every meal is a memorable celebration of Indian culinary traditions. We offer specialized services including live cooking stations, traditional sweets preparation, and customized menu planning to match your specific preferences and dietary requirements.",
  },
};

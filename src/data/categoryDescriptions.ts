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
    content: "Host your wedding in beautiful outdoor settings. Our collection of open lawns and gardens provides the perfect backdrop for memorable celebrations.",
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
  }
};

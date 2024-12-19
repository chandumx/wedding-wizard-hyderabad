export interface Location {
  name: string;
  slug: string;
  image: string;
  vendorCount: number;
  description: string;
  areas: SubLocation[];
}

export interface SubLocation {
  name: string;
  slug: string;
}

export const locations: Location[] = [
  {
    name: "Old City",
    slug: "old-city",
    image: "/placeholder.svg",
    vendorCount: 250,
    description: "Discover wedding venues and services in the historic Old City area of Hyderabad, including Charminar, Pathergatti, and Falaknuma.",
    areas: [
      { name: "Charminar Area", slug: "charminar" },
      { name: "Gowlipura", slug: "gowlipura" },
      { name: "Pathergatti", slug: "pathergatti" },
      { name: "Shalibanda", slug: "shalibanda" },
      { name: "Moghalpura", slug: "moghalpura" },
      { name: "Hussaini Alam", slug: "hussaini-alam" },
      { name: "Falaknuma", slug: "falaknuma" }
    ]
  },
  {
    name: "Banjara Hills",
    slug: "banjara-hills",
    image: "/placeholder.svg",
    vendorCount: 300,
    description: "Explore premium wedding venues and services in Banjara Hills, featuring luxury hotels and modern banquet halls.",
    areas: [
      { name: "Road No. 1 to 14", slug: "road-1-14" },
      { name: "MLA Colony", slug: "mla-colony" },
      { name: "Lotus Pond", slug: "lotus-pond" },
      { name: "Naveen Nagar", slug: "naveen-nagar" }
    ]
  },
  {
    name: "Jubilee Hills",
    slug: "jubilee-hills",
    image: "/placeholder.svg",
    vendorCount: 280,
    description: "Find upscale wedding venues and premium services in Jubilee Hills, known for its elegant function halls and luxury services.",
    areas: [
      { name: "Road No. 36", slug: "road-36" },
      { name: "Road No. 45", slug: "road-45" },
      { name: "Film Nagar", slug: "film-nagar" },
      { name: "Journalist Colony", slug: "journalist-colony" }
    ]
  },
  {
    name: "Secunderabad",
    slug: "secunderabad",
    image: "/placeholder.svg",
    vendorCount: 200,
    description: "Explore traditional and modern wedding venues in Secunderabad, featuring heritage buildings and contemporary event spaces.",
    areas: [
      { name: "Mettuguda", slug: "mettuguda" },
      { name: "Marredpally", slug: "marredpally" },
      { name: "Trimulgherry", slug: "trimulgherry" },
      { name: "Bowenpally", slug: "bowenpally" },
      { name: "Bolarum", slug: "bolarum" }
    ]
  },
  {
    name: "Madhapur",
    slug: "madhapur",
    image: "/placeholder.svg",
    vendorCount: 180,
    description: "Modern wedding venues and services in the heart of Hitech City, perfect for contemporary celebrations.",
    areas: [
      { name: "Hitech City", slug: "hitech-city" },
      { name: "Shilparamam", slug: "shilparamam" },
      { name: "Kavuri Hills", slug: "kavuri-hills" },
      { name: "Durgam Cheruvu", slug: "durgam-cheruvu" }
    ]
  },
  {
    name: "Gachibowli",
    slug: "gachibowli",
    image: "/placeholder.svg",
    vendorCount: 150,
    description: "Discover premium wedding venues in Gachibowli's Financial District, featuring modern banquet halls and hotel venues.",
    areas: [
      { name: "Financial District", slug: "financial-district" },
      { name: "Nanakramguda", slug: "nanakramguda" },
      { name: "Manikonda", slug: "manikonda" },
      { name: "Khajaguda", slug: "khajaguda" }
    ]
  },
  {
    name: "Uppal",
    slug: "uppal",
    image: "/placeholder.svg",
    vendorCount: 120,
    description: "Wedding venues and services in East Hyderabad, offering affordable and spacious celebration spaces.",
    areas: [
      { name: "Ramanthapur", slug: "ramanthapur" },
      { name: "Habsiguda", slug: "habsiguda" },
      { name: "Nagole", slug: "nagole" },
      { name: "Kothapet", slug: "kothapet" }
    ]
  },
  {
    name: "Dilsukhnagar",
    slug: "dilsukhnagar",
    image: "/placeholder.svg",
    vendorCount: 160,
    description: "Popular wedding venues and services in East Hyderabad, known for traditional function halls and catering services.",
    areas: [
      { name: "Kothapet", slug: "kothapet" },
      { name: "Chaitanyapuri", slug: "chaitanyapuri" },
      { name: "Moosarambagh", slug: "moosarambagh" },
      { name: "Amberpet", slug: "amberpet" }
    ]
  },
  {
    name: "Kukatpally",
    slug: "kukatpally",
    image: "/placeholder.svg",
    vendorCount: 200,
    description: "Extensive selection of wedding venues and services in North Hyderabad, catering to all budgets and preferences.",
    areas: [
      { name: "KPHB", slug: "kphb" },
      { name: "Nizampet", slug: "nizampet" },
      { name: "Bachupally", slug: "bachupally" },
      { name: "Balaji Nagar", slug: "balaji-nagar" }
    ]
  },
  {
    name: "Mehdipatnam",
    slug: "mehdipatnam",
    image: "/placeholder.svg",
    vendorCount: 140,
    description: "Central Hyderabad's popular wedding destination with a mix of traditional and modern venues.",
    areas: [
      { name: "NMDC", slug: "nmdc" },
      { name: "Humayun Nagar", slug: "humayun-nagar" },
      { name: "Rethi Bowli", slug: "rethi-bowli" },
      { name: "Gudimalkapur", slug: "gudimalkapur" }
    ]
  }
];
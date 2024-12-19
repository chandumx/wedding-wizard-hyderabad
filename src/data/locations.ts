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
      { name: "Chatrinaka", slug: "chatrinaka" },
      { name: "Pathergatti", slug: "pathergatti" },
      { name: "Shalibanda", slug: "shalibanda" },
      { name: "Khilwat", slug: "khilwat" },
      { name: "Moghalpura", slug: "moghalpura" },
      { name: "Hussaini Alam", slug: "hussaini-alam" },
      { name: "Engine Bowli", slug: "engine-bowli" },
      { name: "Jahanuma", slug: "jahanuma" },
      { name: "Aliabad", slug: "aliabad" },
      { name: "Vattepally", slug: "vattepally" },
      { name: "Kala Pathar", slug: "kala-pathar" }
    ]
  },
  {
    name: "Bahadurpura",
    slug: "bahadurpura",
    image: "/placeholder.svg",
    vendorCount: 120,
    description: "Traditional wedding venues and services in the historic Bahadurpura area, known for its cultural heritage and authentic experiences.",
    areas: [
      { name: "Kishan Bagh", slug: "kishan-bagh" },
      { name: "Zoo Park", slug: "zoo-park" },
      { name: "Rajendranagar", slug: "rajendranagar" },
      { name: "Tadbun", slug: "tadbun" }
    ]
  },
  {
    name: "Santosh Nagar",
    slug: "santosh-nagar",
    image: "/placeholder.svg",
    vendorCount: 100,
    description: "Discover affordable wedding venues and services in Santosh Nagar area, perfect for traditional celebrations.",
    areas: [
      { name: "Saidabad", slug: "saidabad" },
      { name: "Champapet", slug: "champapet" },
      { name: "IS Sadan", slug: "is-sadan" },
      { name: "Kurmaguda", slug: "kurmaguda" },
      { name: "Madannapet", slug: "madannapet" }
    ]
  },
  {
    name: "Barkas",
    slug: "barkas",
    image: "/placeholder.svg",
    vendorCount: 80,
    description: "Experience unique wedding venues in Barkas area, known for its distinctive cultural heritage and traditional celebration spaces.",
    areas: [
      { name: "Chandrayangutta", slug: "chandrayangutta" },
      { name: "Hafiz Baba Nagar", slug: "hafiz-baba-nagar" },
      { name: "Bandlaguda", slug: "bandlaguda" },
      { name: "Owaisi Nagar", slug: "owaisi-nagar" }
    ]
  },
  {
    name: "Central Hyderabad",
    slug: "central-hyderabad",
    image: "/placeholder.svg",
    vendorCount: 300,
    description: "Premium wedding venues in the heart of Hyderabad, featuring a mix of historic and modern celebration spaces.",
    areas: [
      { name: "Nampally", slug: "nampally" },
      { name: "Abids", slug: "abids" },
      { name: "Troop Bazaar", slug: "troop-bazaar" },
      { name: "Gunfoundry", slug: "gunfoundry" },
      { name: "Mozamjahi Market", slug: "mozamjahi-market" },
      { name: "Malakunta", slug: "malakunta" }
    ]
  },
  {
    name: "Hyderguda",
    slug: "hyderguda",
    image: "/placeholder.svg",
    vendorCount: 150,
    description: "Modern wedding venues and services in Hyderguda area, offering contemporary spaces for celebrations.",
    areas: [
      { name: "Basheerbagh", slug: "basheerbagh" },
      { name: "King Koti", slug: "king-koti" },
      { name: "Himayatnagar", slug: "himayatnagar" },
      { name: "Domalguda", slug: "domalguda" }
    ]
  },
  {
    name: "Masab Tank",
    slug: "masab-tank",
    image: "/placeholder.svg",
    vendorCount: 220,
    description: "Explore a variety of wedding venues in Masab Tank, known for its accessibility and vibrant atmosphere.",
    areas: [
      { name: "Shah Ali Banda", slug: "shah-ali-banda" },
      { name: "Kachiguda", slug: "kachiguda" },
      { name: "Mahatma Gandhi Road", slug: "mahatma-gandhi-road" },
      { name: "Shahpura", slug: "shahpura" }
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
  },
  {
    name: "Secunderabad",
    slug: "secunderabad",
    image: "/placeholder.svg",
    vendorCount: 200,
    description: "Explore traditional and modern wedding venues in Secunderabad, featuring heritage buildings and contemporary event spaces.",
    areas: [
      { name: "Mettuguda", slug: "mettuguda" },
      { name: "Marredpally (East & West)", slug: "marredpally" },
      { name: "Trimulgherry", slug: "trimulgherry" },
      { name: "Bowenpally", slug: "bowenpally" },
      { name: "Bolarum", slug: "bolarum" },
      { name: "Old Alwal", slug: "old-alwal" },
      { name: "Venkatapuram", slug: "venkatapuram" },
      { name: "Lothkunta", slug: "lothkunta" },
      { name: "Bapuji Nagar", slug: "bapuji-nagar" }
    ]
  },
  {
    name: "Kompally",
    slug: "kompally",
    image: "/placeholder.svg",
    vendorCount: 170,
    description: "Discover wedding venues in Kompally, known for its spacious halls and beautiful surroundings.",
    areas: [
      { name: "Bachupally", slug: "bachupally" },
      { name: "Kompally Main Road", slug: "kompally-main-road" },
      { name: "Kompally Village", slug: "kompally-village" },
      { name: "Kompally Cross Roads", slug: "kompally-cross-roads" }
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
  }
];

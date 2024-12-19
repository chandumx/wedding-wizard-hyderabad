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
  }
];
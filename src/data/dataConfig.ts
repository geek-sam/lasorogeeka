interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

export const services: Service[] = [
  {
    id: "01",
    title: "Design",
    description:
      "Architectural design, interior concepts, space planning and detailing.",
    image: "/images/service-design.jpg",
    alt: "Contemporary architectural interior with natural materials",
    href: "/services/design",
  },
  {
    id: "02",
    title: "Build",
    description: "Construction, engineering and integrated project delivery.",
    image: "/images/service-build.png",
    alt: "Luxury residential architecture and construction",
    href: "/services/build",
  },
  {
    id: "03",
    title: "Fit-out",
    description: "Detailed execution, bespoke joinery, marble and finishes.",
    image: "/images/service-fitout.png",
    alt: "Bespoke interior joinery and marble craftsmanship",
    href: "/services/fit-out",
  },
  {
    id: "04",
    title: "FF&E",
    description: "Curated furniture, fixtures, equipment and styling.",
    image: "/images/service-ffe.png",
    alt: "Curated furniture and luxury interior styling",
    href: "/services/ffe",
  },
];

// Awards & Recognitions
//----------------------------------

interface Award {
  id: number;
  name: string;
  year: string;
  category: string;
  organization: string;
  publication: string;
  link: string;
}

export const awards: Award[] = [
  {
    id: 1,
    name: "Excellence in Interior Design",
    year: "2025",
    category: "Interior Design",
    organization: "International Design Awards",
    publication: "Design Journal",
    link: "#",
  },
  {
    id: 2,
    name: "Best Luxury Residential Project",
    year: "2024",
    category: "Residential",
    organization: "Architecture & Design Awards",
    publication: "Architecture Today",
    link: "#",
  },
  {
    id: 3,
    name: "Outstanding Design Practice",
    year: "2023",
    category: "Design Excellence",
    organization: "Global Design Forum",
    publication: "Design Anthology",
    link: "#",
  },
  {
    id: 4,
    name: "Excellence in Project Execution",
    year: "2022",
    category: "Craftsmanship",
    organization: "International Property Awards",
    publication: "Property Magazine",
    link: "#",
  },
  {
    id: 5,
    name: "Distinguished Interior Practice",
    year: "2021",
    category: "Interior Architecture",
    organization: "Design Excellence Awards",
    publication: "Interiors Review",
    link: "#",
  },
];


//-----------------------------------
// Publications
//-----------------------------------
interface Publication {
  name: string;
  logo: string;
  link: string;
}

export const publications: Publication[] = [
  {
    name: "Arasbian Property Awards",
    logo: "/images/recognition/arabian.png",
    link: "#",
  },
  {
    name: "Asia Pacific Property Awards",
    logo: "/images/recognition/asiaPacific.png",
    link: "#",
  },
  {
    name: "Construction Week",
    logo: "/images/recognition/const-week.png",
    link: "#",
  },
  {
    name: "Construction Technology ConFex",
    logo: "/images/recognition/confex.png",
    link: "#",
  },
  {
    name: "Hotelier Middle East",
    logo: "/images/recognition/design.png",
    link: "#",
  },
  {
    name: "Design ET AL",
    logo: "/images/recognition/design-etal.png",
    link: "#",
  },
  {
    name: "Commerical Interior Design ",
    logo: "/images/recognition/fit-out.png",
    link: "#",
  },
  {
    name: "Forbes ",
    logo: "/images/recognition/forbes.png",
    link: "#",
  },
  {
    name: "Global Design and Construction Index",
    logo: "/images/recognition/GDNI.png",
    link: "#",
  },
  {
    name: "Gulf Construction",
    logo: "/images/recognition/gulf.png",
    link: "#",
  },
  {
    name: "Identity",
    logo: "/images/recognition/identity.png",
    link: "#",
  },
  {
    name: "Index UAE",
    logo: "/images/recognition/index.png",
    link: "#",
  },
  {
    name: "Innovation ",
    logo: "/images/recognition/innovation.png",
    link: "#",
  },
  {
    name: "Prime",
    logo: "/images/recognition/prime.png",
    link: "#",
  },
  {
    name: "Trade Arabia",
    logo: "/images/recognition/TradeArabia.png",
    link: "#",
  },
  {
    name: "Zawya",
    logo: "/images/recognition/Zawya.png",
    link: "#",
  },
];



export type Project = {
  id: number;
  slug: string;
  name: string;
  location: string;
  type: string;
  year: string;
  category: "Modern" | "Classical";
  heroImage: string;
  introduction: string;
  overview: string;
  designApproach: string;
  highlights: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "contemporary-residence",
    name: "The Contemporary Residence",
    location: "Dubai, UAE",
    type: "Private Residence",
    year: "2025",
    category: "Modern",
    heroImage: "/images/projects/modern-01.jpg",
    introduction:
      "A considered approach to contemporary residential living, where architecture, materiality and thoughtful detailing come together.",
    overview:
      "Add the approved project story here, describing the client's brief, the architectural context and the overall vision behind this residence.",
    designApproach:
      "Describe the design direction, spatial planning, material selection, lighting and bespoke elements that define this project.",
    highlights: [
      "Architectural design",
      "Interior detailing",
      "Material selection",
      "Bespoke craftsmanship",
    ],
    gallery: [
      "/images/projects/details/modern-01-01.jpg",
      "/images/projects/details/modern-01-02.jpg",
      "/images/projects/details/modern-01-03.jpg",
      "/images/projects/details/modern-01-04.jpg",
    ],
  },
  {
    id: 2,
    slug: "modern-living",
    name: "The Art of Modern Living",
    location: "Abu Dhabi, UAE",
    type: "Luxury Villa",
    year: "2024",
    category: "Modern",
    heroImage: "/images/projects/modern-02.jpg",
    introduction:
      "A contemporary residential environment shaped around refined proportions, considered materials and a distinctive sense of place.",
    overview:
      "Add the approved project story here, including the client's requirements, project context and the design vision.",
    designApproach:
      "Describe the design language, spatial experience, material palette and execution details specific to this residence.",
    highlights: [
      "Contemporary architecture",
      "Interior design",
      "Material curation",
      "Project execution",
    ],
    gallery: [
      "/images/projects/details/modern-02-01.jpg",
      "/images/projects/details/modern-02-02.jpg",
      "/images/projects/details/modern-02-03.jpg",
      "/images/projects/details/modern-02-04.jpg",
    ],
  },
  {
    id: 3,
    slug: "study-in-serenity",
    name: "A Study in Serenity",
    location: "Doha, Qatar",
    type: "Private Residence",
    year: "2024",
    category: "Modern",
    heroImage: "/images/projects/modern-03.jpg",
    introduction:
      "A residential concept exploring the relationship between atmosphere, architecture and understated sophistication.",
    overview:
      "Add the approved project story here, outlining the brief, the design challenges and the intended residential experience.",
    designApproach:
      "Describe the architectural and interior decisions, material choices and craftsmanship that bring this project together.",
    highlights: [
      "Space planning",
      "Interior concepts",
      "Finishes and detailing",
      "Integrated execution",
    ],
    gallery: [
      "/images/projects/details/modern-03-01.jpg",
      "/images/projects/details/modern-03-02.jpg",
      "/images/projects/details/modern-03-03.jpg",
      "/images/projects/details/modern-03-04.jpg",
    ],
  },
  {
    id: 4,
    slug: "grand-residence",
    name: "The Grand Residence",
    location: "Dubai, UAE",
    type: "Private Palace",
    year: "2025",
    category: "Classical",
    heroImage: "/images/projects/classical-01.jpg",
    introduction:
      "A classical residential expression inspired by architectural grandeur, intricate detailing and enduring elegance.",
    overview:
      "Add the approved project story here, including the residence's architectural character, client vision and project scope.",
    designApproach:
      "Describe the classical design language, architectural detailing, material selection and bespoke craftsmanship used in this project.",
    highlights: [
      "Classical architecture",
      "Bespoke interiors",
      "Decorative detailing",
      "Craftsmanship",
    ],
    gallery: [
      "/images/projects/details/classical-01-01.jpg",
      "/images/projects/details/classical-01-02.jpg",
      "/images/projects/details/classical-01-03.jpg",
      "/images/projects/details/classical-01-04.jpg",
    ],
  },
  {
    id: 5,
    slug: "timeless-grandeur",
    name: "Timeless Grandeur",
    location: "Abu Dhabi, UAE",
    type: "Luxury Villa",
    year: "2024",
    category: "Classical",
    heroImage: "/images/projects/classical-02.jpg",
    introduction:
      "A timeless residential vision bringing together architectural refinement, elegant proportions and considered detailing.",
    overview:
      "Add the approved project story here, explaining the design brief, the residence and its defining architectural qualities.",
    designApproach:
      "Describe the design approach, finishes, furniture, lighting and bespoke elements developed for this project.",
    highlights: [
      "Architectural refinement",
      "Interior detailing",
      "Furniture selection",
      "Project coordination",
    ],
    gallery: [
      "/images/projects/details/classical-02-01.jpg",
      "/images/projects/details/classical-02-02.jpg",
      "/images/projects/details/classical-02-03.jpg",
      "/images/projects/details/classical-02-04.jpg",
    ],
  },
  {
    id: 6,
    slug: "heritage-estate",
    name: "The Heritage Estate",
    location: "Riyadh, Saudi Arabia",
    type: "Private Residence",
    year: "2023",
    category: "Classical",
    heroImage: "/images/projects/classical-03.jpg",
    introduction:
      "A distinctive residential environment inspired by heritage, craftsmanship and a lasting sense of architectural identity.",
    overview:
      "Add the approved project story here, describing the client's vision, architectural context and the scope of work.",
    designApproach:
      "Describe the project's material palette, architectural language, interior detailing and execution approach.",
    highlights: [
      "Classical design",
      "Material sourcing",
      "Bespoke craftsmanship",
      "Execution management",
    ],
    gallery: [
      "/images/projects/details/classical-03-01.jpg",
      "/images/projects/details/classical-03-02.jpg",
      "/images/projects/details/classical-03-03.jpg",
      "/images/projects/details/classical-03-04.jpg",
    ],
  },
];

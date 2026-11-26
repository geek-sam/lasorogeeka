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
    image: "/images/process-03.png",
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
    name: "Villa Lumière",
    location: "Al Barari, Dubai, UAE",
    type: "Private Residence",
    year: "2025",
    category: "Modern",
    heroImage: "/images/project-11.png",
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
      "/images/project-12.png",
      "/images/project-13.png",
      "/images/project-14.png",
      "/images/project-16.png",
      "/images/project-17.png",
      "/images/project-18.png",
    ],
  },
  {
    id: 2,
    slug: "villa-elysia",
    name: "Villa Elysia",
    location: "Palm Jumeirah, Dubai, UAE",
    type: "Luxury Villa",
    year: "2024",
    category: "Modern",
    heroImage: "/images/elysia-01.jpg",
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
      "/images/elysia-01.jpg",
      "/images/elysia-02.jpg",
      "/images/elysia-03.jpg",
      "/images/elysia-04.jpg",
    ],
  },
  {
    id: 3,
    slug: "villa-solace",
    name: "Villa Solace",
    location: "Palm Jumeirah, Dubai, UAE",
    type: "Private Residence",
    year: "2024",
    category: "Modern",
    heroImage: "/images/solace-01.jpg",
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
      "/images/solace-01.jpg",
      "/images/solace-02.jpg",
      "/images/solace-03.jpg",
      "/images/solace-04.jpg",
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
    heroImage: "/images/imperial-01.jpg",
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
      "/images/imperial-01.jpg",
      "/images/imperial-02.jpg",
      "/images/imperial-03.jpg",
      "/images/imperial-04.jpg",
    ],
  },
  {
    id: 5,
    slug: "the-opus",
    name: "The Opus",
    location: "Al Noaf, Sharjah, UAE",
    type: "Private Residence",
    year: "2024",
    category: "Classical",
    heroImage: "/images/opus-01.jpg",
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
      "/images/opus-01.jpg",
      "/images/opus-02.jpg",
      "/images/opus-03.jpg",
      "/images/opus-04.jpg",
    ],
  },
  {
    id: 6,
    slug: "the-palais-royal",
    name: "The Palais Royal",
    location: "Riyadh, Saudi Arabia",
    type: "Private Residence",
    year: "2023",
    category: "Classical",
    heroImage: "/images/palais-01.jpg",
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
      "/images/palais-01.jpg",
      "/images/palais-02.jpg",
      "/images/palais-03.jpg",
      "/images/palais-04.jpg",
    ],
  },
];



export interface ServiceCapability {
  title: string;
  description: string;
  items: string[];
}

export interface ServiceDetails {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  introduction: string;
  heroImage: string;
  overviewTitle: string;
  overview: string[];
  capabilities: ServiceCapability[];
  approachTitle: string;
  approach: string;
  approachImage: string;
  relatedProjects: string[];
}

export const servicesData: ServiceDetails[] = [
  {
    id: "design",
    number: "01",
    slug: "design",
    title: "Design That Begins With Intent.",
    category: "Architecture & Interior Design",
    shortDescription:
      "Thoughtful spaces shaped by architecture, creativity and precision.",
    introduction:
      "We bring architecture and interior design together to create environments shaped by thoughtful planning, functional efficiency and refined detailing.",
    heroImage: "/images/service-design.jpg",
    overviewTitle: "Where vision takes form.",
    overview: [
      "Every exceptional space begins with a considered vision. Our design process brings architectural thinking and interior creativity together, ensuring that the overall environment is cohesive, functional and distinctive.",
      "From initial site planning to the selection of materials, lighting and furnishings, each element is developed with attention to proportion, purpose and detail."
    ],
    capabilities: [
      {
        title: "Architectural Design",
        description:
          "A considered architectural foundation that balances spatial character, practical requirements and design intent.",
        items: [
          "Site planning, zoning and façade development",
          "Layouts, structural detailing and code-compliant documentation",
          "Integration of architectural design with functional efficiency",
          "Coordination from concept to construction"
        ]
      },
      {
        title: "Interior Design",
        description:
          "Interior environments developed through spatial understanding, material expression and refined detailing.",
        items: [
          "Space planning, mood boards and 3D visualisations",
          "Detailed drawings and curated material palettes",
          "Lighting, finishes, furniture and décor selection",
          "Turnkey interior design for high-end residential projects"
        ]
      }
    ],
    approachTitle: "One vision. Every detail considered.",
    approach:
      "Architecture and interior design are developed as connected disciplines. This approach allows design decisions, technical requirements and material selections to work together from the earliest stages through construction.",
    approachImage: "/images/service-design1.png",
    relatedProjects: ["contemporary-residence", "grand-residence"]
  },

  {
    id: "build",
    number: "02",
    slug: "build",
    title: "Built With Precision.",
    category: "Construction & Engineering",
    shortDescription:
      "Complete construction delivered through technical expertise and quality craftsmanship.",
    introduction:
      "From foundational works to structural execution, we deliver construction through technical expertise, coordinated engineering and rigorous quality standards.",
    heroImage: "/images/service-build.jpg",
    overviewTitle: "A strong foundation for every vision.",
    overview: [
      "The quality of a finished space depends on the precision of the work behind it. Our construction capabilities cover the essential stages of building, from civil and structural works to coordinated engineering systems.",
      "Each stage is approached with a focus on durability, technical coordination and quality of execution."
    ],
    capabilities: [
      {
        title: "Civil & Structural Works",
        description:
          "The foundational construction activities that establish the strength and integrity of a project.",
        items: [
          "Excavation and foundation works",
          "Reinforcement and concreting",
          "Civil construction and structural development"
        ]
      },
      {
        title: "Superstructure Execution",
        description:
          "Carefully coordinated structural works that bring the building framework to life.",
        items: [
          "Columns and beams",
          "Slabs and structural frameworks",
          "Coordinated superstructure execution"
        ]
      },
      {
        title: "MEP Integration",
        description:
          "Integrated engineering systems planned and coordinated within the construction process.",
        items: [
          "HVAC systems",
          "Electrical installations",
          "Plumbing systems",
          "Lighting integration"
        ]
      },
      {
        title: "Quality & Compliance",
        description:
          "A disciplined approach to construction quality, technical requirements and execution standards.",
        items: [
          "Compliance with international building codes",
          "Quality assurance and quality control standards",
          "Focus on durability, quality and precision"
        ]
      }
    ],
    approachTitle: "Engineering the vision.",
    approach:
      "Construction is coordinated with the wider design and project requirements to maintain consistency between technical planning and on-site execution.",
    approachImage: "/images/service-build.jpg",
    relatedProjects: ["villa-elysia", "the-palais-royal"]
  },

  {
    id: "fit-out",
    number: "03",
    slug: "fit-out",
    title: "Every Detail, Carefully Executed.",
    category: "Interior Execution",
    shortDescription:
      "Refined interiors brought to life through meticulous execution and detailing.",
    introduction:
      "We transform architectural plans into finished interiors through considered material application, bespoke detailing and carefully supervised execution.",
    heroImage: "/images/service-fitout.png",
    overviewTitle: "Where craftsmanship meets execution.",
    overview: [
      "A well-designed interior finds its expression through the quality of its execution. From the arrangement of interior elements to the application of premium finishes, every stage contributes to the final character of the space.",
      "Our fit-out capabilities focus on precision, material quality and close supervision throughout the execution process."
    ],
    capabilities: [
      {
        title: "Interior Execution",
        description:
          "The coordinated execution of interior elements to establish the structure and character of each space.",
        items: [
          "Partitions and ceiling works",
          "Flooring installations",
          "Wall finishes and treatments"
        ]
      },
      {
        title: "Premium Finishes",
        description:
          "Careful application of materials selected to complement the overall interior direction.",
        items: [
          "Natural and engineered stone",
          "Veneer and wood finishes",
          "Paint and specialist surface treatments"
        ]
      },
      {
        title: "Bespoke Joinery",
        description:
          "Custom detailing and joinery developed to complement the architecture and interior design.",
        items: [
          "Custom joinery execution",
          "Detailed finishing and installation",
          "Coordination of bespoke interior elements"
        ]
      },
      {
        title: "Quality & Handover",
        description:
          "A supervised execution process focused on workmanship and timely project completion.",
        items: [
          "Quality-controlled execution",
          "Strict site supervision",
          "Completion within defined timelines",
          "Final handover"
        ]
      }
    ],
    approachTitle: "Precision in every finish.",
    approach:
      "Our execution process connects materials, craftsmanship and site coordination to ensure that the finished interior remains aligned with the original design intent.",
    approachImage: "/images/service-fitout.png",
    relatedProjects: ["villa-solace", "the-palais-royal"]
  },

  {
    id: "ffe",
    number: "04",
    slug: "ffe",
    title: "The Art of Completing a Space.",
    category: "Furniture, Fixtures & Styling",
    shortDescription:
      "Considered furniture, finishes and styling that complete the interior experience.",
    introduction:
      "We bring interiors together through considered furniture, fixtures, materials and styling, ensuring every element contributes to a cohesive environment.",
    heroImage: "/images/service-ffe.png",
    overviewTitle: "The elements that make a space complete.",
    overview: [
      "Furniture, fixtures and accessories play an essential role in shaping the atmosphere and functionality of an interior. Each selection contributes to how a space is experienced and understood.",
      "Our FF&E approach brings together bespoke furniture, material sourcing, lighting and final styling to create a considered and visually consistent environment."
    ],
    capabilities: [
      {
        title: "Custom Furniture",
        description:
          "Furniture developed to complement the spatial requirements and design language of each project.",
        items: [
          "Custom furniture design",
          "Production of loose furniture",
          "Fixed furniture elements"
        ]
      },
      {
        title: "Millwork & Lighting",
        description:
          "Interior elements that contribute to the character, functionality and atmosphere of a space.",
        items: [
          "Bespoke millwork",
          "Lighting elements",
          "Soft furnishings and accessories"
        ]
      },
      {
        title: "Sourcing & Coordination",
        description:
          "Coordinated selection and sourcing of the elements required to complete the interior.",
        items: [
          "Furniture sourcing",
          "Fixtures and equipment coordination",
          "FF&E selection and coordination",
          "Turnkey delivery coordination"
        ]
      },
      {
        title: "Final Styling",
        description:
          "The final layer of detail that brings the interior composition together.",
        items: [
          "Art and décor selection",
          "Accessory placement",
          "Visual consistency across spaces",
          "Final project completion"
        ]
      }
    ],
    approachTitle: "A cohesive finishing touch.",
    approach:
      "FF&E is considered in relation to the wider interior direction. This creates continuity between furniture, lighting, soft furnishings and decorative elements, bringing the completed environment together.",
    approachImage: "/images/service-ffe.png",
    relatedProjects: ["villa-elysia", "the-palais-royal"]
  }
];

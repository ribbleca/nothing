export const personalInfo = {
  name: "Adna Fika Agestifanka",
  title: "Digital Storyteller & Creative Developer",
  bio: "Passionate digital storyteller who believes in the power of technology to create meaningful human connections. With expertise in both design and development, I craft experiences that not only look beautiful but feel intuitive and purposeful.",
  email: "adna.fika@example.com", // Update with real email
  phone: "+62 812-3456-7890", // Update with real phone
  location: "Jakarta, Indonesia",
  avatar: "/images/adna-avatar.jpg",
  resumeUrl: "/resume-adna-fika-agestifanka.pdf",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/adnafika", // Update with real
      icon: "Github",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adnafika", // Update with real
      icon: "Linkedin",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/adnafika", // Update with real
      icon: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/adnafika", // Update with real
      icon: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      name: "Email",
      url: "mailto:adna.fika@example.com", // Update with real
      icon: "Mail",
      color: "hover:text-red-500"
    }
  ]
};

export const experiences = [
  {
    id: "exp-1",
    title: "Senior Frontend Developer",
    company: "Tech Innovate Indonesia",
    period: "2023 - Present",
    location: "Jakarta, Indonesia",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies to improve user experience and performance.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led team of 5 frontend developers on major product redesign",
      "Implemented design system used across 3 major products"
    ],
    current: true
  },
  {
    id: "exp-2",
    title: "Fullstack Developer",
    company: "Digital Creative Agency",
    period: "2021 - 2023",
    location: "Bandung, Indonesia",
    description: "Developed end-to-end web applications for various clients, from startups to enterprise companies, focusing on modern web technologies and user-centered design.",
    technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
    achievements: [
      "Delivered 20+ web applications with 98% client satisfaction",
      "Reduced development time by 30% through reusable component library",
      "Integrated payment systems for 10+ e-commerce projects"
    ],
    current: false
  },
  {
    id: "exp-3",
    title: "Frontend Developer",
    company: "Startup Hub",
    period: "2019 - 2021",
    location: "Jakarta, Indonesia",
    description: "Built responsive web applications for multiple startups, collaborated with designers and backend developers to create seamless user experiences.",
    technologies: ["React", "Vue.js", "SASS", "REST APIs", "Firebase"],
    achievements: [
      "Contributed to 3 successful startup launches",
      "Implemented mobile-first responsive designs",
      "Optimized bundle sizes reducing load times by 50%"
    ],
    current: false
  }
];

export const projects = [
  {
    id: "project-1",
    title: "EcoMart - Sustainable E-commerce Platform",
    description: "A full-stack e-commerce platform promoting sustainable products with advanced filtering, real-time inventory, and carbon footprint tracking.",
    image: "/images/projects/ecomart.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "fullstack",
    demoUrl: "https://ecomart-demo.vercel.app",
    githubUrl: "https://github.com/adnafika/ecomart",
    featured: true,
    year: "2023",
    client: "GreenTech Solutions",
    duration: "3 months",
    team: "4 developers",
    challenges: [
      "Real-time inventory management across multiple warehouses",
      "Complex product filtering with sustainability metrics",
      "Integration with carbon footprint calculation APIs"
    ],
    solutions: [
      "Implemented WebSocket connections for real-time updates",
      "Created custom search algorithm with Redis caching",
      "Built microservice for carbon footprint calculations"
    ],
    results: [
      "300% increase in user engagement",
      "25% reduction in cart abandonment",
      "99.9% uptime with optimized performance"
    ],
    gallery: [
      "/images/projects/ecomart/home.jpg",
      "/images/projects/ecomart/product.jpg",
      "/images/projects/ecomart/cart.jpg",
      "/images/projects/ecomart/dashboard.jpg"
    ]
  },
  {
    id: "project-2",
    title: "MindfulSpace - Mental Health App",
    description: "A comprehensive mental health platform with mood tracking, guided meditations, therapist matching, and peer support communities.",
    image: "/images/projects/mindfulspace.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "React", "Express"],
    category: "mobile",
    demoUrl: "https://mindfulspace-app.com",
    githubUrl: "https://github.com/adnafika/mindfulspace",
    featured: true,
    year: "2023",
    client: "HealthTech Innovations",
    duration: "6 months",
    team: "6 developers + 2 designers",
    challenges: [
      "Ensuring user privacy and data security for sensitive health data",
      "Creating engaging yet calming user interface",
      "Implementing real-time chat for peer support"
    ],
    solutions: [
      "End-to-end encryption for all user communications",
      "Extensive UX research with mental health professionals",
      "Custom chat system with moderation and crisis detection"
    ],
    results: [
      "50,000+ downloads in first 3 months",
      "4.8/5 app store rating",
      "Partnered with 100+ certified therapists"
    ],
    gallery: [
      "/images/projects/mindfulspace/onboarding.jpg",
      "/images/projects/mindfulspace/mood-tracker.jpg",
      "/images/projects/mindfulspace/meditation.jpg",
      "/images/projects/mindfulspace/chat.jpg"
    ]
  },
  {
    id: "project-3",
    title: "SmartCity Dashboard",
    description: "Real-time city management dashboard with IoT data visualization, traffic monitoring, and resource optimization for smart city initiatives.",
    image: "/images/projects/smartcity.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "web",
    demoUrl: "https://smartcity-dashboard-demo.com",
    githubUrl: "https://github.com/adnafika/smartcity-dashboard",
    featured: true,
    year: "2022",
    client: "Jakarta Smart City Initiative",
    duration: "4 months",
    team: "8 developers + 3 data scientists",
    challenges: [
      "Processing massive amounts of real-time IoT data",
      "Creating intuitive visualizations for complex city metrics",
      "Ensuring scalability for citywide deployment"
    ],
    solutions: [
      "Implemented data streaming pipeline with Apache Kafka",
      "Custom D3.js visualizations with performance optimization",
      "Microservices architecture with Docker containerization"
    ],
    results: [
      "20% improvement in traffic flow optimization",
      "30% reduction in resource waste",
      "Adopted by 3 additional cities in Indonesia"
    ],
    gallery: [
      "/images/projects/smartcity/overview.jpg",
      "/images/projects/smartcity/traffic.jpg",
      "/images/projects/smartcity/analytics.jpg",
      "/images/projects/smartcity/alerts.jpg"
    ]
  },
  {
    id: "project-4",
    title: "CreativePortfolio - Designer Showcase Platform",
    description: "A portfolio platform specifically designed for creative professionals with advanced gallery features, client collaboration tools, and integrated billing.",
    image: "/images/projects/creativeportfolio.jpg",
    technologies: ["Next.js", "Supabase", "Stripe", "Cloudinary", "Framer Motion", "Tailwind CSS"],
    category: "design",
    demoUrl: "https://creativeportfolio-platform.com",
    githubUrl: "https://github.com/adnafika/creative-portfolio",
    featured: false,
    year: "2022",
    client: "Independent Project",
    duration: "2 months",
    team: "Solo project",
    challenges: [
      "Optimizing image loading for high-resolution creative work",
      "Creating flexible portfolio layouts for different design disciplines",
      "Implementing client review and approval workflows"
    ],
    solutions: [
      "Cloudinary integration with smart compression and lazy loading",
      "Drag-and-drop portfolio builder with customizable templates",
      "Real-time collaboration features with version control"
    ],
    results: [
      "500+ designers signed up in beta",
      "Average 40% increase in designer client inquiries",
      "Featured in 3 design community newsletters"
    ],
    gallery: [
      "/images/projects/creativeportfolio/builder.jpg",
      "/images/projects/creativeportfolio/gallery.jpg",
      "/images/projects/creativeportfolio/collaboration.jpg"
    ]
  }
];

export const skills = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 90, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "📘" },
  { name: "Vue.js", level: 80, category: "frontend", icon: "💚" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "🎨" },
  { name: "Framer Motion", level: 85, category: "frontend", icon: "🎭" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Python", level: 80, category: "backend", icon: "🐍" },
  { name: "PostgreSQL", level: 82, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 78, category: "backend", icon: "🍃" },
  { name: "GraphQL", level: 75, category: "backend", icon: "🔗" },
  { name: "REST APIs", level: 90, category: "backend", icon: "🔌" },
  
  // Design
  { name: "UI/UX Design", level: 88, category: "design", icon: "🎨" },
  { name: "Figma", level: 85, category: "design", icon: "🔧" },
  { name: "Adobe Creative Suite", level: 80, category: "design", icon: "🎭" },
  { name: "Prototyping", level: 82, category: "design", icon: "📐" },
  
  // Tools
  { name: "Git & GitHub", level: 90, category: "tools", icon: "📝" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "AWS", level: 70, category: "tools", icon: "☁️" },
  { name: "Vercel", level: 95, category: "tools", icon: "▲" },
  
  // Soft Skills
  { name: "Problem Solving", level: 92, category: "soft", icon: "🧩" },
  { name: "Team Leadership", level: 85, category: "soft", icon: "👥" },
  { name: "Communication", level: 90, category: "soft", icon: "💬" },
  { name: "Project Management", level: 80, category: "soft", icon: "📊" }
];

export const testimonials = [
  {
    id: "test-1",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Tech Innovate Indonesia",
    content: "Adna's ability to translate complex ideas into beautiful, functional interfaces is remarkable. She consistently delivers beyond expectations and brings innovative solutions to every project.",
    avatar: "/images/testimonials/sarah-chen.jpg",
    rating: 5,
    project: "EcoMart Platform",
    date: "2023"
  },
  {
    id: "test-2",
    name: "Michael Rodriguez",
    role: "CEO",
    company: "HealthTech Innovations",
    content: "Working with Adna was transformative for our mental health app. Her attention to user experience and technical expertise resulted in a product that truly makes a difference in people's lives.",
    avatar: "/images/testimonials/michael-rodriguez.jpg",
    rating: 5,
    project: "MindfulSpace App",
    date: "2023"
  },
  {
    id: "test-3",
    name: "Dr. Priya Sharma",
    role: "Digital Transformation Director",
    company: "Jakarta Smart City Initiative",
    content: "Adna's work on our smart city dashboard exceeded all expectations. Her ability to visualize complex data in an intuitive way has revolutionized how we manage city resources.",
    avatar: "/images/testimonials/priya-sharma.jpg",
    rating: 5,
    project: "SmartCity Dashboard",
    date: "2022"
  },
  {
    id: "test-4",
    name: "James Wilson",
    role: "Creative Director",
    company: "Digital Creative Agency",
    content: "Adna brings the perfect blend of technical skill and creative vision. She's the developer every designer dreams of working with - someone who not only builds what you envision but enhances it.",
    avatar: "/images/testimonials/james-wilson.jpg",
    rating: 5,
    project: "Multiple Agency Projects",
    date: "2021-2023"
  },
  {
    id: "test-5",
    name: "Lisa Thompson",
    role: "Startup Founder",
    company: "GreenTech Solutions",
    content: "Adna's contribution to our e-commerce platform was instrumental in our success. Her code quality is exceptional and her problem-solving skills are top-notch.",
    avatar: "/images/testimonials/lisa-thompson.jpg",
    rating: 5,
    project: "EcoMart Platform",
    date: "2023"
  }
];

export const achievements = [
  {
    id: "achievement-1",
    title: "Best Developer Award",
    description: "Recognized as Best Frontend Developer at Indonesia Tech Conference 2023",
    date: "2023-10-15",
    icon: "🏆",
    category: "award",
    organization: "Indonesia Tech Conference"
  },
  {
    id: "achievement-2",
    title: "AWS Certified Solutions Architect",
    description: "Professional certification for designing distributed systems on AWS",
    date: "2023-08-20",
    icon: "☁️",
    category: "certification",
    organization: "Amazon Web Services"
  },
  {
    id: "achievement-3",
    title: "React Advanced Certification",
    description: "Advanced React patterns and performance optimization certification",
    date: "2023-06-10",
    icon: "⚛️",
    category: "certification",
    organization: "Meta"
  },
  {
    id: "achievement-4",
    title: "100k+ Users Milestone",
    description: "Successfully launched applications serving over 100,000 active users",
    date: "2023-09-01",
    icon: "👥",
    category: "milestone",
    organization: "Career Achievement"
  },
  {
    id: "achievement-5",
    title: "Open Source Contributor",
    description: "Active contributor to 10+ open source projects with 500+ GitHub stars",
    date: "2023-12-01",
    icon: "🌟",
    category: "milestone",
    organization: "GitHub Community"
  }
];

export const services = [
  {
    id: "service-1",
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and TypeScript",
    icon: "💻",
    price: "Starting from $3,000",
    duration: "2-4 weeks",
    features: [
      "Responsive design implementation",
      "Performance optimization",
      "SEO optimization",
      "Cross-browser compatibility",
      "Mobile-first approach"
    ]
  },
  {
    id: "service-2",
    title: "Full-Stack Development",
    description: "Complete web application development from frontend to backend and database",
    icon: "🚀",
    price: "Starting from $5,000",
    duration: "4-8 weeks",
    features: [
      "Frontend & backend development",
      "Database design and optimization",
      "API development and integration",
      "Authentication and security",
      "Deployment and DevOps"
    ]
  },
  {
    id: "service-3",
    title: "UI/UX Consultation",
    description: "User experience optimization and interface design consultation",
    icon: "🎨",
    price: "Starting from $1,500",
    duration: "1-2 weeks",
    features: [
      "User experience audit",
      "Interface design review",
      "Usability testing",
      "Design system creation",
      "Accessibility optimization"
    ]
  },
  {
    id: "service-4",
    title: "Technical Mentoring",
    description: "One-on-one mentoring for developers and technical career guidance",
    icon: "🎓",
    price: "$100/hour",
    duration: "Flexible",
    features: [
      "Code review and feedback",
      "Career guidance",
      "Technical skill development",
      "Best practices training",
      "Project architecture advice"
    ]
  }
];

export const blogCategories = [
  { id: "web-development", name: "Web Development", color: "#3B82F6" },
  { id: "react", name: "React", color: "#06B6D4" },
  { id: "next-js", name: "Next.js", color: "#000000" },
  { id: "typescript", name: "TypeScript", color: "#3178C6" },
  { id: "ui-ux", name: "UI/UX", color: "#8B5CF6" },
  { id: "career", name: "Career", color: "#10B981" },
  { id: "tutorials", name: "Tutorials", color: "#F59E0B" },
  { id: "insights", name: "Insights", color: "#EF4444" }
];
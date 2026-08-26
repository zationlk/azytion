export const brand = {
  name: "Azytion",
  tagline: "The Best Option",
  description:
    "Sri Lanka-based digital solutions company offering software development, web design, SaaS products, and more. Serving clients worldwide.",
  email: "azytionlk@gmail.com",
  phone: "+94 72 3344 070",
  phone2: "+94 75 533 1445",
  address: "Kandy, Sri Lanka",
  address2: "Kurunegala, Sri Lanka",
  whatsapp: "https://wa.me/94723344070",
  url: "https://azytion.com",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Client Retention" },
] as const;

export const clients = [
  "TechCorp",
  "InnovateLab",
  "GlobalRetail",
  "EduStream",
  "MediCare+",
  "FinEdge",
] as const;

export const services = [
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom applications built with cutting-edge technologies to solve your unique business challenges.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Development & Integration",
      "Cloud Solutions & DevOps",
      "Legacy System Modernization",
    ],
    icon: "Code2",
  },
  {
    id: "web",
    title: "Website Design",
    description:
      "Beautiful, responsive websites that captivate visitors and convert them into loyal customers.",
    features: [
      "Custom Website Design",
      "E-Commerce Development",
      "UI/UX Design & Prototyping",
      "WordPress & CMS Solutions",
      "Website Maintenance & Support",
    ],
    icon: "Monitor",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description:
      "Striking visual identities, logos, and marketing materials that make your brand unforgettable.",
    features: [
      "Logo & Brand Identity Design",
      "Marketing Collateral",
      "Social Media Graphics",
      "Packaging Design",
      "Infographics & Presentations",
    ],
    icon: "Palette",
  },
  {
    id: "video",
    title: "Video Editing",
    description:
      "Professional video production and editing that tells your story and engages your audience.",
    features: [
      "Promotional & Commercial Videos",
      "Social Media Video Content",
      "Motion Graphics & Animation",
      "Product Demo Videos",
      "Video Ads & Campaigns",
    ],
    icon: "Video",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that boost visibility, generate leads, and maximize ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Content Marketing Strategy",
      "Analytics & Performance Reporting",
    ],
    icon: "TrendingUp",
  },
  {
    id: "saas",
    title: "SaaS Products",
    description:
      "Ready-to-deploy business systems — POS, ERP, CRM, LMS, and more — available instantly.",
    features: [
      "Instant Deployment",
      "Cloud Hosting Included",
      "Custom Branding Options",
      "Dedicated Support",
    ],
    icon: "Boxes",
  },
] as const;

export const products = [
  {
    id: "pos",
    title: "POS System",
    description:
      "Complete point-of-sale solution for retail stores and restaurants with inventory management.",
    tags: ["Retail", "Inventory", "Multi-store"],
    badge: "Popular",
    icon: "Monitor",
  },
  {
    id: "erp",
    title: "ERP System",
    description:
      "Enterprise resource planning to unify finance, HR, supply chain, and operations.",
    tags: ["Finance", "HR", "Supply Chain"],
    badge: "Enterprise",
    icon: "Layers",
  },
  {
    id: "crm",
    title: "CRM System",
    description:
      "Manage customer relationships, track sales pipelines, and deliver exceptional support.",
    tags: ["Sales", "Support", "Automation"],
    icon: "Users",
  },
  {
    id: "lms",
    title: "LMS System",
    description:
      "Learning management for schools, training centers, and corporate learning programs.",
    tags: ["Education", "Courses", "Certificates"],
    icon: "BookOpen",
  },
  {
    id: "accounting",
    title: "Accounting System",
    description:
      "Full-featured accounting with invoicing, expense tracking, financial reports, and tax management.",
    tags: ["Invoicing", "Reports", "Tax"],
    icon: "DollarSign",
  },
  {
    id: "booking",
    title: "Booking System",
    description:
      "Appointment and reservation management for salons, clinics, and service businesses.",
    tags: ["Appointments", "Scheduling", "Reminders"],
    badge: "New",
    icon: "Calendar",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "Track stock levels, manage warehouses, automate reordering, and optimize supply chain.",
    tags: ["Warehouse", "Stock", "Alerts"],
    icon: "Package",
  },
  {
    id: "hr",
    title: "HR Management",
    description:
      "Complete HR suite for employee management, payroll, attendance, and performance reviews.",
    tags: ["Payroll", "Attendance", "Reviews"],
    icon: "UserCheck",
  },
  {
    id: "more",
    title: "And More...",
    description:
      "We continuously build new SaaS products. Contact us for custom solutions or upcoming launches.",
    tags: ["Custom", "Upcoming"],
    icon: "Globe",
    isCustom: true,
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses and startups getting started.",
    features: [
      "1 Product License",
      "Up to 5 Users",
      "Email Support",
      "Basic Analytics",
      "Cloud Hosting Included",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Ideal for growing businesses with advanced needs.",
    features: [
      "3 Product Licenses",
      "Up to 25 Users",
      "Priority Support",
      "Advanced Analytics",
      "Custom Branding",
      "API Access",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited Products",
      "Unlimited Users",
      "24/7 Dedicated Support",
      "Custom Development",
      "On-Premise Option",
      "SLA Guarantee",
    ],
    featured: false,
  },
] as const;

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We understand your goals, audience, and requirements through in-depth consultation.",
  },
  {
    title: "Strategy",
    description:
      "Our team crafts a tailored plan with timelines, tech stack, and milestones.",
  },
  {
    title: "Execution",
    description:
      "Design, development, and testing with regular updates and transparent communication.",
  },
  {
    title: "Launch & Support",
    description:
      "Smooth deployment followed by ongoing maintenance and dedicated support.",
  },
] as const;

export const values = [
  {
    title: "Excellence",
    description:
      "We never settle for good enough. Every deliverable meets the highest standards of quality.",
    icon: "Star",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients as true partners, ensuring transparency at every stage.",
    icon: "Users",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions.",
    icon: "Zap",
  },
  {
    title: "Integrity",
    description:
      "Honest communication, fair pricing, and ethical practices form our foundation.",
    icon: "Shield",
  },
  {
    title: "Reliability",
    description:
      "On-time delivery and dependable support. When we commit, we deliver.",
    icon: "Clock",
  },
  {
    title: "Passion",
    description:
      "We genuinely love what we do, and that enthusiasm shows in our work.",
    icon: "Heart",
  },
] as const;

export const team = [
  {
    name: "Muhammad Ali",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in tech, driving Azytion's mission forward.",
    initials: "MA",
  },
  {
    name: "Sara Khan",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in scalable architecture and cloud solutions.",
    initials: "SK",
  },
  {
    name: "James Rodriguez",
    role: "Creative Director",
    bio: "Award-winning designer crafting visual experiences that captivate and convert.",
    initials: "JR",
  },
  {
    name: "Emily Park",
    role: "Marketing Head",
    bio: "Digital marketing strategist with a track record of 3x ROI for clients.",
    initials: "EP",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Azytion transformed our entire digital presence. Their ERP system streamlined our operations and saved us countless hours every week.",
    name: "Sarah Rahman",
    role: "CEO, GlobalRetail",
    initials: "SR",
  },
  {
    quote:
      "The website they built for us is stunning and converts like crazy. Professional team, on-time delivery, and exceptional support.",
    name: "Michael Khan",
    role: "Founder, InnovateLab",
    initials: "MK",
  },
  {
    quote:
      "We deployed their CRM and POS systems within days. The integration was seamless and our sales team productivity doubled.",
    name: "Amir Patel",
    role: "Director, FinEdge",
    initials: "AP",
  },
  {
    quote:
      "The e-commerce platform Azytion built increased our online revenue by 340% in the first quarter. Their attention to detail is unmatched.",
    name: "Sarah Rahman",
    role: "CEO, GlobalRetail",
    initials: "SR",
  },
  {
    quote:
      "Deploying their ERP system transformed our hospital operations. What used to take days now takes hours. Truly The Best Option.",
    name: "Dr. David Miller",
    role: "Director, MediCare+",
    initials: "DM",
  },
] as const;

export const portfolioItems = [
  {
    title: "GlobalRetail E-Commerce",
    category: "web",
    label: "Web Design · E-Commerce",
  },
  {
    title: "FinEdge Banking App",
    category: "software",
    label: "Software · Mobile App",
  },
  {
    title: "InnovateLab Rebrand",
    category: "branding",
    label: "Branding · Identity Design",
  },
  {
    title: "MediCare+ ERP Deployment",
    category: "saas",
    label: "SaaS · Enterprise",
  },
  {
    title: "EduStream Growth Campaign",
    category: "marketing",
    label: "Marketing · SEO & PPC",
  },
  {
    title: "TechCorp Corporate Site",
    category: "web",
    label: "Web Design · Corporate",
  },
  {
    title: "LogiTrack Fleet Manager",
    category: "software",
    label: "Software · Logistics",
  },
  {
    title: "CafeBliss POS Rollout",
    category: "saas",
    label: "SaaS · POS System",
  },
  {
    title: "FitLife Promo Videos",
    category: "branding",
    label: "Branding · Video Production",
  },
] as const;

export const portfolioFilters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "software", label: "Software" },
  { id: "branding", label: "Branding" },
  { id: "marketing", label: "Marketing" },
  { id: "saas", label: "SaaS" },
] as const;

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Flutter",
  "AWS",
  "Figma",
  "Adobe Suite",
  "WordPress",
  "Shopify",
  "Docker",
  "PostgreSQL",
] as const;

export const faqItems = {
  products: [
    {
      question: "How quickly can I deploy a SaaS product?",
      answer:
        "Most products can be deployed within 24-48 hours after signup. Our team handles setup, configuration, and initial training at no extra cost.",
    },
    {
      question: "Can I customize the products for my business?",
      answer:
        "Absolutely! All our SaaS products support custom branding, workflows, and integrations. Enterprise plans include full custom development options.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all products with full feature access. No credit card required to start your trial.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide email, chat, and phone support depending on your plan. Enterprise clients get a dedicated account manager and 24/7 priority support.",
    },
  ],
  contact: [
    {
      question: "How do I get started with Azytion?",
      answer:
        "Simply fill out the contact form or email us at azytionlk@gmail.com. You can also reach us via WhatsApp at +94 72 3344 070. We'll schedule a free consultation to discuss your needs and provide a tailored proposal.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary by project scope. Websites typically take 2-4 weeks, custom software 4-12 weeks, and SaaS deployments can be live within 24-48 hours.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We serve clients globally from our offices in Kandy and Kurunegala, Sri Lanka. Our team is experienced in remote collaboration and works across multiple time zones.",
    },
    {
      question: "Can I request a custom SaaS product?",
      answer:
        "Absolutely. If our existing products don't fit your needs, we can build a custom SaaS solution tailored to your specific business requirements.",
    },
  ],
} as const;

export const contactServices = [
  { value: "software", label: "Software Development" },
  { value: "web", label: "Website Design" },
  { value: "graphic", label: "Graphic Design" },
  { value: "video", label: "Video Editing" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "pos", label: "POS System" },
  { value: "erp", label: "ERP System" },
  { value: "crm", label: "CRM System" },
  { value: "lms", label: "LMS System" },
  { value: "accounting", label: "Accounting System" },
  { value: "booking", label: "Booking System" },
  { value: "other", label: "Other / Custom Solution" },
] as const;

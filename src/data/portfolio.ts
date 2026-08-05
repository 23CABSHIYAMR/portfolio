export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Concepts' | 'Currently Learning';
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "SHIYAM R",
  title: "Software Engineer",
  tagline: "Building performant, scalable and intuitive web applications.",
  bio: "BCA Graduate and Software Engineer with hands-on experience building modern web applications using React.js, Next.js, Node.js and REST APIs. Passionate about creating clean user experiences, solving real-world problems, and continuously learning modern software engineering practices.",
  location: "India",
  availabilityStatus: "Available for full-time software engineering roles",
  email: "shiyamramesh01@gmail.com",
  socials: {
    github: "https://github.com/23CABSHIYAMR",
    linkedin: "https://www.linkedin.com/in/shiyam-r-3a885a315",
    hackerrank: "https://www.hackerrank.com/profile/shiyamramesh01",
    resume: "/images/shiyamSDEResume.pdf"
  },
  stats: [
    { label: "Professional Internship", value: "1" },
    { label: "Production Issues Resolved", value: "50+" },
    { label: "Projects Built", value: "10+" },
    { label: "Core Stack", value: "React • Next.js • Node.js" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: "Advanced", description: "Semantic markup, web accessibility & structured DOM layouts" },
      { name: "CSS3", level: "Advanced", description: "Flexbox, CSS Grid, responsive design & CSS animations" },
      { name: "JavaScript", level: "Advanced", description: "ESNext features, asynchronous programming, DOM APIs & logic" },
      { name: "React.js", level: "Advanced", description: "Hooks, component state, lifecycle management & performance" },
      { name: "Next.js", level: "Advanced", description: "App router, SSR/SSG rendering, routing & API integration" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first styling, design system layouts & responsive UI" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Proficient", description: "Asynchronous server runtime & backend application development" },
      { name: "Express.js", level: "Proficient", description: "RESTful API routes, middleware architecture & request handlers" },
      { name: "REST APIs", level: "Advanced", description: "Endpoint design, HTTP methods & JSON data exchange" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Proficient", description: "Document database modeling, Mongoose & query optimization" },
      { name: "SQL", level: "Proficient", description: "Relational database queries, data schemas & table operations" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Proficient", description: "Version control workflows, branching & commit history" },
      { name: "GitHub", level: "Advanced", description: "Code repositories, pull requests & collaborative development" },
      { name: "Postman", level: "Advanced", description: "API endpoint testing, collection runner & HTTP debugging" },
      { name: "Figma", level: "Proficient", description: "UI layout inspection, wireframes & developer handoff" }
    ]
  },
  {
    category: "Concepts",
    skills: [
      { name: "Object-Oriented Programming", level: "Advanced", description: "Classes, encapsulation, inheritance & modular design" },
      { name: "Data Structures & Algorithms (Java)", level: "Proficient", description: "Problem solving, arrays, recursion & algorithmic thinking in Java" },
      { name: "Authentication (JWT)", level: "Proficient", description: "JSON Web Tokens, session handling & secure OAuth integration" },
      { name: "Computer Networking", level: "Proficient", description: "TCP/IP fundamentals, HTTP/HTTPS protocols & network stack" }
    ]
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "AWS", level: "Learning", description: "Cloud computing infrastructure, S3 & deployment services" },
      { name: "Docker", level: "Learning", description: "Containerization fundamentals & isolated environment builds" },
      { name: "Kubernetes", level: "Learning", description: "Container orchestration & cluster management concepts" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "habit-tracker-app",
    title: "Habit Tracker App",
    subtitle: "Full-stack habit tracking & analytics application",
    description: "A full-stack habit tracking application featuring JWT & Google OAuth authentication, analytics dashboard, REST APIs, caching, optimized MongoDB queries, reusable components, and performance optimizations.",
    longDescription: "A full-stack habit tracking application engineered with Next.js, Node.js, Express.js, and MongoDB. Features secure JWT and Google OAuth authentication pipelines, an analytics dashboard for habit progress tracking, backend caching, optimized MongoDB database queries, and reusable UI components tuned for performance.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/images/habit-tracker.png",
    demoUrl: "https://habit-tracker-client-bay.vercel.app",
    githubUrl: "https://github.com/23CABSHIYAMR/habit-tracker-client",
    featured: true,
    highlights: [
      "JWT and Google OAuth authentication mechanisms",
      "Interactive habits tracking and progress analytics dashboard",
      "Optimized MongoDB queries and caching for fast response times",
      "Modular, reusable UI component architecture"
    ]
  },
  {
    id: "aeronero-replica",
    title: "Aeronero Replica",
    subtitle: "Pixel-perfect web experience recreation",
    description: "A premium responsive recreation of the Aeronero website built to demonstrate pixel-perfect UI implementation, smooth animations, responsive layouts, and clean component architecture.",
    longDescription: "A premium responsive recreation of the Aeronero web application built using Next.js, Tailwind CSS, and Framer Motion. Focused on demonstrating pixel-perfect design implementation, fluid animations, mobile-first responsive layouts, and scalable component structure.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "React.js"],
    image: "/images/aeronero.png",
    demoUrl: "https://aeronero-replica.vercel.app/",
    githubUrl: "https://github.com/23CABSHIYAMR/aeronero-replica",
    featured: true,
    highlights: [
      "Pixel-perfect responsive layout implementation across desktop and mobile screens",
      "Fluid scroll animations and micro-interactions powered by Framer Motion",
      "Clean, modular component structure adhering to modern engineering standards"
    ]
  },
  {
    id: "shell-to-node-generator",
    title: "Shell-to-Node Server Generator",
    subtitle: "CLI tool for automated backend scaffolding",
    description: "CLI tool that automatically generates a Node.js backend boilerplate with folder structure and dependencies to speed up backend development.",
    longDescription: "A CLI tool written in Shell Scripting and Node.js that automates the generation of Node.js backend boilerplate applications. It automatically sets up standardized folder structures, configures server files, and installs core dependencies to streamline backend development.",
    techStack: ["Shell Script", "Node.js", "Express.js", "CLI"],
    image: "/images/node-server-generator.png",
    demoUrl: "",
    githubUrl: "https://github.com/23CABSHIYAMR/node-server-generator",
    featured: true,
    highlights: [
      "Automated creation of Node.js and Express backend boilerplate structure",
      "Pre-configured directory tree for routes, controllers, middleware, and models",
      "Accelerates backend project initialization and development workflows"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "opsmonsters-trainee",
    company: "OpsMonsters Software Consultants",
    role: "Associate System Engineer Trainee",
    duration: "October 2025 – November 2025",
    location: "India",
    type: "Trainee",
    description: [
      "Built production features using React.js and Next.js.",
      "Integrated REST APIs to connect user interfaces with backend endpoints.",
      "Built reusable UI components for improved code maintainability.",
      "Worked with Git workflows for source code management.",
      "Fixed 50+ production UI and functional issues to elevate user experience.",
      "Improved application responsiveness and performance across devices."
    ],
    techStack: ["React.js", "Next.js", "REST APIs", "Git", "JavaScript", "Tailwind CSS"]
  }
];

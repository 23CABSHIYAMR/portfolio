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
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "Concepts"
    | "Currently Learning";
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "SHIYAM R",
  title: "Full Stack Developer",
  tagline:
    "Building reliable, performant web applications and real-time systems.",
  bio:
    "Full Stack Developer experienced in building and maintaining web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Hands-on experience with REST API development, real-time messaging, authentication, role-based access control, caching, production troubleshooting, and application performance testing.",
  location: "Coimbatore, Tamil Nadu, India",
  availabilityStatus: "Open to software engineering opportunities",
  email: "shiyamramesh01@gmail.com",
  socials: {
    github: "https://github.com/23CABSHIYAMR",
    linkedin: "https://www.linkedin.com/in/shiyam-r-3a885a315",
    hackerrank: "https://www.hackerrank.com/profile/shiyamramesh01",
    resume: "/images/ShiyamSporadaResume.pdf",
  },
  stats: [
    { label: "Production Issues Resolved", value: "50+" },
    { label: "Automated Tests Passed", value: "20/20" },
    { label: "Inter-College Coding Awards", value: "2" },
    { label: "Core Stack", value: "React • Node.js • MongoDB" },
  ],
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        level: "Proficient",
        description:
          "Reusable components, hooks, state management, responsive interfaces, and rendering optimization.",
      },
      {
        name: "Next.js",
        level: "Proficient",
        description:
          "Application routing, rendering concepts, reusable layouts, and API integration.",
      },
      {
        name: "JavaScript",
        level: "Proficient",
        description:
          "ES6+, asynchronous programming, promises, event handling, and application logic.",
      },
      {
        name: "HTML5",
        level: "Proficient",
        description:
          "Semantic markup, accessible structures, and maintainable page layouts.",
      },
      {
        name: "CSS3",
        level: "Proficient",
        description:
          "Responsive layouts, Flexbox, CSS Grid, and interface styling.",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        description:
          "Utility-first styling and responsive UI development.",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        level: "Proficient",
        description:
          "Asynchronous backend development, process management, and server-side application logic.",
      },
      {
        name: "Express.js",
        level: "Proficient",
        description:
          "REST APIs, middleware, centralized error handling, and modular backend architecture.",
      },
      {
        name: "Socket.IO",
        level: "Working Knowledge",
        description:
          "Real-time events, client-server communication, connection handling, and reconnection strategies.",
      },
      {
        name: "REST APIs",
        level: "Proficient",
        description:
          "API design, authentication, request validation, error handling, and service integration.",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        level: "Proficient",
        description:
          "Schema modeling, Mongoose, query optimization, indexing, and application data management.",
      },
      {
        name: "SQL",
        level: "Working Knowledge",
        description:
          "SQL queries, joins, stored procedures, relational data modeling, and database operations.",
      },
      {
        name: "MySQL",
        level: "Working Knowledge",
        description:
          "Relational database fundamentals and SQL-based data operations.",
      },
      {
        name: "IndexedDB",
        level: "Working Knowledge",
        description:
          "Browser-side storage for locally cached application data and media.",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        level: "Proficient",
        description:
          "Version control, branching, merges, and collaborative development workflows.",
      },
      {
        name: "GitHub",
        level: "Proficient",
        description:
          "Repository management, source control, and project collaboration.",
      },
      {
        name: "Playwright",
        level: "Working Knowledge",
        description:
          "Automated browser testing and end-to-end workflow validation.",
      },
      {
        name: "Lighthouse",
        level: "Working Knowledge",
        description:
          "Frontend performance analysis and Core Web Vitals optimization.",
      },
      {
        name: "Winston",
        level: "Working Knowledge",
        description:
          "Structured application logging and production troubleshooting.",
      },
      {
        name: "Nginx",
        level: "Working Knowledge",
        description:
          "Reverse proxy configuration, static asset serving, and deployment troubleshooting.",
      },
      {
        name: "Postman / APIDog",
        level: "Working Knowledge",
        description:
          "API testing, request validation, and endpoint debugging.",
      },
    ],
  },
  {
    category: "Concepts",
    skills: [
      {
        name: "Authentication",
        level: "Proficient",
        description:
          "JWT-based authentication, OAuth integration, and session management.",
      },
      {
        name: "Role-Based Access Control",
        level: "Working Knowledge",
        description:
          "Role and permission enforcement across application features and resources.",
      },
      {
        name: "Caching",
        level: "Working Knowledge",
        description:
          "Application-level caching, cache invalidation, and data retrieval optimization.",
      },
      {
        name: "Event-Driven Systems",
        level: "Working Knowledge",
        description:
          "Real-time events, message processing, acknowledgments, and duplicate-event handling.",
      },
      {
        name: "Data Structures & Algorithms (Java)",
        level: "Proficient",
        description:
          "Problem solving and algorithm fundamentals using Java.",
      },
      {
        name: "Object-Oriented Programming",
        level: "Proficient",
        description:
          "Encapsulation, inheritance, polymorphism, abstraction, and modular design.",
      },
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      {
        name: "Docker",
        level: "Learning",
        description:
          "Containerization fundamentals and reproducible development environments.",
      },
      {
        name: "AWS",
        level: "Learning",
        description:
          "Cloud infrastructure and application deployment fundamentals.",
      },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "multi-user-whatsapp",
    title: "Multi-User WhatsApp Application",
    subtitle: "Real-time messaging and multi-user workflow platform",
    description:
      "A WhatsApp Web-inspired application with QR-based authentication, chat synchronization, group management, real-time updates, and backend messaging workflows.",
    longDescription:
      "Developed and maintained a multi-user messaging application using React.js, Node.js, Express.js, Socket.IO, and MongoDB. Implemented QR-based authentication and session persistence, modular backend services, real-time communication, role-based access control, and group allocation workflows. Worked on message-processing reliability, media caching, structured logging, production deployment, and automated workflow testing.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "IndexedDB",
      "Playwright",
      "Nginx",
    ],
    image: "/images/whatsapp-app.png",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    highlights: [
      "Implemented QR-based authentication and session persistence.",
      "Built REST APIs for messaging, chat synchronization, and group management.",
      "Implemented role-based access control and grid/branch-based group allocation.",
      "Improved message-processing reliability with acknowledgment tracking and duplicate-event handling.",
      "Implemented structured logging, error handling, and production deployment configuration.",
      "Validated application workflows with 20 passing Playwright tests in 13.2 seconds.",
    ],
  },
  {
    id: "habit-tracker-app",
    title: "Habit Tracker App",
    subtitle: "Full-stack habit tracking and progress analytics",
    description:
      "A habit-tracking application with authentication, progress analytics, REST APIs, caching, and responsive dashboards.",
    longDescription:
      "Built a full-stack habit tracker using Next.js, Node.js, Express.js, and MongoDB. Implemented JWT and Google OAuth authentication, validation middleware, optimized database queries, compound indexing, and caching. Created reusable interfaces for weekly, monthly, yearly, and all-time habit progress analytics.",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    image: "/images/habit-tracker.png",
    demoUrl: "https://habit-tracker-client-bay.vercel.app",
    githubUrl: "https://github.com/23CABSHIYAMR/habit-tracker-client",
    featured: true,
    highlights: [
      "JWT and Google OAuth authentication.",
      "Weekly, monthly, yearly, and all-time progress analytics.",
      "MongoDB query optimization and compound indexing.",
      "Reusable responsive components and application-level caching.",
    ],
  },
  {
    id: "aeronero-replica",
    title: "Aeronero Replica",
    subtitle: "Pixel-focused responsive website recreation",
    description:
      "A responsive recreation of the Aeronero website showcasing interface implementation, animations, and component architecture.",
    longDescription:
      "Recreated the Aeronero web experience using Next.js, Tailwind CSS, Framer Motion, and React.js, focusing on responsive layouts, visual consistency, smooth animations, and reusable components.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "React.js",
    ],
    image: "/images/aeronero.png",
    demoUrl: "https://aeronero-replica.vercel.app/",
    githubUrl: "https://github.com/23CABSHIYAMR/aeronero-replica",
    featured: true,
    highlights: [
      "Responsive layouts for desktop and mobile screens.",
      "Scroll animations and micro-interactions with Framer Motion.",
      "Reusable components and maintainable UI structure.",
    ],
  },
  {
    id: "shell-to-node-generator",
    title: "Shell-to-Node Server Generator",
    subtitle: "CLI tool for automated backend scaffolding",
    description:
      "A command-line tool that automates Node.js backend project setup with a standardized folder structure and dependencies.",
    longDescription:
      "Built a shell-script and Node.js-based generator to streamline backend project initialization. The tool automates boilerplate creation, directory setup, server scaffolding, and dependency installation.",
    techStack: ["Shell Script", "Node.js", "Express.js", "CLI"],
    image: "/images/node-server-generator.png",
    demoUrl: "",
    githubUrl: "https://github.com/23CABSHIYAMR/node-server-generator",
    featured: true,
    highlights: [
      "Automated Node.js backend boilerplate generation.",
      "Standardized folder structures and server setup.",
      "Reduced repetitive project initialization tasks.",
    ],
  },
  {
    id: "javascript-mini-projects",
    title: "JavaScript Mini Projects",
    subtitle: "Interactive web applications and browser utilities",
    description:
      "A collection of small projects demonstrating JavaScript fundamentals, interactive UI development, and browser functionality.",
    longDescription:
      "Built mini projects including a Blackjack game, calculator, palindrome checker, currency converter, and Chrome Tab Saver extension using HTML, CSS, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Chrome Extensions"],
    image: "/images/javascript-projects.png",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    highlights: [
      "Built interactive browser-based applications.",
      "Practiced DOM manipulation and event handling.",
      "Created a Chrome extension for saving tabs.",
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "sporada-full-stack-developer",
    company: "Sporada Secure India Private Limited",
    role: "Full Stack Developer",
    duration: "September 2026 – Present",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Full-time",
    description: [
      "Develop and maintain a multi-user messaging application using React.js, Node.js, Express.js, Socket.IO, and MongoDB.",
      "Build REST APIs for authentication, message delivery, chat synchronization, group management, and external service integrations.",
      "Implement supervisor-worker architecture with worker recovery and restart mechanisms to improve backend resilience.",
      "Develop FIFO message-processing queues with acknowledgment tracking, duplicate-event handling, and crash recovery.",
      "Implement role-based access control and grid/branch-based group allocation for business workflows.",
      "Optimize chat rendering and media handling using selective virtualization, IndexedDB, and historical media recovery.",
      "Implement structured logging with Winston, centralized error handling, and production deployment configuration using Nginx.",
      "Validate application workflows using Playwright and optimize frontend performance using Lighthouse.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "IndexedDB",
      "Playwright",
      "Winston",
      "Nginx",
    ],
  },
  {
    id: "opsmonsters-trainee",
    company: "OpsMonsters Software Consultants",
    role: "Associate System Engineer Trainee",
    duration: "October 2025 – November 2025",
    location: "India",
    type: "Trainee",
    description: [
      "Developed and enhanced production features using React.js, Next.js, and REST APIs.",
      "Integrated backend APIs and built reusable UI components for the TraderLogs module.",
      "Resolved 50+ production UI and functional issues, improving application reliability and user experience.",
      "Collaborated through Git workflows, including branching, code reviews, and merge-conflict resolution.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "JavaScript",
      "REST APIs",
      "Git",
      "Tailwind CSS",
    ],
  },
];

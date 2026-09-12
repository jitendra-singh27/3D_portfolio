import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  iqvia,
  gip,
  carrent,
  jobit,
  tripguide,
  redis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "UI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "System Engineering Support (Full Stack Developer)",
    company_name: "IQVIA",
    icon: iqvia,
    iconBg: "#383E56",
    date: "August 2024 - May 2026",
    points: [
      "Delivered end-to-end MERN web applications using React.js, Node.js, Express.js, and MongoDB for 1000+ users.",
      "Implemented JWT-based authentication and authorization across RESTful APIs to secure sensitive data transactions.",
      "Optimized MongoDB queries and indexing strategies, reducing API response time by 40%.",
      "Built reusable React components and centralized application state using Redux, reducing code redundancy by 30%.",
      "Collaborated with designers and product managers in Agile sprints, participating in code reviews and development planning.",
      "Integrated third-party APIs and services while maintaining seamless frontend and backend data flow.",
      "Implemented responsive and cross-browser compatible UI/UX designs, improving mobile user engagement by 25%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GIP Technologies (P) Ltd",
    icon: gip,
    iconBg: "#E6DEDD",
    date: "March 2023 - September 2023",
    points: [
      "Delivered 5+ projects from concept to deployment using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication and bcrypt password hashing to secure user data and authentication workflows.",
      "Designed and optimized MongoDB schemas with proper relationships and indexing to improve query performance.",
      "Built interactive real-time data visualizations using Chart.js and React.",
      "Developed clean, maintainable ES6+ code following modern development standards and best practices.",
      "Collaborated with designers and developers through daily standups, code reviews, and development planning.",
      "Debugged and resolved production issues to maintain application reliability and minimize downtime.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Patient Feedback Tool",
    description:
      "A comprehensive web-based system for collecting and managing patient feedback in healthcare facilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jitendra-singh27/feedbacktoolsvp",
  },
  {
    name: "Facility ManagementTool ",
    description:
      "Built a full-stack facility management platform enabling teams to submit, track, and resolve maintenance tickets and facility assets",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/jitendra-singh27/FacilityManagementTool",
  },
  {
    name: "Ronin X Stream",
    description:
      "RONIN X STREAM is a premium, high-performance full-stack streaming platform designed for a cinematic user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://roninxstream.me/",
  },
];

export { services, technologies, experiences, testimonials, projects };

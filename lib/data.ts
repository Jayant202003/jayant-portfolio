// ---------------------------------------------------------------------------
// All real copy lives here. Placeholder content below — swap in your own
// name, projects, and links. Nothing elsewhere in the codebase should need
// to change when you do.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jayant Shivankar",
  role: "Software Engineer | Full Stack Developer",
  tagline: "Building full-stack web applications with React, Node.js, Express.js, and MongoDB.",
  location: "Nagpur, Maharashtra, India",
  email: "jayantshivankar4@gmail.com",
  availability: "Open to Software Developer opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/Jayant202003" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jayant-shivankar" },
    { label: "LeetCode", href: "https://leetcode.com/u/jayantshivankar/" },
  ],
};

export const about = {
  paragraph:
    "I'm a Software Engineer and Full Stack Developer focused on building reliable, user-facing web applications. I work primarily with React.js, Node.js, Express.js, and MongoDB, and have hands-on experience building REST APIs, authentication systems, CRUD workflows, and real-time applications using Socket.IO and WebRTC. I also have a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems, and I'm actively looking for opportunities to grow as a Software Developer.",
  stats: [
    { value: "3", label: "Full-stack projects" },
    { value: "MERN", label: "Primary stack" },
    { value: "DSA", label: "Core strength" },
    { value: "2025", label: "B.Tech graduate" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "01-openai-chat",
    title: "OpenAI Powered Chat Application",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    problem:
      "Users need a reliable way to interact with an AI assistant while keeping their previous conversations available across sessions.",
    approach:
      "Built a full-stack AI chat application with React.js on the frontend and Node.js with Express.js on the backend. Designed REST APIs for processing prompts, AI-generated responses, and persistent chat history using MongoDB. Integrated the OpenAI API through the backend while keeping API credentials server-side.",
    outcome:
      "Currently developing the application with a focus on persistent conversation history, backend AI request handling, and a maintainable frontend and backend architecture.",
    href: undefined,
    repo: undefined,
  },
  {
    slug: "02-pluto-meet",
    title: "Pluto-Meet",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "WebRTC", "Socket.IO", "MongoDB"],
    problem:
      "Users need a real-time platform for video communication and chat with secure sessions and reliable peer-to-peer connections.",
    approach:
      "Built a real-time video conferencing platform using WebRTC for peer-to-peer audio and video communication and Socket.IO for signaling. Implemented SDP offer/answer exchange and ICE candidate exchange, session-based authentication with Bcrypt, and a responsive React meeting interface with video and chat functionality.",
    outcome:
      "Built a full-stack video conferencing platform supporting real-time multi-user meetings, video communication, chat, and authenticated sessions.",
    href: "https://pluto-meet.onrender.com",
    repo: "https://github.com/Jayant202003/Pluto-Meet.git",
  },
  {
    slug: "03-forgeflow",
    title: "ForgeFlow",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    problem:
      "Development teams need a centralized platform to manage repositories, files, issues, users, and real-time collaboration workflows.",
    approach:
      "Developed a Git-based collaboration platform with JWT authentication, protected routes, repository management, issue tracking, and user profiles. Designed RESTful APIs with Express.js and MongoDB Atlas for CRUD workflows and integrated Socket.IO for real-time communication between the frontend and backend.",
    outcome:
  "Built and deployed a full-stack collaboration platform with MongoDB Atlas and Render, including real-time client-server communication.",
    href: "https://forgeflow-i5t3.onrender.com",
    repo: "https://github.com/Jayant202003/ForgeFlow.git",
  },
];

export const process = [
  {
    title: "Understand",
    detail:
      "Start by understanding the problem, requirements, users, and technical constraints before deciding how to build the solution.",
  },
  {
    title: "Design",
    detail:
      "Break the application into clear frontend, backend, database, and API components and plan how they will work together.",
  },
  {
    title: "Build",
    detail:
      "Develop the core functionality with maintainable code, reusable components, secure API handling, and appropriate data structures.",
  },
  {
    title: "Test & Improve",
    detail:
      "Test features, identify issues, improve the implementation, and refine the application based on what I learn during development.",
  },
];

export const stack = {
  frontend: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "TailwindCSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "EJS",
  ],
  infra: [
    "MongoDB",
    "MySQL",
    "Socket.IO",
    "WebRTC",
    "Data Structures & Algorithms",
    "DBMS",
    "OOP",
    "Operating Systems",
    "Git",
    "GitHub",
    "Docker",
  ],
};



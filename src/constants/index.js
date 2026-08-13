export const navLinks = [
  {
    name: "About Me",
    link: "#aboutme"
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];



export const techStackIcons = [
  {
    number: "01",
    name: "MERN Stack",
    icon: "https://digital-dividend.com/wp-content/uploads/2023/06/MERN-Stack-Development-Company.webp",
    shortName: "MongoDB · Express · React · Node",
    description:
      "Building full-stack applications with modern JavaScript technologies and REST APIs.",
  },

  {
    number: "02",
    name: "Python",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNTQ5uSrpkQcxHqgDj8_lVjB9nOJp-q5qBuRTZYFKHRX_LtPPjJiSx_ug&s=10",
    shortName: "Python · Flask · Automation",
    description:
      "Writing backend logic, automation scripts and integrating Python services with web applications.",
  },

  {
    number: "03",
    name: "Database",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    shortName: "MongoDB · Firebase",
    description:
      "Designing and managing application data using modern NoSQL databases and cloud services.",
  },


];

export const logoIconsList = [
  {
    imgPath: "/images/github.png",
    name: 'Github'
  },
  {
    imgPath: "/images/leetcode.png",
    name: 'Leetcode'
  },
  {
    imgPath: "/images/hacker.png",
    name: 'HackerRank'
  },
  {
    imgPath: "/images/strapi.png",
    name: 'Strapi'
  },
  {
    imgPath: "/images/firebase.png",
    name: 'Firebase'
  },
  {
    imgPath: "/images/netlify.png",
    name: 'Netlify'
  },
  {
    imgPath: "/images/mySql.png",
    name: 'MySql'
  },

];


export const projects = [
  {
    title: "Silai ERP - Tailor Business Management System",
    category: "FULL STACK",
    description: "A full-fledged ERP system for tailor shops to manage customer orders, measurements, inventory and billing digitally.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    image: "./images/silaiERP.png",
    link: "https://github.com/mochi-vidhi/Silai-ERP-Tailor-Business-Management-System-",
  },

  {
    title: "The Learning Hub",
    category: "FULL STACK",
    description:
      "An online learning platform where users can browse courses, track progress and manage their learning journey.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    image: "/images/theLearning.png",
    link: "https://github.com/mochi-vidhi/The-Learning-Hub",
  },

  {
    title: "CodeVista Editor",
    category: "TOOLS",
    description: "A sleek browser-based code editor built for developers with a modern development experience.",
    tech: ["React.js", "Tailwind", "Judge0 API", "Firebase"],
    image: "/images/codeVistaEditor.png",
    link: "https://thecodevista.netlify.app/",
  },

  {
    title: "AI Resume Builder",
    category: "AI",
    description: "Smart resume builder using AI to generate powerful and professional CV content.",
    tech: ["React", "AI API", "Strapi"],
    image: "/images/aiResumeBuilder.png",
    link: "https://www.linkedin.com/posts/mochi-vidhi-a362672b4_reactjs-strapi-ai-activity-7312503396882608128-2XP5",
  },

  {
    title: "AI Career Copilot",
    category: "AI",
    description: "An AI-powered career guidance platform that provides personalized advice and resources to help users navigate their professional journey.",
    tech: ["React", "AI API", "Python", "BeautifulSoup", "Flask"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLYxKhTRqsyk0uPANFtkvpfKnAReRchd1UfFdSDCO4Q&s=10",
    link: "",
  },
];

export const experiences = [
  {
    role: "React.js Developer Intern",
    company: "BizCompass Software Pvt. Ltd.",
    location: "Surat, Gujarat",
    duration: "6 Months",
    type: "Internship",
    description:
      "Worked on real-world software projects, building and maintaining web application features, collaborating with the development team, and gaining hands-on experience with full-stack development practices.",
    colors: "from-pink-500 via-purple-500 to-blue-500"
  },
  {
    role: "Part-Time Developer",
    company: "Employee's Clock (HRMS System)",
    location: "Remote",
    duration: "Ongoing",
    type: "Part-Time",
    description:
      "Contributing to an HRMS (Human Resource Management System) product, developing and enhancing employee attendance, tracking and management features as a part-time developer.",
    colors: "from-green-400 via-teal-400 to-indigo-500"
  }
];


const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },

];



export {
  words,
  // abilities,
  // logoIconsList,
  // counterItems,
  // expCards,
  // expLogos,
  // testimonials,
  // socialImgs,
  // techStackIcons,
  // techStackImgs,
  // navLinks,
};
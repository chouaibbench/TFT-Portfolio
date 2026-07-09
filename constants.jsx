export const PROFILE = {
  name: "Chouaib BEN-CHOUAIB",
  title: "Full-Stack Web Developer",
  bio: "Second-year web development student passionate about building modern web applications using React, Laravel, and Node.js. I enjoy creating user-friendly interfaces and working on real-world projects while continuously improving my skills.",
  location: "Morocco",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Node.js",
    "Laravel",
    "PHP",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "GitLab"
  ],
  links: {
    email: "chouaibbenchouaib0@gmail.com",
    github: "https://github.com/chouaibbench",
    linkedin: "https://www.linkedin.com/in/chouaib-benchouaib/",
  },
};

export const CORE_METRICS = [
  { value: "2", suffix: "+", label: "Years Learning" },
  { value: "3", suffix: "+", label: "Projects Shipped" },
  { value: "13", suffix: "+", label: "Technologies" },
  { value: "100", suffix: "%", label: "Passion" },
];

export const TIMELINE = [
  {
    year: "2024 — 2025",
    title: "Web Development Foundations",
    company: "Academic Training",
    description: "Learned programming fundamentals and core web technologies including Python, HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. Gained experience with Git and GitHub.",
  },
  {
    year: "2025 — 2026",
    title: "Full-Stack Development",
    company: "Academic Training",
    description: "Built full-stack applications using React, Laravel, and Node.js. Worked with MongoDB and MySQL, explored UI/UX design, and collaborated on projects using Git, GitHub, and GitLab.",
  },
];

export const PROJECTS = [
  {
    id: "1",
    title: "FocusHub",
    category: "Productivity",
    themeColor: "blue-500",
    description: "A productivity dashboard to manage tasks and stay organized.",
    longDescription: "FocusHub is a web application that helps users manage their tasks and improve productivity with a simple and clean interface.",
    image: "/images/focushub-dashboard.png",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    links: {
      live: "https://focus-hub-frontend-iota.vercel.app/",
      github: "https://github.com/chouaibbench/FocusHUB-Frontend",
    },
    metrics: [
      { label: "Type", value: "Frontend App" },
      { label: "Stack", value: "React + css" },
      { label: "Status", value: "Live" },
      { label: "Year", value: "2025" },
    ],
    problem: "Managing daily tasks efficiently can be difficult without a clear system.",
    solution: "A simple dashboard to organize tasks and improve focus.",
    role: "Designed and developed the frontend using React.",
  },
  {
    id: "2",
    title: "TFT Movies",
    category: "Web App",
    themeColor: "violet-500",
    description: "A movie browsing application built with React.",
    longDescription: "TFT Movies allows users to explore movies, view details, and search for their favorite films using an external API.",
    image: "/images/tft-films.png",
    stack: ["React", "JavaScript", "API"],
    links: {
      live: "https://tft-movies-01-lnchm5e9p-chouaibs-projects-88ea5197.vercel.app/",
      github: "https://github.com/chouaibbench/tft-movies-01",
    },
    metrics: [
      { label: "Type", value: "Frontend App" },
      { label: "Stack", value: "React + API" },
      { label: "Status", value: "Live" },
      { label: "Year", value: "2026" },
    ],
    problem: "Users need a simple way to discover and explore movies.",
    solution: "A clean interface to browse and search about movies easily.",
    role: "Built the application using React and integrated a movie API.",
  },
  {
  id: "4",
  title: "CV Builder Pro",
  category: "Full-Stack Web Application",
  themeColor: "blue-500",
  description: "A modern CV builder application that helps users create professional resumes with real-time preview, multiple templates, and export functionality.",
  longDescription: "CV Builder Pro is a comprehensive resume creation platform built with React and Vite. It features an intuitive editor with live preview, allowing users to input their personal information, work experience, education, skills, and projects. The application provides real-time formatting and styling options, making professional CV creation accessible to everyone.",
  image: "/images/cv.png",
  stack: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "JavaScript"],
  links: {
    live: "https://your-cv-builder-demo.com",
    github: "https://github.com/yourusername/cv-builder",
  },
  metrics: [
    { label: "Project", value: "Portfolio Project" },
    { label: "Role", value: "Frontend Developer" },
    { label: "Status", value: "Completed" },
    { label: "Year", value: "2026" },
  ],
  problem: "Creating professional CVs requires expensive software or design skills, making it difficult for job seekers to present themselves effectively.",
  solution: "Built an intuitive web-based CV builder with real-time preview, pre-styled components, and easy-to-use forms that generate professional resumes instantly.",
  role: "Designed and developed the complete frontend application, including the editor interface, preview system, form validation, data persistence, and responsive UI components using React and Tailwind CSS.",
},
];

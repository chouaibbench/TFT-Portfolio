export const PROFILE = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer",
  bio: "I build fast, scalable web applications with a focus on clean architecture and exceptional user experience. 8 years of turning complex problems into elegant solutions.",
  location: "Berlin, Germany",
  stack: [
    "React", "Next.js", "TypeScript", "Node.js", "Go",
    "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL",
    "Tailwind CSS", "Prisma", "Kubernetes", "Terraform"
  ],
  links: {
    email: "alex@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

export const CORE_METRICS = [
  { value: "8", suffix: "+", label: "Years Experience" },
  { value: "40", suffix: "+", label: "Projects Shipped" },
  { value: "99", suffix: "%", label: "Client Satisfaction" },
  { value: "12", suffix: "M+", label: "Users Reached" },
];

export const TIMELINE = [
  {
    year: "2023 — Present",
    title: "Senior Full-Stack Engineer",
    company: "Vercel",
    description: "Leading frontend infrastructure initiatives, improving build performance by 40% and mentoring a team of 6 engineers.",
  },
  {
    year: "2021 — 2023",
    title: "Software Engineer",
    company: "Stripe",
    description: "Built and maintained payment flow components used by millions of merchants globally. Reduced checkout latency by 30%.",
  },
  {
    year: "2019 — 2021",
    title: "Frontend Engineer",
    company: "N26",
    description: "Developed core banking UI features in React, collaborated closely with design and product teams in an agile environment.",
  },
  {
    year: "2017 — 2019",
    title: "Junior Developer",
    company: "Freelance",
    description: "Delivered 15+ client projects ranging from e-commerce stores to SaaS dashboards using React, Vue, and Node.js.",
  },
];

export const PROJECTS = [
  {
    id: "focushub",
    title: "FocusHub",
    category: "Productivity",
    themeColor: "blue-500",
    description: "An AI-powered productivity dashboard that adapts to your workflow and eliminates context switching.",
    longDescription: "FocusHub is a full-stack productivity platform that uses machine learning to analyze work patterns and surface the right tasks at the right time. It integrates with 20+ tools including GitHub, Jira, and Slack.",
    image: "/images/focushub-dashboard.png",
    stack: ["Next.js", "JavaScript", "OpenAI", "PostgreSQL", "Redis", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    metrics: [
      { label: "Active Users", value: "12,000+" },
      { label: "Productivity Gain", value: "34%" },
      { label: "Integrations", value: "20+" },
      { label: "Uptime", value: "99.9%" },
    ],
    problem: "Knowledge workers lose 2+ hours daily switching between tools and re-establishing context, leading to burnout and missed deadlines.",
    solution: "A unified dashboard powered by AI that learns your priorities, surfaces relevant tasks, and mutes distractions automatically.",
    role: "Solo founder and lead engineer. Responsible for architecture, backend APIs, frontend UI, and DevOps pipeline.",
  },
  {
    id: "nexus",
    title: "Nexus Intelligence",
    category: "Developer Tools",
    themeColor: "violet-500",
    description: "An AI-first collaborative IDE plugin that brings pair programming to every developer.",
    longDescription: "Nexus is a VS Code extension that embeds a context-aware AI assistant directly into the editor, capable of understanding entire codebases and suggesting architectural improvements.",
    image: "https://picsum.photos/seed/nexus/800/600",
    stack: ["TypeScript", "Go", "gRPC", "OpenAI", "Tree-sitter", "WebSockets"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    metrics: [
      { label: "Downloads", value: "8,500+" },
      { label: "Avg. Rating", value: "4.9 / 5" },
      { label: "Time Saved", value: "1.5h/day" },
      { label: "Languages", value: "18" },
    ],
    problem: "Existing AI coding tools lack deep codebase context, producing suggestions that don't fit the project's architecture or conventions.",
    solution: "A language-server-aware plugin that indexes the full repo and feeds structured context to the model for accurate, idiomatic suggestions.",
    role: "Lead engineer for the Go backend and VS Code extension. Designed the context-indexing pipeline and streaming inference layer.",
  },
  {
    id: "shipfast",
    title: "ShipFast",
    category: "SaaS",
    themeColor: "emerald-500",
    description: "A Next.js SaaS boilerplate with auth, billing, and a component library — go from idea to launch in hours.",
    longDescription: "ShipFast is a production-ready starter kit used by indie hackers and small teams to skip boilerplate and focus on their core product.",
    image: "https://picsum.photos/seed/shipfast/800/600",
    stack: ["Next.js", "Prisma", "Stripe", "NextAuth", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    metrics: [
      { label: "Customers", value: "600+" },
      { label: "Revenue", value: "$48k MRR" },
      { label: "Setup Time", value: "< 1 hour" },
      { label: "Components", value: "80+" },
    ],
    problem: "Developers waste weeks setting up auth, payments, and email for every new SaaS project before writing a single line of product code.",
    solution: "A fully integrated starter with Stripe billing, magic-link auth, transactional email, and a polished UI kit ready to customize.",
    role: "Creator and maintainer. Handles product, engineering, support, and marketing as a one-person operation.",
  },
];

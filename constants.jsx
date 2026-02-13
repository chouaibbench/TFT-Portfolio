
import { Project, Metric, TimelineItem } from './types';

export const PROFILE = {
  name: "Alex Rivera",
  title: "Senior Full-Stack Engineer",
  location: "Berlin, Germany",
  bio: "Engineering high-performance digital architectures with a focus on scalability and user experience. Currently pushing the boundaries of edge computing and AI integration.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Go", "Docker"],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex.rivera@example.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "ecotrack",
    title: "EcoTrack Pro",
    themeColor: "emerald-500",
    description: "Enterprise-grade sustainability monitoring platform used by Fortune 500 companies to track carbon footprint in real-time.",
    longDescription: "A comprehensive SaaS platform that aggregates data from IoT sensors and utility APIs to provide a granular view of an organization's environmental impact. Built for scale and precision.",
    category: "Full-Stack",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" },
    metrics: [
      { label: "Data Points/Sec", value: "50k+" },
      { label: "Reporting Speed", value: "< 200ms" },
      { label: "Lighthouse Score", value: "98" }
    ],
    problem: "Large organizations struggled to aggregate siloed emissions data, leading to inaccurate reporting and delayed decision-making.",
    solution: "We engineered a robust pipeline that normalizes data from disparate sources into a unified analytics engine with sub-second query latency.",
    role: "Lead Architect – Developed the real-time data ingestion layer and designed the micro-services architecture."
  },
  {
    id: "prism-commerce",
    title: "Prism Commerce",
    themeColor: "violet-500",
    description: "Ultra-fast headless e-commerce storefront with integrated AI personalization and edge-cached product catalogs.",
    category: "Frontend",
    stack: ["Next.js", "React", "Shopify API", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" },
    metrics: [
      { label: "Conversion Lift", value: "24%" },
      { label: "TBT (Total Blocking Time)", value: "50ms" },
      { label: "Load Time", value: "0.8s" }
    ],
    problem: "Legacy storefronts were bloated, leading to high bounce rates and poor mobile conversion.",
    solution: "Built a custom headless solution leveraging Next.js Incremental Static Regeneration (ISR) and server-side image optimization.",
    role: "Frontend Engineer – Led the implementation of the core UI library and performance optimization strategy."
  },
  {
    id: "nexus-ai",
    title: "Nexus Intelligence",
    themeColor: "blue-500",
    description: "A collaborative workspace that integrates generative AI models for code analysis, documentation, and team automation.",
    category: "Full-Stack",
    stack: ["React", "FastAPI", "Gemini API", "Redis", "WebSockets"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" },
    metrics: [
      { label: "Team Productivity", value: "+40%" },
      { label: "API Uptime", value: "99.9%" },
      { label: "LLM Tokens/Day", value: "2M+" }
    ],
    problem: "Developers lose 20% of their day switching between documentation and coding tools.",
    solution: "Created an integrated environment that brings contextual AI assistance directly into the collaboration workflow.",
    role: "Full-Stack Developer – Integrated Gemini models and implemented the real-time collaboration engine using WebSockets."
  }
];

export const CORE_METRICS: Metric[] = [
  { label: "Years Experience", value: "8", suffix: "+" },
  { label: "Lighthouse Avg", value: "95", suffix: "+" },
  { label: "Projects Shipped", value: "40", suffix: "" },
  { label: "Code Coverage", value: "92", suffix: "%" }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021 — Present",
    title: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    description: "Leading a cross-functional team of 12 engineers in building high-scale distributed systems. Architected the migration to a serverless infrastructure, reducing operational costs by 35%."
  },
  {
    year: "2018 — 2021",
    title: "Frontend Specialist",
    company: "CreativeStream",
    description: "Pioneered the adoption of React and TypeScript across the organization. Built a custom UI library used by 5 different product teams."
  },
  {
    year: "2016 — 2018",
    title: "Full-Stack Developer",
    company: "StartUp Inc",
    description: "Wore many hats in an early-stage startup. Built the MVP for a fintech platform that secured Series A funding."
  }
];


export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full-Stack' | 'Frontend' | 'Mobile';
  stack: string[];
  image: string;
  themeColor: string; // Tailwind color name like 'blue-500'
  links: {
    github: string;
    live: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  problem: string;
  solution: string;
  role: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

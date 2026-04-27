import { ArrowRight, ChevronRight } from 'lucide-react';
import { PROFILE, CORE_METRICS, PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const TECH_MARQUEE = [
  'React', 'Node.js', 'Laravel', 'PHP', 'JavaScript',
  'MySQL', 'MongoDB', 'Tailwind CSS', 'Git', 'TypeScript',
  'React', 'Node.js', 'Laravel', 'PHP', 'JavaScript',
  'MySQL', 'MongoDB', 'Tailwind CSS', 'Git', 'TypeScript',
];

const Home = ({ onNavigate }) => {
  return (
    <div className="pb-24">

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center pt-24 px-6">
        <div className="max-w-7xl mx-auto w-full">

          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 text-[#8b5cf6] text-xs font-mono tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]"></span>
              </span>
              Available for work — {new Date().getFullYear()}
            </span>
          </div>

          <div className="space-y-2 mb-10">
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.88]">
              <span className="block text-white">I build</span>
              <span className="block text-[#8b5cf6] italic">robust_</span>
              <span className="block text-white">full-stack</span>
              <span className="block text-white">Solutions.</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 max-w-5xl">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              {PROFILE.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onNavigate('projects')}
                className="group px-8 py-4 bg-[#8b5cf6] text-white font-bold rounded-full flex items-center justify-center hover:bg-violet-400 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 border border-zinc-700 text-zinc-300 font-bold rounded-full hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-20 text-zinc-600">
            <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"></div>
            <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="border-y border-zinc-800 py-5 overflow-hidden my-20">
        <div className="flex whitespace-nowrap marquee">
          {TECH_MARQUEE.map((tech, i) => (
            <span key={i} className="mx-8 text-zinc-500 font-mono text-sm uppercase tracking-widest">
              {tech} <span className="text-[#8b5cf6] mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Metrics ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_METRICS.map((metric, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#8b5cf6]/40 transition-colors group text-center">
              <div className="text-4xl md:text-5xl font-black text-[#8b5cf6] mb-2 group-hover:scale-110 transition-transform">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">Selected Works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-zinc-400 hover:text-[#8b5cf6] flex items-center gap-2 group transition-colors"
          >
            <span>View all</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(id) => onNavigate(`case-${id}`)}
            />
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="border-y border-zinc-800 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">Tools as Technologies</p>
            <h2 className="text-3xl md:text-4xl font-bold">The Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {PROFILE.stack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 font-mono text-sm hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative p-12 md:p-20 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none"></div>
          <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest mb-6">Open to opportunities</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Ready to build something <span className="text-[#8b5cf6] italic">great?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto mb-10">
            I'm open to freelance projects and full-time roles. Let's talk about your idea.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-[#8b5cf6] text-white font-bold rounded-2xl hover:bg-violet-400 hover:scale-105 active:scale-95 transition-all"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

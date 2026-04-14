import { useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Users } from 'lucide-react';
import { PROJECTS } from '../constants';

const CaseStudy = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);
  useEffect(() => { window.scrollTo(0, 0); }, [projectId]);
  if (!project) return <div className="pt-32 text-center text-zinc-500">Project not found</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        <button onClick={onBack} className="group flex items-center gap-2 text-zinc-400 hover:text-[#8b5cf6] transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to projects</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">{project.category}</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{project.title}</h1>
              <p className="text-xl text-zinc-400 leading-relaxed">{project.longDescription || project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#8b5cf6] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-violet-400 transition-all">
                <ExternalLink size={18} /> Live Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 bg-zinc-900 text-white rounded-xl font-bold border border-zinc-800 flex items-center gap-2 hover:bg-zinc-800 transition-all">
                <Github size={18} /> Source Code
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">{metric.label}</p>
                  <p className="text-xl font-black text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-zinc-800">
          {[
            { icon: <Layout size={22} />, color: 'text-[#8b5cf6]', title: 'The Problem', text: project.problem },
            { icon: <Cpu size={22} />, color: 'text-emerald-400', title: 'The Solution', text: project.solution },
            { icon: <Users size={22} />, color: 'text-violet-300', title: 'My Role', text: project.role },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <div className={`flex items-center gap-3 ${item.color}`}>
                {item.icon}
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">Built with</p>
            <h3 className="text-2xl font-bold">Technology Stack</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {project.stack.map(tech => (
              <span key={tech} className="px-5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-300 font-mono text-sm hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;

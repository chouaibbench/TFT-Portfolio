
import React, { useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Users, BarChart3 } from 'lucide-react';
import { PROJECTS } from '../constants';
import ProjectAIChat from '../components/ProjectAIChat';

interface CaseStudyProps {
  projectId: string;
  onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to projects</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className={`text-${project.themeColor} font-bold uppercase tracking-widest text-sm`}>{project.category}</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{project.title}</h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold flex items-center hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5">
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold border border-zinc-800 flex items-center hover:bg-zinc-800 transition-all">
                <Github size={20} className="mr-2" />
                View Source
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{metric.label}</div>
                  <div className="text-2xl font-black text-white">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40"></div>
          </div>
        </div>

        {/* Breakdown Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-zinc-800">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-blue-500 mb-2">
              <Layout size={24} />
              <h3 className="text-xl font-bold">The Problem</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-emerald-500 mb-2">
              <Cpu size={24} />
              <h3 className="text-xl font-bold">The Solution</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-violet-500 mb-2">
              <Users size={24} />
              <h3 className="text-xl font-bold">My Role</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">{project.role}</p>
          </div>
        </div>

        {/* Tech Stack Focus */}
        <div className="py-20 bg-zinc-900/50 rounded-3xl p-12 border border-zinc-800 space-y-12">
          <div className="text-center space-y-4">
             <BarChart3 className="mx-auto text-blue-500" size={32} />
             <h3 className="text-3xl font-bold">Technology Stack</h3>
             <p className="text-zinc-500">Carefully selected tools to ensure scalability and developer velocity.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.stack.map(tech => (
              <div key={tech} className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-300 font-mono text-sm hover:border-blue-500 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <ProjectAIChat project={project} />
    </div>
  );
};

export default CaseStudy;

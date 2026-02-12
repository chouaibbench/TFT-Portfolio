
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCarousel from '../components/ProjectCarousel';
import { Sparkles } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (view: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles size={12} />
          <span>Interactive Showcase</span>
        </div>
        <h1 className="text-5xl font-black tracking-tight">Portfolio.</h1>
        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
          An immersive journey through my architectural decisions, performance benchmarks, and high-impact digital solutions.
        </p>
      </div>

      <div className="flex-1">
        <ProjectCarousel projects={PROJECTS} onNavigate={onNavigate} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
           <h4 className="font-bold text-white mb-2">Performance First</h4>
           <p className="text-sm text-zinc-500">Every project is optimized for Core Web Vitals, targeting 90+ scores across the board.</p>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
           <h4 className="font-bold text-white mb-2">User Centric</h4>
           <p className="text-sm text-zinc-500">I focus on intuitive interactions and seamless UX that converts visitors into users.</p>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
           <h4 className="font-bold text-white mb-2">Modern Stack</h4>
           <p className="text-sm text-zinc-500">Leveraging the latest in edge computing, AI, and distributed systems to build the future.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

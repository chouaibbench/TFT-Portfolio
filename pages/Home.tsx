
import React from 'react';
import { ArrowRight, Download, Globe, ChevronRight } from 'lucide-react';
import { PROFILE, CORE_METRICS, PROJECTS } from '../constants';
import Terminal from '../components/Terminal';
import ProjectCard from '../components/ProjectCard';

interface HomeProps {
  onNavigate: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500">Future</span> of Web Performance.
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              {PROFILE.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('projects')}
                className="group px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Explore Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-xl hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="hidden lg:block animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CORE_METRICS.map((metric, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 transition-colors group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h3>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="text-zinc-400 hover:text-white flex items-center space-x-2 group"
          >
            <span>View all projects</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={(id) => onNavigate(`case-${id}`)} 
            />
          ))}
        </div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section className="bg-zinc-900/30 py-24 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {PROFILE.stack.map((tech) => (
              <div key={tech} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 font-medium hover:border-blue-500 hover:text-white transition-all duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center py-20">
        <div className="glass p-12 md:p-20 rounded-[3rem] space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">Ready to build something <span className="text-blue-500 italic">extraordinary?</span></h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            I'm currently accepting new freelance projects and full-time opportunities. Let's discuss your vision.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-600/20"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

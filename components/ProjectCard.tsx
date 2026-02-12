
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-1 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="p-2 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <p className="text-zinc-400 line-clamp-2 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              {tag}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-3 py-1 text-[10px] font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

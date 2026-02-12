
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
  onNavigate: (view: string) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, rgb(var(--color-${activeProject.themeColor.split('-')[0]})), transparent 70%)`,
            // Fallback to static if CSS variables aren't set
            backgroundColor: activeProject.themeColor.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : 
                            activeProject.themeColor.includes('emerald') ? 'rgba(16, 185, 129, 0.2)' : 
                            'rgba(139, 92, 246, 0.2)'
          }}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="space-y-4">
          <motion.p 
            key={`cat-${activeProject.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.3em] text-blue-500"
          >
            {activeProject.category}
          </motion.p>
          <motion.h2 
            key={`title-${activeProject.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            {activeProject.title}
          </motion.h2>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="p-4 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
        <div className="flex items-center gap-8 md:gap-16">
          {projects.map((project, index) => {
            const distance = Math.abs(index - activeIndex);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 0.85,
                  opacity: isActive ? 1 : 0.3,
                  x: (index - activeIndex) * (window.innerWidth < 768 ? 320 : 500),
                  filter: isActive ? 'blur(0px)' : 'blur(4px)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute w-[300px] md:w-[600px] aspect-[16/10] cursor-pointer"
                onClick={() => isActive ? onNavigate(`case-${project.id}`) : setActiveIndex(index)}
              >
                <div className="relative group w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold flex items-center space-x-2">
                      <span>View Case Study</span>
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center mt-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${activeProject.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            {activeProject.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCarousel;

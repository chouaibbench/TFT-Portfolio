import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const ProjectCarousel = ({ projects, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const cooldown = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  const goNext = () => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % projects.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const atEnd = activeIndexRef.current === projects.length - 1 && e.deltaY > 0;
      const atStart = activeIndexRef.current === 0 && e.deltaY < 0;
      if (atEnd || atStart) return;
      e.preventDefault();
      if (cooldown.current) return;
      cooldown.current = true;
      setTimeout(() => { cooldown.current = false; }, 700);
      if (e.deltaY > 0) goNext(); else goPrev();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [projects.length]);

  if (!projects?.length) return null;

  const active = projects[activeIndex];

  // slide variants — incoming card comes from direction, outgoing exits opposite
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      scale: 0.85,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 280, damping: 28 },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-40%" : "40%",
      scale: 0.75,
      opacity: 0,
      rotateY: dir > 0 ? -20 : 20,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <div ref={containerRef} className="relative w-full py-20 overflow-hidden">

      {/* Background glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
          }}
        />
      </AnimatePresence>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="space-y-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={`cat-${active.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#8b5cf6]"
            >
              {active.category}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.h2
              key={`title-${active.id}`}
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
                center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
                exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.2 } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              {active.title}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-500 tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button
            onClick={goPrev}
            className="p-3 rounded-full border border-zinc-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goNext}
            className="p-3 rounded-full border border-zinc-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Card — only the active card, slides in/out */}
      <div className="relative flex items-center justify-center h-[500px] md:h-[600px]" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-[300px] md:w-[600px] aspect-[16/10] cursor-pointer"
            onClick={() => onNavigate(`case-${active.id}`)}
          >
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-[#8b5cf6]/40 via-transparent to-[#8b5cf6]/20 blur-sm pointer-events-none" />

            <div className="relative group w-full h-full rounded-3xl overflow-hidden border border-[#8b5cf6]/20 shadow-2xl">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent flex items-end p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button className="px-6 py-3 bg-[#8b5cf6] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-violet-400 transition-colors">
                  View Case Study <ArrowUpRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description + dots */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-16 space-y-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${active.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>

        <div className="flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 h-2 bg-[#8b5cf6]" : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

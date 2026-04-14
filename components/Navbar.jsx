import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

const Navbar = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [currentView]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const isProjectsActive = currentView === "projects" || currentView?.startsWith("case-");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <button type="button" onClick={() => onNavigate("home")} className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-white">BEN</span><span className="text-[#8b5cf6]">CHOUAIB</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = item.id === "projects" ? isProjectsActive : currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#8b5cf6] ${active ? "text-[#8b5cf6]" : "text-zinc-400"}`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-4">
            <a href={PROFILE.links.github} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={PROFILE.links.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <a
            href={`mailto:${PROFILE.links.email}`}
            className="px-5 py-2 bg-[#8b5cf6] text-white text-sm font-bold rounded-full hover:bg-violet-400 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-zinc-400"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10 flex flex-col p-6 gap-4 shadow-2xl">
          {navItems.map((item) => {
            const active = item.id === "projects" ? isProjectsActive : currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }}
                className={`text-lg font-medium text-left ${active ? "text-[#8b5cf6]" : "text-zinc-400"}`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="flex gap-6 pt-4 border-t border-white/5">
            <a href={PROFILE.links.github} className="text-zinc-400 hover:text-white" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href={PROFILE.links.linkedin} className="text-zinc-400 hover:text-white" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${PROFILE.links.email}`} className="text-zinc-400 hover:text-white" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          ALEX<span className="text-blue-500">RIVERA</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                currentView === item.id || (currentView.startsWith('case-') && item.id === 'projects')
                  ? 'text-blue-500' 
                  : 'text-zinc-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-zinc-800"></div>
          <div className="flex items-center space-x-4">
            <a href={PROFILE.links.github} className="text-zinc-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={PROFILE.links.linkedin} className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10 flex flex-col p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg font-medium text-left ${
                currentView === item.id ? 'text-blue-500' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/5">
            <a href={PROFILE.links.github} className="text-zinc-400 hover:text-white"><Github size={20} /></a>
            <a href={PROFILE.links.linkedin} className="text-zinc-400 hover:text-white"><Linkedin size={20} /></a>
            <a href={`mailto:${PROFILE.links.email}`} className="text-zinc-400 hover:text-white"><Mail size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

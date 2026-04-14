import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PortfolioAIChat from './components/ProjectAIChat.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentView(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  const renderContent = () => {
    if (currentView.startsWith('case-')) {
      const projectId = currentView.replace('case-', '');
      return <CaseStudy projectId={projectId} onBack={() => navigate('projects')} />;
    }
    switch (currentView) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'projects': return <Projects onNavigate={navigate} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#8b5cf6]/30">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8b5cf6]/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar currentView={currentView} onNavigate={navigate} />

      <main className="relative z-10 transition-opacity duration-300">
        {renderContent()}
      </main>

      <PortfolioAIChat />

      <footer className="relative z-10 py-12 border-t border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-xl font-black tracking-tighter">
              <span className="text-white">BEN</span><span className="text-[#8b5cf6]">CHOUAIB</span>
            </div>
            <div className="text-zinc-600 text-xs font-mono">© {new Date().getFullYear()} — All rights reserved.</div>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
            {['home','projects','about','contact'].map(v => (
              <button key={v} onClick={() => navigate(v)} className="hover:text-[#8b5cf6] transition-colors capitalize">{v}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#8b5cf6] animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Available for work</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

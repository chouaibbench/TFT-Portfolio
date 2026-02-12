
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Basic Hash-based routing logic for the SPA environment
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentView(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: string) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  const renderContent = () => {
    if (currentView.startsWith('case-')) {
      const projectId = currentView.replace('case-', '');
      return <CaseStudy projectId={projectId} onBack={() => navigate('projects')} />;
    }

    switch (currentView) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'projects':
        return <Projects onNavigate={navigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-mesh opacity-30 pointer-events-none"></div>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violet-600/5 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>

      <Navbar currentView={currentView} onNavigate={navigate} />
      
      <main className="relative z-10 transition-opacity duration-300">
        {renderContent()}
      </main>

      <footer className="relative z-10 py-12 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-black tracking-tighter">
              ALEX<span className="text-blue-500">RIVERA</span>
            </div>
            <div className="text-zinc-500 text-sm">© 2024. Designed and engineered for the web.</div>
          </div>
          
          <div className="flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate('projects')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => navigate('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="flex items-center space-x-4">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

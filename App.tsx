import React, { useState } from 'react';
import { HomeView } from './views/HomeView';
import { GetStartedView } from './views/GetStartedView';
import { DataAppsView } from './views/DataAppsView';
import { AIAppsView } from './views/AIAppsView';
import { MigrationView } from './views/MigrationView';
import { LearnView } from './views/LearnView';
import { ViewState, NavItem } from './types';
import { Icons } from './components/Icons';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'get-started', label: 'Get Started' },
    { id: 'data-apps', label: 'Data Apps' },
    { id: 'ai-apps', label: 'AI Apps' },
    { id: 'migration', label: 'Migration' },
    { id: 'learn', label: 'Learn' },
  ];

  const handleNavClick = (id: ViewState) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView onChangeView={handleNavClick} />;
      case 'get-started': return <GetStartedView onChangeView={handleNavClick} />;
      case 'data-apps': return <DataAppsView onChangeView={handleNavClick} />;
      case 'ai-apps': return <AIAppsView onChangeView={handleNavClick} />;
      case 'migration': return <MigrationView onChangeView={handleNavClick} />;
      case 'learn': return <LearnView onChangeView={handleNavClick} />;
      default: return <HomeView onChangeView={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-deep text-foreground font-sans selection:bg-accent-bright/30 selection:text-white">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-blob mix-blend-screen" />
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full animate-blob animation-delay-2000 mix-blend-screen" />
         <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] bg-accent-bright/5 blur-[150px] rounded-full animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity" onClick={() => handleNavClick('home')}>
              <img src="https://static.pingcap.com/files/2026/02/12215103/logo-TiDB.svg" alt="TiDB" className="h-[32px] w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <button 
                onClick={() => handleNavClick('home')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${currentView === 'home' ? 'text-white' : 'text-foreground-muted hover:text-white'}`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${currentView === item.id ? 'text-white' : 'text-foreground-muted hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="w-px h-4 bg-white/20 mx-4" />
              
              <a href="https://github.com/pingcap/tidb" target="_blank" rel="noopener" className="text-foreground-muted hover:text-white transition-colors">
                <Icons.Github className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <Icons.Layout className="block h-6 w-6 rotate-45" />
                ) : (
                  <div className="flex flex-col gap-1.5 w-6">
                    <span className="block w-full h-0.5 bg-white"></span>
                    <span className="block w-full h-0.5 bg-white"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[80px] bg-black z-40 animate-fade-in p-6">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-2xl font-bold text-left py-4 border-b border-white/10 ${currentView === 'home' ? 'text-white' : 'text-white/60'}`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-bold text-left py-4 border-b border-white/10 ${currentView === item.id ? 'text-white' : 'text-white/60'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - spacing for fixed header */}
      <main className="flex-grow pt-[80px] relative z-10">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-black py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <img src="https://static.pingcap.com/files/2026/02/12215103/logo-TiDB.svg" alt="TiDB" className="h-6 w-auto opacity-50 mb-4" />
              <p className="text-foreground-subtle text-sm max-w-xs">
                The open-source distributed SQL database for modern cloud-native applications.
              </p>
            </div>
            <div className="flex gap-12 text-sm text-foreground-muted">
              <div className="flex flex-col gap-3">
                <span className="font-bold text-white mb-1">Product</span>
                <a href="#" className="hover:text-white transition-colors">TiDB Cloud</a>
                <a href="#" className="hover:text-white transition-colors">Self-Managed</a>
                <a href="#" className="hover:text-white transition-colors">Pricing</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold text-white mb-1">Developers</span>
                <a href="#" className="hover:text-white transition-colors">Docs</a>
                <a href="#" className="hover:text-white transition-colors">Community</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/[0.08] text-center md:text-left text-xs text-foreground-subtle">
            <p>&copy; {new Date().getFullYear()} TiDB Developer Hub. Built for builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
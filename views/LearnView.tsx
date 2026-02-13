import React from 'react';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';
import { Card } from '../components/Card';

interface LearnViewProps {
  onChangeView: (view: ViewState) => void;
}

export const LearnView: React.FC<LearnViewProps> = ({ onChangeView }) => {
  return (
    <div className="animate-fade-in px-6 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <button onClick={() => onChangeView('home')} className="group text-foreground-muted hover:text-white mb-8 flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Mental Models</h1>
          <p className="text-xl text-foreground-muted max-w-3xl">
            Learn the core architecture concepts, validate compatibility assumptions, and evaluate performance characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-[#0A0A0C] border border-white/10 p-12 hover:border-accent-bright/50 transition-colors">
            <div className="mb-8 text-accent-bright">
              <Icons.Learn className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Learn with Courses</h2>
            <p className="text-foreground-muted text-lg mb-8 leading-relaxed">Structured learning paths that explain how TiDB works from the inside out.</p>
            <a href="https://www.pingcap.com/education/" className="inline-flex items-center text-white font-bold hover:text-accent-bright transition-colors uppercase tracking-widest text-sm">
              Explore courses <Icons.ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="group relative bg-[#0A0A0C] border border-white/10 p-12 hover:border-blue-500/50 transition-colors">
            <div className="mb-8 text-blue-500">
              <Icons.Terminal className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Learn by Doing</h2>
            <p className="text-foreground-muted text-lg mb-8 leading-relaxed">Hands-on labs that let you explore TiDB behavior in real environments.</p>
            <a href="https://labs.tidb.io/labs" className="inline-flex items-center text-white font-bold hover:text-blue-500 transition-colors uppercase tracking-widest text-sm">
              Try interactive labs <Icons.ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';

interface MigrationViewProps {
  onChangeView: (view: ViewState) => void;
}

export const MigrationView: React.FC<MigrationViewProps> = ({ onChangeView }) => {
  const steps = [
    { id: 1, title: "Evaluate", desc: "Is TiDB the right fit? Understand MySQL compatibility." },
    { id: 2, title: "Plan", desc: "Design a safe migration. Choose strategy and size." },
    { id: 3, title: "Choose Tool", desc: "Pick based on data size and downtime tolerance." },
    { id: 4, title: "Execute", desc: "Move data using Data Migration (DM) or AWS DMS." },
    { id: 5, title: "Validate", desc: "Verify correctness before cutover." }
  ];

  return (
    <div className="animate-fade-in px-6 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <button onClick={() => onChangeView('home')} className="group text-foreground-muted hover:text-white mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Migrate with Confidence</h1>
          <p className="text-xl text-foreground-muted">
            Evaluate fit, plan safely, and migrate your data to TiDB with a clear, staged approach.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col md:flex-row gap-8 md:pl-24 group">
                {/* Number Indicator */}
                <div className="hidden md:flex absolute left-0 top-0 w-[54px] h-[54px] bg-[#000] border border-white/20 items-center justify-center font-bold text-xl text-foreground-muted group-hover:text-accent-bright group-hover:border-accent-bright transition-colors z-10">
                  {step.id}
                </div>
                
                <div className="flex-1 bg-[#0A0A0C] p-8 border border-white/10 hover:border-white/30 transition-colors">
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                     <span className="font-mono text-accent-bright font-bold text-xl">0{step.id}</span>
                     <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 hidden md:block">{step.title}</h3>
                  <p className="text-foreground-muted text-lg mb-6">{step.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs px-3 py-1 bg-white/5 text-foreground-subtle uppercase tracking-widest">Docs</span>
                    <span className="text-xs px-3 py-1 bg-white/5 text-foreground-subtle uppercase tracking-widest">Guide</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
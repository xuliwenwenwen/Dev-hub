import React from 'react';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';
import { Card } from '../components/Card';

interface AIAppsViewProps {
  onChangeView: (view: ViewState) => void;
}

export const AIAppsView: React.FC<AIAppsViewProps> = ({ onChangeView }) => {
  return (
    <div className="animate-fade-in px-6 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <button onClick={() => onChangeView('home')} className="group text-foreground-muted hover:text-white mb-8 flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Build AI Apps</h1>
          <p className="text-xl text-foreground-muted max-w-3xl">
            Combine LLMs, embeddings, and live transactional data using TiDB.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Explore Real AI Applications</h2>
            <div className="space-y-4">
              {[
                  { t: "AI-powered financial insights", d: "Crypto ETF Insights App with GPTs" },
                  { t: "RAG Applications", d: "Retrieval-Augmented Generation" },
                  { t: "Agentic AI systems", d: "AI Agent that Builds Full-Stack Apps" }
              ].map((item, i) => (
                <div key={i} className="group p-6 border border-white/10 bg-[#050506] hover:bg-[#0A0A0C] transition-colors cursor-pointer">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition-colors mb-2">{item.t}</h3>
                    <p className="text-foreground-muted">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <h2 className="text-3xl font-bold text-white">Get Hands-On with Vector Search</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <Card 
                  title="Python Quickstart" 
                  description="Start with Python"
                  icon={<Icons.Code className="w-8 h-8 text-accent-bright" />}
                  className="bg-[#0A0A0C]"
               />
               <Card 
                  title="SQL Quickstart" 
                  description="Start with SQL"
                  icon={<Icons.Database className="w-8 h-8 text-accent-bright" />}
                  className="bg-[#0A0A0C]"
               />
             </div>

             <div className="pt-8">
               <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-widest font-mono">Frameworks</h3>
               <div className="flex flex-wrap gap-3">
                 {['LangChain', 'LlamaIndex', 'Amazon Bedrock'].map((fw) => (
                    <span key={fw} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm hover:border-white/30 transition-colors cursor-default">
                        {fw}
                    </span>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Apply AI Data Patterns</h2>
          <div className="bg-[#0A0A0C] p-8 border border-white/10 flex flex-col md:flex-row items-start gap-8 group cursor-pointer hover:border-accent-bright/30 transition-colors">
            <div className="p-4 bg-accent-bright/10 text-accent-bright">
              <Icons.Brain className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-bright transition-colors">Hybrid Search (Vector + Keyword + SQL)</h3>
              <p className="text-foreground-muted mb-6 max-w-2xl text-lg">Learn how to design scalable, production-ready AI systems that combine the semantic power of vectors with the precision of SQL filtering.</p>
              <span className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all">Read the guide <Icons.ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
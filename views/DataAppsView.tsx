import React from 'react';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';
import { Card } from '../components/Card';

interface DataAppsViewProps {
  onChangeView: (view: ViewState) => void;
}

export const DataAppsView: React.FC<DataAppsViewProps> = ({ onChangeView }) => {
  return (
    <div className="animate-fade-in px-6 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <button onClick={() => onChangeView('home')} className="group text-foreground-muted hover:text-white mb-8 flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Build Data Apps</h1>
          <p className="text-xl text-foreground-muted max-w-3xl">Explore real applications built with TiDB and adapt them for your use case.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#0A0A0C] p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-white">Start with a Working Example</h2>
            <ul className="space-y-6">
              {[
                { name: "E-commerce demo", url: "https://github.com/Mini256/tidb-snowflake-e-commerce-demo" },
                { name: "Insights into Automotive Sales", url: "https://car-sales-insight.vercel.app/" },
                { name: "Simple S&P500 Dashboard", url: "https://sp500-insight.vercel.app/SP500" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <span className="font-medium text-foreground-muted group-hover:text-white transition-colors text-lg">{link.name}</span>
                    <Icons.ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-accent-bright transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0C] p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-white">Try It Locally or in the Cloud</h2>
            <ul className="space-y-6">
              {[
                  { text: "TiUP Playground", sub: "Kickstart your distributed SQL journey locally" },
                  { text: "Quick Start with TiDB", sub: "Official documentation guide" },
                  { text: "TiDB Cloud Free Trial", sub: "Spin up a managed cluster in minutes" }
              ].map((item, i) => (
                  <li key={i} className="pl-6 border-l border-accent-bright/30 hover:border-accent-bright transition-colors group">
                    <a href="#" className="block">
                      <span className="font-bold text-white group-hover:text-accent-bright transition-colors block text-lg">{item.text}</span>
                      <span className="text-sm text-foreground-subtle">{item.sub}</span>
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-12 text-white border-b border-white/10 pb-6">Connect Your Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {['Java', 'Go', 'Python'].map((lang) => (
                 <Card 
                 key={lang}
                 title={lang} 
                 description={`Connect with JDBC, Hibernate, Spring Boot, or ${lang} connectors.`}
                 spotlight={true}
                 className="bg-[#050506]"
               />
            ))}
        </div>

        <div className="border border-white/10 p-12 bg-[#050506]">
          <h2 className="text-3xl font-bold mb-12 text-white">Go Deeper</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
                { t: "Schema Design", d: "Best practices for scalable databases" },
                { t: "SQL Reference", d: "Language, statements, and functions" },
                { t: "Indexing", d: "Primary and secondary index best practices" },
                { t: "Transactions", d: "Optimistic vs Pessimistic models" }
            ].map((item, i) => (
                <a key={i} href="#" className="group block">
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-accent-bright transition-colors">{item.t}</h4>
                    <p className="text-sm text-foreground-muted">{item.d}</p>
                </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
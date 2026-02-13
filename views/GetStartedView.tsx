import React from 'react';
import { Button } from '../components/Button';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';
import { Card } from '../components/Card';

interface GetStartedViewProps {
  onChangeView: (view: ViewState) => void;
}

export const GetStartedView: React.FC<GetStartedViewProps> = ({ onChangeView }) => {
  return (
    <div className="animate-fade-in px-6 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <button onClick={() => onChangeView('home')} className="group text-foreground-muted hover:text-white mb-8 flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">Get Started</h1>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl leading-relaxed">
            TiDB is an open-source, MySQL-compatible distributed SQL database built for modern, cloud-native applications.
            It scales horizontally, stays strongly consistent, and supports transactions, real-time analytics (HTAP), and vector workloads in a single system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-20">
            {/* Why Choose TiDB */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-white">Why Developers Choose TiDB</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Seamless Scalability", desc: "Scale reads and writes horizontally without manual sharding." },
                  { title: "MySQL Compatibility", desc: "Use familiar SQL, drivers, and tools while gaining distributed scale." },
                  { title: "HTAP Capabilities", desc: "Run real-time analytics directly on live transactional data." },
                  { title: "Strong Consistency", desc: "Built on Raft for fault tolerance and predictable behavior." },
                  { title: "Reduced Overhead", desc: "One system instead of stitching together OLTP, OLAP, and vector stores." },
                  { title: "Cloud-Native", desc: "Run TiDB self-managed or fully managed in TiDB Cloud." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0A0A0C] p-6 border border-white/10 hover:border-white/20 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Understand the Basics */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-white">Understand the Basics</h2>
              <div className="space-y-4">
                {[
                    { title: "TiDB vs MySQL, PostgreSQL, MongoDB", sub: "Choosing the best open source database", href: "#" },
                    { title: "Architecture Overview", sub: "How TiDB works under the hood", href: "#" },
                    { title: "Vector Search & AI", sub: "Building intelligent apps", href: "#" }
                ].map((item, i) => (
                    <a key={i} href={item.href} className="block group p-6 border border-white/10 bg-[#050506] hover:bg-[#0A0A0C] transition-colors">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition-colors mb-1">{item.title}</h3>
                                <p className="text-foreground-muted">{item.sub}</p>
                            </div>
                            <Icons.ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                        </div>
                    </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="sticky top-32 p-8 border border-white/10 bg-[#050506]">
                <h3 className="text-xl font-bold mb-8 font-mono uppercase tracking-widest text-white">Next Steps</h3>
                
                <div className="space-y-6">
                  <div className="group cursor-pointer" onClick={() => onChangeView('data-apps')}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-accent-bright transition-colors">Build Data Application</h4>
                    <p className="text-sm text-foreground-muted">Design schemas & run queries.</p>
                  </div>

                  <div className="w-full h-px bg-white/10" />

                  <div className="group cursor-pointer" onClick={() => onChangeView('ai-apps')}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-accent-bright transition-colors">Build AI Application</h4>
                    <p className="text-sm text-foreground-muted">Embeddings & RAG systems.</p>
                  </div>

                  <div className="w-full h-px bg-white/10" />

                  <div className="group cursor-pointer" onClick={() => onChangeView('migration')}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-accent-bright transition-colors">Migrate to TiDB</h4>
                    <p className="text-sm text-foreground-muted">Evaluate & move data safely.</p>
                  </div>
                  
                  <div className="pt-8">
                    <Button className="w-full" href="https://tidbcloud.com/free-trial">Start Free Trial</Button>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icons } from '../components/Icons';
import { ViewState } from '../types';

interface HomeViewProps {
  onChangeView: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onChangeView }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 px-6 overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block mb-6 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-accent-bright">
            Developer Hub
          </span>
          <h1 className="max-w-5xl text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            Build Scalable, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Real-Time Apps.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-foreground-muted leading-relaxed mb-12">
            The open-source distributed SQL database that scales reads, writes, and insights without the complexity of sharding.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="primary" size="lg" href="https://tidbcloud.com/free-trial">
              Try for Free
            </Button>
            <Button variant="secondary" size="lg" href="https://docs.pingcap.com/tidb/stable">
              Deep Dive with Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Bento Grid Navigation */}
      <section className="px-6 py-24 md:py-32 bg-background-deep relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-white/[0.08] pb-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Choose your path</h2>
            <span className="hidden md:block text-foreground-subtle font-mono text-sm">SELECT * FROM PATHS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[280px] gap-4">
            {/* Get Started - Hero Card */}
            <div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-1 md:row-span-2">
              <Card 
                title="Get Started" 
                description="New to TiDB? Master the architecture, understand the core concepts, and deploy your first cluster in under 5 minutes."
                icon={<Icons.Rocket className="w-8 h-8" />}
                onClick={() => onChangeView('get-started')}
                className="h-full bg-gradient-to-br from-[#050506] to-[#0A0A0C]"
              />
            </div>

            {/* Build Data Apps */}
            <div className="col-span-1 md:col-span-3 lg:col-span-5 row-span-1">
              <Card 
                title="Build Data Applications" 
                description="Model data and run transactional workloads."
                icon={<Icons.Database className="w-6 h-6" />}
                onClick={() => onChangeView('data-apps')}
              />
            </div>

            {/* Build AI Apps */}
            <div className="col-span-1 md:col-span-3 lg:col-span-5 row-span-1">
              <Card 
                title="Build AI Applications" 
                description="Vector search, RAG, and semantic agents."
                icon={<Icons.Brain className="w-6 h-6" />}
                onClick={() => onChangeView('ai-apps')}
              />
            </div>

            {/* Migration */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1">
              <Card 
                title="Migration Center" 
                description="Move from MySQL or PostgreSQL safely."
                icon={<Icons.Migration className="w-6 h-6" />}
                onClick={() => onChangeView('migration')}
              />
            </div>

             {/* Learn */}
             <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1">
              <Card 
                title="Start Learning" 
                description="Courses, labs, and certification paths."
                icon={<Icons.Learn className="w-6 h-6" />}
                onClick={() => onChangeView('learn')}
              />
            </div>
             
             {/* Community - Small accent */}
             <div className="col-span-1 md:col-span-6 lg:col-span-4 row-span-1 group cursor-pointer relative overflow-hidden bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-colors p-6 flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Icons.Globe className="w-24 h-24 rotate-12" />
                </div>
                <Icons.Github className="w-6 h-6 text-white mb-4" />
                <div>
                  <h3 className="text-xl font-bold text-white">Join Community</h3>
                  <p className="text-sm text-foreground-muted mt-2">Discord, Slack, & GitHub</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Linear List Style */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Column 1 */}
            <div className="space-y-8">
              <h3 className="text-lg font-mono uppercase tracking-widest text-foreground-subtle mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent-bright rounded-full"></span> Quick Starts
              </h3>
              <ul className="space-y-0">
                {[
                  { title: "AI Quick Start", desc: "Build your first RAG app", href: "https://pingcap.github.io/ai/quickstart/" },
                  { title: "Cloud Cluster", desc: "Launch in minutes", href: "https://docs.pingcap.com/tidbcloud/dev-guide-build-cluster-in-cloud/" },
                  { title: "Go & SQL Driver", desc: "Sample application", href: "https://docs.pingcap.com/tidbcloud/dev-guide-sample-application-golang-sql-driver/" }
                ].map((item, i) => (
                  <li key={i} className="group border-b border-white/[0.06] py-4">
                    <a href={item.href} className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div>
                        <div className="text-white font-medium mb-1">{item.title}</div>
                        <div className="text-sm text-foreground-subtle">{item.desc}</div>
                      </div>
                      <Icons.ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent-bright transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <h3 className="text-lg font-mono uppercase tracking-widest text-foreground-subtle mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Tutorials
              </h3>
               <ul className="space-y-0">
                {[
                  { title: "Local Setup", desc: "First steps distributed SQL", href: "https://www.pingcap.com/blog/distributed-sql-tutorial-first-steps-setting-up-tidb-locally/" },
                  { title: "AI Agents", desc: "Build full-stack apps", href: "https://www.pingcap.com/blog/ai-agent-that-builds-full-stack-apps/" },
                  { title: "Online DDL", desc: "Scaling without downtime", href: "https://www.pingcap.com/blog/scaling-tidb-locally-online-ddl-tutorial/" }
                ].map((item, i) => (
                  <li key={i} className="group border-b border-white/[0.06] py-4">
                    <a href={item.href} className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div>
                        <div className="text-white font-medium mb-1">{item.title}</div>
                        <div className="text-sm text-foreground-subtle">{item.desc}</div>
                      </div>
                      <Icons.ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent-bright transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <h3 className="text-lg font-mono uppercase tracking-widest text-foreground-subtle mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> Education
              </h3>
              <div className="bg-[#0A0A0C] border border-white/10 p-8">
                 <h4 className="text-2xl font-bold text-white mb-4">Master TiDB</h4>
                 <p className="text-foreground-muted mb-6">Structured learning paths that explain how TiDB works from the inside out.</p>
                 <div className="space-y-4">
                   <Button variant="secondary" href="https://www.pingcap.com/education/#beginner_path">Beginner Path</Button>
                   <Button variant="secondary" href="https://www.pingcap.com/education/#ai_path">AI Application Path</Button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
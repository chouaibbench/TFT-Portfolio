
import React from 'react';
import { MapPin, Calendar, Rocket, Code2, Coffee } from 'lucide-react';
import { PROFILE, TIMELINE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">The story <br/> behind the code.</h1>
            <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
              <p>
                My journey began with a curiosity about how pixels turned into platforms. Over the last 8 years, that curiosity evolved into a deep-seated passion for architecting systems that bridge complex logic with elegant design.
              </p>
              <p>
                I specialize in building full-stack applications that don't just work, but excel. Whether it's optimizing a React render cycle or hardening a Postgres schema, I bring a level of meticulousness that guarantees quality.
              </p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-zinc-500 font-medium">
                <MapPin size={20} className="mr-2 text-blue-500" />
                {PROFILE.location}
              </div>
              <div className="flex items-center text-zinc-500 font-medium">
                <Coffee size={20} className="mr-2 text-amber-500" />
                Always Brewing
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-zinc-900 shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/portrait/800/800" 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <section className="max-w-5xl mx-auto px-6 space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest">Career Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Work Experience</h3>
        </div>

        <div className="space-y-12">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative pl-12 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -ml-px w-px h-full bg-zinc-800"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 space-y-4">
                  <div className={`glass p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-colors relative`}>
                    <div className="absolute top-8 -left-14 md:-left-4 md:right-auto md:top-10">
                       <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-zinc-950"></div>
                    </div>
                    <div className="text-blue-500 font-bold text-sm mb-2">{item.year}</div>
                    <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                    <div className="text-zinc-400 font-medium mb-4">{item.company}</div>
                    <p className="text-zinc-500 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Now Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>Currently</span>
            </div>
            <h3 className="text-4xl font-bold">What I'm doing now.</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Working on <span className="text-white font-medium">Nexus Intelligence</span>, an AI-first collaborative IDE plugin. Immersing myself in Go and Distributed Systems to build more resilient microservices.
            </p>
            <div className="flex space-x-4">
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center space-x-3">
                <Rocket className="text-blue-500" size={24} />
                <span className="text-sm font-medium">Shipping faster</span>
              </div>
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center space-x-3">
                <Code2 className="text-violet-500" size={24} />
                <span className="text-sm font-medium">Refining architecture</span>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden relative">
             <img src="https://picsum.photos/seed/setup/800/450" className="w-full h-full object-cover opacity-60 grayscale" alt="Work Setup" />
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Workspace — 2024</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

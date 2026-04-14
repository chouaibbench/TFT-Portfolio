import { MapPin, Calendar, Code2, Layers } from 'lucide-react';
import { PROFILE, TIMELINE } from '../constants';

const About = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-8">
            <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">About Me</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
              Building scalable web apps &amp; crafting intuitive user experiences.
            </h1>
            <div className="space-y-5 text-lg text-zinc-400 leading-relaxed">
              <p>
                I'm a second-year web development student from Morocco, passionate about turning ideas into real, working products. I focus on writing clean code and building interfaces that feel natural to use.
              </p>
              <p>
                My stack spans both frontend and backend — React on the client, Laravel and Node.js on the server. I enjoy the full picture, from database design to pixel-perfect UI.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-zinc-500 font-medium">
                <MapPin size={18} className="text-[#8b5cf6]" />
                {PROFILE.location}
              </div>
              <div className="flex items-center gap-2 text-zinc-500 font-medium">
                <Calendar size={18} className="text-[#8b5cf6]" />
                2nd Year Student
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Rotating border ring */}
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-br from-[#8b5cf6] via-transparent to-[#8b5cf6]/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

            {/* Glow blob */}
            <div className="absolute -inset-6 bg-[#8b5cf6]/15 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-[#8b5cf6]/20 shadow-2xl relative z-10 bg-zinc-900">
              {/* Scanline overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                }}
              ></div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#8b5cf6] z-30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#8b5cf6] z-30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-16 left-4 w-6 h-6 border-b-2 border-l-2 border-[#8b5cf6] z-30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-16 right-4 w-6 h-6 border-b-2 border-r-2 border-[#8b5cf6] z-30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <img
                src="/images/me-portfolio.jpeg"
                alt="Chouaib BEN-CHOUAIB"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-black text-xl text-white">{PROFILE.name}</p>
                <p className="text-[#8b5cf6] font-mono text-sm">{PROFILE.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-3 text-[#8b5cf6]">
              <Code2 size={22} />
              <h3 className="font-bold text-white text-lg">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 font-mono text-xs">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-3 text-[#8b5cf6]">
              <Layers size={22} />
              <h3 className="font-bold text-white text-lg">Backend & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'GitLab'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 font-mono text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education & Experience</h2>
        </div>

        <div className="relative space-y-8 pl-8 border-l border-zinc-800">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[2.35rem] top-6 w-4 h-4 rounded-full bg-[#8b5cf6] border-4 border-[#0a0a0a]"></div>
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-[#8b5cf6]/30 transition-colors space-y-3">
                <p className="text-[#8b5cf6] font-mono text-sm">{item.year}</p>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-zinc-500 font-medium text-sm">{item.company}</p>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;

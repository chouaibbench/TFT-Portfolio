import { useState } from 'react';
import { Send, Mail, MapPin, Clock, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 space-y-4">
          <p className="text-xs font-mono text-[#8b5cf6] uppercase tracking-widest">Contact</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            Let's build<br />the future.
          </h1>
          <p className="text-xl text-zinc-400 max-w-md">
            Have a project in mind or just want to connect? I'm always open to interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-10">
            <div className="space-y-6">
              {[
                { icon: <Mail size={22} />, label: 'Email', value: PROFILE.links.email, href: `mailto:${PROFILE.links.email}`, color: 'text-[#8b5cf6]' },
                { icon: <Clock size={22} />, label: 'Availability', value: 'Mon — Fri, 9:00 - 18:00 (GMT+1)', href: null, color: 'text-emerald-400' },
                { icon: <MapPin size={22} />, label: 'Location', value: PROFILE.location, href: null, color: 'text-violet-300' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className={`w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${item.color} group-hover:border-[#8b5cf6]/40 transition-colors`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base font-medium text-white hover:text-[#8b5cf6] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-base font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              {[
                { icon: <Github size={18} />, label: 'GitHub', href: PROFILE.links.github },
                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: PROFILE.links.linkedin },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#8b5cf6] hover:border-[#8b5cf6]/40 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#8b5cf6]/5 rounded-[3rem] blur-3xl pointer-events-none"></div>
            <div className="glass p-10 rounded-[2.5rem] relative z-10 border border-zinc-800">
              {submitted ? (
                <div className="text-center py-20 space-y-5">
                  <div className="w-16 h-16 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full flex items-center justify-center mx-auto">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-zinc-400">I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#8b5cf6] font-bold hover:underline text-sm">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Name</label>
                      <input
                        id="name" type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8b5cf6] transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</label>
                      <input
                        id="email" type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8b5cf6] transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                    <textarea
                      id="message" required rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8b5cf6] transition-colors resize-none text-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#8b5cf6] hover:bg-violet-400 text-white font-bold rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 group"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

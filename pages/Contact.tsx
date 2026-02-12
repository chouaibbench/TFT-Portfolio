
import React, { useState } from 'react';
import { Send, Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 space-y-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">Let's build <br/> the future.</h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                Have an idea that needs an engineering partner? Or just want to talk shop? I'm always open to interesting conversations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email</div>
                  <a href={`mailto:${PROFILE.links.email}`} className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                    {PROFILE.links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Availability</div>
                  <div className="text-lg font-medium text-white">
                    Mon — Fri, 9:00 - 18:00 (CET)
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Location</div>
                  <div className="text-lg font-medium text-white">
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              {[
                { icon: <Github size={20}/>, label: 'Github', href: PROFILE.links.github },
                { icon: <Linkedin size={20}/>, label: 'LinkedIn', href: PROFILE.links.linkedin },
                { icon: <Twitter size={20}/>, label: 'Twitter', href: '#' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] blur-3xl"></div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/10 relative z-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-zinc-400">Thanks for reaching out, {formData.name || 'friend'}. I'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-500 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50 group"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
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

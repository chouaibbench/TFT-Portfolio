
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Project } from '../types';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ProjectAIChatProps {
  project: Project;
}

const ProjectAIChat: React.FC<ProjectAIChatProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hi! I'm the ${project.title} AI assistant. Ask me anything about how I built this project, the tech stack, or the challenges I faced.` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const systemInstruction = `
        You are an expert technical assistant representing developer Alex Rivera. 
        Answer questions specifically about the project: "${project.title}".
        
        CONTEXT:
        - Description: ${project.description}
        - Problem: ${project.problem}
        - Solution: ${project.solution}
        - Role: ${project.role}
        - Stack: ${project.stack.join(', ')}
        - Metrics: ${project.metrics.map(m => `${m.label}: ${m.value}`).join(', ')}
        
        Guidelines:
        - Keep answers concise and professional.
        - Highlight technical expertise.
        - If the user asks something unrelated to the project or Alex, politely redirect them.
        - Use technical terminology where appropriate.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const assistantReply = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a bit of trouble connecting to my brain. Please try again in a moment!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-500 transition-colors border-4 border-zinc-950"
      >
        <MessageSquare size={28} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[400px] h-[550px] glass rounded-[2.5rem] flex flex-col overflow-hidden shadow-3xl border border-white/20"
          >
            {/* Header */}
            <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  <Bot size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{project.title} Assistant</h4>
                  <div className="flex items-center text-[10px] text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                    Powered by Gemini AI
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex space-x-1 items-center">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 pt-0">
              <div className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-blue-500 rounded-2xl px-6 py-4 pr-16 text-sm outline-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition-all flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectAIChat;

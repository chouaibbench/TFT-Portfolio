import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Bot, RotateCcw } from "lucide-react";
import { PROFILE, PROJECTS, TIMELINE, CORE_METRICS } from "../constants";

const QA = [
  {
    question: "Who are you?",
    answer: `I'm ${PROFILE.name}, a ${PROFILE.title} based in ${PROFILE.location}. ${PROFILE.bio}`,
  },
  {
    question: "What's your tech stack?",
    answer: `My core stack includes: ${PROFILE.stack.join(", ")}.`,
  },
  {
    question: "What are your key stats?",
    answer: CORE_METRICS.map((m) => `${m.label}: ${m.value}${m.suffix}`).join(" · "),
  },
  {
    question: "What projects have you built?",
    answer: PROJECTS.map((p) => `• ${p.title} — ${p.description}`).join("\n"),
  },
  {
    question: "What's your work experience?",
    answer: TIMELINE.map((t) => `• ${t.title} at ${t.company} (${t.year})`).join("\n"),
  },
  {
    question: "How can I hire you?",
    answer: `I'm currently open to new opportunities. Reach out via email at ${PROFILE.links.email} or connect on LinkedIn: ${PROFILE.links.linkedin}`,
  },
  {
    question: "What's your GitHub?",
    answer: `You can find my open source work at: ${PROFILE.links.github}`,
  },
];

const PortfolioAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm ${PROFILE.name}'s assistant. Pick a question below to learn more about me.`,
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSelect = (qa) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: qa.question },
      { role: "assistant", content: qa.answer },
    ]);
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: `Hi! I'm ${PROFILE.name}'s assistant. Pick a question below to learn more about me.`,
      },
    ]);
  };

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(v => !v)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#8b5cf6] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-violet-400 transition-colors border-4 border-zinc-950"
        aria-label="Toggle portfolio assistant"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={28} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[400px] h-[580px] glass rounded-[2.5rem] flex flex-col overflow-hidden shadow-3xl border border-white/20"
          >
            {/* Header */}
            <div className="p-5 bg-white/5 border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-xl flex items-center justify-center text-[#8b5cf6]">
                  <Bot size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{PROFILE.name}'s Assistant</h4>
                  <div className="flex items-center text-[10px] text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>
                    Ask me anything
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={handleReset} className="text-zinc-500 hover:text-white transition-colors p-2" aria-label="Reset chat">
                  <RotateCcw size={16} />
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2" aria-label="Close chat">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3 hide-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#8b5cf6] text-white rounded-tr-none"
                        : "bg-zinc-800 text-zinc-200 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            <div className="p-4 border-t border-white/10 shrink-0">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3 px-1">Suggested Questions</p>
              <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto hide-scrollbar">
                {QA.map((qa, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(qa)}
                    className="text-left text-sm px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-[#8b5cf6] text-zinc-300 hover:text-white transition-all duration-200 border border-zinc-700 hover:border-[#8b5cf6]"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAIChat;

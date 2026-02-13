import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

// project expected shape:
// {
//   title, description, problem, solution, role,
//   stack: string[],
//   metrics: [{ label, value }]
// }

const ProjectAIChat = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    {
      role: "assistant",
      content: `Hi! I'm the ${project?.title ?? "project"} AI assistant. Ask me anything about how I built this project, the tech stack, or the challenges I faced.`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const buildSystemInstruction = () => {
    const title = project?.title ?? "Unknown Project";
    const description = project?.description ?? "";
    const problem = project?.problem ?? "";
    const solution = project?.solution ?? "";
    const role = project?.role ?? "";
    const stack = Array.isArray(project?.stack) ? project.stack.join(", ") : "";
    const metrics = Array.isArray(project?.metrics)
      ? project.metrics.map((m) => `${m?.label ?? ""}: ${m?.value ?? ""}`).join(", ")
      : "";

    return `
You are an expert technical assistant representing developer Alex Rivera.
Answer questions specifically about the project: "${title}".

CONTEXT:
- Description: ${description}
- Problem: ${problem}
- Solution: ${solution}
- Role: ${role}
- Stack: ${stack}
- Metrics: ${metrics}

Guidelines:
- Keep answers concise and professional.
- Highlight technical expertise.
- If the user asks something unrelated to the project or Alex, politely redirect them.
- Use technical terminology where appropriate.
`.trim();
  };

  // --- OPTION A (Quick test): read key from env for Vite/Next (client) ---
  // Vite: VITE_GEMINI_API_KEY
  // Next: NEXT_PUBLIC_GEMINI_API_KEY
  const getClientKey = () =>
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) ||
    (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_GEMINI_API_KEY) ||
    "";

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      // Option A: direct client call (NOT recommended for production)
      const apiKey = getClientKey();
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Missing API key. Add VITE_GEMINI_API_KEY (Vite) or NEXT_PUBLIC_GEMINI_API_KEY (Next) in your .env file.",
          },
        ]);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = buildSystemInstruction();

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: { systemInstruction, temperature: 0.7 },
      });

      const assistantReply =
        (response && response.text) || "I'm sorry, I couldn't process that request.";

      setMessages((prev) => [...prev, { role: "assistant", content: assistantReply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having a bit of trouble connecting right now. Please try again in a moment!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-500 transition-colors border-4 border-zinc-950"
        aria-label="Open project assistant"
      >
        <MessageSquare size={28} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[400px] h-[550px] glass rounded-[2.5rem] flex flex-col overflow-hidden shadow-3xl border border-white/20"
          >
            {/* Header */}
            <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  <Bot size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">
                    {project?.title ?? "Project"} Assistant
                  </h4>
                  <div className="flex items-center text-[10px] text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                    Powered by Gemini AI
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-2"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-zinc-800 text-zinc-200 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex space-x-1 items-center">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 pt-0">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask a question..."
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-blue-500 rounded-2xl px-6 py-4 pr-16 text-sm outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition-all flex items-center justify-center"
                  aria-label="Send message"
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

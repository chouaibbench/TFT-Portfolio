import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  const fullText = [
    "$ whoami",
    "Chouaib BEN-CHOUAIB",
    "$ status",
    "Engineering high-performance apps",
    "$ location",
    "Morocco",
    "$ stack --primary",
    "React, JavaScript, Node.js",
    "$ exit"
  ];

  useEffect(() => {
    
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      const i = indexRef.current;

      if (i < fullText.length) {
        const nextLine = fullText[i];

        if (typeof nextLine === "string") {
          setLines((prev) => [...prev, nextLine]);
        }

        indexRef.current = i + 1;
      } else {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      
    }, 800);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto backdrop-blur-xl bg-white/5 rounded-xl overflow-hidden shadow-2xl border border-white/10">
      
      {/* Header */}
      <div className="bg-zinc-800/50 px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
        </div>

        <div className="flex items-center text-xs text-zinc-500 font-mono">
          <TerminalIcon size={12} className="mr-1.5" />
          zsh — 80x24
        </div>

        <div className="w-10" />
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm h-64 overflow-y-auto">
        {lines.map((line, i) => {
          const text = typeof line === "string" ? line : "";
          const isCommand = text.startsWith("$");

          return (
            <div key={i} className="mb-2">
              {isCommand ? (
                <span className="flex items-center text-blue-400">
                  <span className="mr-2">➜</span>
                  <span>{text.slice(2)}</span>
                </span>
              ) : (
                <span className="text-zinc-300 ml-6 block">
                  {text}
                </span>
              )}
            </div>
          );
        })}

        {/* Blinking cursor */}
        {lines.length < fullText.length && (
          <div className="ml-6 w-2 h-4 bg-zinc-400 animate-pulse inline-block rounded-sm" />
        )}
      </div>
    </div>
  );
};

export default Terminal;

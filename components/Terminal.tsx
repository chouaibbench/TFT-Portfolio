
import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Check } from 'lucide-react';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "$ whoami",
    "Alex Rivera",
    "$ status",
    "Engineering high-performance apps",
    "$ location",
    "Berlin, Germany",
    "$ stack --primary",
    "React, TypeScript, Node.js",
    "$ exit"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullText.length) {
        setLines(prev => [...prev, fullText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto glass rounded-xl overflow-hidden shadow-2xl border border-white/10">
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
        <div className="w-10"></div>
      </div>
      <div className="p-5 font-mono text-sm h-64 overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">
            {line.startsWith('$') ? (
              <span className="flex items-center text-blue-400">
                <span className="mr-2">➜</span>
                <span>{line.substring(2)}</span>
              </span>
            ) : (
              <span className="text-zinc-300 ml-6 block">{line}</span>
            )}
          </div>
        ))}
        {lines.length < fullText.length && (
          <div className="ml-6 w-2 h-4 bg-zinc-500 animate-pulse inline-block"></div>
        )}
      </div>
    </div>
  );
};

export default Terminal;

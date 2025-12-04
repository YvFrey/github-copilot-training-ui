import React from "react";

interface PromptProps {
  children: React.ReactNode;
}

export function Prompt({ children }: PromptProps) {
  return (
    <div className="my-3 p-3 bg-indigo-50 border border-indigo-100 rounded-md font-mono text-sm text-indigo-800 shadow-sm relative group">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded">Prompt</span>
      </div>
      {children}
    </div>
  );
}

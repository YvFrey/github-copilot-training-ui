import React from "react";
import { BookOpen, Terminal, GitBranch, ShieldCheck, Bot, Sparkles } from "lucide-react";

interface ModulePlaceholderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  content?: React.ReactNode;
  introContent?: React.ReactNode;
}

export function ModulePlaceholder({ title, subtitle, icon, difficulty, content, introContent }: ModulePlaceholderProps) {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-indigo-50 rounded-xl">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-500">{subtitle}</p>
          </div>
        </div>
        {introContent && (
          <div className="mt-6 border-t border-gray-100 pt-6">
            {introContent}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        {content}
      </div>
    </div>
  );
}

import React from "react";
import { BookOpen, Terminal, GitBranch, ShieldCheck, Bot, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModulePlaceholderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  content?: React.ReactNode;
  goal?: React.ReactNode;
  onNext?: () => void;
  nextModuleTitle?: string;
}

export function ModulePlaceholder({ title, subtitle, icon, difficulty, content, goal, onNext, nextModuleTitle }: ModulePlaceholderProps) {
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
        
        {goal && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="text-xl">📚</span> Goal:
            </h3>
            <div className="mt-2 text-gray-700">
              {goal}
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        {content}
      </div>

      {/* Next Module Button */}
      {onNext && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center gap-2"
          >
            {nextModuleTitle || "Next Module"} <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

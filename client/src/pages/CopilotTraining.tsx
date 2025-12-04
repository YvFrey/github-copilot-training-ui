import React, { useState } from "react";
import { BookOpen, Terminal, GitBranch, ShieldCheck, Bot, LayoutTemplate, Sparkles } from "lucide-react";
import { ModulePrereq } from "@/components/training/ModulePrereq";
import { ModuleOne } from "@/components/training/ModuleOne";
import { ModuleTwo } from "@/components/training/ModuleTwo";
import { ModuleThree } from "@/components/training/ModuleThree";
import { ModuleFour } from "@/components/training/ModuleFour";
import { ModuleFive } from "@/components/training/ModuleFive";
import { ModuleSix } from "@/components/training/ModuleSix";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TabId = "prereq" | "module1" | "module2" | "module3" | "module4" | "module5" | "module6";

interface Tab {
  id: TabId;
  label: string;
  topic: string;
  icon: React.ReactNode;
  title: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

const tabs: Tab[] = [
  { 
    id: "prereq", 
    label: "Module 0", 
    topic: "Prerequisites",
    icon: <LayoutTemplate className="w-4 h-4" />,
    title: "Module 00: Prerequisites and Developer Responsibility"
  },
  { 
    id: "module1", 
    label: "Module I", 
    topic: "Context & Control",
    icon: <BookOpen className="w-4 h-4" />,
    title: "Module I: Context & Control",
    difficulty: "Beginner"
  },
  { 
    id: "module2", 
    label: "Module II", 
    topic: "Interaction Modes",
    icon: <Terminal className="w-4 h-4" />,
    title: "Module II: Dynamic Interaction Modes",
    difficulty: "Intermediate"
  },
  { 
    id: "module3", 
    label: "Module III", 
    topic: "Version Control",
    icon: <GitBranch className="w-4 h-4" />,
    title: "Module III: Version Control & Quality",
    difficulty: "Beginner"
  },
  { 
    id: "module4", 
    label: "Module IV", 
    topic: "Testing Framework",
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Module IV: Testing Framework",
    difficulty: "Intermediate"
  },
  { 
    id: "module5", 
    label: "Module V", 
    topic: "Agentic Workflows",
    icon: <Bot className="w-4 h-4" />,
    title: "Module V: Agentic Workflows",
    difficulty: "Advanced"
  },
  { 
    id: "module6", 
    label: "Module VI", 
    topic: "Vibe Coding",
    icon: <Sparkles className="w-4 h-4" />,
    title: "Module VI: Vibe Coding",
    difficulty: "Advanced"
  },
];

export default function CopilotTraining() {
  const [activeTab, setActiveTab] = useState<TabId>("prereq");

  const handleNext = (nextTab: TabId) => {
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "prereq":
        return <ModulePrereq onNext={() => handleNext("module1")} />;
      case "module1":
        return <ModuleOne onNext={() => handleNext("module2")} />;
      case "module2":
        return <ModuleTwo onNext={() => handleNext("module3")} />;
      case "module3":
        return <ModuleThree onNext={() => handleNext("module4")} />;
      case "module4":
        return <ModuleFour onNext={() => handleNext("module5")} />;
      case "module5":
        return <ModuleFive onNext={() => handleNext("module6")} />;
      case "module6":
        return <ModuleSix />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 pt-6">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-4">
            <Bot className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            AI Engineering Enablement
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master GitHub Copilot for contextual guidance, agentic workflows, and safe automation.
          </p>
        </header>

        {/* Navigation */}
        <div className="mb-8 border-b border-gray-200 bg-white rounded-t-xl shadow-sm overflow-x-auto sticky top-0 z-10">
          <nav className="flex w-full min-w-max px-2" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "group flex flex-col items-center justify-center py-4 px-4 border-b-2 transition-all duration-200 min-w-[160px]",
                  activeTab === tab.id
                    ? "border-indigo-600 bg-indigo-50/50"
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                <div className="flex items-center mb-1">
                  <span className={cn(
                    "mr-2 transition-colors",
                    activeTab === tab.id ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-500"
                  )}>
                    {tab.icon}
                  </span>
                  <span className={cn(
                    "font-bold text-sm",
                    activeTab === tab.id ? "text-indigo-600" : "text-gray-600"
                  )}>
                    {tab.label}
                  </span>
                </div>
                
                <span className={cn(
                  "text-xs font-medium mb-2 max-w-[140px] truncate",
                  activeTab === tab.id ? "text-indigo-500" : "text-gray-500"
                )}>
                  {tab.topic}
                </span>

                {tab.difficulty && (
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full border",
                    tab.difficulty === "Beginner" && "bg-green-50 text-green-600 border-green-100",
                    tab.difficulty === "Intermediate" && "bg-blue-50 text-blue-600 border-blue-100",
                    tab.difficulty === "Advanced" && "bg-purple-50 text-purple-600 border-purple-100"
                  )}>
                    {tab.difficulty}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

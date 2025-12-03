import React, { useState } from "react";
import { BookOpen, Terminal, GitBranch, ShieldCheck, Bot, LayoutTemplate, Info } from "lucide-react";
import { ModulePrereq } from "@/components/training/ModulePrereq";
import { ModulePlaceholder } from "@/components/training/ModulePlaceholder";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TabId = "prereq" | "module1" | "module2" | "module3" | "module4" | "module5";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  title: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

const tabs: Tab[] = [
  { 
    id: "prereq", 
    label: "Prerequisites", 
    icon: <LayoutTemplate className="w-4 h-4" />,
    title: "Module 00: Prerequisites and Developer Responsibility"
  },
  { 
    id: "module1", 
    label: "Module I", 
    icon: <BookOpen className="w-4 h-4" />,
    title: "Module I: Context & Control",
    difficulty: "Beginner"
  },
  { 
    id: "module2", 
    label: "Module II", 
    icon: <Terminal className="w-4 h-4" />,
    title: "Module II: Dynamic Interaction Modes",
    difficulty: "Intermediate"
  },
  { 
    id: "module3", 
    label: "Module III", 
    icon: <GitBranch className="w-4 h-4" />,
    title: "Module III: Version Control & Quality",
    difficulty: "Beginner"
  },
  { 
    id: "module4", 
    label: "Module IV", 
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Module IV: Testing Framework",
    difficulty: "Intermediate"
  },
  { 
    id: "module5", 
    label: "Module V", 
    icon: <Bot className="w-4 h-4" />,
    title: "Module V: Agentic Workflows",
    difficulty: "Advanced"
  },
];

const difficultyColors = {
  Beginner: "bg-emerald-400",
  Intermediate: "bg-blue-400",
  Advanced: "bg-purple-400",
};

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
        return <ModulePlaceholder title="Module I: Context & Control" subtitle="Precise Prompting and Workspace Awareness" icon={<BookOpen className="w-12 h-12 text-emerald-600" />} difficulty="Beginner" />;
      case "module2":
        return <ModulePlaceholder title="Module II: Dynamic Interaction Modes" subtitle="Completions, Inline Chat, Chat Panel, Terminal" icon={<Terminal className="w-12 h-12 text-blue-600" />} difficulty="Intermediate" />;
      case "module3":
        return <ModulePlaceholder title="Module III: Version Control & Quality" subtitle="Git Workflow Integration" icon={<GitBranch className="w-12 h-12 text-emerald-600" />} difficulty="Beginner" />;
      case "module4":
        return <ModulePlaceholder title="Module IV: Testing Framework" subtitle="Automating Tests and Policy Checks" icon={<ShieldCheck className="w-12 h-12 text-blue-600" />} difficulty="Intermediate" />;
      case "module5":
        return <ModulePlaceholder title="Module V: Agentic Workflows" subtitle="Delegating and Supervising Autonomous Agents" icon={<Bot className="w-12 h-12 text-purple-600" />} difficulty="Advanced" />;
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-6">
             {/* Difficulty Legend */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Difficulty Levels</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2"></span>
                  Beginner
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mr-2"></span>
                  Intermediate
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mr-2"></span>
                  Advanced
                </div>
              </div>
            </div>

            {/* Vertical Tabs */}
            <nav className="flex flex-col space-y-1" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "group flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 text-left",
                    activeTab === tab.id
                      ? "bg-white shadow-sm border border-indigo-100 text-indigo-600"
                      : "text-gray-500 hover:bg-white/60 hover:text-gray-700"
                  )}
                >
                  <div className="flex items-center">
                    <span className={cn(
                      "mr-3 transition-colors",
                      activeTab === tab.id ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-500"
                    )}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </div>
                  {tab.difficulty && (
                    <span className={cn(
                      "w-2 h-2 rounded-full ml-2",
                      difficultyColors[tab.difficulty]
                    )} title={tab.difficulty}></span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

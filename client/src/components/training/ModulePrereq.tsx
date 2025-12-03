import React from "react";
import { CheckCircle2, AlertTriangle, Terminal, ExternalLink, Info, ArrowRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModulePrereqProps {
  onNext?: () => void;
}

export function ModulePrereq({ onNext }: ModulePrereqProps) {
  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Info className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Module 00: Prerequisites and Developer Responsibility</h2>
        </div>
        
        <div className="prose prose-indigo max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            This hands-on training helps engineers move beyond basic code completion by teaching practical use of GitHub Copilot for contextual guidance, agentic workflows, and safe automation to accelerate delivery and improve code quality.
          </p>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-8">
            <h3 className="font-bold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">📚</span> Goal
            </h3>
            <p className="text-indigo-800">
              The training is based on a <strong>simple FastAPI application</strong>, manageable by any engineer familiar with foundational programming concepts. We expect everyone to <strong>explore the capabilities and limitations of GitHub Copilot</strong>. You'll learn how to prompt effectively, use agentic features safely, and validate generated code.
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites Checklist Card - Compact Version */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
          Prerequisites Checklist
        </h3>
        
        <div className="grid gap-2">
          {[
            {
              title: "GitHub Copilot License",
              desc: "Copilot Pro or Business/Enterprise tied to your GitHub account.",
              link: "https://github.com/github-copilot/pro",
              linkText: "Sign up"
            },
            {
              title: "Visual Studio Code",
              desc: "Latest stable VS Code for agent/chat features."
            },
            {
              title: "Required Extensions",
              desc: "Install GitHub Copilot and GitHub Pull Requests & Issues.",
              link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
              linkText: "View"
            },
            {
              title: "uv Package Manager",
              desc: "Required for environment management.",
              link: "https://docs.astral.sh/uv/getting-started/installation/",
              linkText: "Install"
            },
            {
              title: "Git Configuration",
              desc: "Local git configured with correct user/email."
            },
            {
              title: "Code Base",
              desc: "Fork and clone the course repository.",
              link: "https://github.com/YvFrey/training-github-copilot/tree/main",
              linkText: "Repo"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center p-2.5 bg-gray-50/50 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="min-w-6 mr-3">
                 <div className="w-5 h-5 rounded-full border border-indigo-200 bg-white flex items-center justify-center text-[10px] font-bold text-indigo-600">
                    {idx + 1}
                 </div>
              </div>
              <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
                <div className="flex-1 min-w-[200px]">
                  <span className="font-semibold text-gray-900 text-sm">{item.title}: </span>
                  <span className="text-gray-600 text-sm">{item.desc}</span>
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-xs font-medium px-2 py-1 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors whitespace-nowrap">
                    {item.linkText} <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Alignment Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Settings className="w-6 h-6 text-gray-700 mr-2" />
          Important: Feature Alignment and Version Check
        </h3>
        <p className="text-gray-600 mb-4">
          Copilot features evolve rapidly. Please note that this training was tested on the following stable environment:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <ul className="space-y-2 text-sm text-gray-700 font-mono">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              VS Code Version: 1.106.3
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              GitHub Copilot Extension: 1.388.0
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              Python Environment Manager (uv): 0.8.10
            </li>
          </ul>
        </div>
      </div>

      {/* Getting Started Card - Updated */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Terminal className="w-6 h-6 text-gray-700 mr-2" />
          Getting Started
        </h3>
        
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">1. Running the FastAPI App</h4>
            <p className="text-gray-600 mb-4">Run the following in the project root to install <code>uv</code>, sync the environment, and start the app locally.</p>
            
            <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-sm overflow-x-auto shadow-inner">
              <div className="flex gap-2 mb-2 border-b border-gray-700 pb-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <p className="mb-1"><span className="text-gray-500"># Install and sync</span></p>
              <p className="mb-2">cd app</p>
              <p className="mb-2">pip install --upgrade uv</p>
              <p className="mb-2">uv sync</p>
              <p className="mb-1"><span className="text-gray-500"># Run server</span></p>
              <p>uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 8000</p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">2. Verify Copilot</h4>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                Open the Copilot Chat panel in VS Code and ask a project-aware question such as: 
                <span className="font-medium italic text-gray-900"> "What is the main purpose of this repository?"</span> 
                A coherent response indicates Copilot is active and has access to the workspace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsibility Mandate - Less Prominent */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
          <AlertTriangle className="w-5 h-5 text-gray-500 mr-2" />
          Developer Responsibility Mandate
        </h3>
        <div className="text-gray-600 text-sm leading-relaxed space-y-2">
          <p>
            As an AI coding tool, Copilot provides suggestions based on learned patterns, but it does not guarantee correctness, optimality, or security. 
            <strong className="text-gray-700"> The developer remains the final authority.</strong>
          </p>
          <p>
            You are responsible for <strong>rigorously reviewing, testing, and validating</strong> all code generated by Copilot before deployment.
            <span className="italic"> Always be skeptical of generated code.</span>
          </p>
        </div>
      </div>

      {/* Next Step */}
      {onNext && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module I <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

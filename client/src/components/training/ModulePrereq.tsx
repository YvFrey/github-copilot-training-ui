import React from "react";
import { CheckCircle2, AlertTriangle, Terminal, ExternalLink, Info, ArrowRight, Settings, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModulePrereqProps {
  onNext?: () => void;
}

export function ModulePrereq({ onNext }: ModulePrereqProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Module 00: Prerequisites and Developer Responsibility</h2>
        <p className="text-xl text-gray-600 max-w-4xl">
          This hands-on training helps engineers move beyond basic code completion by teaching practical use of GitHub Copilot for contextual guidance, agentic workflows, and safe automation to accelerate delivery and improve code quality.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Goal Card */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Goal</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  The training is based on a <a href="https://fastapi.tiangolo.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium underline decoration-indigo-300 underline-offset-2">simple FastAPI application</a>, manageable by any engineer familiar with foundational programming concepts. We expect everyone to <strong>explore the capabilities and limitations of GitHub Copilot</strong>. You'll learn how to prompt effectively, use agentic features safely, and validate generated code.
                </p>
                <p>
                  We encourage you to discuss actively with your colleagues during the session, and <strong>manifest your new learned skills</strong> by continuing to practice the concepts outside of the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites Checklist */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-b border-gray-100 pb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
            Prerequisites Checklist
          </h3>
          <p className="text-sm text-gray-500 mb-6">Ensure these are verified <em>before</em> the session:</p>
          
          <div className="space-y-4">
            {[
              {
                title: "GitHub Copilot License",
                desc: "Copilot Pro or Business/Enterprise tied to your GitHub account.",
                action: { label: "Sign up", href: "https://github.com/github-copilot/pro" }
              },
              {
                title: "Visual Studio Code",
                desc: "Recommended to use latest stable VS Code."
              },
              {
                title: "Required Extensions",
                desc: "GitHub Copilot & GitHub Pull Requests & Issues.",
                action: { label: "View", href: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" }
              },
              {
                title: "uv Package Manager",
                desc: "Required for fast environment management.",
                action: { label: "Install", href: "https://docs.astral.sh/uv/getting-started/installation/" }
              },
              {
                title: "Git Configuration",
                desc: "Local git configured with correct user name and email."
              },
              {
                title: "Code Base",
                desc: "Fork and clone the course repository.",
                action: { label: "Repo", href: "https://github.com/YvFrey/training-github-copilot/tree/main" }
              }
            ].map((item, idx) => (
              <div key={idx} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200">
                <div className="mt-0.5 w-6 h-6 flex-shrink-0 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">{item.title}</span>
                    {item.action && (
                      <a 
                        href={item.action.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-shrink-0 text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0"
                      >
                        {item.action.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Alignment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-b border-gray-100 pb-4">
            <Settings className="w-6 h-6 text-gray-600 mr-3" />
            Feature Alignment
          </h3>
          
          <div className="bg-amber-50/50 rounded-lg p-4 mb-6 border border-amber-100 flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-900 leading-relaxed">
              Copilot features evolve <strong>rapidly</strong>. This training was tested on the following stable environment:
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center justify-between text-gray-600">
                <span>VS Code</span>
                <span className="bg-white px-2 py-1 rounded border border-gray-200 text-gray-900 font-medium">1.106.3</span>
              </li>
              <li className="flex items-center justify-between text-gray-600">
                <span>Copilot Ext</span>
                <span className="bg-white px-2 py-1 rounded border border-gray-200 text-gray-900 font-medium">1.388.0</span>
              </li>
              <li className="flex items-center justify-between text-gray-600">
                <span>uv Manager</span>
                <span className="bg-white px-2 py-1 rounded border border-gray-200 text-gray-900 font-medium">0.8.10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Getting Started & Verify */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
          <Terminal className="w-7 h-7 text-gray-700" />
          Getting Started
        </h3>

        <div className="space-y-10">
          {/* Step 1 */}
          <div className="relative pl-8 border-l-2 border-gray-100 pb-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white"></div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              1. Running the FastAPI App
            </h4>
            <p className="text-gray-600 mb-4 leading-relaxed">Run the following in the project root to install <code>uv</code>, sync the environment, and start the app locally.</p>
            
            <div className="bg-[#1e1e1e] text-gray-300 rounded-xl p-5 font-mono text-sm shadow-inner overflow-x-auto border border-gray-800">
              <div className="flex gap-1.5 mb-4 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2">
                <span className="text-gray-500 block"># Install and sync</span>
                <div className="flex"><span className="text-green-400 mr-2">$</span> cd app</div>
                <div className="flex"><span className="text-green-400 mr-2">$</span> pip install --upgrade uv</div>
                <div className="flex"><span className="text-green-400 mr-2">$</span> uv sync</div>
                <span className="text-gray-500 block mt-4"># Run server</span>
                <div className="flex"><span className="text-green-400 mr-2">$</span> uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 8000</div>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-500" />
              The Swagger UI will be available at: <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">http://127.0.0.1:8000/docs</a>
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8 border-l-2 border-gray-100">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
             <h4 className="text-lg font-bold text-gray-900 mb-3">
              2. Verify Copilot
            </h4>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Open the Copilot Chat panel in VS Code and ask a project-aware question such as:
              </p>
              <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm inline-block">
                <code className="text-indigo-600 font-medium">"What is the main purpose of this repository?"</code>
              </div>
              <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                A coherent response indicates Copilot is active and has access to the workspace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsibility Mandate */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Developer Responsibility Mandate</h3>
            <p className="text-gray-600 leading-relaxed">
              As an AI coding tool, Copilot provides suggestions based on learned patterns, but it does not guarantee correctness, optimality, or security. <strong className="text-gray-900 bg-gray-100 px-1 rounded">The developer remains the final authority.</strong>
            </p>
            <p className="text-gray-600">
              You are responsible for <strong>rigorously reviewing, testing, and validating</strong> all code generated by Copilot before deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module I <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

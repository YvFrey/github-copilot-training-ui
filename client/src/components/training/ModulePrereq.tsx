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
        <div className="md:col-span-2 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-indigo-900">Goal</h3>
              <div className="text-indigo-800 leading-relaxed space-y-2">
                <p>
                  The training is based on a <a href="https://fastapi.tiangolo.com" target="_blank" rel="noreferrer" className="underline hover:text-indigo-950 font-medium">simple FastAPI application</a>, manageable by any engineer familiar with foundational programming concepts. We expect everyone to <strong>explore the capabilities and limitations of GitHub Copilot</strong>. You'll learn how to prompt effectively, use agentic features safely, and validate generated code.
                </p>
                <p>
                  We encourage you to discuss actively with your colleagues during the session, and <strong>manifest your new learned skills</strong> by continuing to practice the concepts outside of the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites Checklist */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
            Prerequisites Checklist
          </h3>
          <p className="text-sm text-gray-500 mb-4">Ensure these are verified <em>before</em> the session:</p>
          
          <div className="space-y-3">
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
              <div key={idx} className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-gray-100 text-gray-600 text-xs font-medium flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                    {item.action && (
                      <a 
                        href={item.action.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-shrink-0 text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {item.action.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Alignment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Settings className="w-5 h-5 text-gray-600 mr-2" />
            Feature Alignment
          </h3>
          
          <div className="flex-1 bg-amber-50 rounded-lg p-4 mb-4 border border-amber-100">
            <p className="text-sm text-amber-900 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-1 -mt-0.5" />
              Copilot features evolve <strong>rapidly</strong>. This training was tested on the following stable environment:
            </p>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 font-mono bg-gray-50 p-4 rounded-lg border border-gray-100">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              VS Code: 1.106.3
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              Copilot Ext: 1.388.0
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              uv Manager: 0.8.10
            </li>
          </ul>
        </div>
      </div>

      {/* Getting Started & Verify */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-gray-900" />
          Getting Started
        </h3>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">1</span>
              Running the FastAPI App
            </h4>
            <p className="text-gray-600 text-sm ml-8">Run the following in the project root to install <code>uv</code>, sync the environment, and start the app locally.</p>
            
            <div className="ml-8 relative group">
              <div className="absolute -inset-2 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto">
<span className="text-gray-500"># Install and sync</span>
cd app
pip install --upgrade uv
uv sync
<span className="text-gray-500"># Run server</span>
uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 8000</pre>
            </div>
            
            <p className="ml-8 text-sm text-gray-600">
              The Swagger UI will now be available at: <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">http://127.0.0.1:8000/docs</a>
            </p>
          </div>

          <div className="border-t border-gray-100" />

          {/* Step 2 */}
          <div className="space-y-3">
             <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">2</span>
              Verify Copilot
            </h4>
            <div className="ml-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-sm">
                Open the Copilot Chat panel in VS Code and ask a project-aware question such as: <br/>
                <span className="font-mono text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded mt-1 inline-block">"What is the main purpose of this repository?"</span>
              </p>
              <p className="text-gray-500 text-xs mt-2">A coherent response indicates Copilot is active and has access to the workspace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsibility Mandate */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Developer Responsibility Mandate</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            As an AI coding tool, Copilot provides suggestions based on learned patterns, but it does not guarantee correctness, optimality, or security. <strong className="text-gray-900">The developer remains the final authority.</strong>
          </p>
          <p className="text-sm text-gray-600">
            You are responsible for <strong>rigorously reviewing, testing, and validating</strong> all code generated by Copilot before deployment. <span className="italic text-gray-500">Always be skeptical of generated code.</span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      {onNext && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module I <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

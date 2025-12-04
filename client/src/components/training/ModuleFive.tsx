import React from "react";
import { Bot, ArrowRight, UserCog, Layers, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleFiveProps {
  onNext?: () => void;
}

export function ModuleFive({ onNext }: ModuleFiveProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module V: Agentic Workflow</h2>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
               Master the creation of a Custom Agent and delegate autonomous, multi-step tasks using both the GitHub Issue and the Copilot Chat interface.
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-sm text-indigo-900 flex gap-3 items-start">
              <Bot className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <p>
                 <strong>Copilot Coding Agents</strong> 🤖 are <strong>autonomous</strong> AI assistants designed to perform <strong>multi-step, iterative coding tasks</strong> in an <strong>asynchronous</strong> manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exercises */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Exercises</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 w-16 uppercase tracking-wider text-xs">Step</th>
                <th className="px-6 py-4 w-64 uppercase tracking-wider text-xs">Feature</th>
                <th className="px-6 py-4 uppercase tracking-wider text-xs">Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  step: "5.1",
                  feature: "Agent Profile",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Review</strong> the custom agent profile: <code>.github/agents/MypyFixer.md</code>.</p>
                      <p>2. Confirm there are Mypy type errors present in the codebase (e.g., in <code>app/main.py</code>) but do not fix them.</p>
                    </div>
                  )
                },
                {
                  step: "5.2",
                  feature: "Delegation via GitHub Issue",
                  content: (
                    <div className="space-y-3">
                      <p>1. Go to your repository's <strong>Issues</strong> tab on GitHub and create a new issue. e.g. titled: <code className="bg-indigo-50 text-indigo-700 px-1 rounded text-xs font-mono">@copilot Request: Fix All Outstanding Mypy Errors of the App</code>.</p>
                      <p>2. <strong>Assign</strong> this new issue to the <code>@copilot</code> agent.</p>
                      <p>3. Use the custom agent profile dropdown to select <code>MypyFixer</code>.</p>
                    </div>
                  )
                },
                {
                  step: "5.3",
                  feature: "Delegation via VS Code Chat",
                  content: (
                    <div className="space-y-3">
                       <p><strong>Chat Panel: MyPyFixer:</strong> Create a simple prompt that initiates the <strong>autonomous workflow</strong> directly from your IDE using the selected agent, resulting in a new PR. Click the cloud icon next to the send button and select the <strong>GitHub Copilot Cloud Agent</strong>.</p>
                    </div>
                  )
                },
                {
                  step: "5.4",
                  feature: "Review the Iteration",
                  content: (
                     <p>Monitor the issue timeline and the resulting Pull Requests. Observe how the agent iteratively runs mypy, fixes one error, commits, and repeats until mypy passes, showcasing the power of its autonomous loop.</p>
                  )
                },
                {
                  step: "5.5",
                  feature: "Optional: Delegation via GitHub CLI",
                  content: (
                     <p>Make sure the GitHub CLI is installed. Delegate the task via the command line: <code className="bg-indigo-50 text-indigo-700 px-1 rounded text-xs font-mono">gh issue create --title "@copilot Request: Refactor the /calculate endpoint" --assignee @copilot</code></p>
                  )
                },
                {
                  step: "5.6",
                  feature: "Challenge: Design Your Own Agent",
                  content: (
                     <p>Design and create a new custom agent profile: <code>.github/agents/YourAgentName.md</code>. Delegate a new task to this Agent while you can focus on the next feature development.</p>
                  )
                },
                {
                  step: "5.7",
                  feature: "Optional: Run Agent Locally",
                  content: (
                     <p><strong>Chat Panel:</strong> Create a simple prompt to assign a task to any of your defined agents. Click the cloud icon next to the send button and select the GitHub Copilot CLI Agent.</p>
                  )
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-6 font-medium text-gray-500 align-top">{row.step}</td>
                  <td className="px-6 py-6 font-bold text-gray-900 align-top">{row.feature}</td>
                  <td className="px-6 py-6 text-gray-600 leading-relaxed align-top">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lesson Learned */}
      <div className="bg-teal-50 rounded-xl border border-teal-100 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
           <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
            <Layers className="w-6 h-6" />
          </div>
          <div>
             <h3 className="text-xl font-bold text-teal-900 mb-2">Lesson Learned: Agentic Autonomy and Delegation</h3>
             <p className="text-teal-800">Delegating tasks to the autonomous Coding Agent transforms technical debt into an automated, scalable workflow, allowing developers to focus their time on complex feature development.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
           <div className="bg-white/60 p-4 rounded-lg border border-teal-100">
             <h4 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
               <Bot className="w-4 h-4" /> Autonomy is Key
             </h4>
             <p className="text-sm text-teal-800">The <strong>Coding Agent</strong> is the only Copilot functionality that runs <strong>asynchronously</strong>, commits changes, and opens a Pull Request <em>autonomously</em>.</p>
           </div>
           <div className="bg-white/60 p-4 rounded-lg border border-teal-100">
             <h4 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
               <Workflow className="w-4 h-4" /> Scalability
             </h4>
             <p className="text-sm text-teal-800">The system supports concurrent task execution, allowing multiple colleagues to assign fix-it tasks simultaneously.</p>
           </div>
        </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module VI <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { BookOpen, ArrowRight, Bot, Terminal, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleOneProps {
  onNext?: () => void;
}

export function ModuleOne({ onNext }: ModuleOneProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module I: Context and Control</h2>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Understand how explicit context (instructions and chat variables) dictate the quality and scope of Copilot's suggestions.
            </p>
          </div>
        </div>
      </div>

      {/* Exercises Part 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Exercises: Explicit Context-Awareness</h3>
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
                  step: "1.1",
                  feature: "Repository Instructions",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Review:</strong> Open and read the <code>.github/copilot-instructions.md</code> file.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        Which file must I create next to satisfy Mandatory Coding Guideline #4, and please provide the command to create it.
                      </div>
                      <p className="text-xs text-gray-500 italic">Execute the suggested command.</p>
                    </div>
                  )
                },
                {
                  step: "1.2",
                  feature: "Workspace Awareness (@workspace Agent)",
                  content: (
                    <div className="space-y-2">
                      <p><strong>Copilot Chat: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        @workspace what are the two main dependencies listed in pyproject.toml and what is the required Python version?
                      </div>
                    </div>
                  )
                },
                {
                  step: "1.3",
                  feature: "Terminal Help (@terminal Agent)",
                  content: (
                    <div className="space-y-2">
                      <p><strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        @terminal I need to create a new branch named 'feature/calc-fix'. Provide the exact git command for this.
                      </div>
                      <p className="text-xs text-gray-500 italic">Execute the suggested command.</p>
                    </div>
                  )
                },
                {
                  step: "1.4",
                  feature: "Editor Diagnostics (@vscode Agent)",
                  content: (
                    <div className="space-y-3">
                      <p>1. Introduce a small syntax error in <code>app/main.py</code>.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong> <code className="bg-gray-100 px-1 rounded text-xs">@vscode what problems are currently reported in this file?</code></p>
                      <p>3. Ask: <code className="bg-gray-100 px-1 rounded text-xs">@vscode open the Problems panel.</code></p>
                      <p>4. Ask: <code className="bg-gray-100 px-1 rounded text-xs">@vscode can you automatically fix this issue?</code></p>
                      <p className="text-xs text-gray-500 italic">Notice its limitations.</p>
                    </div>
                  )
                },
                {
                  step: "1.5",
                  feature: "Chat Variable (#selection)",
                  content: (
                    <div className="space-y-3">
                      <p>1. Open <code>app/main.py</code>. <strong>Select</strong> only the <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        What are the parameters and return type for #selection and is there a type hint error?
                      </div>
                    </div>
                  )
                },
                {
                  step: "1.6",
                  feature: "Chat Variable (#file)",
                  content: (
                    <div className="space-y-2">
                      <p><strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        In the function defined in #file:app/main.py, what is the current logic error in the 'calculate_total' function?
                      </div>
                    </div>
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

      {/* Exercises Part 2 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Exercises: Implicit Context-Awareness</h3>
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
                  step: "1.7",
                  feature: "Context-Aware Chat",
                  content: (
                    <div className="space-y-2">
                      <p><strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        Based on the repository's files, what is the required location for new Pydantic models and what is the rule for function signatures?
                      </div>
                    </div>
                  )
                },
                {
                  step: "1.8",
                  feature: "Context-Aware Code Completions",
                  content: (
                    <div className="space-y-3">
                      <p>1. Open the newly created <code>app/models.py</code> file.</p>
                      <p>2. <strong>Type</strong>: <code className="bg-gray-100 px-1 rounded text-xs">class OrderResponse(BaseModel):</code>.</p>
                      <p>3. Let Copilot complete the class with appropriate fields. Observe how Copilot infers fields using repository-level context. Accept or refine its suggestion.</p>
                    </div>
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
      <div className="bg-green-50 rounded-xl border border-green-100 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
           <div className="p-2 bg-white rounded-lg shadow-sm text-green-600">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Lesson Learned: Context, Control & Autonomy</h3>
            <p className="text-green-800">The most effective way to use Copilot is by <strong>defining context through agent specialization</strong>.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/60 p-4 rounded-lg border border-green-100">
             <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
               <span>🛡️</span> Global Constraints
             </h4>
             <p className="text-sm text-green-800">Use <code>.github/copilot-instructions.md</code> for project-wide rules and architectural standards.</p>
          </div>
          
          <div className="bg-white/60 p-4 rounded-lg border border-green-100">
             <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
               <span>🤖</span> External Tool Agents
             </h4>
             <ul className="text-sm text-green-800 space-y-1 list-disc list-inside opacity-90">
                <li><code>@workspace</code> — query project structure</li>
                <li><code>@terminal</code> — command-line assistance</li>
                <li><code>@vscode</code> — IDE diagnostics & troubleshooting</li>
             </ul>
          </div>

          <div className="bg-white/60 p-4 rounded-lg border border-green-100">
             <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
               <span>🎯</span> Context Control
             </h4>
             <p className="text-sm text-green-800">For local, precise questions, use <strong>Chat Variables</strong> (<code>#selection</code> and <code>#file</code>) to enforce focus.</p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg border border-green-100">
             <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
               <span>🚦</span> Autonomy Boundaries
             </h4>
             <p className="text-sm text-green-800">Agents are <strong>contextual collaborators</strong>. Changes are staged but require human explicit final approval.</p>
          </div>
        </div>
      </div>

      {/* Generating Instructions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
            <Layout className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Generating Instructions for Existing Repositories</h3>
            <p className="text-gray-600">
              When integrating Copilot into existing codebases, you can <strong>ensure specific rules and standards are enforced</strong> immediately by auto-generating the <code>.github/copilot-instructions.md</code> file.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors group">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 block">Option 1 (Recommended)</span>
            <p className="font-bold text-gray-900 mb-3">Command Palette</p>
            <code className="text-sm bg-white px-3 py-2 rounded border border-gray-200 block w-full text-center font-mono text-gray-800 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">Copilot: Generate Project Instructions</code>
          </div>
           <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors group">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 block">Option 2</span>
            <p className="font-bold text-gray-900 mb-3">Chat Input</p>
            <code className="text-sm bg-white px-3 py-2 rounded border border-gray-200 block w-full text-center font-mono text-gray-800 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">@workspace generate project instructions file</code>
          </div>
        </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module II <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

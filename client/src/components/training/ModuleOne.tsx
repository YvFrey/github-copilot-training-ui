import React from "react";
import { BookOpen, ArrowRight, Bot, Terminal, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleOneProps {
  onNext?: () => void;
}

export function ModuleOne({ onNext }: ModuleOneProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Module I: Context and Control</h2>
      </div>

      {/* Goal */}
      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 flex items-start gap-4">
        <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-indigo-900 mb-1">Goal</h3>
          <p className="text-indigo-800">
            Understand how explicit context (instructions and chat variables) dictate the quality and scope of Copilot's suggestions.
          </p>
        </div>
      </div>

      {/* Exercises Part 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900">Exercises: Explicit Context-Awareness</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 w-16">Step</th>
                <th className="px-6 py-3 w-48">Feature</th>
                <th className="px-6 py-3">Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  step: "1.1",
                  feature: "Repository Instructions",
                  content: (
                    <div className="space-y-2">
                      <p>1. <strong>Review:</strong> Open and read the <code>.github/copilot-instructions.md</code> file.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">Which file must I create next to satisfy Mandatory Coding Guideline #4, and please provide the command to create it.</code> Execute the suggested command.</p>
                    </div>
                  )
                },
                {
                  step: "1.2",
                  feature: "Workspace Awareness (@workspace Agent)",
                  content: (
                    <p><strong>Copilot Chat: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">@workspace what are the two main dependencies listed in pyproject.toml and what is the required Python version?</code></p>
                  )
                },
                {
                  step: "1.3",
                  feature: "Terminal Help (@terminal Agent)",
                  content: (
                    <p><strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">@terminal I need to create a new branch named 'feature/calc-fix'. Provide the exact git command for this.</code> Execute the suggested command.</p>
                  )
                },
                {
                  step: "1.4",
                  feature: "Editor Diagnostics (@vscode Agent)",
                  content: (
                    <div className="space-y-1">
                      <p>1. Introduce a small syntax error in <code>app/main.py</code>.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">@vscode what problems are currently reported in this file?</code></p>
                      <p>3. Ask: <code className="bg-indigo-50 text-indigo-700 px-1 rounded">@vscode open the Problems panel.</code></p>
                      <p>4. Ask: <code className="bg-indigo-50 text-indigo-700 px-1 rounded">@vscode can you automatically fix this issue?</code> Notice its limitations.</p>
                    </div>
                  )
                },
                {
                  step: "1.5",
                  feature: "Chat Variable (#selection)",
                  content: (
                    <div className="space-y-1">
                      <p>1. Open <code>app/main.py</code>. <strong>Select</strong> only the <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">What are the parameters and return type for #selection and is there a type hint error?</code></p>
                    </div>
                  )
                },
                {
                  step: "1.6",
                  feature: "Chat Variable (#file)",
                  content: (
                    <p><strong>Chat Panel: Ask:</strong>: <code className="bg-indigo-50 text-indigo-700 px-1 rounded">In the function defined in #file:app/main.py, what is the current logic error in the 'calculate_total' function?</code></p>
                  )
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.step}</td>
                  <td className="px-6 py-4 font-semibold text-indigo-600">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-600 leading-relaxed">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exercises Part 2 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900">Exercises: Implicit Context-Awareness</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
             <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 w-16">Step</th>
                <th className="px-6 py-3 w-48">Feature</th>
                <th className="px-6 py-3">Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  step: "1.7",
                  feature: "Context-Aware Chat",
                  content: (
                    <p><strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">Based on the repository's files, what is the required location for new Pydantic models and what is the rule for function signatures?</code></p>
                  )
                },
                {
                  step: "1.8",
                  feature: "Context-Aware Code Completions",
                  content: (
                    <div className="space-y-1">
                      <p>1. Open the newly created <code>app/models.py</code> file.</p>
                      <p>2. <strong>Type</strong>: <code>class OrderResponse(BaseModel):</code>.</p>
                      <p>3. Let Copilot complete the class with appropriate fields. Observe how Copilot infers fields using repository-level context. Accept or refine its suggestion.</p>
                    </div>
                  )
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.step}</td>
                  <td className="px-6 py-4 font-semibold text-indigo-600">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-600 leading-relaxed">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lesson Learned */}
      <div className="bg-green-50 rounded-xl border border-green-100 p-6">
        <div className="flex items-center gap-3 mb-4">
           <div className="p-2 bg-white rounded-lg shadow-sm text-green-600">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-green-900">Lesson Learned: Context, Control & Autonomy</h3>
        </div>
        <div className="space-y-4 text-green-800">
          <p>The most effective way to use Copilot is by <strong>defining context through agent specialization</strong>.</p>
          <ul className="space-y-3 ml-1">
            <li className="flex items-start gap-2">
              <span className="mt-1">🛡️</span>
              <div>
                <strong>Global Constraints:</strong> Use <code>.github/copilot-instructions.md</code> for project-wide rules and architectural standards.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">🤖</span>
              <div>
                <strong>External Tool Agents:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm opacity-90">
                  <li><code>@workspace</code> — query project structure, inspect files, and read configuration.</li>
                  <li><code>@terminal</code> — provide exact CLI commands and command-line assistance.</li>
                  <li><code>@vscode</code> — report editor/IDE diagnostics and help troubleshoot workspace-specific issues.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">🎯</span>
              <div>
                <strong>Context Control:</strong> For local, precise questions, use <strong>Chat Variables</strong> (<code>#selection</code> and <code>#file</code>) to enforce focus on precise code blocks or files.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">🚦</span>
              <div>
                <strong>Autonomy Boundaries:</strong> The agents in the IDE remain <strong>contextual collaborators</strong>. The change is staged but requires the human developer's explicit final approval.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Generating Instructions */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Layout className="w-5 h-5" />
          Generating Instructions for Existing Repositories
        </h3>
        <p className="text-gray-600 mb-4">
          When integrating Copilot into existing codebases, you can <strong>ensure specific rules and standards are enforced</strong> immediately by auto-generating the <code>.github/copilot-instructions.md</code> file.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Option 1</span>
            <p className="font-medium text-gray-900 mt-1">Command Palette</p>
            <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-2 block w-fit">Copilot: Generate Project Instructions</code>
          </div>
           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Option 2</span>
            <p className="font-medium text-gray-900 mt-1">Chat Input</p>
            <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-2 block w-fit">@workspace generate project instructions file</code>
          </div>
        </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module II <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

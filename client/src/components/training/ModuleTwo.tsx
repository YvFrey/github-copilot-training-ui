import React from "react";
import { Terminal, ArrowRight, Zap, MessageSquare, Code2, MousePointerClick, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleTwoProps {
  onNext?: () => void;
}

export function ModuleTwo({ onNext }: ModuleTwoProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module II: Dynamic Interaction Modes</h2>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
               Learn to switch between Copilot’s interaction modes and channels to maximize developer productivity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Code2, label: "Code Completions", desc: "Scaffolding" },
                { icon: MousePointerClick, label: "Inline Chat", desc: "Local Edits" },
                { icon: LayoutDashboard, label: "Chat Panel", desc: "Global Reasoning" },
                { icon: Terminal, label: "Copilot CLI", desc: "Shell Commands" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center hover:border-indigo-200 transition-colors">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                  <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
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
                  step: "2.1",
                  feature: "Code Completions",
                  content: (
                    <div className="space-y-3">
                      <p>1. In <code>app/main.py</code> above the <code>/status</code> route <strong>type:</strong></p>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-gray-600 font-mono text-xs italic">
                        # Add a new POST route /item/create that accepts the existing 'Item' Pydantic model. The route handler should immediately return the received item as JSON
                      </div>
                      <p>2. Open <code>Copilot: Open Completions Panel</code> and iterate through suggestions. Once accepted ensure the comment is deleted.</p>
                      <p className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded inline-block font-medium">Hint: If you don't know how to open the right tool use @vscode agent.</p>
                    </div>
                  )
                },
                {
                  step: "2.2",
                  feature: "Inline Chat (/fix)",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Select</strong> the <code>post_calculate_order</code> function.</p>
                      <p>2. <strong>Inline Chat:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        /fix this route to validate and return the calculated total using the 'OrderResponse' Pydantic model
                      </div>
                    </div>
                  )
                },
                {
                  step: "2.3",
                  feature: "Chat Panel (/fix)",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Select</strong> the entire <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        /fix the bug of the function
                      </div>
                    </div>
                  )
                },
                {
                  step: "2.4",
                  feature: "Chat Panel (/explain)",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Select</strong> the <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        /explain this function to a junior developer. Focus on the math and correct return type, referencing its usage in the '/calculate' endpoint
                      </div>
                    </div>
                  )
                },
                {
                  step: "2.5",
                  feature: "Inline Chat (Selection)",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Select</strong> the <code>create_item</code> function.</p>
                      <p>2. <strong>Inline Chat:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        Explain this code in a single sentence.
                      </div>
                      <p className="text-xs text-gray-500 italic">Observe how it provides an in-place, focused explanation.</p>
                    </div>
                  )
                },
                {
                  step: "2.6",
                  feature: "Mode Comparison",
                  content: (
                    <div className="space-y-3">
                       <p>1. <strong>Select</strong> the <strong>entire <code>calculate_total</code> function</strong> after changing the return type to int.</p>
                       <p>2. <strong>Chat Panel:</strong> Submit three times the exact same prompt:</p>
                       <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                         Change the return type of this function
                       </div>
                       <p>Switch between <strong>ASK Mode, EDIT Mode</strong> and <strong>AGENT Mode</strong> and observe the different behavior.</p>
                    </div>
                  )
                },
                {
                  step: "2.7",
                  feature: "Inline Chat (/docs)",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Select</strong> the body of <code>get_status</code>.</p>
                      <p>2. <strong>Inline Chat:</strong></p>
                      <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                        /docs add a Google-style docstring explaining the function’s purpose and return value
                      </div>
                    </div>
                  )
                },
                {
                   step: "2.8",
                   feature: "Inline Terminal (@terminal)",
                   content: (
                     <div className="space-y-3">
                       <p>1. <strong>Open your terminal</strong> and press <strong>Command/Ctrl + I</strong> to launch the inline chat.</p>
                       <p>2. <strong>Inline Chat:</strong></p>
                       <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-indigo-900 font-mono text-xs">
                         I need to run my FastAPI application using uvicorn with hot-reloading
                       </div>
                       <p className="text-xs text-gray-500 italic">Observe how it picks up the terminal agent natively.</p>
                     </div>
                   )
                },
                {
                  step: "2.9",
                  feature: "Custom Prompt",
                  content: (
                    <div className="space-y-2">
                      <p>1. <strong>Review</strong> <code>security-audit.prompt.md</code>. <strong>Select</strong> <code>create_item</code> in <code>app/main.py</code> and run the prompt: <code>/security-audit</code>.</p>
                      <p>2. <strong>Create</strong> your own prompt (<code>my-use-case.prompt.md</code>).</p>
                    </div>
                  )
                },
                {
                   step: "2.10",
                   feature: "Challenge: Custom Prompt",
                   content: (
                     <p>Think about a repetitive task/prompt during your daily coding. Leverage a prompting framework of your choice. Validate the output and potentially refine the prompt.</p>
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
      <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
           <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Lesson Learned: Dynamic Interaction</h3>
            <p className="text-blue-800">The most effective way to use Copilot is by <strong>choosing the right mode</strong> and understanding how to provide and switch context.</p>
          </div>
        </div>

        <div className="bg-white/60 p-6 rounded-xl border border-blue-100 text-center font-bold text-xl text-blue-900 mb-8 shadow-sm">
          Change the mode → change the context → change the result.
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "ASK Mode", desc: "Reasoning, explanations, conceptual questions (e.g., asking /explain)." },
            { title: "EDIT Mode", desc: "Rewriting, fixing, or refactoring existing code (e.g., using /fix)." },
            { title: "AGENT Mode", desc: "Multi-step workflows that coordinate actions or external tools." },
            { title: "Plan Mode", desc: "Helps you generate a step-by-step plan before coding." }
          ].map((mode, i) => (
             <div key={i} className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
               <strong className="text-blue-700 block mb-1">{mode.title}</strong>
               <p className="text-sm text-gray-600 leading-relaxed">{mode.desc}</p>
             </div>
          ))}
        </div>
      </div>

       <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">Inspiration: Designing Custom Prompt Files</h3>
             <p className="text-gray-600 text-sm leading-relaxed">
              Prompt Files are how you turn repetitive workflow tasks into standard, reusable commands. This prevents lengthy, complex instructions from being typed repeatedly and ensures standardization for tasks like documentation or custom code audits across the entire codebase.
            </p>
          </div>
        </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module III <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Terminal, ArrowRight, Zap, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleTwoProps {
  onNext?: () => void;
}

export function ModuleTwo({ onNext }: ModuleTwoProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Module II: Dynamic Interaction Modes</h2>
      </div>

      {/* Goal */}
      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 flex items-start gap-4">
        <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
          <Terminal className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-indigo-900 mb-1">Goal</h3>
          <p className="text-indigo-800">
             Learn to switch between Copilot’s interaction modes and channels to maximize developer productivity.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              "Code Completions",
              "Inline Chat (Ctrl+I)",
              "Chat Panel",
              "Copilot CLI"
            ].map((item, i) => (
              <div key={i} className="bg-white/60 px-3 py-1.5 rounded text-sm font-medium text-indigo-700 border border-indigo-100/50 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exercises */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900">Exercises</h3>
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
                  step: "2.1",
                  feature: "Code Completions",
                  content: (
                    <div className="space-y-1">
                      <p>1. In <code>app/main.py</code> above the <code>/status</code> route <strong>type:</strong> <code className="text-gray-600 italic"># Add a new POST route /item/create that accepts the existing 'Item' Pydantic model. The route handler should immediately return the received item as JSON</code>.</p>
                      <p>2. Open <code>Copilot: Open Completions Panel</code> and iterate through suggestions. Once accepted ensure the comment is deleted.</p>
                      <p className="text-xs text-indigo-600 font-medium mt-1">Hint: If you don't know how to open the right tool use @vscode agent.</p>
                    </div>
                  )
                },
                {
                  step: "2.2",
                  feature: "Inline Chat (/fix)",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Select</strong> the <code>post_calculate_order</code> function.</p>
                      <p>2. <strong>Inline Chat:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">/fix this route to validate and return the calculated total using the 'OrderResponse' Pydantic model</code>.</p>
                    </div>
                  )
                },
                {
                  step: "2.3",
                  feature: "Chat Panel (/fix)",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Select</strong> the entire <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">/fix the bug of the function</code></p>
                    </div>
                  )
                },
                {
                  step: "2.4",
                  feature: "Chat Panel (/explain)",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Select</strong> the <code>calculate_total</code> function.</p>
                      <p>2. <strong>Chat Panel: Ask:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">/explain this function to a junior developer. Focus on the math and correct return type, referencing its usage in the '/calculate' endpoint</code>.</p>
                    </div>
                  )
                },
                {
                  step: "2.5",
                  feature: "Inline Chat (Selection)",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Select</strong> the <code>create_item</code> function.</p>
                      <p>2. <strong>Inline Chat:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">Explain this code in a single sentence.</code> Observe how it provides an in-place, focused explanation.</p>
                    </div>
                  )
                },
                {
                  step: "2.6",
                  feature: "Mode Comparison",
                  content: (
                    <div className="space-y-1">
                       <p>1. <strong>Select</strong> the <strong>entire <code>calculate_total</code> function</strong> after changing the return type to int.</p>
                       <p>2. <strong>Chat Panel:</strong> Submit three times the exact same prompt: <code className="bg-indigo-50 text-indigo-700 px-1 rounded">Change the return type of this function</code>. Switch between <strong>ASK Mode, EDIT Mode</strong> and <strong>AGENT Mode</strong> and observe the different behavior.</p>
                    </div>
                  )
                },
                {
                  step: "2.7",
                  feature: "Inline Chat (/docs)",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Select</strong> the body of <code>get_status</code>.</p>
                      <p>2. <strong>Inline Chat:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">/docs add a Google-style docstring explaining the function’s purpose and return value</code>.</p>
                    </div>
                  )
                },
                {
                   step: "2.8",
                   feature: "Inline Terminal (@terminal)",
                   content: (
                     <div className="space-y-1">
                       <p>1. <strong>Open your terminal</strong> and press <strong>Command/Ctrl + I</strong> to launch the inline chat.</p>
                       <p>2. <strong>Inline Chat:</strong> <code className="bg-indigo-50 text-indigo-700 px-1 rounded">I need to run my FastAPI application using uvicorn with hot-reloading</code>. Observe how it picks up the terminal agent natively.</p>
                     </div>
                   )
                },
                {
                  step: "2.9",
                  feature: "Custom Prompt",
                  content: (
                    <div className="space-y-1">
                      <p>1. <strong>Review</strong> <code>security-audit.prompt.md</code>. <strong>Select</strong> <code>create_item</code> in <code>app/main.py</code> and run the prompt: <code>/security-audit</code>.</p>
                      <p>2. <strong>Create</strong> your own prompt (<code>my-use-case.prompt.md</code>).</p>
                    </div>
                  )
                },
                {
                   step: "2.9",
                   feature: "Challenge: Custom Prompt",
                   content: (
                     <p>Think about a repetitive task/prompt during your daily coding. Leverage a prompting framework of your choice. Validate the output and potentially refine the prompt.</p>
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
      <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
        <div className="flex items-center gap-3 mb-4">
           <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-blue-900">Lesson Learned: Dynamic Interaction and Agent Capabilities</h3>
        </div>
        <div className="space-y-4 text-blue-800">
          <p>The most effective way to use Copilot is by <strong>choosing the right mode</strong> and understanding how to provide and switch context.</p>
          <div className="bg-white/60 p-4 rounded-lg border border-blue-100 text-center font-semibold text-lg">
            Change the mode → change the context → change the result.
          </div>
          
          <h4 className="font-bold text-blue-900 mt-4">Core Thinking Modes</h4>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { title: "ASK Mode", desc: "Reasoning, explanations, conceptual questions" },
              { title: "EDIT Mode", desc: "Rewriting, fixing, or refactoring existing code" },
              { title: "AGENT Mode", desc: "Multi-step workflows that coordinate actions" },
              { title: "Plan Mode", desc: "Helps you generate a step-by-step plan before coding" }
            ].map((mode, i) => (
               <li key={i} className="bg-white p-3 rounded border border-blue-100 shadow-sm">
                 <strong className="text-blue-700">{mode.title}</strong>
                 <p className="text-sm text-blue-600 mt-1">{mode.desc}</p>
               </li>
            ))}
          </ul>
        </div>
      </div>

       <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Inspiration: Designing Custom Prompt Files
        </h3>
        <p className="text-gray-600 text-sm">
          Prompt Files are how you turn repetitive workflow tasks into standard, reusable commands. This prevents lengthy, complex instructions from being typed repeatedly and ensures standardization for tasks like documentation or custom code audits across the entire codebase.
        </p>
      </div>

      {onNext && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module III <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

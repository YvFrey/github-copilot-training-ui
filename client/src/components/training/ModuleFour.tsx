import React from "react";
import { ShieldCheck, ArrowRight, Bug, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleFourProps {
  onNext?: () => void;
}

export function ModuleFour({ onNext }: ModuleFourProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module IV: Testing Framework</h2>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
               Integrate Copilot into the end-to-end development loop. Generate tests, explore unit and integration coverage, and ensure code adheres to project standards.
            </p>
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
                  step: "4.1",
                  feature: "Test Generation",
                  content: (
                    <div className="space-y-3">
                      <p>1. Select any function or endpoint.</p>
                      <p>2. Use <strong>Inline Chat</strong> and type: <code className="bg-indigo-50 text-indigo-700 px-1 rounded text-xs font-mono">/tests</code>.</p>
                      <p>3. Observe the initial suggestions and where Copilot proposes to place the test file.</p>
                    </div>
                  )
                },
                {
                  step: "4.2",
                  feature: "Enhance Instructions",
                  content: (
                    <div className="space-y-3">
                      <p>1. Update the <strong>global instruction file</strong> to guide Copilot for test generation. Include the test framework (e.g., <code>pytest</code>), naming conventions for test files and functions, preferred folder structure for tests, any required fixtures or templates. Use Copilot to enhance the instrcution file!</p>
                      <p>2. Rerun <code className="bg-indigo-50 text-indigo-700 px-1 rounded text-xs font-mono">/tests</code> on a function and observe how your instructions influence the generated output.</p>
                    </div>
                  )
                },
                {
                  step: "4.3",
                  feature: "Challenge: Full Codebase Test Generation",
                  content: (
                    <p>Generate all unit and integration tests for the app using your updated instruction file. Ensure all tests follow your defined rules.</p>
                  )
                },
                {
                  step: "4.4",
                  feature: "Optional: Custom Prompt",
                  content: (
                     <p>Create a <code>.prompt.md</code> file to automate a repetitive test-generation task (e.g., generating boilerplate for a specific type of endpoint). Test it on a sample function.</p>
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
      <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
           <div className="p-2 bg-white rounded-lg shadow-sm text-orange-600">
            <Bug className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">Lesson Learned: Context-Driven Test Generation</h3>
            <p className="text-orange-800">Copilot relies on <strong>instruction files</strong> to understand your project’s rules and structure.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
           <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
             <h4 className="font-bold text-orange-900 mb-2 text-sm">Consistency</h4>
             <p className="text-xs text-orange-800"><strong>Enhancing instructions</strong> ensures AI-generated tests are consistent, correctly placed, and follow naming conventions.</p>
           </div>
           <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
             <h4 className="font-bold text-orange-900 mb-2 text-sm">Automation</h4>
             <p className="text-xs text-orange-800"><strong>Custom prompts</strong> let you automate repetitive workflows and enforce project-specific patterns.</p>
           </div>
           <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
             <h4 className="font-bold text-orange-900 mb-2 text-sm">Precision</h4>
             <p className="text-xs text-orange-800"><strong>Prompt precision matters:</strong> Even with instruction files, carefully worded prompts avoid scope creep.</p>
           </div>
        </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module V <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { GitBranch, ArrowRight, ShieldCheck, GitCommit, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleThreeProps {
  onNext?: () => void;
}

export function ModuleThree({ onNext }: ModuleThreeProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module III: Version Control and Quality</h2>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
               Integrate Copilot's contextual features into Git workflows. Improve commit messages, code review, and branch documentation, while reinforcing the developer's ultimate responsibility for code integrity.
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
                  step: "3.1",
                  feature: "Code Review",
                  content: (
                    <div className="space-y-3">
                      <p>1. <strong>Stage</strong> the file(s) containing the changes from the previous module.</p>
                      <p>2. Open the <strong>Source Control</strong> panel.</p>
                      <p>3. Click <strong>"Review changes with Copilot"</strong>. Review the feedback provided by Copilot on the staged code.</p>
                    </div>
                  )
                },
                {
                  step: "3.2",
                  feature: "Commit Message",
                  content: (
                    <div className="space-y-3">
                      <p>1. In the <strong>Source Control</strong> panel, click the <strong>Copilot Icon</strong> next to the commit message box. Ensure you have staged changes.</p>
                      <p>2. Observe the quality of the commit message and understand the <a href="https://docs.github.com/en/copilot/responsible-use/copilot-commit-message-generation" target="_blank" className="text-indigo-600 hover:underline font-medium">limitations of the feature</a>.</p>
                    </div>
                  )
                },
                {
                  step: "3.3",
                  feature: "Challenge: PR Summary",
                  content: (
                    <div className="space-y-3">
                       <p>Leverage your knowledge from the previous chapters and create a concise summary for a Pull Request, avoiding the issue of getting an overly broad history.</p>
                       <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-indigo-900 text-xs leading-relaxed">
                         <strong>HINT:</strong> You can craft a precise prompt and use the <strong>@workspace agent</strong> that forces Copilot to summarize <em>only</em> the specific changes for this PR (which likely involves the last few commits). You can use <strong>Git references</strong> (like commit hashes) or restrict the summary by file path.
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

      {/* Lesson Learned */}
      <div className="bg-purple-50 rounded-xl border border-purple-100 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
           <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600">
            <GitCommit className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Lesson Learned: Git Workflow and Developer Responsibility</h3>
            <p className="text-purple-800">You can <strong>embed GitHub Copilot directly into your Git workflow</strong> to ensure cleaner branch history and detect issues ahead of your colleagues review. Remember that <strong>developers are responsible for the code quality and integrity</strong>.</p>
          </div>
        </div>
        
         <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
           <h4 className="font-bold text-purple-900 flex items-center gap-2 mb-4 text-lg">
             <ShieldCheck className="w-5 h-5" />
             Responsibility Boundaries
           </h4>
           <ul className="space-y-4 text-gray-700">
             <li className="flex gap-3 items-start">
               <span className="flex-shrink-0 mt-0.5 bg-purple-100 text-purple-700 p-1 rounded text-xs">🧑‍💻</span>
               <span className="text-sm"><strong>You are the Guardian:</strong> You are still fully responsible for the quality, correctness, and security of the code you commit. Copilot is an acceleration tool, not a replacement for human judgment.</span>
             </li>
              <li className="flex gap-3 items-start">
               <span className="flex-shrink-0 mt-0.5 bg-purple-100 text-purple-700 p-1 rounded text-xs">🔬</span>
               <span className="text-sm"><strong>Verification is Mandatory:</strong> Always review the output from Copilot's SCM review and manually test any changes it suggests before committing.</span>
             </li>
              <li className="flex gap-3 items-start">
               <span className="flex-shrink-0 mt-0.5 bg-purple-100 text-purple-700 p-1 rounded text-xs">✅</span>
               <span className="text-sm"><strong>Senseful Code:</strong> Ensure you commit <strong>correct and senseful</strong> code. Copilot accelerates the writing process, but <strong>human validation and testing</strong> is the non-negotiable final step.</span>
             </li>
           </ul>
         </div>
      </div>

      {onNext && (
        <div className="flex justify-end pt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl flex items-center gap-3 font-semibold"
          >
            Go to Module IV <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

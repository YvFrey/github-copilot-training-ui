import React from "react";
import { Prompt } from "../Prompt";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Module3ContentProps {
  onNext?: () => void;
}

export const Module3Intro = (
  <>
    <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Goal: Integrate Copilot's contextual features into Git workflows.</h3>
    
    <p className="text-gray-600">Improve commit messages, code review, and branch documentation, while reinforcing the developer's ultimate responsibility for code integrity.</p>
  </>
);

export function Module3Content({ onNext }: Module3ContentProps) {
  return (
    <div className="prose prose-indigo max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercises</h2>
      
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Code Review</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Stage</strong> the file(s) containing the changes from the previous module.<br/>
                2. Open the <strong>Source Control</strong> panel.<br/>
                3. Click <strong>"Review changes with Copilot"</strong>. Review the feedback provided by Copilot on the staged code.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Commit Message</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. In the <strong>Source Control</strong> panel, click the <strong>Copilot Icon</strong> next to the commit message box. Ensure you have staged changes.<br/>
                2. Observe the quality of the commit message and understand the <a href="https://docs.github.com/en/copilot/responsible-use/copilot-commit-message-generation" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">limitations of this feature</a>.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Challenge: PR Summary</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Leverage your knowledge from the previous chapters and create a concise summary for a Pull Request, avoiding the issue of getting an overly broad history.<br/>
                <strong>HINT:</strong> You can craft a precise prompt and use the <strong><code>@workspace</code> assistant</strong> that forces Copilot to summarize only the specific changes for this PR (which likely involves the last few commits). You can use <strong>Git references</strong> (like commit hashes) or restrict the summary by file path to get the exact result you want. Feel free to research and apply any other approach.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Git Workflow and Developer Responsibility
        </h3>
        <p className="text-gray-700 mb-4">
          You can <strong>embed GitHub Copilot directly into your Git workflow</strong> to ensure cleaner branch history and detect issues ahead of your colleagues' review. Remember that <strong>developers are responsible for the code quality and integrity</strong>.
        </p>

        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">🛡️ Responsibility Boundaries</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>You are the Guardian:</strong> 🧑‍💻 You are still fully responsible for the quality, correctness, and security of the code you commit. Copilot is an acceleration tool, not a replacement for human judgment.</li>
          <li><strong>Verification is Mandatory:</strong> 🔬 Always review the output from Copilot's SCM review and manually test any changes it suggests before committing.</li>
          <li><strong>Meaningful Code:</strong> ✅ Ensure you commit <strong>correct and logical</strong> code. Copilot accelerates the writing process, but <strong>human validation and testing</strong> is the non-negotiable final step.</li>
        </ul>
      </div>

      {onNext && (
        <div className="flex justify-end pt-4 mt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module IV <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

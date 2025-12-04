import React from "react";
import { Prompt } from "../Prompt";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Module1ContentProps {
  onNext?: () => void;
}

export const Module1Intro = (
  <>
    <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Goal: Understand how explicit context (instructions and chat variables) dictate the quality and scope of Copilot's suggestions</h3>
  </>
);

export function Module1Content({ onNext }: Module1ContentProps) {
  return (
    <div className="prose prose-indigo max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercises: Explicit Context-Awareness</h2>
      
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">Step</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[65%]">Instructions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Repository Instructions</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Review:</strong> Open and read the <code>.github/copilot-instructions.md</code> file.<br/>
                2. <strong>Chat: Ask:</strong> <Prompt>Which file must I create next to satisfy Mandatory Coding Guideline #4, and please provide the command to create it.</Prompt> Execute the suggested command.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Workspace Awareness<br/>
                <span className="text-gray-500 font-normal">(<code>@workspace</code> Agent)</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat: Ask:</strong> <Prompt>@workspace what are the two main dependencies listed in pyproject.toml and what is the required Python version?</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Terminal Help<br/>
                <span className="text-gray-500 font-normal">(<code>@terminal</code> Agent)</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat: Ask:</strong> <Prompt>@terminal I need to create a new branch named 'feature/calc-fix'. Provide the exact git command for this.</Prompt> Execute the suggested command.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.4</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Editor Diagnostics<br/>
                <span className="text-gray-500 font-normal">(<code>@vscode</code> Agent)</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Introduce a small syntax error in <code>app/main.py</code>.<br/>
                2. <strong>Chat: Ask:</strong> <Prompt>@vscode what problems are currently reported in this file?</Prompt><br/>
                3. <strong>Chat: Ask:</strong> <Prompt>@vscode open the Problems panel.</Prompt><br/>
                4. <strong>Chat: Ask:</strong> <Prompt>@vscode can you automatically fix this issue?</Prompt> Notice its limitations.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Chat Variable<br/>
                <span className="text-gray-500 font-normal">(<code>#selection</code>)</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Open <code>app/main.py</code>. <strong>Select</strong> only the <code>calculate_total</code> function.<br/>
                2. <strong>Chat: Ask:</strong> <Prompt>What are the parameters and return type for #selection and is there a type hint error?</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.6</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Chat Variable<br/>
                <span className="text-gray-500 font-normal">(<code>#file</code>)</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat: Ask:</strong> <Prompt>In the function defined in #file:app/main.py, what is the current logic error in the 'calculate_total' function?</Prompt>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exercises: Implicit Context-Awareness</h2>
      
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">Step</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]">Feature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[65%]">Instructions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.7</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Context-Aware Chat</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat: Ask:</strong> <Prompt>Based on the repository's files, what is the required location for new Pydantic models and what is the rule for function signatures?</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.8</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Context-Aware Code Completions</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Open the newly created <strong><code>app/models.py</code></strong> file.<br/>
                2. <strong>Type:</strong> <Prompt>class OrderResponse(BaseModel):</Prompt><br/>
                3. Let Copilot complete the class with appropriate fields. Observe how Copilot infers fields using repository-level context. Accept or refine its suggestion.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Context, Control & Autonomy
        </h3>
        <p className="text-gray-700 mb-4">
          The most effective way to use Copilot is by <strong>defining context through agent specialization</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Global Constraints:</strong> 🛡️ Use the <strong><code>.github/copilot-instructions.md</code></strong> file for project-wide rules and architectural standards.
          </li>
          <li>
            <strong>External Tool Agents:</strong> 🤖
            <ul className="list-disc list-inside ml-6 mt-1">
              <li><code>@workspace</code> — query project structure, inspect files, and read configuration.</li>
              <li><code>@terminal</code> — provide exact CLI commands and command-line assistance.</li>
              <li><code>@vscode</code> — report editor/IDE diagnostics and help troubleshoot workspace-specific issues.</li>
            </ul>
            <span className="block ml-6 mt-1 italic text-sm">These built-in agents connect the AI to your development environment and enable context-aware, actionable suggestions.</span>
          </li>
          <li>
            <strong>Context Control:</strong> 🎯 For local, precise questions, use <strong>Chat Variables</strong> (<code>#selection</code> and <code>#file</code>) to enforce focus on precise code blocks or files.
          </li>
          <li>
            <strong>Autonomy Boundaries:</strong> 🚦 The agents in the IDE remain <strong>contextual collaborators</strong> who <strong>execute code modifications by proposing changes</strong>. The change is <strong>staged</strong> but requires the human developer's <strong>explicit final approval</strong> to be written to the active file. The <strong>autonomous, iterative workflow</strong> is reserved for tasks delegated via GitHub Issues (as seen in Module V).
          </li>
          <li>
            <strong>Inference is Strong:</strong> 🧠 Often AI is intelligent enough to ground its response in the project's configuration files even when you don't use a specific agent. This high degree of inference works particularly well with simple, small repositories like our training app.
          </li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          💡 Generating Instructions for Existing Repositories
        </h3>
        <p className="text-gray-600 mb-4">
          When integrating Copilot into existing codebases, you can <strong>ensure specific rules and standards are enforced</strong> immediately by auto-generating the <code>.github/copilot-instructions.md</code> file. This prevents the AI from inferring old or bad practices and ensures it adheres to your defined standards.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
          <li><strong>Option 1: Command Palette (Recommended)</strong>: <code>Copilot: Generate Project Instructions</code></li>
          <li><strong>Option 2: Chat Input (Codespaces/GitHub.dev)</strong>: <Prompt>@workspace generate project instructions file</Prompt></li>
        </ul>
        <p className="text-gray-600">
          In both cases, Copilot analyzes the existing code and configuration files, creating a draft <code>.github/copilot-instructions.md</code> that you can then review and refine with your <strong>Mandatory Coding Guidelines</strong>. You can confirm the file is generated and active: <Prompt>@workspace summarize the active workspace instructions.</Prompt> Copilot will quote the main rules from that file if it’s being used correctly.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">💡 References & Further Reading</h3>
        <ul className="list-disc list-inside text-indigo-600">
          <li><a href="https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=webui" target="_blank" rel="noreferrer" className="hover:underline">GitHub Copilot: Repository Instructions</a></li>
        </ul>
      </div>

      {onNext && (
        <div className="flex justify-end pt-4 mt-8">
          <Button 
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module II <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

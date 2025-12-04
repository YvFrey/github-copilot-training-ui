import React from "react";
import { Prompt } from "../Prompt";

export function Module5Content() {
  return (
    <div className="prose prose-indigo max-w-none">
      <p className="text-gray-600 mb-4">
        <strong>Copilot Coding Agents</strong> 🤖 are <strong>autonomous</strong> AI assistants designed to perform <strong>multi-step, iterative coding tasks</strong> in an <strong>asynchronous</strong> manner. They are the <strong>only</strong> Copilot tools that can run, commit, and open PRs in a loop without human intervention. Agent workflows can be triggered in multiple ways via GitHub UI, CLI (<code>gh</code>) or Chat.
      </p>
      
      <p className="text-gray-600 mb-6">
        <strong>Custom Agents</strong> are <strong>user-defined agent profiles</strong> that encapsulate a specific workflow or rule set, ensuring specialized, consistent task execution.
      </p>

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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Agent Profile</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Review</strong> the custom agent profile: <strong>.github/agents/MypyFixer.md</strong>.<br/>
                2. Confirm there are Mypy type errors present in the codebase (e.g., in <code>app/main.py</code>) but do not fix them.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Delegation via GitHub Issue</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Go to your repository's <strong>Issues</strong> tab on GitHub and create a new issue. e.g. titled: <Prompt>@copilot Request: Fix All Outstanding Mypy Errors of the App</Prompt><br/>
                2. <strong>Assign</strong> this new issue to the <strong><code>@copilot</code></strong> agent.<br/>
                3. Use the custom agent profile dropdown to select <strong><code>MypyFixer</code></strong>.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Delegation via VS Code Chat</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat Panel: MyPyFixer:</strong> Create a simple prompt that initiates the <strong>autonomous workflow</strong> directly from your IDE using the selected agent, resulting in a new PR. Click the cloud icon next to the send button and select the <strong><code>GitHub Copilot Cloud Agent</code></strong>.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.4</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Review the Iteration</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Monitor the issue timeline and the resulting Pull Requests. Observe how the agent iteratively runs mypy, fixes one error, commits, and repeats until mypy passes, showcasing the power of its autonomous loop.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Optional: Delegation via GitHub CLI</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Make sure the GitHub CLI is installed. Delegate the task via the command line: <Prompt>gh issue create --title "@copilot Request: Refactor the /calculate endpoint" --assignee @copilot</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.6</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Challenge: Design Your Own Agent</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Design and create a new custom agent profile: <strong><code>.github/agents/YourAgentName.md</code></strong>. Delegate a new task to this Agent while you can focus on the next feature development.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.7</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Optional: Run Agent Locally</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat Panel:</strong> Create a simple prompt to assign a task to any of your defined agents. Click the cloud icon next to the send button and select the GitHub Copilot CLI Agent.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Agentic Autonomy and Delegation
        </h3>
        <p className="text-gray-700 mb-4">
          Delegating tasks to the autonomous Coding Agent transforms technical debt into an automated, scalable workflow, allowing developers to focus their time on complex feature development.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Autonomy is Key:</strong> ☁️ The <strong>Coding Agent</strong> (triggered via <strong><code>@copilot</code></strong> or the local Chat interface) is the only Copilot functionality that runs <strong>asynchronously</strong>, commits changes, and opens a Pull Request <em>autonomously</em>. This is the definition of the <strong>Agentic Workflow</strong>.</li>
          <li><strong>Scalability:</strong> 🚀 The system supports concurrent task execution, allowing multiple colleagues to assign fix-it tasks simultaneously.</li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">💡 References & Further Reading</h3>
        <ul className="list-disc list-inside text-indigo-600 space-y-1">
          <li><a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent" target="_blank" rel="noreferrer" className="hover:underline">About Coding Agents</a></li>
          <li><a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents" target="_blank" rel="noreferrer" className="hover:underline">Create and Configure Custom Agents</a></li>
          <li><a href="https://code.visualstudio.com/docs/copilot/copilot-coding-agent#_method-2-delegate-from-chat" target="_blank" rel="noreferrer" className="hover:underline">Delegate from Copilot Chat (VS Code)</a></li>
        </ul>
      </div>
    </div>
  );
}

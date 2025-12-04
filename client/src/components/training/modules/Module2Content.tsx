import React from "react";
import { Prompt } from "../Prompt";

export function Module2Content() {
  return (
    <div className="prose prose-indigo max-w-none">
      <p className="text-gray-600 mb-4">Copilot provides four primary interaction channels:</p>
      
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
        <li><strong>Code Completions</strong> → Quick scaffolding and filling in code as you type.</li>
        <li><strong>Inline Chat (<code>Ctrl/Cmd + I</code>)</strong> → Focused, in-place edits and actions on selected code.</li>
        <li><strong>Chat Panel</strong> → Global reasoning, architectural questions, and multi-file context.</li>
        <li><strong>Copilot CLI</strong> → Shell/Terminal Interaction for generating and executing commands.</li>
      </ul>
      
      <p className="text-gray-600 mb-8">Switching modes and channels intentionally improves speed, accuracy, and clarity.</p>

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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Code Completions</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. In <code>app/main.py</code> above the <code>/status</code> route <strong>type:</strong> <Prompt># Add a new POST route /item/create that accepts the existing 'Item' Pydantic model. The route handler should immediately return the received item as JSON</Prompt><br/>
                2. Open <code>Copilot: Open Completions Panel</code> and iterate through suggestions. Once accepted ensure the comment is deleted.<br/>
                <strong>Hint:</strong> If you don't know how to open the right tool use <code>@vscode</code> agent.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inline Chat (<code>/fix</code>)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <code>post_calculate_order</code> function.<br/>
                2. <strong>Inline Chat</strong>: <Prompt>/fix this route to validate and return the calculated total using the 'OrderResponse' Pydantic model</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Chat Panel (<code>/fix</code>)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the entire <strong><code>calculate_total</code></strong> function.<br/>
                2. <strong>Chat Panel:</strong> <Prompt>/fix the bug of the function</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.4</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Chat Panel (<code>/explain</code>)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <code>calculate_total</code> function.<br/>
                2. <strong>Chat Panel: Ask:</strong> <Prompt>/explain this function to a junior developer. Focus on the math and correct return type, referencing its usage in the '/calculate' endpoint</Prompt>.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inline Chat (Selection)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <code>create_item</code> function.<br/>
                2. <strong>Inline Chat</strong>: <Prompt>Explain this code in a single sentence.</Prompt> Observe how it provides an in-place, focused explanation.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.6</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Mode Comparison</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <strong>entire <code>calculate_total</code> function</strong> after changing the return type to int.<br/>
                2. <strong>Chat Panel:</strong> Submit three times the exact same prompt: <Prompt>Change the return type of this function</Prompt> Switch between <strong>ASK Mode, EDIT Mode</strong> and <strong>AGENT Mode</strong> and observe the different behavior.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.7</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inline Chat (<code>/docs</code>)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the body of <code>get_status</code>.<br/>
                2. <strong>Inline Chat</strong>: <Prompt>/docs add a Google-style docstring explaining the function’s purpose and return value</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.8</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inline Terminal (<code>@terminal</code>)</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Open your terminal</strong> and press <strong><code>Command/Ctrl + I</code></strong> to launch the inline chat.<br/>
                2. <strong>Inline Chat:</strong> <Prompt>I need to run my FastAPI application using uvicorn with hot-reloading</Prompt> Observe how it picks up the terminal agent natively.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.9</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Custom Prompt</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Review</strong> <code>security-audit.prompt.md</code>. <strong>Select</strong> <code>create_item</code> in <code>app/main.py</code> and run the prompt: <code>/security-audit</code>.<br/>
                2. <strong>Create</strong> your own prompt (<code>my-use-case.prompt.md</code>).
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2.10</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Challenge: Custom Prompt</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Think about a repetitive task/prompt during your daily coding. Leverage a prompting framework of your choice. Validate the output and potentially refine the prompt.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          📚 Inspiration: Designing Custom Prompt Files
        </h3>
        <p className="text-gray-600 mb-4">
          Prompt Files are how you turn repetitive workflow tasks into standard, reusable commands. This prevents lengthy, complex instructions from being typed repeatedly and ensures standardization for tasks like documentation or custom code audits across the entire codebase.
        </p>
        <a href="https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">GitHub Docs: Your First Prompt File</a>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Dynamic Interaction and Agent Capabilities
        </h3>
        <p className="text-gray-700 mb-4">
          The most effective way to use Copilot is by <strong>choosing the right mode</strong> and understanding how to provide and switch context.<br/>
          <strong>Change the mode → change the context → change the result.</strong>
        </p>

        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">💡 Core Thinking Modes</h4>
        <p className="text-gray-700 mb-2">All interactions fall into one of following modes, dictating the AI's response style:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
          <li><strong>ASK Mode</strong> → Reasoning, explanations, conceptual questions (e.g., asking <code>/explain</code>).</li>
          <li><strong>EDIT Mode</strong> → Rewriting, fixing, or refactoring existing, selected code (e.g., using <code>/fix</code>).</li>
          <li><strong>AGENT Mode</strong> → Multi-step workflows that coordinate actions or external tools.</li>
          <li><strong>Plan Mode</strong> → Helps you generate a step‑by‑step plan before coding. <a href="https://github.blog/changelog/2025-11-18-plan-mode-in-github-copilot-now-in-public-preview-in-jetbrains-eclipse-and-xcode/?utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="underline">Plan Mode</a> is one of the latest features.</li>
        </ul>

        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">⚡ Interaction Channels and Focus</h4>
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Code Completions</td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">Instant</td>
                <td className="px-6 py-3 text-sm text-gray-700">Quick scaffolding and small function generation.</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Inline Chat</td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">Local Precision</td>
                <td className="px-6 py-3 text-sm text-gray-700">Small refactors, documentation (<code>/docs</code>), or quick fixes (<code>/fix</code>) on selected code.</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Chat Panel</td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">Global Reasoning</td>
                <td className="px-6 py-3 text-sm text-gray-700">Architectural questions, multi-file context, and complex explanations.</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Terminal/CLI</td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">Command Execution</td>
                <td className="px-6 py-3 text-sm text-gray-700">Generating and executing commands for Git, Docker, and shell utilities.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">⭐ Key Insight: Context = Results</h4>
        <p className="text-gray-700 font-medium mb-2">Change the mode → change the context → change the result.</p>
        <p className="text-gray-700 mb-4">The ultimate insight is that <strong>the input channel acts as the primary router</strong> for your query, dictating which specialized agent or tool handles the request. Copilot is engineered to be a powerful problem-solver, adept at handling complex tasks and quickly grasping the right context, but the human must guide the interaction.</p>
        
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Channel is the Router:</strong> The channel you use (Inline Chat, Terminal, or Chat Panel) is the first factor that determines the AI's scope and focus.</li>
          <li><strong>Implicit Routing:</strong> The system automatically invokes the required agent based on context (e.g., <strong>Inline Chat inside the terminal automatically routes the request to the <code>@terminal</code> Agent</strong>). This means you don't always need to explicitly type the agent tag.</li>
          <li><strong>Efficiency:</strong> The most effective workflow combines these factors efficiently. The ultimate goal is to find the fastest way to get a reliable result. If you prefer typing commands over clicking UI elements, sticking to <strong>Slash Commands</strong> and <strong>Context Variables</strong> is a great strategy.</li>
          <li><strong>Personal Preference:</strong> Remember that finding the 'best' interaction channel is ultimately a matter of <strong>personal workflow preference</strong>; it's perfectly fine and even recommended to stick with the methods and settings that you find most efficient.</li>
        </ol>
      </div>
    </div>
  );
}

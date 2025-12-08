import React from "react";
import { Prompt } from "../Prompt";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Module2ContentProps {
  onNext?: () => void;
}

export const Module2Intro = (
  <>
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      📚 Goal: Learn to switch between Copilot’s interaction modes and channels
      to maximize developer productivity
    </h3>

    <p className="text-gray-600 mb-4">
      Copilot provides four primary interaction channels:
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
      <li>
        <strong>Code Completions</strong> → Quick scaffolding and filling in
        code as you type.
      </li>
      <li>
        <strong>
          Inline Chat (<code>Ctrl/Cmd + I</code>)
        </strong>{" "}
        → Focused, in-place edits and actions on selected code.
      </li>
      <li>
        <strong>Chat Panel</strong> → Global reasoning, architectural questions,
        and multi-file context.
      </li>
      <li>
        <strong>Quick Chat</strong> → Transient questions and brief inquiries.
      </li>
      <li>
        <strong>Copilot CLI</strong> → Shell/Terminal Interaction for generating
        and executing commands.
      </li>
    </ul>

    <p className="text-gray-600">
      Switching modes and channels intentionally improves speed, accuracy, and
      clarity.
    </p>
  </>
);

export function Module2Content({ onNext }: Module2ContentProps) {
  return (
    <div className="prose prose-indigo max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercises</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Step
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Code Completions
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. In <code>app/main.py</code> **type:**{" "}
                <Prompt>
                  # Add a new GET route /task/1/status that accepts a task_id path parameter and returns the status of that task
                </Prompt>
                <br />
                2. Open <code>Copilot: Open Completions Panel</code> and iterate
                through suggestions. Once accepted ensure the comment is
                deleted.
                <br />
                <strong>Hint:</strong> If you don't know how to open the right
                tool use <code>@vscode</code> agent.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Inline Chat <br />
                <span className="text-gray-500 font-normal">
                  (<code>/fix</code>)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                You notice that something seems to be off with the calculation of the <code>generate_productivity_report</code>.
                <br />
                1. <strong>Select</strong> the entire <code>generate_productivity_report</code>{" "}
                function.
                <br />
                2. <strong>Inline Chat</strong>:{" "}
                <Prompt>
                  /fix calculation
                </Prompt>
                <br />
                3. Evaluate the proposed fix. The function's name and internal docstring provide critical context.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Chat Panel
                <br />
                <span className="text-gray-500 font-normal">
                  (<code>//fix</code>)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <code>generate_productivity_report</code>{" "}
                function.
                <br />
                2. <strong>Chat: Ask:</strong>{" "}
                <Prompt>/explain the steps of the function</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.4
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Inline Chat
                <br />
                <span className="text-gray-500 font-normal">
                  (<code>Selection</code>)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> the <code>generate_productivity_report</code>{" "}
                function.
                <br />
                2. <strong>Inline Chat</strong>:{" "}
                <Prompt>Explain this code in a single sentence.</Prompt> Observe
                how it provides an in-place, focused explanation.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.5
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Inline Chat
                <br />
                <span className="text-gray-500 font-normal">
                  (<code>/doc</code>)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Select</strong> in <code>app/main.py</code> the function <code>log_task</code>.
                <br />
                2. <strong>Inline Chat</strong>:{" "}
                <Prompt>
                  /doc
                </Prompt>
                <br />
                3. You can enhance the internal prompt in case you want a specific format.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.6
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Inline Terminal <br />
                <span className="text-gray-500 font-normal">
                  (<code>@terminal</code> Agent)
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Open your terminal</strong> and press{" "}
                <strong>
                  <code>Command/Ctrl + I</code>
                </strong>{" "}
                to launch the inline chat.
                <br />
                2. <strong>Inline Chat:</strong>{" "}
                <Prompt>
                  I need to run my FastAPI application using uvicorn with
                  hot-reloading
                </Prompt>{" "}
                Observe how it picks up the terminal agent natively.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.7
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Custom Prompt
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. <strong>Review</strong> <code>security-audit.prompt.md</code>
                . <strong>Select</strong> <code>get_all_tasks</code> in{" "}
                <code>app/main.py</code> and run the prompt:{" "}
                <code>/security-audit</code>.<br />
                2. <strong>Create</strong> your own prompt.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2.8
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                Challenge: Custom Prompt
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Think about a repetitive task in your daily coding; choose a prompting framework to craft a reusable prompt and integrate it seamlessly into your workflow, then validate the output and refine the prompt as needed.
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
          Prompt Files are how you turn repetitive workflow tasks into standard,
          reusable commands. This prevents lengthy, complex instructions from
          being typed repeatedly and ensures standardization for tasks like
          documentation or custom code audits across the entire codebase.
        </p>
        <a
          href="https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 hover:underline font-medium"
        >
          GitHub Docs: Your First Prompt File
        </a>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Dynamic Interaction and Agent Capabilities
        </h3>
        <p className="text-gray-700 mb-4">
          The most effective way to use Copilot is by{" "}
          <strong>choosing the right mode</strong> and understanding how to
          provide and switch context.
          <br />
          <strong>
            Change the mode → change the context → change the result.
          </strong>
        </p>

        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">
          💡 Core Thinking Modes
        </h4>
        <p className="text-gray-700 mb-2">
          All interactions fall into one of following modes, dictating the AI's
          response style:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
          <li>
            <strong>ASK Mode</strong> → Reasoning, explanations, conceptual
            questions (e.g., asking <code>/explain</code>).
          </li>
          <li>
            <strong>EDIT Mode</strong> → Rewriting, fixing, or refactoring
            existing, selected code (e.g., using <code>/fix</code>).
          </li>
          <li>
            <strong>AGENT Mode</strong> → Multi-step workflows that coordinate
            actions or external tools.
          </li>
          <li>
            <strong>PLAN Mode</strong> → Helps you generate a step‑by‑step plan
            before coding.{" "}
            <a
              href="https://github.blog/changelog/2025-11-18-plan-mode-in-github-copilot-now-in-public-preview-in-jetbrains-eclipse-and-xcode/?utm_source=chatgpt.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Plan Mode
            </a>{" "}
            is one of the latest features.
          </li>
        </ul>

        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">
          ⚡ Interaction Channels and Focus
        </h4>
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Channel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Focus
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key Use Case
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  Code Completions
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">
                  Instant
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Quick scaffolding and small function generation.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  Inline Chat
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">
                  Local Precision
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Small refactors, documentation (<code>/docs</code>), or quick
                  fixes (<code>/fix</code>) on selected code.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  Chat Panel
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">
                  Global Reasoning
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Architectural questions, multi-file context, and complex
                  explanations.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">
                  Terminal/CLI
                </td>
                <td className="px-6 py-3 text-sm text-gray-700 font-bold">
                  Command Execution
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Generating and executing commands for Git, Docker, and shell
                  utilities.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">
          ⭐ Key Insight: Context = Results
        </h4>
        <p className="text-gray-700 font-medium mb-2">
          Change the mode → change the context → change the result.
        </p>
        <p className="text-gray-700 mb-4">
          The ultimate insight is that{" "}
          <strong>the input channel acts as the primary router</strong> for your
          query, dictating which specialized agent or tool handles the request.
          Copilot is engineered to be a powerful problem-solver, adept at
          handling complex tasks and quickly grasping the right context, but the
          human must guide the interaction.
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>Channel is the Router:</strong> The channel you use (Inline
            Chat, Terminal, or Chat Panel) is the first factor that determines
            the AI's scope and focus.
          </li>
          <li>
            <strong>Implicit Routing:</strong> The system automatically invokes
            the required agent based on context (e.g., Inline Chat inside the
            terminal automatically routes the request to the{" "}
            <code>@terminal</code> Agent). This means you don't always need to
            explicitly type the agent tag.
          </li>
          <li>
            <strong>Efficiency:</strong> The most effective workflow combines
            these factors efficiently. The ultimate goal is to find the fastest
            way to get a reliable result. If you prefer typing commands over
            clicking UI elements, sticking to <strong>Slash Commands</strong>{" "}
            and <strong>Context Variables</strong> is a great strategy.
          </li>
          <li>
            <strong>Personal Preference:</strong> Remember that finding the
            'best' interaction channel is ultimately a matter of{" "}
            <strong>personal workflow preference</strong>; it's perfectly fine
            and even recommended to stick with the methods and settings that you
            find most efficient.
          </li>
        </ol>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          💡 References & Further Reading
        </h3>
        <ul className="list-disc list-inside text-indigo-600">
          <li>
            <a
              href="https://docs.github.com/en/copilot/reference/cheat-sheet"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub Copilot: Chat Sheet Cheat
            </a>
          </li>
        </ul>
      </div>

      {onNext && (
        <div className="flex justify-end pt-4 mt-8">
          <Button
            onClick={onNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center gap-2"
          >
            Go to Module III <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Prompt } from "../Prompt";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Module6ContentProps {
  onNext?: () => void;
}

export const Module6Intro = (
  <>
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      📚 Goal: Learn how to use prepared GitHub Copilot agents and Subagents to
      offload context, delegate focused work, and combine specialized results
      inside a single IDE workflow.
    </h3>
    <p className="text-gray-600 mb-4">
      In the previous module, you worked with Custom Agents and autonomous
      Coding Agent workflows. In this module, you will reuse prepared local
      agents inside VS Code and learn how Subagents isolate repository research,
      implementation, and review inside the same Copilot Chat request.
    </p>
    <p className="text-gray-600">
      Subagents allow Copilot to delegate focused work into isolated contexts
      and return only the useful result back to the main chat thread. This helps
      reduce context overload, improves visibility into multi-step workflows,
      and makes complex requests easier to structure and inspect.
    </p>
  </>
);

export function Module6Content({ onNext }: Module6ContentProps) {
  return (
    <div className="prose prose-indigo max-w-none">

      {/* Version Requirement */}
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-8">
        <h3 className="text-base font-bold text-amber-800 mb-3 flex items-center gap-2">
          ⚠️ Version Requirement
        </h3>
        <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
          <li><strong>VS Code 1.111 or newer</strong></li>
          <li>Latest GitHub Copilot Chat extension, <strong>0.39.0 or newer</strong></li>
          <li><strong><code>chat.customAgentInSubagent.enabled</code></strong> enabled</li>
        </ul>
      </div>

      {/* Why Subagents Matter */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🧠 Why Subagents Matter</h3>
        <p className="text-gray-700 mb-4">
          Subagents are useful when one chat session would otherwise become noisy or overloaded.
          They let Copilot offload focused work into isolated contexts, bring back only the
          relevant result, and keep the main thread easier to understand.
        </p>
        <p className="text-gray-700 mb-3 font-semibold">Typical examples:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Research</strong> → inspect the codebase and identify patterns</li>
          <li><strong>Implementation</strong> → make focused edits</li>
          <li><strong>Review</strong> → validate correctness, maintainability, type hints, and tests</li>
        </ul>
        <div className="bg-indigo-50 border border-indigo-100 rounded-md p-4 mt-4">
          <p className="text-indigo-800 text-sm font-semibold mb-1">⭐ Key Takeaway</p>
          <p className="text-indigo-700 text-sm">
            Subagents let Copilot break one complex request into specialized internal runs while
            preserving one coherent top-level workflow. This lets you offload context, use
            specialized worker agents, experiment with different worker models, and inspect what
            each worker contributed back to the final answer.
          </p>
        </div>
      </div>

      {/* Exercises Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercises</h2>
      <div className="overflow-x-auto border rounded-lg mb-8">
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Enable Subagents</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Open <strong>Copilot Chat</strong>, switch the mode picker to <strong>Agent</strong>, and verify
                the setting <strong>Chat &gt; Agent in Subagent</strong> (<code>chat.customAgentInSubagent.enabled</code>) is enabled.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Review Prepared Agents</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Review the prepared agents in <strong><code>.github/agents</code></strong>:{" "}
                <code>FeatureBuilder</code>, <code>RepoResearcher</code>, <code>Implementer</code>, and{" "}
                <code>Reviewer</code>. Focus on each agent's role, tools, and model configuration.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Use the Coordinator</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                In Copilot Chat, keep the mode picker on <strong>Agent</strong> and select{" "}
                <strong>Feature Builder</strong> from the custom agent picker.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.4</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Run a Structured Task</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <strong>Chat:</strong>
                <Prompt>
                  Build a new endpoint to change task status. Use Repo Researcher as a subagent to
                  locate the FastAPI structure and current status handling. Then use Implementer as a
                  subagent to add the endpoint. Then use Reviewer as a subagent to review correctness,
                  typing, and tests. Finish with a concise summary, risks, and follow-up.
                </Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inspect the Execution</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Expand the collapsed tool calls and identify which subagent ran for each step.
                Note what each one contributed back to the coordinator.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.6</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Review the Reusable Prompt</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Open <strong><code>feature-builder.prompt.md</code></strong> and review how it
                standardizes the same subagent workflow into a reusable slash command.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.7</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Make One Meaningful Extension</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Extend the completed workflow with one improvement. Example ideas: add stronger
                validation, improve the test, refine the response model, or improve the review criteria.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.8</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Explore Freely</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Now go beyond the guided task. Change one worker agent, change one model, add a new
                specialized subagent, or try a new feature request of your own. The goal is to observe
                how orchestration changes result quality, visibility, and workflow feel.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lesson Learned */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Offloading Context Improves AI Collaboration
        </h3>
        <p className="text-gray-700 mb-4">
          Subagents introduce a practical engineering pattern for AI-assisted development:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Offload context</strong> so the main thread stays concise</li>
          <li><strong>Specialize workers</strong> for research, implementation, and review</li>
          <li><strong>Coordinate results</strong> in one final response</li>
          <li><strong>Experiment deliberately</strong> with agent roles, models, and output formats</li>
        </ul>
        <p className="text-gray-600 mt-4 text-sm">
          This is the next step after Agentic Workflow: not only delegating work, but structuring
          that delegation so it is easier to inspect, compare, and improve.
        </p>
      </div>

      {/* Go Further */}
      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-indigo-900 mb-3">💡 Go Further</h3>
        <p className="text-indigo-800 text-sm mb-3">
          After completing the guided workflow, use the prepared agents as a starting point and
          explore your own orchestration style. Try changing:
        </p>
        <ul className="list-disc list-inside space-y-1 text-indigo-700 text-sm">
          <li>one worker agent</li>
          <li>one model</li>
          <li>one prompt structure</li>
          <li>one output format</li>
          <li>or one feature request</li>
        </ul>
        <p className="text-indigo-700 text-sm mt-3">
          The goal is not to memorize one workflow, but to learn how to shape and inspect
          multi-agent collaboration inside Copilot.
        </p>
      </div>

      {/* References */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">💡 References &amp; Further Reading</h3>
        <ul className="list-disc list-inside text-indigo-600 space-y-1">
          <li>
            <a href="https://code.visualstudio.com/docs/copilot/agents/subagents" target="_blank" rel="noreferrer" className="hover:underline">
              VS Code: Subagents
            </a>
          </li>
          <li>
            <a href="https://code.visualstudio.com/blogs/2026/02/05/multi-agent-development" target="_blank" rel="noreferrer" className="hover:underline">
              VS Code Blog: Your Home for Multi-Agent Development
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
            Go to Module VII <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}

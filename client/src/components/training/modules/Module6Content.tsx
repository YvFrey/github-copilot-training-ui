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
      📚 Goal: Master the use of Subagents to streamline workflows
      by isolating tasks, delegating specialized work, and integrating results
      seamlessly.
    </h3>
    <p className="text-gray-600 mb-4">
      In the previous module, you worked with Custom Agents and autonomous
      Coding Agent workflows. In this module, you will reuse local
      agents inside your IDE and learn how Subagents isolate repository research,
      implementation, and review inside the same Copilot Chat request.
    </p>
    <p className="text-gray-600 mb-4">
      Subagents allow Copilot to delegate focused work into isolated contexts
      and return only the useful result back to the main chat thread. This helps
      reduce context overload, improves visibility into multi-step workflows,
      and makes complex requests easier to structure and inspect.
    </p>

    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">🤖 Why Subagents Matter</h3>
    <p className="text-gray-600 mb-4">
      Subagents help manage complexity when a single chat session becomes overloaded or hard to follow. Instead of mixing everything into one conversation, they allow tasks to be handled in isolation and return only the relevant results. They are especially useful for separating concerns, such as:
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
      <li><strong>Research</strong> → exploring the codebase and identifying patterns</li>
      <li><strong>Implementation</strong> → making targeted changes</li>
      <li><strong>Review</strong> → validating correctness, maintainability, typing, and tests</li>
    </ul>
    <p className="text-gray-600 mb-3">
      <strong>🚨 When working on complex tasks, two common issues arise:</strong>
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
      <li>A single, oversized prompt overwhelms the context</li>
      <li>Multiple fragmented messages make the workflow harder to track</li>
    </ul>
    <p className="text-gray-600 mb-3">
      <strong>💡 Subagents address both problems by:</strong>
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li>Maintaining a single coherent workflow without fragmentation</li>
      <li>Offloading detailed context away from the main thread</li>
      <li>Assigning specialized agents to distinct responsibilities</li>
      <li>Allowing experimentation with different worker strategies</li>
      <li>Making it easier to inspect and understand each agent's contribution—especially the final output</li>
    </ul>
  </>
);

export function Module6Content({ onNext }: Module6ContentProps) {
  return (
    <div className="prose prose-indigo max-w-none">

      {/* Exercises Table */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercises</h2>

      {/* Version Requirement */}
      <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg mb-8">
        <p className="text-amber-900 text-sm font-medium">
          ⚠️ Make sure <strong><code>chat.customAgentInSubagent.enabled</code></strong> is enabled.
        </p>
      </div>

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
                <Prompt>Build a new endpoint to change task status.</Prompt>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6.5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Inspect the Execution</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                In the <strong>Copilot Chat window</strong>, expand the collapsed agent calls and
                identify which subagent ran for each step. Note what each one contributed back to
                the coordinator.
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
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Isolate focused work</strong> so the main thread stays concise</li>
          <li><strong>Specialize workers for different tasks</strong>, e.g. research, implementation, and review</li>
          <li><strong>Coordinate results</strong> in one final response</li>
          <li><strong>Experiment deliberately</strong> with agent roles, models, and output formats</li>
        </ul>
        <p className="text-gray-600 mb-3">
          In the previous module, you learned about Agentic Workflows: delegating work to a single
          autonomous agent handling a task end-to-end. Subagents build on this foundation: not only
          delegating work, but structuring that delegation across specialized roles so you can
          inspect, compare, and improve each step independently. This compartmentalization makes
          multi-step workflows transparent and maintainable.
        </p>
        <p className="text-gray-600">
          A practical Copilot-specific takeaway is that subagents help you avoid the usual tradeoff
          between one oversized prompt that overloads context, or many separate messages that
          fragment the workflow. Instead, you can keep one coordinated top-level interaction while
          letting Copilot distribute focused work internally.
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
          <li>Worker agents</li>
          <li>Models</li>
          <li>Prompt structure</li>
          <li>Output format</li>
          <li>Feature request</li>
        </ul>
        <p className="text-indigo-700 text-sm mt-3">
          The goal is not to memorize one workflow, but to learn how to shape and inspect
          multi-agent collaboration.
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
          <li>
            <a href="https://docs.github.com/en/copilot/reference/ai-models/model-comparison" target="_blank" rel="noreferrer" className="hover:underline">
              GitHub Docs: AI Model Comparison
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

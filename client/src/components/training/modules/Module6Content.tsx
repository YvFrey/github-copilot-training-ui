import React from "react";

export function Module6Content() {
  return (
    <div className="prose prose-indigo max-w-none">
      <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Goal: Implement a functional prototype feature based on a high-value, creative use case</h3>
      
      <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Vibe Coding Developer's Framework
        </h3>
        <p className="text-gray-700 mb-4">The Vibe Coding steps are your toolkit for maximizing AI productivity.</p>
        
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Process Guardrails:</strong> You have <strong>full flexibility</strong> to adjust these steps or substitute them based on your own experimentation and experience, but <strong>you must ensure that you guard the process and clearly define milestones</strong> to maintain code quality and risk mitigation.
          </li>
          <li>
            <strong>AI Tool Flexibility:</strong> While this training is designed to strengthen your expertise in <strong>GitHub Copilot</strong>, you have full flexibility on AI tools and pair programmers. Feel free to enhance your workflow by integrating other generative AI tools.
          </li>
        </ul>
      </div>

      <div className="space-y-8 mb-12">
        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="text-xl font-bold text-indigo-700 mb-2">Step I: Vision & Context Architecture</h4>
          <p className="text-gray-600 mb-3">This phase requires <strong>structured thinking</strong> to define the Product Requirements and <strong>Context</strong> to preemptively set standards.</p>
          <p className="text-gray-900"><strong>Goal:</strong> Never start coding until the vision is clear. Break the problem down into the four thinking levels (<strong>Logical, Analytical, Computational, Procedural</strong>). Always provide the AI with the most detail.</p>
        </div>
        
        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="text-xl font-bold text-indigo-700 mb-2">Step II: Standards & Quality Execution</h4>
          <p className="text-gray-600 mb-3">This phase integrates the actual building of the code with risk mitigation.</p>
          <p className="text-gray-900"><strong>Goal:</strong> <strong>Enforce standards</strong> by explicitly instructing the AI on the required <strong>Frameworks</strong> and language standards. <strong>Create a checkpoint</strong> (commit) whenever a major function or test passes, allowing for a quick rollback.</p>
        </div>
        
        <div className="border-l-4 border-indigo-500 pl-6 py-2">
          <h4 className="text-xl font-bold text-indigo-700 mb-2">Step III: Iteration & Self-Correction Loop</h4>
          <p className="text-gray-600 mb-3">This phase is where systematic engineering skills are applied through continuous validation and refinement.</p>
          <p className="text-gray-900"><strong>Goal:</strong> Treat the AI like a mentor. Use the <strong>Debugging</strong> principle by providing the <strong>full error message</strong> and file context to guide the AI to an efficient self-correction.</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🚀 The Challenge: The Integrated Workflow
        </h3>
        <p className="text-gray-600 mb-4">
          <strong>Mission:</strong> <strong>Be creative!</strong> Choose a simple, non-trivial problem to solve that <strong>could be business-related</strong> and implement the core functionality. This is your chance to <strong>dive into a new technology</strong> to truly feel the power of AI assistance.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Your Task:</strong> Guide your chosen AI pair programmer through the entire software development lifecycle to implement your feature.
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Start</strong> by defining and structuring your vision.</li>
          <li><strong>Generate</strong> the code, tests, and documentation, ensuring you fuel the AI with context and rules.</li>
          <li><strong>Finish</strong> by using the debugging principles to correct at least one intentional error and committing your final work.</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Developer Guidance is the Key
        </h3>
        <p className="text-gray-700 mb-4">
          Vibe Coding confirms that <strong>effective engineering thought</strong> is the key to maximizing AI productivity.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Developer's Role:</strong> Your role is to provide constant <strong>guidance</strong>, not code. Be patient, point out the AI's mistakes with full error messages, and guide it to self-correct.</li>
          <li><strong>Context is King:</strong> Always provide the full context because <strong>better input equals better output</strong>.</li>
        </ul>
      </div>
    </div>
  );
}

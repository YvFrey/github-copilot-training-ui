import React from "react";

export const Module6Intro = (
  <>
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      📚 Goal: Implement a functional prototype feature using your AI Coding Assistants to accelerate the entire development cycle.
    </h3>
  </>
);

export function Module6Content() {
  return (
    <div className="prose prose-indigo max-w-none">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Vibe Coding Developer's Framework
        </h3>
        <p className="text-gray-700 mb-4">
          The Vibe Coding steps are your toolkit for maximizing AI productivity.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Process Guardrails:</strong> You can adjust these steps or
            substitute them based on your own experimentation and experience,
            but{" "}
            <strong>
              you must ensure that you guard the process and clearly define
              milestones
            </strong>{" "}
            to maintain code quality and risk mitigation.
          </li>
          <li>
            <strong>AI Tool Flexibility:</strong> While this training is
            designed to strengthen your expertise in{" "}
            <strong>GitHub Copilot</strong>, you have full flexibility on AI
            tools. Feel free to enhance your workflow by integrating
            other generative AI tools.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-indigo-100 -z-10 transform translate-y-4"></div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm relative">
          <div className="absolute -top-4 left-6 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
            Phase I
          </div>
          <h4 className="text-xl font-bold text-indigo-700 mt-2 mb-3">
            Vision & Context Architecture
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            This phase requires <strong>structured thinking</strong> to define
            the Product Requirements and <strong>Context</strong> to
            preemptively set standards.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 text-sm">
            <li>Do not start coding until the vision is clear.</li>
            <li>
              Break the problem down into the four thinking levels: Logical, Analytical, Computational, Procedural.
            </li>
            <li>Always provide the AI with the most detail.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm relative">
          <div className="absolute -top-4 left-6 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
            Phase II
          </div>
          <h4 className="text-xl font-bold text-indigo-700 mt-2 mb-3">
            Standards & Quality Execution
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            This phase integrates the actual building of the code with risk
            mitigation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 text-sm">
            <li>
              Enforce standards by explicitly instructing the AI on the required
              Frameworks and language standards.
            </li>
            <li>
              Create a checkpoint (commit) whenever a major function or test
              passes, allowing for a quick rollback.
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm relative">
          <div className="absolute -top-4 left-6 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
            Phase III
          </div>
          <h4 className="text-xl font-bold text-indigo-700 mt-2 mb-3">
            Iteration & Self-Correction Loop
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            This phase is where systematic engineering skills are applied
            through continuous validation and refinement.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-900 text-sm">
            <li>Treat the AI like a mentor.</li>
            <li>
              Use the Debugging principle by providing the full error message and file context to guide the
              AI to an efficient self-correction.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🚀 The Challenge: The Integrated Workflow
        </h3>
        <p className="text-gray-600 mb-4">
          <strong>Mission:</strong> <strong>Be creative!</strong> Choose a
          business-related problem to solve and implement the core
          functionality. This is your chance to{" "}
          <strong>dive into a new technology</strong> to truly feel the power of
          AI assistance. Guide your chosen AI pair programmer through the
          entire software development lifecycle to implement your feature.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Your Task:</strong> Guide your chosen AI pair programmer
          through the entire software development lifecycle to implement your
          feature.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <strong>Start</strong> by defining and structuring your vision.
          </li>
          <li>
            <strong>Generate</strong> the code, tests, and documentation,
            ensuring you fuel the AI with context and rules.
          </li>
          <li>
            <strong>Finish</strong> by using the debugging principles to correct
            at least one intentional error and committing your final work.
          </li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Developer Guidance is the Key
        </h3>
        <p className="text-gray-700 mb-4">
          Vibe Coding confirms that{" "}
          <strong>effective engineering thought</strong> is the key to
          maximizing AI productivity.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Developer's Role:</strong> Your role is to provide constant{" "}
            <strong>guidance</strong>, not code. Be patient, point out the AI's
            mistakes with full error messages, and guide it to self-correct.
          </li>
          <li>
            <strong>Context is King:</strong> Always provide the full context
            because <strong>better input equals better output</strong>.
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          💡 References & Further Reading
        </h3>
        <ul className="list-disc list-inside text-indigo-600">
          <li>
            <a
              href="https://replit.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Replit
            </a>
          </li>
          <li>
            <a
              href="https://github.blog/ai-and-ml/github-copilot/a-guide-to-deciding-what-ai-model-to-use-in-github-copilot/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              A guide to deciding what AI model to use in GitHub Copilot
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

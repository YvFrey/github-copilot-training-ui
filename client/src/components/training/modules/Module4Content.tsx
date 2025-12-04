import React from "react";
import { Prompt } from "../Prompt";

export function Module4Content() {
  return (
    <div className="prose prose-indigo max-w-none">
      <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Goal: Integrate Copilot into the end-to-end development loop</h3>
      
      <p className="text-gray-600 mb-4">
        Generate tests, explore unit and integration coverage, and ensure code adheres to project standards.
      </p>
      
      <p className="text-gray-600 mb-6">
        Copilot can leverage <strong>global instruction files</strong> and <strong>custom prompts</strong> to understand project structure, naming conventions, and preferred frameworks. By refining instructions and prompts, you make Copilot smarter and reduce manual corrections when generating tests.
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4.1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Test Generation</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Select any function or endpoint.<br/>
                2. Use <strong>Inline Chat</strong> and type: <Prompt>/tests</Prompt><br/>
                3. Observe the initial suggestions and where Copilot proposes to place the test file.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4.2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Enhance Instructions</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                1. Update the <strong>global instruction file</strong> to guide Copilot for test generation. Include the test framework (e.g., <code>pytest</code>), naming conventions for test files and functions, preferred folder structure for tests, any required fixtures or templates. Use Copilot to enhance the instruction file!<br/>
                2. Rerun <Prompt>/tests</Prompt> on a function and observe how your instructions influence the generated output.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4.3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Challenge: Full Codebase Test Generation</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Generate all unit and integration tests for the app using your updated instruction file. Ensure all tests follow your defined rules.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4.4</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Optional: Custom Prompt</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                Create a <code>.prompt.md</code> file to automate a repetitive test-generation task (e.g., generating boilerplate for a specific type of endpoint). Test it on a sample function.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧠 Lesson Learned: Context-Driven Test Generation
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Copilot relies on <strong>instruction files</strong> to understand your project’s rules and structure.</li>
          <li><strong>Enhancing instructions</strong> ensures AI-generated tests are consistent, correctly placed, and follow naming conventions, fixtures, and framework standards.</li>
          <li><strong>Custom prompts</strong> let you automate repetitive workflows and enforce project-specific patterns.</li>
          <li><strong>Prompt precision matters:</strong> Even with instruction files, carefully worded prompts avoid scope creep or unintended outputs.</li>
        </ul>
      </div>
    </div>
  );
}

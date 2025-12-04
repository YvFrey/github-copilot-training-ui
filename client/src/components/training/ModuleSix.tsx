import React from "react";
import { Sparkles, Brain, Code2, Target } from "lucide-react";

interface ModuleSixProps {
  onNext?: () => void;
}

export function ModuleSix({ onNext }: ModuleSixProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="space-y-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Module VI: Vibe Coding — The Integrated Exploration Challenge</h2>
      </div>

      {/* Goal */}
      <div className="bg-indigo-600 rounded-xl p-8 border border-indigo-500 flex items-start gap-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="p-3 bg-white/20 rounded-xl shadow-sm text-white backdrop-blur-sm">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Goal</h3>
          <p className="text-indigo-100 text-lg leading-relaxed">
             Implement a functional prototype feature based on a high-value, creative use case.
          </p>
        </div>
      </div>

      {/* Framework */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
           <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            Vibe Coding Developer's Framework
           </h3>
        </div>
        
        {[
          {
            step: "I",
            title: "Vision & Context Architecture",
            desc: "Structured thinking to define Requirements and Context.",
            detail: "Goal: Never start coding until the vision is clear. Break the problem down into the four thinking levels (Logical, Analytical, Computational, Procedural)."
          },
          {
            step: "II",
            title: "Standards & Quality Execution",
            desc: "Integrates the actual building of the code with risk mitigation.",
            detail: "Goal: Enforce standards by explicitly instructing the AI on the required Frameworks. Create a checkpoint (commit) whenever a major function or test passes."
          },
          {
            step: "III",
            title: "Iteration & Self-Correction Loop",
            desc: "Systematic engineering skills applied through continuous validation.",
            detail: "Goal: Treat the AI like a mentor. Use the Debugging principle by providing the full error message and file context to guide the AI to an efficient self-correction."
          }
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Phase {card.step}</div>
            <h4 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h4>
            <p className="text-gray-600 text-sm mb-4 flex-1">{card.desc}</p>
            <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 italic">
              {card.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Challenge Scenario */}
      <div className="bg-gray-900 rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
         
         <div className="flex items-center gap-3 mb-8 relative z-10">
           <Target className="w-8 h-8 text-indigo-400" />
           <h3 className="text-2xl font-bold">The Challenge Scenario: Creative Exploration & New Tech</h3>
         </div>
         
         <div className="grid md:grid-cols-2 gap-8 relative z-10">
           <div className="bg-white/5 rounded-xl p-6 border border-white/10">
             <h4 className="text-indigo-300 font-semibold mb-3 uppercase tracking-wide text-sm">Mission</h4>
             <p className="text-gray-300 leading-relaxed">
               <strong>Be creative!</strong> Choose a simple, non-trivial problem to solve that <strong>could be business-related</strong> and implement the core functionality from scratch. This is your chance to <strong>dive into a new technology</strong> to truly feel the power of AI assistance.
             </p>
           </div>
           
           <div className="bg-white/5 rounded-xl p-6 border border-white/10">
             <h4 className="text-indigo-300 font-semibold mb-3 uppercase tracking-wide text-sm">Tech Stack</h4>
             <p className="text-gray-300 leading-relaxed">
               You have <strong>full flexibility</strong>. Choose any language you want, or <strong>challenge yourself</strong> by picking one you are <strong>least familiar with</strong> to see the full benefit of Vibe Coding.
             </p>
           </div>
         </div>
      </div>

      {/* Exercises */}
       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-gray-900" />
          Exercises: The Integrated Workflow (Self-Directed)
        </h3>
        
        <p className="text-gray-600 mb-8 text-lg">
          <strong>Your Task:</strong> Guide your chosen AI pair programmer through the entire software development lifecycle to implement your feature.
        </p>
        
        <div className="space-y-4">
          {[
            "Start by defining and structuring your vision.",
            "Generate the code, tests, and documentation, ensuring you fuel the AI with context and rules.",
            "Finish by using the debugging principles to correct at least one intentional error and committing your final work."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Learned */}
      <div className="bg-indigo-900 rounded-xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Lesson Learned: Developer Guidance is the Key</h3>
        <p className="text-indigo-200 max-w-3xl mx-auto text-lg mb-8 relative z-10">
          Vibe Coding confirms that <strong>effective engineering thought</strong> is the key to maximizing AI productivity.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left relative z-10">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
            <h4 className="font-bold text-white mb-2">Developer's Role</h4>
            <p className="text-indigo-100 text-sm">Your role is to provide constant <strong>guidance</strong>, not code. Be patient, point out the AI's mistakes with full error messages, and guide it to self-correct.</p>
          </div>
           <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
            <h4 className="font-bold text-white mb-2">Context is King</h4>
            <p className="text-indigo-100 text-sm">Always provide the full context because <strong>better input equals better output</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

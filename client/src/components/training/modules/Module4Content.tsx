import React from "react";
import { Clock, ArrowRight } from "lucide-react";

export function Module4Content() {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center p-6 bg-indigo-50 rounded-full mb-6">
        <Clock className="w-12 h-12 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
      <p className="text-gray-500 mb-8">Module IV content is currently being developed.</p>
      
      <div className="max-w-md mx-auto bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <p className="text-gray-600">
          This module will cover automating tests and policy checks using the testing framework.
        </p>
      </div>
    </div>
  );
}

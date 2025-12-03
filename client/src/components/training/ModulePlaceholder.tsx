import React from "react";
import { Lock, Clock, ArrowRight } from "lucide-react";

interface ModulePlaceholderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export function ModulePlaceholder({ title, subtitle, icon }: ModulePlaceholderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
      <div className="inline-flex items-center justify-center p-6 bg-gray-50 rounded-full mb-6">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-xl text-gray-500 mb-8">{subtitle}</p>
      
      <div className="max-w-md mx-auto bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex items-center justify-center gap-2 text-indigo-800 font-semibold mb-2">
          <Clock className="w-5 h-5" />
          <span>Coming Soon</span>
        </div>
        <p className="text-indigo-600 mb-6">This module content is being prepared. Please ensure you have completed the prerequisites.</p>
        
        <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow transition-all duration-200">
          Start Module <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-50 rounded-lg animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}

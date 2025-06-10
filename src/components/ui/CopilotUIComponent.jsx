'use client';
import { Paperclip, Mic, Send, ChevronDown, FileText, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const CopilotUIComponent = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const typewriterTexts = [
      "How can I optimize this React component?",
      "Explain this JavaScript function...",
      "Help me debug this code issue",
      "Generate a responsive CSS layout",
      "Create a REST API endpoint",
      "Write unit tests for this function"
    ];
  
    useEffect(() => {
      const currentPhrase = typewriterTexts[currentIndex];
      
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }, [currentText, currentIndex, typewriterTexts]);
  
    return (
      <div className="w-full max-w-4xl mx-auto bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d30] border-b border-gray-700">
          {/* Left Side - Add Context Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#3c3c3c] hover:bg-[#464647] rounded text-gray-300 text-sm transition-colors">
            <Paperclip size={14} />
            <span>Add Context...</span>
          </button>
  
          {/* Center - Current File Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0e639c] rounded text-white text-sm">
            <FileText size={14} />
            <span className="font-medium">autogen-config.js</span>
            <span className="text-xs text-blue-200">Current File</span>
          </div>
  
          {/* Right Side - Icons */}
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-[#3c3c3c] rounded text-gray-400 hover:text-gray-300 transition-colors">
              <Globe size={16} />
            </button>
            <button className="p-1.5 hover:bg-[#3c3c3c] rounded text-gray-400 hover:text-gray-300 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
  
        {/* Input Area */}
        <div className="bg-[#252526] p-4">
          <div className="flex items-center gap-3">
            {/* @ Symbol */}
            <button className="text-gray-400 hover:text-gray-300 transition-colors">
              <span className="text-lg font-medium">@</span>
            </button>
  
            {/* Microphone Icon */}
            <button className="text-gray-400 hover:text-gray-300 transition-colors">
              <Mic size={18} />
            </button>
  
            {/* Input Field with Typewriter Effect */}
            <div className="flex-1 relative">
              <div className="bg-[#3c3c3c] rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                <span className="text-gray-300">
                  {currentText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </div>
            </div>
  
            {/* Model Selector */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#3c3c3c] rounded-lg text-gray-300 text-sm">
              <span>Ask</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span className="font-medium">AutoGen AI</span>
              <ChevronDown size={14} />
            </div>
  
            {/* Send Button */}
            <motion.button 
              className="p-2.5 bg-[#0e639c] hover:bg-[#1177bb] rounded-lg text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} />
            </motion.button>
          </div>
  
          {/* Footer Text */}
          <div className="text-xs text-gray-500 mt-3 text-center">
            AutoGen AI can help with deployment, scaling, and infrastructure optimization.
          </div>
        </div>
      </div>
    );
  };

  export default CopilotUIComponent;
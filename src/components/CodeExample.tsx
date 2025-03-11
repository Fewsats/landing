import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExampleProps {
  code: string;
  language: string;
  filename: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ code, language, filename }) => {
  // More robust check for valid code
  if (!code || typeof code !== 'string' || code === '[object Object]') {
    // Return a loading state
    return (
      <div className="bg-neutral-dark rounded-xl p-6 shadow-lg animate-item" style={{ animationDelay: '450ms' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs text-neutral-light">{filename}</div>
        </div>
        <div className="text-neutral-light text-sm p-4">Loading code example...</div>
      </div>
    );
  }
  
  // Ensure code is always a string and handle edge cases
  const codeString = typeof code === 'string' ? code : 
                    (code && typeof code === 'object') ? JSON.stringify(code, null, 2) : 
                    '// No code available';
  
  return (
    <div className="bg-neutral-dark rounded-xl p-6 shadow-lg animate-item" style={{ animationDelay: '450ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-neutral-light">{filename}</div>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{ 
          background: 'transparent',
          padding: '0',
          margin: '0',
          borderRadius: '0.5rem',
          fontSize: '0.875rem'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeExample; 
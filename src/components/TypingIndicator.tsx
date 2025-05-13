import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex mt-4 mb-2">
      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm animate-fade-in max-w-[80%]">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
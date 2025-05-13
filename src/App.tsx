import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import useStore from './store/store';
import { addInitialMessages } from './utils/chatUtils';

function App() {
  const { initialized, setInitialized } = useStore();

  useEffect(() => {
    if (!initialized) {
      // Initialize the chat with welcome messages
      addInitialMessages();
      setInitialized(true);
    }
  }, [initialized, setInitialized]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary-600" />
            <h1 className="text-xl font-semibold text-gray-900">Event Buddy</h1>
          </div>
          <div className="text-sm text-primary-600 font-medium px-3 py-1 rounded-full bg-primary-50">
            MVP
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
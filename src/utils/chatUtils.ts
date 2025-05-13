import useStore from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types/chat';

// Add initial welcome messages to simulate a conversation start
export const addInitialMessages = () => {
  const store = useStore.getState();
  
  const messages: Message[] = [
    {
      id: uuidv4(),
      text: "👋 Hi there! I'm Event Buddy, your personal AI assistant for discovering events that match your preferences.",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
    },
    {
      id: uuidv4(),
      text: "I can help you find events based on your interests, location, and availability. I'll also notify you when new events that match your preferences are happening in your city.",
      sender: 'bot',
      timestamp: new Date(Date.now() + 1000),
      type: 'text',
    },
    {
      id: uuidv4(),
      text: "Tell me what kind of events you're interested in, or ask me to show you popular events in your area. You can also set up your preferences to get personalized recommendations.",
      sender: 'bot',
      timestamp: new Date(Date.now() + 2000),
      type: 'text',
    },
  ];
  
  // Add each message with a slight delay to simulate typing
  messages.forEach((message, index) => {
    setTimeout(() => {
      store.addMessage(message);
    }, index * 1000);
  });
};

// Generate a typing indicator effect that lasts for the specified duration
export const simulateTyping = async (duration: number = 1500): Promise<void> => {
  const store = useStore.getState();
  store.setTyping(true);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      store.setTyping(false);
      resolve();
    }, duration);
  });
};
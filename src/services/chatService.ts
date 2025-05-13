import useStore from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import { ChatRequest, ChatResponse, Message } from '../types/chat';
import { UserPreference, Event } from '../types/events';
import { mockProcessMessage } from './mockLangChainService';
import { simulateTyping } from '../utils/chatUtils';

// Process a message from the user and add both the user message and bot response to the chat
export const processUserMessage = async (text: string): Promise<void> => {
  const store = useStore.getState();
  
  // Add user message to the chat
  const userMessage: Message = {
    id: uuidv4(),
    text,
    sender: 'user',
    timestamp: new Date(),
    type: 'text'
  };
  store.addMessage(userMessage);
  
  // Prepare the request for processing
  const request: ChatRequest = {
    text,
    userId: 'user-1', // In a real app, this would be a real user ID
    preferences: store.userPreferences
  };
  
  // Simulate typing indicator
  await simulateTyping(1500 + Math.random() * 1000);
  
  // Process the message with LangChain (mock for now)
  const response = await mockProcessMessage(request);
  
  // Add bot response to the chat
  const botMessage: Message = {
    id: uuidv4(),
    text: response.text,
    sender: 'bot',
    timestamp: new Date(),
    type: response.type,
    events: response.events,
    event: response.event,
    preferences: response.preferences
  };
  
  store.addMessage(botMessage);
};

// Process and save user preferences
export const processPreferences = async (preferences: Partial<UserPreference>): Promise<void> => {
  const store = useStore.getState();
  
  // Simulate typing
  await simulateTyping(1000);
  
  // Add confirmation message
  const botMessage: Message = {
    id: uuidv4(),
    text: "Thanks for sharing your preferences! I'll use these to find events that match your interests. I'll notify you when relevant events are happening in your area.",
    sender: 'bot',
    timestamp: new Date(),
    type: 'text'
  };
  
  store.addMessage(botMessage);
  
  // In a real app, this would send the preferences to a backend service
  // to be stored and used for event recommendations
};

// Get recommended events based on user preferences
export const getRecommendedEvents = async (): Promise<Event[]> => {
  // In a real app, this would query a recommendation service
  // For now, we'll return mock data
  const store = useStore.getState();
  const mockEvents = await import('./mockData').then(module => module.mockEvents);
  
  // Filter events based on user preferences
  // This is a simplified version of what would happen in a real recommendation engine
  const { categories, location, priceRange } = store.userPreferences;
  
  if (categories.length === 0) {
    return mockEvents.slice(0, 5); // Return top 5 events if no categories selected
  }
  
  return mockEvents
    .filter(event => 
      categories.includes(event.category) &&
      event.price.min <= priceRange.max &&
      (!location || event.location.city.toLowerCase().includes(location.toLowerCase()))
    )
    .slice(0, 5);
};
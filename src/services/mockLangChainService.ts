import { ChatRequest, ChatResponse } from '../types/chat';
import { mockEvents } from './mockData';
import { UserPreference } from '../types/events';

// This file mocks what would normally be handled by LangChain in a real implementation
// It simulates natural language understanding and structured response generation

// Simple keyword-based intent detection
// In a real app, this would use LangChain and a proper LLM for NLU
const detectIntent = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('preferences') || lowerText.includes('settings') || lowerText.includes('profile')) {
    return 'preferences';
  }
  
  if (lowerText.includes('detail') || lowerText.includes('more info') || lowerText.includes('about event')) {
    return 'event_detail';
  }
  
  if (lowerText.includes('event') || lowerText.includes('show me') || lowerText.includes('find') || 
      lowerText.includes('recommend') || lowerText.includes('suggestion')) {
    return 'event_list';
  }
  
  return 'general';
};

// Extract event types from text
// In a real app, this would use an LLM to extract entities
const extractEventTypes = (text: string): string[] => {
  const eventTypes = [
    'music', 'concert', 'festival', 'art', 'exhibition', 'food', 'dining',
    'sports', 'game', 'tech', 'conference', 'business', 'networking',
    'community', 'education', 'workshop', 'film', 'movie', 'health', 'fitness',
    'hobby', 'lifestyle', 'nightlife', 'party'
  ];
  
  const lowerText = text.toLowerCase();
  return eventTypes.filter(type => lowerText.includes(type));
};

// Extract location from text
// In a real app, this would use an LLM to extract entities
const extractLocation = (text: string): string | null => {
  const lowerText = text.toLowerCase();
  const cities = ['new york', 'san francisco', 'los angeles', 'chicago', 'miami', 'austin', 'seattle'];
  
  for (const city of cities) {
    if (lowerText.includes(city)) {
      return city;
    }
  }
  
  return null;
};

// Mock the LangChain processing
export const mockProcessMessage = async (request: ChatRequest): Promise<ChatResponse> => {
  const { text, preferences } = request;
  const intent = detectIntent(text);
  
  // Add a small delay to simulate processing
  await new Promise(resolve => setTimeout(resolve, 500));
  
  switch (intent) {
    case 'preferences':
      return {
        text: "Let's update your event preferences. What kinds of events are you interested in?",
        type: 'preference-capture',
        preferences: preferences || generateDefaultPreferences()
      };
      
    case 'event_list': {
      const eventTypes = extractEventTypes(text);
      const location = extractLocation(text) || preferences?.location || 'your area';
      
      // Filter events based on extracted information
      let filteredEvents = [...mockEvents];
      
      if (eventTypes.length > 0) {
        // Simple filtering logic - in a real app, this would be more sophisticated
        filteredEvents = filteredEvents.filter(event => 
          eventTypes.some(type => 
            event.category.includes(type) || 
            event.tags.some(tag => tag.includes(type)) ||
            event.title.toLowerCase().includes(type) ||
            event.description.toLowerCase().includes(type)
          )
        );
      }
      
      if (filteredEvents.length === 0) {
        return {
          text: `I couldn't find any ${eventTypes.join(', ')} events in ${location}. Would you like to see some popular events instead?`,
          type: 'text'
        };
      }
      
      return {
        text: `Here are some ${eventTypes.length > 0 ? eventTypes.join(', ') : 'popular'} events in ${location}:`,
        type: 'event-list',
        events: filteredEvents.slice(0, 4)
      };
    }
      
    case 'event_detail':
      // In a real app, we'd extract the specific event being asked about
      // For now, just return the first event
      return {
        text: "Here's more information about this event:",
        type: 'event-detail',
        event: mockEvents[0]
      };
      
    default:
      if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
        return {
          text: "Hello! I'm your Event Buddy. I can help you find events based on your interests. What kind of events are you looking for?",
          type: 'text'
        };
      }
      
      if (text.toLowerCase().includes('thank')) {
        return {
          text: "You're welcome! Is there anything else you'd like to know about events in your area?",
          type: 'text'
        };
      }
      
      return {
        text: "I can help you discover events that match your interests. You can ask me to find specific types of events, set your preferences, or browse popular events in your area.",
        type: 'text'
      };
  }
};

// Generate default preferences for new users
const generateDefaultPreferences = (): UserPreference => {
  return {
    categories: [],
    location: '',
    distance: 10,
    dateRange: { start: null, end: null },
    priceRange: { min: 0, max: 200 },
    notificationEnabled: true
  };
};
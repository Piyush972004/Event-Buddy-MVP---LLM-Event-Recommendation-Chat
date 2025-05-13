import { create } from 'zustand';
import { Message } from '../types/chat';
import { UserPreference, Event } from '../types/events';

interface StoreState {
  messages: Message[];
  isTyping: boolean;
  userPreferences: UserPreference;
  savedEvents: Event[];
  initialized: boolean;
  setInitialized: (initialized: boolean) => void;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
  updateUserPreferences: (preferences: Partial<UserPreference>) => void;
  saveEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
}

const useStore = create<StoreState>((set) => ({
  messages: [],
  isTyping: false,
  userPreferences: {
    categories: [],
    location: '',
    distance: 10,
    dateRange: { start: null, end: null },
    priceRange: { min: 0, max: 1000 },
    notificationEnabled: true,
  },
  savedEvents: [],
  initialized: false,
  setInitialized: (initialized) => set({ initialized }),
  addMessage: (message) => 
    set((state) => ({ messages: [...state.messages, message] })),
  setTyping: (isTyping) => set({ isTyping }),
  updateUserPreferences: (preferences) => 
    set((state) => ({ 
      userPreferences: { ...state.userPreferences, ...preferences } 
    })),
  saveEvent: (event) => 
    set((state) => ({ savedEvents: [...state.savedEvents, event] })),
  removeEvent: (eventId) => 
    set((state) => ({ 
      savedEvents: state.savedEvents.filter(event => event.id !== eventId) 
    })),
}));

export default useStore;
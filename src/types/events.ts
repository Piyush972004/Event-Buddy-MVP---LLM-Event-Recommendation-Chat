export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  location: {
    name: string;
    address: string;
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  date: {
    start: Date;
    end?: Date;
  };
  price: {
    min: number;
    max?: number;
    currency: string;
  };
  image: string;
  organizer: string;
  url?: string;
  tags: string[];
}

export type EventCategory = 
  | 'music'
  | 'arts'
  | 'food'
  | 'sports'
  | 'tech'
  | 'business'
  | 'community'
  | 'education'
  | 'film'
  | 'health'
  | 'hobbies'
  | 'lifestyle'
  | 'nightlife';

export interface UserPreference {
  categories: EventCategory[];
  location: string;
  distance: number;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  priceRange: {
    min: number;
    max: number;
  };
  notificationEnabled: boolean;
}

export interface Notification {
  id: string;
  eventId: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
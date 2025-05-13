export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'event-list' | 'event-detail' | 'preference-capture';
  events?: any[];
  event?: any;
  preferences?: any;
}

export interface ChatRequest {
  text: string;
  userId: string;
  preferences?: any;
}

export interface ChatResponse {
  text: string;
  type: 'text' | 'event-list' | 'event-detail' | 'preference-capture';
  events?: any[];
  event?: any;
  preferences?: any;
}
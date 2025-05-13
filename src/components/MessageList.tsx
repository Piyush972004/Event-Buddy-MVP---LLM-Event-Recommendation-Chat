import React from 'react';
import useStore from '../store/store';
import { format } from 'date-fns';
import EventList from './EventList';
import EventDetail from './EventDetail';
import PreferenceCapture from './PreferenceCapture';
import { cn } from '../utils/cn';

const MessageList: React.FC = () => {
  const { messages } = useStore();

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={cn("flex", message.sender === 'user' ? 'justify-end' : 'justify-start')}
        >
          <div className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
            {message.type === 'text' && <p>{message.text}</p>}
            
            {message.type === 'event-list' && message.events && (
              <div className="space-y-2">
                <p className="mb-3">{message.text}</p>
                <EventList events={message.events} />
              </div>
            )}
            
            {message.type === 'event-detail' && message.event && (
              <div className="space-y-2">
                <p className="mb-3">{message.text}</p>
                <EventDetail event={message.event} />
              </div>
            )}
            
            {message.type === 'preference-capture' && message.preferences && (
              <div className="space-y-2">
                <p className="mb-3">{message.text}</p>
                <PreferenceCapture preferences={message.preferences} />
              </div>
            )}
            
            <div className="text-xs opacity-70 mt-1">
              {format(message.timestamp, 'h:mm a')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
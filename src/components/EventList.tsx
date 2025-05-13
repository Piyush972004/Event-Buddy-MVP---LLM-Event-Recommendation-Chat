import React from 'react';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';
import { Event } from '../types/events';
import { format } from 'date-fns';
import { formatPrice } from '../utils/formatters';
import { getCategoryIcon } from '../utils/categoryIcons';

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  if (!events.length) {
    return <p className="text-gray-500">No events found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-4 animate-slide-up">
      {events.map((event) => (
        <div key={event.id} className="event-card overflow-hidden">
          <div className="relative">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-32 object-cover"
            />
            <div className="absolute top-2 right-2 badge bg-white text-gray-800">
              {formatPrice(event.price.min, event.price.currency)}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                {React.createElement(getCategoryIcon(event.category), { 
                  size: 18, 
                  className: "text-primary-600" 
                })}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{event.title}</h3>
                
                <div className="mt-1 text-xs text-gray-600 space-y-1">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{format(event.date.start, 'EEE, MMM d, yyyy')}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{format(event.date.start, 'h:mm a')}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span className="truncate">{event.location.name}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-1">
              {event.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="badge bg-primary-50 text-primary-700 flex items-center gap-1">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
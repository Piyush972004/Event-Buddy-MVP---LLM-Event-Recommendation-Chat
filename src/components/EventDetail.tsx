import React from 'react';
import { Calendar, Clock, MapPin, Tag, User, ExternalLink, Bookmark } from 'lucide-react';
import { Event } from '../types/events';
import { format } from 'date-fns';
import { formatPrice } from '../utils/formatters';
import useStore from '../store/store';
import toast from 'react-hot-toast';

interface EventDetailProps {
  event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const { savedEvents, saveEvent, removeEvent } = useStore();
  const isEventSaved = savedEvents.some(e => e.id === event.id);

  const handleSaveEvent = () => {
    if (isEventSaved) {
      removeEvent(event.id);
      toast.success('Event removed from saved events');
    } else {
      saveEvent(event);
      toast.success('Event saved! You will be notified when it\'s coming up.');
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md animate-slide-up">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span>{format(event.date.start, 'EEEE, MMMM d, yyyy')}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="h-5 w-5 text-primary-600" />
            <span>{format(event.date.start, 'h:mm a')} - {event.date.end ? format(event.date.end, 'h:mm a') : 'TBD'}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="h-5 w-5 text-primary-600" />
            <div>
              <div>{event.location.name}</div>
              <div className="text-sm text-gray-500">{event.location.address}, {event.location.city}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <User className="h-5 w-5 text-primary-600" />
            <span>{event.organizer}</span>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg text-gray-800">
            <h3 className="font-medium mb-1">About this event</h3>
            <p className="text-sm">{event.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {event.tags.map((tag) => (
              <span key={tag} className="badge bg-primary-50 text-primary-700 flex items-center gap-1">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between gap-2 mt-4">
            <div className="text-lg font-medium text-gray-900">
              {formatPrice(event.price.min, event.price.currency)}
              {event.price.max && event.price.max > event.price.min && 
                <span className="text-sm text-gray-500 ml-1">- {formatPrice(event.price.max, event.price.currency)}</span>
              }
            </div>
            
            <div className="flex gap-2">
              <button 
                className="button-secondary"
                onClick={handleSaveEvent}
              >
                <Bookmark 
                  className={`h-4 w-4 mr-1 ${isEventSaved ? 'fill-primary-600 text-primary-600' : ''}`} 
                />
                {isEventSaved ? 'Saved' : 'Save'}
              </button>
              
              {event.url && (
                <a 
                  href={event.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Details
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Bell } from 'lucide-react';
import { UserPreference, EventCategory } from '../types/events';
import useStore from '../store/store';
import { processPreferences } from '../services/chatService';
import { cn } from '../utils/cn';

interface PreferenceCaptureProps {
  preferences: Partial<UserPreference>;
}

const categoryOptions: { value: EventCategory; label: string }[] = [
  { value: 'music', label: 'Music' },
  { value: 'arts', label: 'Arts & Culture' },
  { value: 'food', label: 'Food & Drink' },
  { value: 'sports', label: 'Sports' },
  { value: 'tech', label: 'Technology' },
  { value: 'business', label: 'Business' },
  { value: 'community', label: 'Community' },
  { value: 'education', label: 'Education' },
  { value: 'film', label: 'Film & Media' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'hobbies', label: 'Hobbies' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'nightlife', label: 'Nightlife' },
];

const PreferenceCapture: React.FC<PreferenceCaptureProps> = ({ preferences: initialPrefs }) => {
  const { userPreferences, updateUserPreferences } = useStore();
  const [prefs, setPrefs] = useState<Partial<UserPreference>>({
    ...userPreferences,
    ...initialPrefs,
  });

  const handleCategoryToggle = (category: EventCategory) => {
    setPrefs((prev) => {
      const categories = prev.categories || [];
      const newCategories = categories.includes(category)
        ? categories.filter((c) => c !== category)
        : [...categories, category];
      
      return { ...prev, categories: newCategories };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setPrefs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    updateUserPreferences(prefs);
    processPreferences(prefs);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 animate-slide-up">
      <h3 className="font-medium text-gray-900 mb-3">Your Event Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What type of events are you interested in?
          </label>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryToggle(category.value)}
                className={cn(
                  "badge transition-colors",
                  prefs.categories?.includes(category.value)
                    ? "bg-primary-100 text-primary-800 border border-primary-300"
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <MapPin className="h-4 w-4 mr-1 text-primary-600" />
            Location
          </label>
          <input
            type="text"
            name="location"
            value={prefs.location || ''}
            onChange={handleChange}
            placeholder="City, state or zip code"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Calendar className="h-4 w-4 mr-1 text-primary-600" />
            Time Frame
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              name="dateStart"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <input
              type="date"
              name="dateEnd"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <DollarSign className="h-4 w-4 mr-1 text-primary-600" />
            Price Range
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              name="priceMax"
              value={prefs.priceRange?.max || 100}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <span className="text-sm font-medium">
              ${prefs.priceRange?.max || 100}
            </span>
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            name="notificationEnabled"
            checked={prefs.notificationEnabled !== false}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700 flex items-center">
            <Bell className="h-4 w-4 mr-1 text-primary-600" />
            Notify me about new events
          </label>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="button-primary w-full mt-2"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default PreferenceCapture;
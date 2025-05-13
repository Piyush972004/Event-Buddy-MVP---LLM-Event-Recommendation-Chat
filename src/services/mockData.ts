import { Event } from '../types/events';
import { addDays, addHours, setHours } from 'date-fns';

// Helper to generate future dates
const futureDate = (days: number, hours = 0): Date => {
  const date = addDays(new Date(), days);
  return setHours(date, hours);
};

// Mock events data
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Jazz Festival',
    description: 'Join us for the city\'s premier jazz festival featuring local and international artists. Three days of amazing music, food, and culture in the heart of downtown.',
    category: 'music',
    location: {
      name: 'Central Park',
      address: '123 Park Avenue',
      city: 'New York',
      coordinates: { lat: 40.7829, lng: -73.9654 }
    },
    date: {
      start: futureDate(3, 17),
      end: futureDate(3, 23)
    },
    price: {
      min: 45,
      max: 120,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    organizer: 'City Arts Council',
    url: 'https://example.com/events/jazz-festival',
    tags: ['jazz', 'music', 'festival', 'food', 'drinks']
  },
  {
    id: '2',
    title: 'Tech Innovation Summit',
    description: 'The annual Tech Innovation Summit brings together industry leaders, startups, and developers to share insights on the latest in AI, blockchain, and more.',
    category: 'tech',
    location: {
      name: 'Convention Center',
      address: '456 Tech Blvd',
      city: 'San Francisco',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    date: {
      start: futureDate(7, 9),
      end: futureDate(7, 17)
    },
    price: {
      min: 199,
      max: 499,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    organizer: 'TechFuture Inc.',
    url: 'https://example.com/events/tech-summit',
    tags: ['technology', 'AI', 'blockchain', 'innovation', 'networking']
  },
  {
    id: '3',
    title: 'Farm-to-Table Dinner Experience',
    description: 'Experience an exclusive farm-to-table dinner with locally sourced ingredients prepared by award-winning Chef Maria Rodriguez.',
    category: 'food',
    location: {
      name: 'Green Acres Farm',
      address: '789 Rural Route',
      city: 'Austin',
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    date: {
      start: futureDate(2, 18),
      end: futureDate(2, 21)
    },
    price: {
      min: 85,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg',
    organizer: 'Local Eats Collective',
    url: 'https://example.com/events/farm-dinner',
    tags: ['food', 'dinner', 'farm-to-table', 'culinary', 'organic']
  },
  {
    id: '4',
    title: 'Modern Art Exhibition: "Reflections"',
    description: 'Explore contemporary art through the lens of reflection and perception. Featuring works from over 20 international artists.',
    category: 'arts',
    location: {
      name: 'Metropolitan Art Gallery',
      address: '101 Museum Way',
      city: 'Chicago',
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    date: {
      start: futureDate(5, 10),
      end: futureDate(25, 18)
    },
    price: {
      min: 15,
      max: 25,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg',
    organizer: 'Metropolitan Art Association',
    url: 'https://example.com/events/reflections-art',
    tags: ['art', 'exhibition', 'modern', 'contemporary', 'culture']
  },
  {
    id: '5',
    title: 'Marathon for Charity',
    description: 'Run for a cause! Join thousands of participants in this annual marathon supporting local children\'s hospitals.',
    category: 'sports',
    location: {
      name: 'Riverside Park',
      address: '222 River Road',
      city: 'Boston',
      coordinates: { lat: 42.3601, lng: -71.0589 }
    },
    date: {
      start: futureDate(14, 7),
      end: futureDate(14, 12)
    },
    price: {
      min: 35,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/2774895/pexels-photo-2774895.jpeg',
    organizer: 'RunForKids Foundation',
    url: 'https://example.com/events/charity-marathon',
    tags: ['sports', 'marathon', 'charity', 'running', 'health']
  },
  {
    id: '6',
    title: 'Startup Networking Mixer',
    description: 'Connect with fellow entrepreneurs, investors, and industry experts in a casual setting. Perfect for expanding your professional network.',
    category: 'business',
    location: {
      name: 'The Innovation Hub',
      address: '333 Startup Street',
      city: 'Miami',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    date: {
      start: futureDate(1, 18),
      end: futureDate(1, 21)
    },
    price: {
      min: 0,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg',
    organizer: 'Founder\'s Network',
    url: 'https://example.com/events/startup-mixer',
    tags: ['business', 'networking', 'startups', 'entrepreneurs', 'career']
  },
  {
    id: '7',
    title: 'Weekend Yoga Retreat',
    description: 'Escape the city for a rejuvenating weekend of yoga, meditation, and wellness activities in a peaceful natural setting.',
    category: 'health',
    location: {
      name: 'Serenity Resort & Spa',
      address: '444 Mountain View Road',
      city: 'Sedona',
      coordinates: { lat: 34.8697, lng: -111.7610 }
    },
    date: {
      start: futureDate(10, 15),
      end: futureDate(12, 12)
    },
    price: {
      min: 250,
      max: 450,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/4056538/pexels-photo-4056538.jpeg',
    organizer: 'Mindful Living Collective',
    url: 'https://example.com/events/yoga-retreat',
    tags: ['yoga', 'wellness', 'retreat', 'meditation', 'health']
  },
  {
    id: '8',
    title: 'Indie Film Festival',
    description: 'Discover the best in independent cinema from around the world. Screenings, Q&As with filmmakers, and workshops.',
    category: 'film',
    location: {
      name: 'Downtown Cineplex',
      address: '555 Film Avenue',
      city: 'Los Angeles',
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    date: {
      start: futureDate(4, 13),
      end: futureDate(7, 22)
    },
    price: {
      min: 12,
      max: 75,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    organizer: 'Independent Cinema Alliance',
    url: 'https://example.com/events/indie-film-fest',
    tags: ['film', 'cinema', 'festival', 'arts', 'culture']
  },
  {
    id: '9',
    title: 'Night Market Festival',
    description: 'Experience the vibrant atmosphere of our annual Night Market with local vendors, street food, live music, and cultural performances.',
    category: 'nightlife',
    location: {
      name: 'Downtown Plaza',
      address: '777 Main Street',
      city: 'Seattle',
      coordinates: { lat: 47.6062, lng: -122.3321 }
    },
    date: {
      start: futureDate(6, 18),
      end: futureDate(6, 23)
    },
    price: {
      min: 5,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/5086521/pexels-photo-5086521.jpeg',
    organizer: 'City Cultural Association',
    url: 'https://example.com/events/night-market',
    tags: ['nightlife', 'food', 'market', 'music', 'culture']
  },
  {
    id: '10',
    title: 'Community Garden Workshop',
    description: 'Learn practical gardening skills and sustainable growing techniques that you can apply in your own garden or community plot.',
    category: 'community',
    location: {
      name: 'Green Thumb Community Garden',
      address: '888 Garden Way',
      city: 'Portland',
      coordinates: { lat: 45.5051, lng: -122.6750 }
    },
    date: {
      start: futureDate(8, 10),
      end: futureDate(8, 13)
    },
    price: {
      min: 10,
      currency: 'USD'
    },
    image: 'https://images.pexels.com/photos/2132178/pexels-photo-2132178.jpeg',
    organizer: 'Urban Gardeners Association',
    url: 'https://example.com/events/garden-workshop',
    tags: ['gardening', 'community', 'education', 'sustainability', 'workshop']
  }
];
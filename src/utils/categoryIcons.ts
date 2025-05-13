import { Music, Palette, Utensils, Trophy, Cpu, Briefcase, Users, GraduationCap, Film, Heart, Scissors, Sparkles, Wine, DivideIcon as LucideIcon } from 'lucide-react';
import { EventCategory } from '../types/events';

export const getCategoryIcon = (category: EventCategory): LucideIcon => {
  const iconMap: Record<EventCategory, LucideIcon> = {
    music: Music,
    arts: Palette,
    food: Utensils,
    sports: Trophy,
    tech: Cpu,
    business: Briefcase,
    community: Users,
    education: GraduationCap,
    film: Film,
    health: Heart,
    hobbies: Scissors,
    lifestyle: Sparkles,
    nightlife: Wine,
  };

  return iconMap[category] || Users;
};
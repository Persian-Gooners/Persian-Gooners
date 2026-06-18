export type PositionCategory = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface Player {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  number: number;
  position: string;
  positionCategory: PositionCategory;
  nationality: string;
  country: string;
  age: number;
  photo: string;
  flagUrl: string;
  profileUrl: string;
  appearances: number;
  goals: number;
  assists: number;
  cleanSheets?: number;
  saves?: number;
  yellowCards: number;
  redCards: number;
  joinedYear: number;
  contractUntil: number;
  height: string;
  weight: string;
  bio: string;
  onLoan?: boolean;
  loanClub?: string;
}

export interface SquadCategory {
  nameEn: string;
  nameFa: string;
  key: string;
  players: Player[];
}

export interface Legend {
  id: string;
  name: string;
  fullName: string;
  position: string;
  nationality: string;
  nationalityFa: string;
  flagUrl: string;
  yearsAtClub: string;
  appearances: number;
  goals: number;
  assists: number;
  photo: string;
  achievements: string[];
  biography: string;
  whyIcon: string;
  timeline: { year: string; event: string }[];
  legacy: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  featured: boolean;
  trending: boolean;
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  venue: string;
  competition: string;
  isUpcoming: boolean;
  isLive?: boolean;
  formation?: string;
  stats?: MatchStats;
}

export interface MatchStats {
  possession: { home: number; away: number };
  shots: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  corners: { home: number; away: number };
  fouls: { home: number; away: number };
}

export interface Fan {
  id: string;
  name: string;
  photo: string;
  region: string;
  bio: string;
  arsenalStory: string;
  favoritePlayer: string;
  favoriteMoment: string;
}

export interface Trophy {
  id: string;
  name: string;
  type: string;
  count: number;
  years: string[];
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
  photographer?: string;
  color?: string;
}

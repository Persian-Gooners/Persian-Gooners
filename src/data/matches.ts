import { Match } from '@/lib/types';

export const upcomingMatches: Match[] = [
  {
    id: 'match-1',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    date: '2025-01-05',
    time: '17:30',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
    isUpcoming: true,
  },
  {
    id: 'match-2',
    homeTeam: 'Manchester United',
    awayTeam: 'Arsenal',
    date: '2025-01-12',
    time: '16:30',
    venue: 'Old Trafford',
    competition: 'Premier League',
    isUpcoming: true,
  },
  {
    id: 'match-3',
    homeTeam: 'Arsenal',
    awayTeam: 'Tottenham Hotspur',
    date: '2025-01-26',
    time: '14:00',
    venue: 'Emirates Stadium',
    competition: 'FA Cup',
    isUpcoming: true,
  },
  {
    id: 'match-4',
    homeTeam: 'Aston Villa',
    awayTeam: 'Arsenal',
    date: '2025-02-02',
    time: '15:00',
    venue: 'Villa Park',
    competition: 'Premier League',
    isUpcoming: true,
  },
  {
    id: 'match-5',
    homeTeam: 'Arsenal',
    awayTeam: 'Manchester City',
    date: '2025-02-22',
    time: '17:30',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
    isUpcoming: true,
  },
];

export const recentResults: Match[] = [
  {
    id: 'result-1',
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeScore: 2,
    awayScore: 1,
    date: '2024-12-22',
    time: '17:30',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
    isUpcoming: false,
    stats: {
      possession: { home: 55, away: 45 },
      shots: { home: 16, away: 11 },
      shotsOnTarget: { home: 7, away: 4 },
      corners: { home: 8, away: 5 },
      fouls: { home: 10, away: 12 },
    },
  },
  {
    id: 'result-2',
    homeTeam: 'Wolves',
    awayTeam: 'Arsenal',
    homeScore: 0,
    awayScore: 2,
    date: '2024-12-18',
    time: '20:00',
    venue: 'Molineux Stadium',
    competition: 'Premier League',
    isUpcoming: false,
    stats: {
      possession: { home: 38, away: 62 },
      shots: { home: 8, away: 18 },
      shotsOnTarget: { home: 2, away: 8 },
      corners: { home: 3, away: 10 },
      fouls: { home: 14, away: 8 },
    },
  },
  {
    id: 'result-3',
    homeTeam: 'Arsenal',
    awayTeam: 'Brighton',
    homeScore: 1,
    awayScore: 1,
    date: '2024-12-14',
    time: '15:00',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
    isUpcoming: false,
    stats: {
      possession: { home: 58, away: 42 },
      shots: { home: 14, away: 10 },
      shotsOnTarget: { home: 5, away: 3 },
      corners: { home: 9, away: 4 },
      fouls: { home: 7, away: 11 },
    },
  },
  {
    id: 'result-4',
    homeTeam: 'Everton',
    awayTeam: 'Arsenal',
    homeScore: 0,
    awayScore: 3,
    date: '2024-12-07',
    time: '15:00',
    venue: 'Goodison Park',
    competition: 'Premier League',
    isUpcoming: false,
    stats: {
      possession: { home: 35, away: 65 },
      shots: { home: 6, away: 22 },
      shotsOnTarget: { home: 1, away: 9 },
      corners: { home: 2, away: 12 },
      fouls: { home: 11, away: 6 },
    },
  },
  {
    id: 'result-5',
    homeTeam: 'Arsenal',
    awayTeam: 'West Ham',
    homeScore: 5,
    awayScore: 2,
    date: '2024-12-01',
    time: '14:00',
    venue: 'Emirates Stadium',
    competition: 'Premier League',
    isUpcoming: false,
    stats: {
      possession: { home: 60, away: 40 },
      shots: { home: 20, away: 10 },
      shotsOnTarget: { home: 10, away: 3 },
      corners: { home: 11, away: 3 },
      fouls: { home: 8, away: 13 },
    },
  },
];

export type FormResult = 'W' | 'D' | 'L';

export interface LeagueTableRow {
  pos: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
  form: FormResult[];
  highlighted?: boolean;
}

export const leagueTable: LeagueTableRow[] = [
  { pos: 1, team: 'Arsenal', played: 38, won: 26, drawn: 7, lost: 5, gf: 71, ga: 27, gd: 44, pts: 85, form: ['W','W','W','W','W'] },
  { pos: 2, team: 'Manchester City', played: 38, won: 23, drawn: 9, lost: 6, gf: 77, ga: 35, gd: 42, pts: 78, form: ['D','W','W','D','L'] },
  { pos: 3, team: 'Manchester United', played: 38, won: 20, drawn: 11, lost: 7, gf: 69, ga: 50, gd: 19, pts: 71, form: ['W','W','D','W','W'] },
  { pos: 4, team: 'Aston Villa', played: 38, won: 19, drawn: 8, lost: 11, gf: 56, ga: 49, gd: 7, pts: 65, form: ['L','D','D','W','W'] },
  { pos: 5, team: 'Liverpool', played: 38, won: 17, drawn: 9, lost: 12, gf: 63, ga: 53, gd: 10, pts: 60, form: ['W','L','L','L','D'] },
  { pos: 6, team: 'Bournemouth', played: 38, won: 13, drawn: 18, lost: 7, gf: 58, ga: 54, gd: 4, pts: 57, form: ['D','W','W','D','D'], highlighted: true },
  { pos: 7, team: 'Sunderland', played: 38, won: 14, drawn: 12, lost: 12, gf: 42, ga: 48, gd: -6, pts: 54, form: ['L','D','D','W','W'] },
  { pos: 8, team: 'Brighton', played: 38, won: 14, drawn: 11, lost: 13, gf: 52, ga: 46, gd: 6, pts: 53, form: ['W','L','L','W','L'] },
  { pos: 9, team: 'Brentford', played: 38, won: 14, drawn: 11, lost: 13, gf: 55, ga: 52, gd: 3, pts: 53, form: ['W','L','L','D','D'] },
  { pos: 10, team: 'Chelsea', played: 38, won: 14, drawn: 10, lost: 14, gf: 58, ga: 52, gd: 6, pts: 52, form: ['D','D','L','W','L'] },
  { pos: 11, team: 'Fulham', played: 38, won: 15, drawn: 7, lost: 16, gf: 47, ga: 51, gd: -4, pts: 52, form: ['W','L','D','D','W'] },
  { pos: 12, team: 'Newcastle United', played: 38, won: 14, drawn: 7, lost: 17, gf: 53, ga: 55, gd: -2, pts: 49, form: ['L','W','D','W','L'] },
  { pos: 13, team: 'Everton', played: 38, won: 13, drawn: 10, lost: 15, gf: 47, ga: 50, gd: -3, pts: 49, form: ['L','D','D','L','L'] },
  { pos: 14, team: 'Leeds United', played: 38, won: 11, drawn: 14, lost: 13, gf: 49, ga: 56, gd: -7, pts: 47, form: ['D','D','L','W','L'] },
  { pos: 15, team: 'Crystal Palace', played: 38, won: 11, drawn: 12, lost: 15, gf: 41, ga: 51, gd: -10, pts: 45, form: ['L','D','L','D','L'] },
  { pos: 16, team: 'Nottingham Forest', played: 38, won: 11, drawn: 11, lost: 16, gf: 48, ga: 51, gd: -3, pts: 44, form: ['W','W','L','L','D'] },
  { pos: 17, team: 'Tottenham Hotspur', played: 38, won: 10, drawn: 11, lost: 17, gf: 48, ga: 57, gd: -9, pts: 41, form: ['L','D','W','L','W'] },
  { pos: 18, team: 'West Ham United', played: 38, won: 10, drawn: 9, lost: 19, gf: 46, ga: 65, gd: -19, pts: 39, form: ['W','L','L','L','W'] },
  { pos: 19, team: 'Burnley', played: 38, won: 4, drawn: 10, lost: 24, gf: 38, ga: 75, gd: -37, pts: 22, form: ['L','L','D','L','D'] },
  { pos: 20, team: 'Wolverhampton Wanderers', played: 38, won: 3, drawn: 11, lost: 24, gf: 27, ga: 68, gd: -41, pts: 20, form: ['L','D','L','D','D'] },
];

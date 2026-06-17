import { Player, Match, NewsArticle } from './types';

const API_DELAY = 300;

async function simulateDelay<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), API_DELAY));
}

export async function fetchPlayers(): Promise<Player[]> {
  const { allPlayers } = await import('@/data/players');
  return simulateDelay(allPlayers);
}

export async function fetchPlayerById(id: string): Promise<Player | null> {
  const { allPlayers } = await import('@/data/players');
  const player = allPlayers.find((p) => p.id === id);
  return simulateDelay(player || null);
}

export async function fetchNews(): Promise<NewsArticle[]> {
  const { newsArticles } = await import('@/data/news');
  return simulateDelay(newsArticles);
}

export async function fetchNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const { newsArticles } = await import('@/data/news');
  const article = newsArticles.find((a) => a.slug === slug);
  return simulateDelay(article || null);
}

export async function fetchMatches(): Promise<{ upcoming: Match[]; recent: Match[] }> {
  const { upcomingMatches, recentResults } = await import('@/data/matches');
  return simulateDelay({ upcoming: upcomingMatches, recent: recentResults });
}

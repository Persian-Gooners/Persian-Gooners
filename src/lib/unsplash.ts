import { GalleryImage } from './types';

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  width: number;
  height: number;
  description?: string;
  user: {
    name: string;
    username: string;
  };
}

interface UnsplashSearchResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

const searchQueries: Record<string, string[]> = {
  Historic: ['arsenal football', 'arsenal trophy', 'thierry henry', 'football celebration'],
  Stadium: ['emirates stadium', 'football stadium', 'soccer stadium night'],
  Trophies: ['football trophy', 'soccer trophy', 'premier league trophy'],
  Matchday: ['football match', 'soccer match', 'north london derby'],
  Fans: ['football fans', 'soccer fans', 'stadium crowd'],
};

function isValidApiKey(key: string | undefined): boolean {
  return !!key && key !== 'your_unsplash_access_key_here' && key.length > 10;
}

export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  if (!isValidApiKey(UNSPLASH_ACCESS_KEY)) {
    return [];
  }

  const allImages: GalleryImage[] = [];

  for (const [category, queries] of Object.entries(searchQueries)) {
    const query = queries[Math.floor(Math.random() * queries.length)];

    try {
      const response = await fetch(
        `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (!response.ok) {
        console.warn(`Unsplash API warning for ${category}: ${response.status}`);
        continue;
      }

      const data: UnsplashSearchResponse = await response.json();

      const categoryImages: GalleryImage[] = data.results.map((photo) => ({
        id: `unsplash-${photo.id}`,
        src: photo.urls.regular,
        alt: photo.alt_description || photo.description || `${category} photo`,
        category,
        width: photo.width,
        height: photo.height,
        photographer: photo.user.name,
      }));

      allImages.push(...categoryImages);
    } catch (error) {
      console.warn(`Warning: Could not fetch ${category} images from Unsplash`);
    }
  }

  return allImages;
}

export async function searchImages(query: string, page = 1, perPage = 15): Promise<GalleryImage[]> {
  if (!isValidApiKey(UNSPLASH_ACCESS_KEY)) {
    return [];
  }

  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data: UnsplashSearchResponse = await response.json();

    return data.results.map((photo) => ({
      id: `unsplash-${photo.id}`,
      src: photo.urls.regular,
      alt: photo.alt_description || photo.description || query,
      category: 'Search Results',
      width: photo.width,
      height: photo.height,
      photographer: photo.user.name,
    }));
  } catch (error) {
    return [];
  }
}

'use client';

import { useState, useEffect } from 'react';
import { GalleryImage } from '@/lib/types';
import { galleryImages as fallbackImages } from '@/data/gallery';

export function useGalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
        const hasValidApiKey = apiKey && apiKey !== 'your_unsplash_access_key_here' && apiKey.length > 10;

        if (hasValidApiKey) {
          const { fetchGalleryImages } = await import('@/lib/unsplash');
          const unsplashImages = await fetchGalleryImages();

          if (unsplashImages.length > 0) {
            setImages(unsplashImages);
          } else {
            setImages(fallbackImages);
          }
        } else {
          setImages(fallbackImages);
        }
      } catch {
        setImages(fallbackImages);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  return { images, loading };
}

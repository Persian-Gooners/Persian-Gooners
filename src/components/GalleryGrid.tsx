'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryCategories } from '@/data/gallery';
import { GalleryImage } from '@/lib/types';
import { Expand, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Image from 'next/image';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setSelectedIndex(filteredImages.findIndex((i) => i.id === image.id));
  };

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (selectedIndex - 1 + filteredImages.length) % filteredImages.length
        : (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-arsenal-red text-white'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="break-inside-avoid"
          >
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Expand className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <p className="text-white/60 text-xs">{image.category}</p>
                {image.photographer && (
                  <p className="text-white/40 text-xs flex items-center gap-1 mt-1">
                    <Camera className="w-3 h-3" />
                    {image.photographer}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-lg">{selectedImage.alt}</p>
                {selectedImage.photographer && (
                  <p className="text-white/50 text-sm flex items-center justify-center gap-1 mt-1">
                    <Camera className="w-4 h-4" />
                    Photo by {selectedImage.photographer} on Unsplash
                  </p>
                )}
                <p className="text-white/40 text-sm mt-2">{selectedImage.category} · {selectedIndex + 1} of {filteredImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// src/data/galleryData.js

export const preWeddingImages = Array.from(
  { length: 10 },
  (_, i) => `/gallery/prewedding/Gallery${i + 1}.png`
);

export const weddingImages = Array.from(
  { length: 16 },
  (_, i) => `/gallery/wedding/Gallery${i + 1}.png`
);

export const familyImages = Array.from(
  { length: 86 },
  (_, i) => `/gallery/family/Gallery${i + 1}.JPG`
);
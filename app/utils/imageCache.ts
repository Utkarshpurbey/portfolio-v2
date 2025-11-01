export interface ImageCacheOptions {
  priority?: 'high' | 'low' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const preloadImage = (
  src: string,
  options: ImageCacheOptions = {}
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!src || (src.startsWith('http') && !src.startsWith('http://') && !src.startsWith('https://'))) {
      resolve();
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      resolve();
    };
    
    img.onerror = () => {
      resolve();
    };

    if (options.fetchPriority && 'fetchPriority' in img) {
      (img as any).fetchPriority = options.fetchPriority;
    }

    img.src = src;
  });
};

export const preloadImages = async (
  sources: string[],
  options: ImageCacheOptions = {}
): Promise<void> => {
  const uniqueSources = Array.from(new Set(sources.filter(Boolean)));
  
  const BATCH_SIZE = 5;
  for (let i = 0; i < uniqueSources.length; i += BATCH_SIZE) {
    const batch = uniqueSources.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(src => preloadImage(src, options)));
  }
};

export const preloadImageViaLink = (src: string): void => {
  if (typeof document === 'undefined') return;
  
  const existingLink = document.querySelector(`link[href="${src}"]`);
  if (existingLink) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = 'high';
  document.head.appendChild(link);
};

export const getCachedImageUrl = (src: string, version?: string): string => {
  if (!src) return src;
  
  if (!src.startsWith('http')) {
    return src;
  }

  return src;
};


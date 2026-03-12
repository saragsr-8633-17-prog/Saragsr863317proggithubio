import React, { createContext, useContext, useEffect, useState } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

interface ImageContextType {
  images: Record<string, string>;
  isLoading: boolean;
  getImage: (slot: string, fallback: string) => string;
  refresh: () => Promise<void>;
}

const ImageContext = createContext<ImageContextType>({
  images: {},
  isLoading: true,
  getImage: (slot, fallback) => fallback,
  refresh: async () => {},
});

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/settings/images`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.resolved) {
          setImages(data.resolved);
        }
      }
    } catch (e) {
      console.error("Failed to load custom images", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const getImage = (slot: string, fallback: string) => {
    return images[slot] || fallback;
  };

  return (
    <ImageContext.Provider value={{ images, isLoading, getImage, refresh: fetchImages }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useDynamicImage() {
  return useContext(ImageContext);
}

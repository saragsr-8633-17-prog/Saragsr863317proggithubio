import React from "react";
import { useDynamicImage } from "./ImageManager";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  slotId: string;
  fallbackSrc: string;
}

export function DynamicImage({ slotId, fallbackSrc, ...props }: DynamicImageProps) {
  const { getImage, isLoading } = useDynamicImage();
  const src = getImage(slotId, fallbackSrc);

  return <ImageWithFallback src={src} {...props} />;
}

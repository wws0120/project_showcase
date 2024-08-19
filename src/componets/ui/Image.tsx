import React, { useState, useEffect } from 'react';

// Creating a custom Image component similar to Next.js Image component
function Image({ src, alt, width, height, className }) {
  const [imageSrc, setImageSrc] = useState('');

  // Mimic the effect of Next.js Image component which optimizes images on-the-fly, whenever the src props change.
  useEffect(() => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        let objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      });
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={className}
    />
  );
}

export default Image;

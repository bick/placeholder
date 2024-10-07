import React, { useMemo } from "react";

interface PlaceholderProps {
  width: number | string;
  height: number | string;
  color?: string;
  background?: string;
  text?: string;
  fontSize?: number;
  alt?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  width = "100%",
  height = "100%",
  color = "#666",
  background = "#ccc",
  text,
  fontSize = 20,
  alt
}) => {
  const displayText = text || `${width}x${height}`;

  const validatedWidth = typeof width === 'number' ? `${width}px` : width;
  const validatedHeight = typeof height === 'number' ? `${height}px` : height;

  const svgContent = `
    <svg width="${validatedWidth}" height="${validatedHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${background}" />
      <text x="50%" y="50%" dominant-baseline="middle" font-family="-apple-system, Inter, sans-serif" text-anchor="middle" fill="${color}" font-size="${fontSize}">
        ${displayText}
      </text>
    </svg>
  `;

  const encodedSvg = useMemo(() => encodeURIComponent(svgContent), [svgContent]);
  const dataUri = `data:image/svg+xml;charset=UTF-8,${encodedSvg}`;

  return <img src={dataUri} alt={alt || `${width}x${height} placeholder`} />;
};

export { Placeholder };

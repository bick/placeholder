import React from "react";

interface PlaceholderProps {
  width: number | string;
  height: number | string;
  color?: string;
  background?: string;
  text?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  width = 100,
  height = 100,
  color = "#666",
  background = "#ccc",
  text
}) => {
  const displayText = text || `${width}x${height}`;

  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${background}" />
      <text x="50%" y="50%" dominant-baseline="middle" font-family="-apple-system, Inter, sans-serif" text-anchor="middle" fill="${color}" font-size="20">
        ${displayText}
      </text>
    </svg>

`;

  const encodedSvg = encodeURIComponent(svgContent);
  const dataUri = `data:image/svg+xml;charset=UTF-8,${encodedSvg}`;

  return <img src={dataUri} alt={`${width}x${height} placeholder`} />;
};

export { Placeholder };

interface PlaceholderOptions {
    width?: number;
    height?: number;
    text?: string;
}

function generatePlaceholderUrl(options: PlaceholderOptions): string {
    const width = options.width || 300;
    const height = options.height || 150;
    const text = options.text || `${width}x${height}`;
    return `https://placeholderjs.com/${width}x${height}?text=${encodeURIComponent(text)}`;
}

export {generatePlaceholderUrl, PlaceholderOptions};
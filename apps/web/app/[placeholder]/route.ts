import {NextRequest, NextResponse} from 'next/server';

const MAX_DIMENSION = 4000;
const DEFAULT_TEXT_COLOR = '#000000';
const DEFAULT_BG_COLOR = '#cccccc';

function parseColor(color: string, defaultColor: string): string {
    if (!color) return defaultColor;
    return color.replace(/_/g, '#');
}

export async function GET(request: NextRequest, {params}: { params: { placeholder: string } }) {
    try {
        // Example URL: /300x180&text=Hello&color=fff&background=000&fontsize=25
        const {placeholder} = params;
        const [dimensions, ...rest] = placeholder.split('&');
        const [widthStr, heightStr] = dimensions.split('x');

        const width = parseInt(widthStr, 10);
        const height = parseInt(heightStr, 10);

        // Validate dimensions
        if (
            Number.isNaN(width) ||
            Number.isNaN(height) ||
            width <= 0 ||
            height <= 0 ||
            width > MAX_DIMENSION ||
            height > MAX_DIMENSION
        ) {
            return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
        }

        // Default values
        let customText = `${width}x${height}`;
        let textColor = DEFAULT_TEXT_COLOR;
        let backgroundColor = DEFAULT_BG_COLOR;

        // Parse extra query params from the placeholder string
        const queryString = request.url.split('&').slice(1).join('&');
        const searchParams = new URLSearchParams(queryString);

        if (searchParams.has('text')) {
            const textValue = searchParams.get('text');
            if (textValue) {
                customText = textValue.replace(/\+/g, ' ');
            }
        }

        if (searchParams.has('color')) {
            textColor = parseColor(searchParams.get('color') || '', DEFAULT_TEXT_COLOR);
        }

        if (searchParams.has('background')) {
            backgroundColor = parseColor(searchParams.get('background') || '', DEFAULT_BG_COLOR);
        }

        // Determine font size: default to 5% of smaller dimension, override if `fontsize` param is valid
        const minDimension = Math.min(width, height);
        let fontSize = Math.floor(minDimension * 0.05);

        if (searchParams.has('fontsize')) {
            const overrideFontSize = parseInt(searchParams.get('fontsize') || '', 10);
            if (!isNaN(overrideFontSize) && overrideFontSize > 0) {
                fontSize = overrideFontSize;
            }
        }

        const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${backgroundColor}" />
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          font-size="${fontSize}px"
          fill="${textColor}"
          font-family='-apple-system, "Inter", sans-serif'>
          ${customText}
        </text>
      </svg>
    `;

        return new NextResponse(svg, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error generating placeholder image:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}

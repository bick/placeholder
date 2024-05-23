import React, {useEffect, useRef} from 'react';

interface PlaceholderProps {
    type: 'text' | 'image';
    length?: number;
    width?: number;
    height?: number;
}

const loremIpsum = (length: number): string => {
    const words = "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
    let result = '';
    while (result.length < length) {
        result += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return result.substring(0, length);
};

const Placeholder: React.FC<PlaceholderProps> = ({type, length = 64, width = 100, height = 100}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (type === 'image' && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                ctx.fillStyle = '#ddd';
                ctx.fillRect(0, 0, width, height);
                ctx.fillStyle = '#aaa';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${width}x${height}`, width / 2, height / 2);
            }
        }
    }, [type, width, height]);

    if (type === 'text') {
        return <div>{loremIpsum(length)}</div>;
    } else if (type === 'image') {
        return <canvas ref={canvasRef} width={width} height={height}></canvas>;
    } else {
        return null;
    }
};

export default Placeholder;

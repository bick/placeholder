import React, {useEffect, useRef} from 'react';
import ClientOnly from '../clientOnly';

interface ImagePlaceholderProps {
    width?: number;
    height?: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({width = 100, height = 100}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
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
    }, [width, height]);

    return (
        <ClientOnly>
            <canvas ref={canvasRef} width={width} height={height}></canvas>
        </ClientOnly>
    );
};

export default ImagePlaceholder;

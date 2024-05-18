import React from 'react';

interface PlaceholderProps {
    width: number;
    height: number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({width, height}) => {
    const placeholderStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
    };

    return (
        <div style={placeholderStyle}>
            {width}x{height}
        </div>
    );
};

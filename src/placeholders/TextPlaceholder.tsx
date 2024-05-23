import React from 'react';

interface TextPlaceholderProps {
    length?: number;
}

const loremIpsum = (length: number): string => {
    const words = "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
    let result = '';
    while (result.length < length) {
        result += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return result.substring(0, length);
};

const TextPlaceholder: React.FC<TextPlaceholderProps> = ({length = 64}) => {
    return <div>{loremIpsum(length)}</div>;
};

export default TextPlaceholder;

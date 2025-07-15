import React, { useState } from 'react';
import styles from './styles.module.css';

export default function PlaceholderDemo(): JSX.Element {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(180);
  const [text, setText] = useState('Sample Text');
  const [textColor, setTextColor] = useState('000000');
  const [backgroundColor, setBackgroundColor] = useState('cccccc');
  const [fontSize, setFontSize] = useState(16);

  const generateUrl = () => {
    let url = `/${width}x${height}`;
    const params: string[] = [];
    
    if (text && text !== `${width}x${height}`) {
      params.push(`text=${encodeURIComponent(text)}`);
    }
    
    if (textColor !== '000000') {
      params.push(`color=${textColor.replace('#', '')}`);
    }
    
    if (backgroundColor !== 'cccccc') {
      params.push(`background=${backgroundColor.replace('#', '')}`);
    }
    
    if (fontSize !== 16) {
      params.push(`fontsize=${fontSize}`);
    }
    
    if (params.length > 0) {
      url += '&' + params.join('&');
    }
    
    return url;
  };

  const imageUrl = generateUrl();

  return (
    <div className={styles.container}>
      <h2>Placeholder Image Generator</h2>
      
      <div className={styles.controls}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Width:</label>
            <input 
              type="number" 
              value={width} 
              onChange={(e) => setWidth(Number(e.target.value))}
              min="1"
              max="4000"
            />
          </div>
          
          <div className={styles.field}>
            <label>Height:</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(Number(e.target.value))}
              min="1"
              max="4000"
            />
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Text:</label>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)}
              placeholder="Custom text"
            />
          </div>
          
          <div className={styles.field}>
            <label>Font Size:</label>
            <input 
              type="number" 
              value={fontSize} 
              onChange={(e) => setFontSize(Number(e.target.value))}
              min="8"
              max="200"
            />
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Text Color:</label>
            <input 
              type="color" 
              value={`#${textColor}`} 
              onChange={(e) => setTextColor(e.target.value.replace('#', ''))}
            />
            <span className={styles.colorCode}>#{textColor}</span>
          </div>
          
          <div className={styles.field}>
            <label>Background Color:</label>
            <input 
              type="color" 
              value={`#${backgroundColor}`} 
              onChange={(e) => setBackgroundColor(e.target.value.replace('#', ''))}
            />
            <span className={styles.colorCode}>#{backgroundColor}</span>
          </div>
        </div>
      </div>

      <div className={styles.preview}>
        <h3>Preview</h3>
        <div className={styles.imageContainer}>
          <img 
            src={imageUrl} 
            alt={`Placeholder ${width}x${height}`}
            className={styles.previewImage}
          />
        </div>
        
        <div className={styles.urlDisplay}>
          <strong>Generated URL:</strong>
          <code className={styles.url}>{imageUrl}</code>
          <button 
            className={styles.copyButton}
            onClick={() => navigator.clipboard.writeText(imageUrl)}
          >
            Copy URL
          </button>
        </div>
      </div>
    </div>
  );
} 
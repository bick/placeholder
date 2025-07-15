import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

const PLACEHOLDER_PATTERN = /^\/docs\/(\d+x\d+(?:&[^\/]*)*)\/?$/;

export default function NotFound(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    // Check if the current path matches a placeholder pattern
    const match = location.pathname.match(PLACEHOLDER_PATTERN);
    
    if (match) {
      // Extract the placeholder parameters (e.g., "300x180&text=Hello&color=fff")
      const placeholderParams = match[1];
      
      // Construct the URL for the Next.js app
      // Since the Next.js app is served from the root and Docusaurus from /docs/,
      // we redirect to the root with the placeholder parameters
      const nextjsUrl = `/${placeholderParams}${location.search}`;
      
      // Redirect to the Next.js app
      window.location.href = nextjsUrl;
      return;
    }

    // Check for other dynamic route patterns that should go to Next.js
    // This handles cases where someone accesses /docs/{dynamic-content}
    const pathWithoutDocs = location.pathname.replace(/^\/docs\//, '/');
    
    // If it looks like a placeholder request (contains 'x' between numbers), redirect
    if (/^\d+x\d+/.test(pathWithoutDocs.substring(1))) {
      window.location.href = pathWithoutDocs + location.search;
      return;
    }
  }, [location]);

  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ marginBottom: '2rem' }}>Page Not Found</p>
        <p style={{ textAlign: 'center', maxWidth: '600px', lineHeight: '1.5' }}>
          The page you're looking for doesn't exist. If you're looking for a placeholder image,
          you might want to try accessing it directly from the root domain.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="/intro" 
            style={{ 
              padding: '10px 20px', 
              background: 'var(--ifm-color-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              marginRight: '1rem'
            }}
          >
            Go to Documentation
          </a>
          <a 
            href="/" 
            style={{ 
              padding: '10px 20px', 
              background: 'var(--ifm-color-secondary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Go to Home
          </a>
        </div>
      </div>
    </Layout>
  );
} 
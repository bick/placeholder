---
sidebar_position: 2
---

# Installation

Learn how to install and set up PlaceholderJS in your project.

## React/NextJS Installation

For React applications, install PlaceholderJS via your preferred package manager:

### npm

```bash
npm install placeholder
```

### yarn

```bash
yarn add placeholder
```

### pnpm

```bash
pnpm add placeholder
```

### Verify Installation

After installation, verify it's working by importing the component:

```jsx
import { Placeholder } from 'placeholder';

function App() {
  return <Placeholder width="300" height="200" />;
}
```

## CDN Usage

For non-React projects or when you want to use PlaceholderJS without installation, use the CDN directly:

### Basic HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>PlaceholderJS Example</title>
</head>
<body>
    <img src="https://placeholderjs.com/300x200" alt="Placeholder" />
</body>
</html>
```

### In CSS

```css
.hero-section {
    background-image: url('https://placeholderjs.com/1200x600&text=Hero+Image');
    background-size: cover;
}
```

## System Requirements

### For React Component

- **React**: 16.8+ (hooks support)
- **Node.js**: 14+ 
- **TypeScript**: 4.0+ (optional, but recommended)

### For CDN Usage

- **Browser**: Any modern browser with SVG support
- **Internet**: Connection required for image generation

## Bundle Size

The PlaceholderJS React component is extremely lightweight:

- **Minified**: ~2KB
- **Gzipped**: ~1KB
- **Dependencies**: Zero

## Next Steps

Once installed, continue with:

- **[Quick Start Guide](/docs/getting-started/quick-start)** - Create your first placeholder
- **[CDN Usage Guide](/docs/usage-guides/cdn)** - Learn CDN parameters
- **[React Usage Guide](/docs/usage-guides/react)** - Explore component props 
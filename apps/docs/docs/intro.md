---
sidebar_position: 1
---

# PlaceholderJS Documentation

Welcome to **PlaceholderJS** - ridiculously simple and lightweight placeholders for your React applications.

## Getting Started

PlaceholderJS makes it easy to generate placeholder images for your projects. Whether you're prototyping, testing layouts, or need temporary content, our component has you covered.

### Installation

Install PlaceholderJS via npm, yarn, or pnpm:

```bash
npm install placeholder
# or
yarn add placeholder
# or
pnpm add placeholder
```

### Quick Start

Import and use the Placeholder component:

```jsx
import { Placeholder } from 'placeholder';

function App() {
  return (
    <div>
      <Placeholder width="300" height="200" />
      <Placeholder width="400" height="300" text="Hello World!" />
    </div>
  );
}
```

## Features

- 🚀 **Lightweight**: Minimal bundle size
- 🎨 **Customizable**: Control text, colors, and sizing
- 📱 **Responsive**: Works with any dimensions
- ⚡ **Fast**: Generates images on-demand
- 🛠️ **TypeScript**: Full TypeScript support

## Use Cases

- **Prototyping**: Quickly mock up layouts
- **Testing**: Placeholder content for development
- **Loading States**: Show placeholders while content loads
- **Design Systems**: Consistent placeholder styling

Ready to get started? Check out our [examples](/docs/placeholder-examples) to see what you can build!

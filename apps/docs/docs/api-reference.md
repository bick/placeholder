---
sidebar_position: 5
---

# API Reference

This page provides a comprehensive reference for all available parameters and properties for PlaceholderJS.

## CDN Parameters

When using PlaceholderJS via CDN, parameters are passed as URL query parameters.

### Base URL Format

```
https://placeholderjs.com/{width}x{height}&{parameter1}={value1}&{parameter2}={value2}
```

### Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `width`x`height` | string | ✅ | Dimensions of the placeholder image | `500x300` |
| `text` | string | ❌ | Custom text to display | `Hello+World` |
| `color` | string | ❌ | Text color (use `_` instead of `#` for hex) | `_FF0000` or `white` |
| `background` | string | ❌ | Background color (use `_` instead of `#` for hex) | `_0000FF` or `black` |
| `fontsize` | number | ❌ | Font size in pixels | `24` |

### CDN Examples

```bash
# Basic placeholder
https://placeholderjs.com/500x300

# With custom text
https://placeholderjs.com/500x300&text=Hello+World

# With colors and font size
https://placeholderjs.com/500x300&text=Custom&color=_FFFFFF&background=_3B82F6&fontsize=32
```

## React Component Props

When using the React component, parameters are passed as props.

### Component Signature

```tsx
interface PlaceholderProps {
  width: string;
  height: string;
  text?: string;
  color?: string;
  background?: string;
  fontSize?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

### Props

| Prop | Type | Required | Description | Example |
|------|------|----------|-------------|---------|
| `width` | string | ✅ | Width of the placeholder image | `"500"` |
| `height` | string | ✅ | Height of the placeholder image | `"300"` |
| `text` | string | ❌ | Custom text to display | `"Hello World"` |
| `color` | string | ❌ | Text color (hex or named colors) | `"#FF0000"` or `"white"` |
| `background` | string | ❌ | Background color (hex or named colors) | `"#0000FF"` or `"black"` |
| `fontSize` | number | ❌ | Font size in pixels | `24` |
| `className` | string | ❌ | CSS class name for styling | `"my-placeholder"` |
| `style` | object | ❌ | Inline styles | `{{ border: '1px solid #ccc' }}` |

### React Examples

```jsx
// Basic placeholder
<Placeholder width="500" height="300" />

// With custom text
<Placeholder width="500" height="300" text="Hello World" />

// With colors and font size
<Placeholder 
  width="500" 
  height="300" 
  text="Custom" 
  color="#FFFFFF" 
  background="#3B82F6" 
  fontSize={32}
/>

// With styling
<Placeholder 
  width="500" 
  height="300" 
  text="Styled" 
  className="border rounded"
  style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
/>
```

## Color Formats

PlaceholderJS supports the following color formats:

### Hex Colors

- **CDN**: Use underscore `_` instead of `#` → `_FF0000` for red
- **React**: Standard hex format → `#FF0000` for red

### Named Colors

Both CDN and React support CSS named colors:

- `white`, `black`, `red`, `blue`, `green`, `yellow`, `purple`, `orange`, `pink`, `gray`

### Examples

```bash
# CDN with hex colors
https://placeholderjs.com/300x200&color=_FFFFFF&background=_000000

# CDN with named colors
https://placeholderjs.com/300x200&color=white&background=black
```

```jsx
// React with hex colors
<Placeholder width="300" height="200" color="#FFFFFF" background="#000000" />

// React with named colors
<Placeholder width="300" height="200" color="white" background="black" />
```

## Size Limitations

- **Minimum dimensions**: 1x1 pixels
- **Maximum dimensions**: 4000x4000 pixels
- **Recommended**: Keep dimensions reasonable for optimal performance

## Default Values

When parameters are not specified, the following defaults apply:

| Parameter | Default Value |
|-----------|---------------|
| Text | `{width}x{height}` (e.g., "500x300") |
| Text Color | `#000000` (black) |
| Background Color | `#cccccc` (light gray) |
| Font Size | 5% of the smaller dimension |

## Error Handling

### Invalid Dimensions

- Non-numeric values
- Zero or negative dimensions
- Dimensions exceeding 4000x4000

**Response**: HTTP 400 Bad Request

### Invalid Colors

- Invalid hex codes
- Unsupported color names

**Response**: Falls back to default colors

### Missing Required Parameters

- **CDN**: Missing width/height in URL
- **React**: Missing width or height props

**Response**: Component will not render or return error 
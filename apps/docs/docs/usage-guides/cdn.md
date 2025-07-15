---
sidebar_position: 1
---

# CDN Usage

Use PlaceholderJS directly in your HTML without any installation. Perfect for prototyping, static sites, and any project where you want placeholder images via simple URLs.

## Basic Syntax

```
https://placeholderjs.com/{width}x{height}&{parameter}={value}
```

## Size (Required)

Every placeholder must specify dimensions:

```html
<img src="https://placeholderjs.com/500x300" alt="Placeholder" />
```

**Result:**

![Basic placeholder](https://placeholderjs.com/500x300)

## Text Parameter

Add custom text to your placeholder:

```html
<img src="https://placeholderjs.com/500x300&text=Hello+World!" alt="Custom text" />
```

**Result:**

![Text placeholder](https://placeholderjs.com/500x300&text=Hello+World!)

### Text Guidelines

- Use `+` for spaces: `Hello+World`
- Keep text concise for readability
- Text automatically scales with image size

## Color Parameters

### Text Color

```html
<img src="https://placeholderjs.com/500x300&text=Red+Text&color=_FF0000" alt="Red text" />
```

**Result:**

![Red text placeholder](https://placeholderjs.com/500x300&text=Red+Text&color=_FF0000)

### Background Color

```html
<img src="https://placeholderjs.com/500x300&text=Blue+Background&background=_0066CC" alt="Blue background" />
```

**Result:**

![Blue background placeholder](https://placeholderjs.com/500x300&text=Blue+Background&background=_0066CC)

### Combined Colors

```html
<img src="https://placeholderjs.com/500x300&text=Custom+Colors&color=_FFFFFF&background=_3B82F6" alt="Custom colors" />
```

**Result:**

![Custom colors placeholder](https://placeholderjs.com/500x300&text=Custom+Colors&color=_FFFFFF&background=_3B82F6)

## Color Formats

### Hex Colors
- **CDN Format**: Use `_` instead of `#`
- **Example**: `_FF0000` for red, `_0066CC` for blue

### Named Colors
- **Supported**: `white`, `black`, `red`, `blue`, `green`, `yellow`, `purple`, `orange`, `pink`, `gray`
- **Example**: `color=white&background=black`

## Font Size

Override the default font size (in pixels):

```html
<img src="https://placeholderjs.com/500x300&text=Large+Text&fontsize=48" alt="Large text" />
```

**Result:**

![Large text placeholder](https://placeholderjs.com/500x300&text=Large+Text&fontsize=48)

## Practical Examples

### Profile Pictures

```html
<!-- Small profile picture -->
<img src="https://placeholderjs.com/100x100&text=JP&background=_6B7280&color=_FFFFFF" alt="Profile" />

<!-- Medium profile picture -->
<img src="https://placeholderjs.com/150x150&text=User&background=_3B82F6&color=_FFFFFF&fontsize=32" alt="Profile" />
```

### Card Images

```html
<!-- Blog post thumbnail -->
<img src="https://placeholderjs.com/400x250&text=Blog+Post&background=_F3F4F6&color=_374151" alt="Blog thumbnail" />

<!-- Product image -->
<img src="https://placeholderjs.com/300x300&text=Product&background=_E5E7EB&color=_1F2937" alt="Product" />
```

### Hero Banners

```html
<!-- Website hero -->
<img src="https://placeholderjs.com/1200x600&text=Hero+Section&background=_1F2937&color=_FFFFFF&fontsize=64" alt="Hero" />

<!-- Landing page banner -->
<img src="https://placeholderjs.com/800x400&text=Welcome&background=_059669&color=_FFFFFF&fontsize=48" alt="Banner" />
```

## CSS Integration

### Background Images

```css
.hero-section {
    background-image: url('https://placeholderjs.com/1200x600&text=Hero+Background');
    background-size: cover;
    background-position: center;
}

.card::before {
    content: '';
    background-image: url('https://placeholderjs.com/300x200&text=Card+Image');
}
```

### Responsive Images

```css
.responsive-placeholder {
    width: 100%;
    height: auto;
}
```

```html
<img src="https://placeholderjs.com/800x450&text=Responsive" 
     class="responsive-placeholder" 
     alt="Responsive placeholder" />
```

## Best Practices

### Performance
- **Reasonable Sizes**: Avoid extremely large dimensions
- **Caching**: Images are automatically cached for better performance
- **Alt Text**: Always include descriptive alt attributes

### Accessibility
- **Meaningful Text**: Use descriptive placeholder text
- **Color Contrast**: Ensure sufficient contrast between text and background
- **Alt Attributes**: Provide appropriate alternative text

### SEO
- **Descriptive URLs**: Use meaningful text in placeholders
- **Proper Alt Text**: Help search engines understand image content
- **Optimize Sizes**: Use appropriate dimensions for your layout

## Limitations

- **Maximum Size**: 4000x4000 pixels
- **Color Format**: Hex colors must use `_` instead of `#`
- **Text Encoding**: Use `+` for spaces in URLs
- **Internet Required**: CDN requires internet connection

## Common Issues

### URL Encoding
```html
<!-- Correct -->
<img src="https://placeholderjs.com/300x200&text=Hello+World" />

<!-- Incorrect -->
<img src="https://placeholderjs.com/300x200&text=Hello World" />
```

### Color Format
```html
<!-- Correct -->
<img src="https://placeholderjs.com/300x200&color=_FF0000" />

<!-- Incorrect -->
<img src="https://placeholderjs.com/300x200&color=#FF0000" />
```

## Next Steps

- **[React Usage](/docs/usage-guides/react)** - Use as a React component
- **[Examples](/docs/usage-guides/examples)** - More advanced usage examples
- **[API Reference](/docs/api-reference/parameters)** - Complete parameter documentation 
# Dynamic Placeholder Image Service

This documentation site includes integration with a dynamic placeholder image service. When you access URLs that match placeholder patterns, they will be automatically redirected to the image generation service.

import PlaceholderDemo from '@site/src/components/PlaceholderDemo';

<PlaceholderDemo />

## How it works

The system detects placeholder image requests and redirects them from the documentation site to the main application's dynamic route handler.

### URL Patterns

Placeholder images can be accessed using the following URL pattern:

```
/{width}x{height}&{parameters}
```

For example:
- `/300x180` - Basic 300x180 placeholder
- `/400x300&text=Hello World` - With custom text
- `/500x200&text=Custom&color=fff&background=000` - With custom colors
- `/600x400&text=Sample&fontsize=24` - With custom font size

### Parameters

- **width x height**: Image dimensions (required)
- **text**: Custom text to display (default: dimensions)
- **color**: Text color in hex (without #, use _ for #)
- **background**: Background color in hex (without #, use _ for #)
- **fontsize**: Custom font size in pixels

### Examples

#### Basic placeholder
```
/300x180
```

#### With custom text
```
/400x300&text=Hello+World
```

#### With custom colors
```
/500x200&text=Custom&color=fff&background=000
```

#### With custom font size
```
/600x400&text=Sample&fontsize=24
```

### Technical Details

When you access a placeholder URL through the docs site (e.g., `/docs/300x180`), the custom 404 page will:

1. Detect that the URL matches a placeholder pattern
2. Automatically redirect to the root domain with the same parameters
3. The Next.js application will handle the image generation

This ensures seamless integration between the documentation site and the placeholder image service.

### Color Format

For colors, replace `#` with `_` in the URL:
- `#ffffff` becomes `_ffffff`
- `#000000` becomes `_000000`

The system will automatically convert these back to proper hex colors. 
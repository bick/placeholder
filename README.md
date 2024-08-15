# PlaceholderJS
Ridiculously Simple and Lightweight Placeholders

## NPM

To use PlaceholderJS with React or any React framework, simply install via NPM or your preferred package manager:

```npm i placeholder```

```yarn add placeholder```

```pnpm add placeholder```

Next, import the package:

```jsx
import {Placeholder} from 'placeholder';
```

### NextJS Example

```
import { Placeholder } from "placeholder";

<Placeholder width="500" height="500" />
```

### Size

**Required**

Specify the size of the placeholder image by adding the width and height to the component. Example:

```jsx
<Placeholder width="500" height="500"/>
```

### Text

**Optional**

Specify custom text in the placeholder image by adding your text. Example:

```jsx
<Placeholder width="500" height="500" text="Hello World!"/>
```

### Text Color

**Optional**

Specify the text color by adding `color=` to the component. We support HEX values or named values (e.g., white).
Example:

```jsx
<Placeholder width="500" height="500" text="Hello World!" color="#fff"/>
```

### Background Color

**Optional**

Specify the background color by adding `background=` to the component. We support HEX values or named values (e.g.,
white). Example:

```jsx
<Placeholder width="500" height="500" background="#000"/>
```

## CDN

To use PlaceholderJS via the CDN for simplicity and/or compatibility with non-JS tools, you can use the scheme:

```
https://placeholderjs.com/HEIGHTxWIDTH
```

All image placeholders **must** have a height and width defined.

### Size

**Required**

Specify the size of the placeholder image by adding the width and height to the URL. Example:

```
https://placeholderjs.com/500x500
```

### Text

**Optional**

Specify custom text in the placeholder image by adding your text to the URL. Use a `+` character for spaces. Example:

```
https://placeholderjs.com/500x500&text=Hello+World!
```

### Text Color

**Optional**

Specify the text color by adding `color=` to the URL. We support HEX values or named values (e.g., white). Since we
can't use `#` for the color code, use an underscore `_` before the HEX code. Example:

```
https://placeholderjs.com/500x500&text=Hello+World!&color=_fff
```

### Background Color

**Optional**

Specify the background color by adding `background=` to the URL. We support HEX values or named values (e.g., white).
Since we can't use `#` for the color code, use an underscore `_` before the HEX code. Example:

```
https://placeholderjs.com/500x500&background=_000
```

TODO:

- ~~Add support for text~~
- ~~Add text color options~~
- ~~Add background color options~~

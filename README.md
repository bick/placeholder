# PlaceholderJS
A simple image placeholder for JavaScript.


## Usage
```npm i placeholder```

```yarn add placeholder```

```pnpm add placeholder```



### NextJS Example

```
import Image from "next/image"; // Import the NextJS image component

<Image src="https://placeholderjs.com/500x500" alt="500x500 placeholder" width={500} height={500} />
```

### Make sure to add Plaeholder.js to config
```
const nextConfig = {
  images: {
    domains: ['placeholderjs.com'], // Add allowed image source
  },
};
```

TODO:
- ~~Add support for text~~
- Add placeholder text functionality
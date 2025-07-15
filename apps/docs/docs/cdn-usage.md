---
sidebar_position: 3
---

# CDN Usage

To use PlaceholderJS via the CDN for simplicity and/or compatibility with non-JS tools, image placeholders **must** have a height and width defined.

## Size

:::info Required
This parameter is required for CDN usage.
:::

Specify the size of the placeholder image by adding the width and height to the URL. Here is an example of how that works for a `500 x 500` image.

```
https://placeholderjs.com/500x500
```

**Example Result:**

![PlaceholderJS Example](https://placeholderjs.com/500x500)

## Text

Specify custom text in the placeholder image by adding your text to the URL. Here is an example of how that works for `Hello World!`. Use a `+` for spaces.

```
https://placeholderjs.com/500x500&text=Hello+World!
```

**Example Result:**

![PlaceholderJS Text Example](https://placeholderjs.com/500x500&text=Hello+World!)

## Text Color

Specify the text color by adding `color=` to the URL. For now, we only support HEX values or named values (e.g. white). Since we can't use `#` for the color code, you must use an underscore `_` before the HEX code.

```
https://placeholderjs.com/500x500&text=Hello+World!&color=_FF0000
```

**Example Result:**

![PlaceholderJS Text Color Example](https://placeholderjs.com/500x500&text=Hello+World!&color=_FF0000)

## Background Color

Specify the background color by adding `background=` to the URL. For now, we only support HEX values or named values (e.g. white). Since we can't use `#` for the color code, you must use an underscore `_` before the HEX code.

```
https://placeholderjs.com/500x500&background=_FF0000
```

**Example Result:**

![PlaceholderJS Background Color Example](https://placeholderjs.com/500x500&text=Hello+World!&background=_FF0000)

## Font Size

Override the default font size by adding `fontsize=` to the URL (in pixels). This ensures the text is displayed at the specified pixel size. For example:

```
https://placeholderjs.com/500x500&text=Hello+World!&fontsize=40
```

**Example Result:**

![PlaceholderJS Font Size Example](https://placeholderjs.com/500x500&text=Hello+World!&fontsize=40)

## Combining Parameters

You can combine multiple parameters to create exactly the placeholder you need:

```
https://placeholderjs.com/600x400&text=My+Custom+Placeholder&color=_FFFFFF&background=_3B82F6&fontsize=32
```

**Example Result:**

![PlaceholderJS Combined Parameters Example](https://placeholderjs.com/600x400&text=My+Custom+Placeholder&color=_FFFFFF&background=_3B82F6&fontsize=32) 
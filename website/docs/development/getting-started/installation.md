---
sidebar_position: 1
tags: [Development, Installation, Fonts, Normalize, Setup, Assets]
title: Installation
---

<strong>
  <p className="page-subheadline" markdown="1">
    Use Pluralsight's UI suite and get the best developer experience for your team.
  </p>
</strong>

Pluralsight Design is available as a set of multiple npm packages for web and our `design-tokens` package is also compatable with iOS, Swift, Android, and Kotlin.

Each package has a different purpose in terms of flexibility. You will _rarely_ need all of them and probably only just one or two most.

- **Maximum Flexibility:** use [Design Tokens](../tokens/intro.md), our foundational package that delivers our color themes and is used internally in Headless-styles.
- **Most Flexibility:** use [Headless Styles](../headless-styles/intro.mdx), our package which delivers component styles & accessibility helpers for **any** component or UI library combination.
- **Minimum Flexibility:** use the following packages that cater to a specific framework:
  - **Icons:** our [Icons](../icons/intro.mdx) package delivers a broad range of icons for most common use cases.
  - **React-utils:** our [React Utils](../react-utils/use-focus-trap.mdx) package delivers custom hooks and helper functions specifically for the React library.

:::note

**Design Tokens** and **Headless-styles** require our Font and Normalize setup for the best experience (see below).

:::

## Basic Use

For the entire kitchen sink up front, just install the Headless-styles and Icons packages.

```bash npm2yarn
npm install @pluralsight/{headless-styles,icons}
```

## Responsive meta tag

Pluralsight Design is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to the `head` element in your `index.html`.

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

## PS TT Commons font

Our packages were developed with PS TT Commons (Pluralsight brand font) in mind. For the best results, install via an HTML `link` tag in your `head` element:

```html
<link
  rel="preload"
  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"
/>
```

Our `fonts.css` file declares both the **brand and a code font**. We are only preloading the brand font since it's the most common used font across all of our products and teams. This will help boost performance and prevent FOUC.

Additionally, each Headless-style helper uses a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) property to provide all weights programmatically. **IE 11 does not support variable fonts**, so any IE users will get the sans-serif fallback.

:::caution

Be sure to add the font resources **before** [normalize.css](#normalizecss) in the `head` to prevent FOUC.

:::

## Normalize.css

Headless-styles and custom theming **depend on our normalize.css** file to be used in your project. This file adds our CSS resets, typography styles, the design-tokens, and our themes.

To add the normalize file, simply copy and paste the `link` content below into your `head` tag - _after_ the font sources:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"
/>
```

### Using custom fonts

Not interested in using the PS TT Commons font? Simply leave out the [font imports](#ps-tt-commons-font) and instead use your own font declaration for the `html` element.

```css title="Example of using a custom font"
html {
  font-family: 'Some custom font', sans-serif;
  font-feature-settings: 'tnum' on, 'lnum' on;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5;
  text-size-adjust: 100%;
}
```

## Module Support

All of our packages support both ES-Modules and CommonJS projects.

## Typescript

All of our packages support Typescript at version 4 and above.

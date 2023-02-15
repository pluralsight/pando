---
sidebar_position: 2
tags: [Development, Usage, Getting Started, Web, React Native]
title: Usage
---

<strong>
  <p className="page-subheadline" markdown="1">
    Learn about the use case for each package we offer.
  </p>
</strong>

## Design Tokens

This package is meant for one purpose - **deliver a solution that has the most flexibility there is to offer for UI development.**

Design tokens comes with a few things at the foundational level: [our normalize CSS Reset](./installation.md#normalizecss), our [font declarations](./installation.md#ps-tt-commons-font), and our Design-tokens and custom themes.

If you want full control of your UI and just need a lightweight and reliable custom theming solution, Design Tokens has you covered.

```bash npm2yarn
npm install @pluralsight/design-tokens
```

## Headless Styles

Headless Styles is built with the intention of allowing the most flexibilty in a component or native project base. This means we give you _helper functions_ that will return an Object which delivers styles and a11y properties.

This means that you have full control of your component design without having to worry about the "annoying bits" (i.e. styles and a11y).

```bash npm2yarn
npm install @pluralsight/headless-styles
```

### Button Example

Here's a quick example using React to create a custom Button:

```jsx title="components/CancelButton.jsx"
import { getButtonProps } from '@pluralsight/headless-styles

const cancelBtnProps = getButtonProps({
  sentiment: 'danger'
})

export default function CancelButton(props) {
  const { children, ...btnProps } = props

  return (
    <button {...btnProps} {...cancelBtnProps.button}>
      {children}
    </button>
  )
}
```

The above code will render a fully styled and accessible Button when combined with our [normalize setup](./installation.md#normalizecss).

## Icons

Our Icons package was created to deliver icons for a wide range of use cases: Plain SVG, React, or Svelte components. This package can also be combined with Headless-styles if you want to build components that use an enhanced visual exprience.

```bash npm2yarn
npm install @pluralsight/icons
```

## React Utils

This utility package is just for the React users who are looking to reduce their codebase and help make their components more accessible. In this library, we deliver custom hooks that do anything from [enhancing a modal experience](../react-utils/use-focus-trap.mdx) to better image loading.

```bash npm2yarn
npm install @pluralsight/react-utils
```

:::note

React-utils is compatible with React 18 and concurrent mode. :sunglasses:

:::

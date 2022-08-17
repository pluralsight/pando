---
title: Intro
sidebar_position: 1
tags: [Development, Packages, Tokens, Intro]
---

:::caution

This is **alpha** documentation for the **design-tokens** package.

:::

<p class="page-subheadline" markdown="1">Learn how to use design-tokens for any project or OS platform.</p>

## Installation

To use tokens via the web, just install the npm package.

```bash npm2yarn
npm install @pluralsight/design-tokens@alpha
```

:::info

**We include the CSS tokens in our [normalize setup](../getting-started/installation#normalizecss)**, so there is no need to install this package unless you are using CSS-in-JS or do not want to add the normalize reset.

:::

## What is a token?

A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.

## Naming convention

In order to make our tokens scalable and easier to use, we use the following naming convetion for our themes.

```bash
# "usage" is the only property required

ps-[sentiment?]-[usage]-[prominence?]-[interaction?]
```

- **Sentiment** - "default", "action", "info", "success", "warning", "danger"
- **Usage (required)** - "background", "border", "navigation", "surface", "text"
- **Prominence** - "default", "weak", "medium", "strong", "inverse"
- **Interaction** - "default", "hover", "active", "visited"

:::note

All optional fields are ignored in the token syntax.

:::

What this looks like in terms of an actual token can be seen in an example of some of the tokens:

```css title="Example of tokens"
:root {
  --ps-text: #000;
  --ps-action-background: blue;
  --ps-action-text: #fff;
  --ps-danger-surface: red;
}
```

## Usage

The `design-tokens` package is the single source of truth for colors and themes in the Pluralsight Design System Suite. This is also how we define styles in `headless-styles` package.

### Web

We ship CSS, SCSS variables, JS es6/commonJS modules, and meta-data for web projects. This way, you can choose whichever solution works best for your project.

#### CSS Usage

There are two ways to use the tokens via CSS

1. With the normalize setup (recommended)
2. Manually importing

##### With the normalize setup

We ship all the tokens and themes in our normalize setup - so there is no additional work for you to do. After you have the normalize file in your project, just simply use the tokens in your CSS file.

```css title="CSS usage example"
button {
  background-color: var(--ps-action-background);
  color: var(--ps-action-text);
}

button:hover {
  background-color: var(--ps-action-background-hover);
}
```

###### Manually importing

If you would prefer not to use our normalize setup, you just need to import the tokens in your main CSS file.

```css title="CSS importing example
@import url('@pluralsight/design-tokens/build/css/variables.css');
```

:::caution

Themes **do not** ship with the manual import. This setup will deliver the dark theme tokens only.

:::

#### SCSS

One of the biggest benefits to using SCSS is the pre-processing which means your project will not store any tokens into memory. This will help improve the performance of your app dramatically as it grows throughout time.

```scss title="Importing tokens into your SCSS"
@use '@pluralsight/design-tokens/scss/_variables.scss';
```

Then, use it as normal.

```scss title="SCSS usage (example)"
button {
  background-color: $ps-action-background;
  color: $ps-action-text;
}
```

#### JS Usage

The first step for this route is to [install the tokens package](#installation). Our JS tokens support both es6 and commonJS environments.

There are a few ways you can utilize the JS tokens:

1. Using the [tokens meta-data](#css-properties) combined with the normalize setup (recommended)
2. Using the tokens without the normalize
3. Using the tokens with inline styles

##### 1. Using the tokens meta-data with normalize

See [CSS Properties section](#css-properties).

##### 2. Using the tokens without normalize

If you choose to opt-out of using the normalize setup, you will only have **static tokens** available for use. This means you will **need to create your own theme-provider**.

```javascript title="Example use without normalize"
import { psBackground } from '@pluralsight/design-tokens'

const styles = css({
  backgroundColor: psBackground,
})
```

##### 3. Using tokens with inline styles

You can also use the static JS tokens inline as well.

```jsx title="Example using inline styles"
<button
  style={{
    backgroundColor: psLightActionBackground,
  }}
/>
```

### Web Meta

Sometimes there are specific scenarios where you just need something more than just a token. We provide two meta-data files for these use cases.

#### CSS Properties

If you are looking for a single-source-of-truth for your JS usage, we provide a module that exports the JS tokens that have the CSS token names for the values.

```javascript title="CSS Properties example"
export const psBackground = 'var(--ps-background)'
```

Just use the meta import path:

```javascript
import { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'
```

This is much more performant if you are using a solution that creates CSS files from your JS defintions (i.e. [styled-components](https://styled-components.com/)).

```javascript title="Usage example"
import styled from 'styled-components'
import { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'

const Button = styled(Button)`
  background-color: ${psBackground};
`
```

:::tip

If you combine this with the [normalize setup](../getting-started/installation#normalizecss), theming will be baked into your CSS-in-JS styles!

:::

#### Normalized data

If you need some raw normalized data, we also have you covered in our normalize.json file.

```json title="Example of normalized data"
{
  groupItems: ["default", "action", "danger", "info", "success", "warning"],
  groups: {
    "default": {
      "background": "#000",
      "backgroundWeak": "#111",
      "text": "#fff"
    },
    ...
  }
}
```

Just import it into your project via your bundler loader that supports JSON:

```javascript
import tokenData from '@pluralsight/design-tokens/meta/normalize.json'
```

### Mobile

For mobile, we will ship `iOS`, `swift`, and `android` files to import into your projects via our repo. Just run the following command to have access to any resource your team needs:

```bash
yarn workspace @pluralsight/design-tokens run build
```

This will create a `build` directory in the `packages/design-tokens` location which will contain all of the resources mentioned above.

## Why are the tokens limited to colors?

During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times.

In this research we have found that there _is_ a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for `padding` throughout your app can slow down render performance by **up to 2 seconds**!

During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more CSS variables (in the web).

Thus, the current standard which seems to keep a performant load time (under 1 second) is to **keep variables limited to only colors and the quantity being defined up to 57**.

This is the standard we align with for the `design-tokens` package. Additionally, because we have a semantic naming pattern, we are delivering every color needed for our entire Web UI Kit (except for rare/uncommonly used colors).

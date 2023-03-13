---
sidebar_position: 2
tags: [Design Tokens, Extending Themes]
title: Customizing Themes
---

Our semantic token system allows for easily customizing the themes depending on your use case.

:::caution

This page assumes you are using the [initial setup](../../../learn/get-started/installation/add-to-website.mdx). If you would like to have access to the Pando themes without using the setup, see the [Using design-tokens section](#using-design-tokens).

:::

## Customizing with CSS

In CSS, we set the default theme in the `:root` selector via our [initial setup](../../../learn/get-started/installation/add-to-website.mdx), so all you need to do is overwrite the tokens you want to customize in the `:root` CSS selector of your project.

For example, in your root CSS file, add this:

```css title="Updating the default/text token in your project."
:root {
  --ps-text: #fff;
}
```

To customize a specific theme in Pando (i.e. light, dark, etc.), you need to target the corresponding selectors.

For example, to modify the "light" theme, add this to your CSS:

```css title="Updating the default/text token for only the light theme in your project."
html[data-theme='light'],
.pando-light {
  --ps-text: #000;
}
```

### Class level customizing

In rare cases, you may only need to update a token value for a specific component. For this scenario, update the token within the specific class scope you need.

In this example, we are updating the default/text token for a component using the `.card` class:

```css title="Updating the default/text token only for a component using the this class."
.card {
  --ps-text: #fff;
  color: var(--ps-text);
}
```

## Customizing with Javascript

If you are using a CSS-in-JS styling solution, you can easily extend our themes depending on your technology choice.

### CSS Template Literals

If you are using a tech that utilizes CSS Template Literals, like [styled-components](https://styled-components.com/), you can overwrite the values from our Headless-styles API by providing your own value afterward.

Here is an example where we overwrite the background color of a Button using both styled-components and Headless-styles:

```javascript showLineNumbers title="Updating the background color of a button."
import styled from 'styled-components'
import { getJSButtonProps } from '@pluralsight/headless-styles'

const Button = styled.button`
  ${getJSButtonProps().button.cssProps}
  background-color: blue;
`
```

### Styles JS API

If you would like to have all the data related to a component (i.e. styles, animation, a11y), you can use the Javascript version of any component API with the `styles` key.

```typescript showLineNumbers
interface JSReturnProps {
  keyframes?: CSS.Properties
  a11yProps?: Record<A11yProps, string>
  cssProps: TemplateLiteralString<CSS.Properties>
  styles: CSS.Properties
}
```

Here is an example where we are customizing an Input.

```javascript showLineNumbers title="Creating an Input with the native React API."
import { getJSInputProps } from '@pluralsight/headless-styles'

function Input(props) {
  const { inputWrapper, input } = getJSInputProps(props)

  return (
    <div style={inputWrapper.styles}>
      <input
        {...input.a11yProps}
        style={input.styles}
        onChange={props.handleChange}
      />
    </div>
  )
}
```

### Style Objects

If you are using a technology that utilizes Javascript Objects for styles and only need the styles from Pando components, you can use our Style Objects.

```javascript title="Naming convention used for Style Objects"
import { <component>Styles } from '@pluralsight/headless-styles/styles'
```

Here is an example where we are using Style Objects to [extend a Chakra Button](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-component-styles).

```javascript showLineNumbers {3,8}
import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { buttonStyles } from '@pluralsight/headless-styles/styles'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: buttonStyles.btnBase,
      defaultProps: {
        ...
      },
    },
  },
})

export default theme
```

:::tip Style Objects use nested properties

All of our component Style Objects use the nested property syntax supported by emotion and styled-components. If your tech uses any other syntax (like Chakra), you will need to add the additional styles to your theme with Object Spreading from the Style Object properties.

:::

### String Value Tokens

You can use a string value of the CSS token and it will automagically work! This is because browsers will map the token value from the Style Object to the CSS variable.

In this example, we use Emotion to update a Link to use the Pando Link token:

```javascript showLineNumbers title="Example of using a Emotion with Pando."
import styled from '@emotion/styled'

const TextLink = styled.a({
  color: 'var(--ps-action-navigation)',
})
```

## Using Design-tokens

If you would like access to all of our design tokens without using our CSS Reset, you can install the Design-tokens package, which will deliver Javascript variables for all of the tokens:

```bash npm2yarn
npm install @pluralsight/design-tokens
```

The design-tokens package is the single source of truth for themes in the Pando ecosystem.

### Web

We ship CSS custom properties, SCSS variables, JS es6/commonJS modules, and meta-data for web projects. This way, you can choose whichever solution works best for your project.

#### CSS Usage

There are two ways to use the tokens via CSS

1. With the initial setup (recommended)
2. Manually importing

##### With the initial setup

We ship all the tokens and themes in our initial setup - so there is no additional work for you to do. After you have completed the setup you will be able to reference the tokens in your CSS files.

```css title="CSS usage example" showLineNumbers
button {
  background-color: var(--ps-action-background);
  color: var(--ps-action-text);
}

button:hover {
  background-color: var(--ps-action-background-hover);
}
```

##### Manually importing

If you would prefer to opt-out of our initial setup, you can import the tokens in your root CSS file.

```css title="CSS manual import example (opt-out of initial setup)"
@import url('@pluralsight/design-tokens/npm/css/variables.css');
@import url('@pluralsight/design-tokens/npm/themes/light.css');
```

#### SCSS

If you use SCSS in your project, you can import our SCSS variables.

```scss title="Importing tokens into your SCSS"
@use '@pluralsight/design-tokens/npm/scss/_dark-variables.scss';
@use '@pluralsight/design-tokens/npm/scss/_light-variables.scss';
```

Then, use them as normal.

```scss title="SCSS usage example" showLineNumbers
button {
  background-color: $ps-action-background;
  color: $ps-action-text;
}
```

#### Javascript Tokens

There are a few ways you can utilize the Javascript tokens:

1. Using the [tokens meta-data](#css-properties) combined with the initial setup (recommended)
2. Using the tokens without the initial setup
3. Using the tokens with inline styles

##### 1. Using the tokens meta-data with initial (recommended)

See [CSS Properties section](#css-properties).

##### 2. Using the tokens without the initial setup

If you choose to opt-out of using the initial setup, you will only have **static tokens** available for use.

```javascript title="Example use without the initial setup" showLineNumbers
// theme.js
import { psBackground } from '@pluralsight/design-tokens'
import { psBackgroundLight } from '@pluralsight/design-tokens/light'

const darkTheme = {
  background: psBackground
}

const lightTheme = {
  background: psBackgroundLight
}

// Some component
const styles = css((theme) => {
  backgroundColor: theme.background,
})
```

##### 3. Using tokens with inline styles

You can also use the static JS tokens inline as well.

```jsx title="Example using inline styles"
<button
  style={{
    backgroundColor: psActionBackground,
  }}
/>
```

### Web Meta

Sometimes you need something more than just a token. We provide two meta-data files for these use cases.

#### CSS Properties

If you are looking for a seamless JS integration with the Normalize setup or single-source-of-truth, we provide a module that exports JS tokens that have the CSS token names for the values.

When you combine this with CSS definitions, it "just works".

```javascript title="Example of what CSSProperties exports" showLineNumbers
export const psBackground = 'var(--ps-background)'
```

This is much more performant if you are using a solution that creates CSS files from your JS defintions (i.e. [styled-components](https://styled-components.com/)).

```javascript title="Usage example" showLineNumbers
import styled from 'styled-components'
import { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'

const Button = styled(Button)`
  background-color: ${psBackground};
`
```

:::tip

If you combine this with the [initial setup](../../../learn/get-started/installation/add-to-website.mdx), theming will be instantly avialable in your CSS-in-JS styles!

:::

#### Normalized data

If you need some raw normalized data, we also have you covered in our normalize.json file.

```json title="Example of normalized data" showLineNumbers
{
  "groupItems": ["default", "action", "danger", "info", "success", "warning"],
  "groups": {
    "action": {
      "psActionBackground": {
        "id": "psActionBackground",
        "cssName": "--ps-action-background",
        "sassName": "$ps-action-background",
        "jsName": "psActionBackground",
        "value": "#4A33D1"
      }
    },
    ...
  }
}
```

To use, import it into your project via a bundler that supports JSON:

```javascript
import tokenData from '@pluralsight/design-tokens/meta/normalize.json'
```

### Mobile

We offer both android and iOS solutions for mobile platforms. All mobile tokens can be found in our Github repo [mobile tokens location](https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile).

#### Android

For Android, we ship the tokens as [Compose colors](https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile/compose).

#### iOS / Swift

We support iOS platforms via an [Asset Catalog](https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile/iOS/Assets.xcassets).

---
tags: [PSDS Classic]
title: Migration
---

<strong>
  <p className="page-subheadline" markdown="1">
    Learn how to migrate from <a href="https://github.com/pluralsight/design-system" target="_blank" rel="noopener noreferrer">PSDS Classic</a>.
  </p>
</strong>

Any major release or new framework has its breaking changes and PD isn't an exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed the recommended migrations steps, along with solutions for the most common problems you might face.

## Why should you migrate?

In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in it. **Even if you don't plan to use the entire PD suite** your projects will still get benefits from the upgrade.

- Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences
- A renewed focus on accessbility, performance, and good practices
- Improved user experience for various projects (scalable APIs)
- New capabilities (can work with any tech stack so you can pivot easier)

And of course a very active and safe development cycle.

## Step by step

:::note

Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate **without introducing breaking changes**.

:::

The biggest benefit of PD is that it _only owns styles and accessbility_ and _is not a component library_ which means you can scale or customize to whatever your situation/features may require.

Below we'll look at migrating the Button component which will be the same pattern you can use for all the PD use cases.

### Step 0 - Add the setup

To make sure we get the intended visual result of Headless-styles, replace the Classic font/normalize with our **new** font and normalize setup in your project HTML `head`:

:::note

Both the fonts and normalize.css for v2 contain different rules and styles which may cause temporary visual breaking changes to the UI. Don't be alarmed, the migration path will resolve it.

:::

```html title="Add the new required CSS setup" showLineNumbers
<meta name="viewport" content="initial-scale=1, width=device-width" />
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
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"
/>
```

:::tip

Don't forget to remove the old font and normalize imports in your code base or bundlers if they exist.

:::

### Step 1 - Installation

In order to use PD, we need to get it into your project first. For most projects, you will only need to install the headless-styles and icons packages.

```bash npm2yarn
npm install @pluralsight/{headless-styles,icons}
```

:::tip

If you are a React user, we also provide a helper library that contains some custom hooks to enhance the user and developer experience: [React Utils Library](../react-utils/use-auto-format-date.mdx).

:::

All of our packages are lightweight because they don't rely on a laundry list of dependencies to install, so you don't have to worry about adding additional overhead to your bundle size.

### Step 2 - Create

Since Headless-styles is not a component library, you will create a new Button component in your project. This will allow you to have full control of your implementation while PD provides the styles and accessibility needs.

:::tip

It is considered a React/Component best practice to create components with a **single responsibility**. An example would be to create an "EditButton" or "CancelButton". This helps to create a component which **by nature will have less risk of bugs and code impact.**

:::

#### Example 1 - Traditional way

In this example, we are creating a `CancelButton` for your project by creating a new CancelButton component using Typescript.

```typescript title="components/Buttons/CancelButton.tsx" showLineNumbers
import { memo } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import type { ButtonOptions } from '@pluralsight/headless-styles/types'

const cancelBtnProps = getButtonProps({
  sentiment: 'danger',
})

function CancelButton(props: ButtonOptions) {
  return (
    <button {...props} {...cancelBtnProps.button}>
      Cancel
    </button>
  )
}

export default memo(CancelButton)
```

Let's break down what this example is doing:

- The component is only responsible for a single responsibility: displaying a Cancel Button
- :bulb: Keeping non-required logic outside of the component improves performance
- :bulb: Because this custom component will accept props that are outside of the [Primitive Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), wrapping it in `memo` will improve performance.

Now, you can migrate all the Buttons in your app that are used for cancel actions. :tada:

```diff showLineNumbers
- import { Button } from '@pluralsight/design-system-button';
+ import CancelButton from './components/Buttons/CancelButton';

function SomeForm(props) {
  return (
    <form>
      ...
-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>
+     <CancelButton type="button" onClick={handleClick} />
    </form>
  )
}
```

But, there's another option that will allow even less work:

#### Example 2 - Style caching

Since a button is a simple component, there's really no need to create a custom component for display. Instead, we can cache the style props we receive from the Headless Styles helper and just reuse those.

```javascript title="styles/buttons.js" showLineNumbers
import { getButtonProps } from '@pluralsight/headless-styles'

export const dangerBtnStyles = getButtonProps({
  sentiment: 'danger',
})

export const actionBtnStyles = getButtonProps()

export const defaultBtnStyles = getButtonProps({
  sentiment: 'default',
})

export const outlineBtnStyles = getButtonProps({
  usage: 'outline',
})

export const textBtnStyles = getButtonProps({
  usage: 'text',
})
```

With this approach, you can use the React JSX `button` and just spread the styles. Depending on your code base, this may be the most scalable approach.

```diff showLineNumbers
- import { Button } from '@pluralsight/design-system-button';
+ import { dangerBtnStyles } from './styles/buttons';

function SomeForm(props) {
  return (
    <form>
      ...
-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>
+     <button {...dangerBtnStyles.button} type="button" onClick={handleClick}>Cancel</button>
    </form>
  )
}
```

:::tip

If you have a larger code base, combining these two approaches might allow for a better fit with long-term development. The flexibility is up to you! :smile:

:::

#### Example 3, CSS-in-JS

If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled-components.

```typescript title="components/CancelButton.tsx" showLineNumbers
import styled from 'styled-components'
import { getButtonProps } from '@pluralsight/headless-styles'

const CancelButton = styled.button`
  ${getJSButtonProps({
    sentiment: 'danger',
  }).button.cssProps}
`

export default CancelButton
```

Here we are relying on [styled-components](https://styled-components.com/) to create our Button component while Headless Styles manages the styles.

:::caution

When combining Headless Styles with 3rd party libraries, you are not guaranteed a perfect accessbility score for your components since we don't own those code bases.

:::

### Step 3 - Rinse and repeat

Now that we have a few examples on how you can successfully migrate your application, find what works best for you and use that for all the components. Only your team knows which patterns scale the most for your specific projects.

## Advanced Topics

### Themeing

Headless Styles delivers a multi-theme experience by default. To learn more about our default themes and how you can implement or customize them, check out the [Design Tokens Theme page](../tokens/colors.mdx#themes).

### Migrate slowly

At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration unless you have too.

**We recommend creating a new branch and if possible, slowly migrate each component when you are able to make time** without forcing a frankenstiened Classic/v2 experience which will just cause more issues.

For example, here is a possible work-flow within a real world scenario:

#### Sprint 1

- Create a new branch to start migration (**feat/ds-migration**)
- Some new Feature
- Bugfix

#### Sprint 2

- **feat/ds-migration**, migrate Cancel Buttons
- Feature update
- Bugfix

#### Sprint 3 (Tech-debt week)

- **feat/ds-migration**, fully migrate & merge into main branch

### You do you

Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our packages but only **your team** knows what is best migration path for your project.

When your team is preparing for your migration, use our examples as that - examples - and do what makes the most sense in your project (for maintainability and scalability).

:::tip

Only use 3rd-party libraries with Headless Styles if you are _already using them_. Adding an additional library to Headless Styles as a choice only creates more work for your team and doesn't guarantee a fully accessbile and performant UI (which our native API does).

:::

_See something missing on this Migration page? Click the "Edit this page" link in the bottom left corner to submit a new PR with the updates you would like to see!_

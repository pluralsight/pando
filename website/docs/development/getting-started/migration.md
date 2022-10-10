---
tags: [Development, Getting Started, Migration, PSDS Classic]
title: Migration
---

<strong>
  <p className="page-subheadline" markdown="1">
    Learn how to migrate from <a href="https://github.com/pluralsight/design-system" target="_blank" rel="noopener noreferrer">PSDS Classic</a>.
  </p>
</strong>

Any major release or new framework has its breaking changes and PD isn't an exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed below the recommended migrations steps, along with solutions for the most common problems you might face.

## Why should you migrate?

In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in it. **Even if you don't plan to use the entire PD suite** your projects will still get benefits from the upgrade.

- Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences
- A renewed focus on performances and good practices (we plan on having a public dashboard soon)
- Improved user experience for various projects (scalable and framework agnostic)
- New capabilities (can work with any tech stack so you can pivot easier)

And of course a very active development cycle.

## Step by step

:::note

Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate **without introducing breaking changes**.

:::

The biggest benefit of PD is that it _only owns styles and accessbility_ and _is not a component library_ which means you can scale or customize to whatever your situation may require.

Below we'll look at migrating the Button component which will be the same pattern you can use for all the PD use cases.

### Step 0 - Add the setup

To make sure you get the intended visual result of Headless-styles, add (or replace) our font and normalize setup in your project HTML `head`:

```html title="Add required CSS Reset setup"
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
  href="https://unpkg.com/@pluralsight/design-tokens/fonts.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@pluralsight/design-tokens/npm/normalize/normalize.css"
/>
```

:::note

We have changed our styling rules since Classic, so there may be some visual breaking changes you will need to update outside of this example (i.e. typography, etc.).

:::

### Step 1 - Installation

In order to use PD, we need to get it into your project first. For most projects, you will only need to install the headless-styles and icons packages.

```bash npm2yarn
npm install @pluralsight/{headless-styles,icons}
```

All of our packages are lightweight because they don't rely on a laundry list of dependencies or required dependencies to install, so you don't have to worry about adding additional overhead to your bundle size.

### Step 2 - Create

Since Headless-styles is not a component library, you will create a new Button component in your project. This will allow you to have full control of your implementation while PD provides the styles and accessibility needs.

:::tip

It is considered a React/Component library best practice to create Button components with a **specific purpose**. An example would be to create an "EditButton" or "PrimaryButton". This helps you to give it a single responsiblity and reduce the props. **This design by nature will have less risk of bugs and code impact.**

:::

In this example, we are creating a `CancelButton` for your project.

```jsx title="components/Buttons/CancelButton.tsx"
import { getButtonProps } from '@pluralsight/headless-styles'
import type { ButtonOptions } from '@pluralsight/headless-styles/types'

// 💡 Keeping logic out of your components improves performance
const cancelBtnProps = getButtonProps({
  sentiment: 'danger',
})

export default function CancelButton(props: ButtonOptions) {
  return (
    <button {...props} {...cancelBtnProps.button}>
      Cancel
    </button>
  )
}
```

Now, you can migrate all the Buttons that are used as cancel actions to use the newly created one. What's even better is now you have full control over the Button! :tada:

This approach allows you to have an easier and low risk migration path without forcing a tech-debt lump that must ship everything at once.

### Step 2 - CSS-in-JS example

If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled-components.

```typescript title="components/CancelButton.tsx"
import styled from 'styled-components'
import { getButtonProps } from '@pluralsight/headless-styles'
import type { ButtonOptions } from '@pluralsight/headless-styles/types'

const CancelButton = styled.button`
  ${(props: ButtonOptions) =>
    getJSButtonProps({
      sentiment: 'danger',
      size: props.size ?? 'l',
    }).button.cssProps},
`

export default CancelButton
```

### Step 3 - Replace

Now that you have created your new component, depending on your migration strategy, you can search all for `appearance={Button.appearances.secondary}` and update the code with your new `CancelButton`.

If you follow the examples in this guide, your `CancelButton` will automatically accept all HTML Button properties which means that you will have a new Button API that is more flexible and easier to read/maintain for all developers.

```jsx title="Old Button"
import Button from '@pluralsight/ps-design-system-button'

...

<Button
  appearance={Button.appearances.secondary}
  onClick={handleCancel}
>
  Cancel
</Button>
```

Now becomes

```jsx title="New Button"
import CancelButton from 'components/CancelButton'

...

<CancelButton onClick={handleCancel} type="button" />
```

## Migrate slowly

At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration. Taking that route not only sucks the life from your team but also risks introducing bugs through natural human error of being overwhelmed by large PR's or rubber stamping.

## You do you

Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our packages but only **your team** knows what is best for your project.

When your team is preparing for your migration, use our examples as that - examples - and build your components for what makes the most sense in your project (for maintainability and scalability).

We will always have you covered for styles and accessbility, but your team will be the ones maintaining your project which means you know the best path for creation.

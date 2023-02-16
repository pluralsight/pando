---
tags: [Development, FAQ, Getting Started]
title: FAQ
---

Missing something? Check out some of these common questions first.

If you still can't find what you're looking for, you can refer to our [support page](https://github.com/pluralsight/pando/discussions/categories/q-a)

## I :heart: Pluralsight Design! How can I support the project?

There are a few ways to support Pluralsight Design:

<!-- TODO: Update Twitter link when account created. -->

- **Spread the word**. Evangelize Pluralsight Design by [linking to design.pluralsight.com](https://design.pluralsight.com) on your website - every backlink matters. Follow us on [Twitter](https://twitter.com/pluralsight), like and retweet the important news. Or just talk about us with your friends.
- **Give us feedback**. Tell us what we are doing well or how we can improve the project. Please upvote [the discussions](https://github.com/pluralsight/pando/discussions) you are interested in seeing answered. Or upvote (:thumbsup:) [the issues](https://github.com/pluralsight/pando/issues) you are most interested in seeing resolved.
- **Help new users**. You can answer questions on the [Q&A discussion](https://github.com/pluralsight/pando/discussions/categories/q-a) or our [issues](https://github.com/pluralsight/pando/issues).
- **Make Changes happen!**
  - Edit the documentation. Every page on this site has an "Edit this page" link in the bottom left.
  - Report bugs or missing features by [creating an issue](https://github.com/pluralsight/pando/issues/new/choose) or [starting a new discussion](https://github.com/pluralsight/pando/discussions).
  - Review and comment on existing [pull requests](https://github.com/pluralsight/pando/pulls) and [issues](https://github.com/pluralsight/pando/issues).
  - Improve our documentation, fix bugs, or add features by [submitting a pull request](https://github.com/pluralsight/pando/pulls).
- **Star the repo**. The quickest way to help us get a win is by clicking that :star: button in Github!

## Why doesn't your suite provide a components package?

Since the first concept of a component framework (Polymer), components have swept the frontend industry introducing us to such libraries as React, Vue, and Svelte. Even Angular joined the club! However, this concept quickly changed the UI libraries we have known to be frontend vendor specific (MUI - React, React Bootstrap, etc.). This movement has been great in helping us understand how HTML elements work and provide a great experience to users with the frameworks we have chosen to use.

However, in the past couple of years, we have realized that just because we _can_ create component libraries...**doesn't mean we need to**. This school of thought has brought us into the "headless" era where we can provide the maximum flexibility to consumers without sacrificing the control for them (i.e. we control what matters, you control the actual component).

To put it simply, in order to give our users the most flexibility so they can have whatever starting point or tech stack they would like, going "headless" is the answer. Having a plain Javascript library (headless-styles) will always scale better than a vendor-specific library (i.e. Vue, etc.).

:::tip

Are you someone who would like to see a components package in the future? [Contribute to our discussion](https://github.com/pluralsight/pando/discussions/577) on the topic.

:::

## What packages are available for mobile platforms?

Because mobile platforms are fundamentally different than the web, only the `design-tokens` package is available for native mobile platforms (i.e. all iOS and Android). However, `design-tokens` does come with everything you could possibly need for building UI (web and mobile).

This is why we recommend _only_ using the `design-tokens` package if you want the most flexibility and own as much as possible to prevent roadblocks from releases.

## What is a "headless style"?

The term "headless" just refers to creating a function that works along with a component execution. This means that instead of exporting a framework specific component, we are just exporting a vanilla Javascript function that returns an Object which contains all the accessbility and style properties you need for the best UI presentation. How you choose to use it, is completely up to you - and there are a _thousand_ different ways to use headless functions to the benefit of your own project.

Instead of this:

```jsx title="Old way via a component library"
// ❌ Only compatible for React and restricts the API to public props
<Button appearance="Primary">Click me</Button>
```

You can do this (in any framework or library - here we are combining MUI with headless-styles):

```jsx title="New way via headless-styles"
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { getButtonProps } from '@pluralsight/headless-styles'

// 💡 Keep the function out of the component for better performance
const { cssProps } = getButtonProps()

const DefaultButton = styled(Button)({
  ...cssProps,
})

function ActionButton(props) {
  return <DefaultButton noRippleEffect>{props.children}</DefaultButton>
}

export default ActionButton
```

Of course, our native package with plain JSX html tags will gain you the biggest performance boost (i.e., not stacking it with another UI library), but you can easily see how much more flexible headless options are. Your imagination is your guide.

## Are your packages compatible with React 18?

Yes! We build our libraries using React 18 concurrent mode during development to ensure our products will be compatible out the door so you can keep moving your apps forward to have the best user experiences. :rocket:

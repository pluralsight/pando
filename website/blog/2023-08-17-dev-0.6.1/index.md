---
slug: v0.6.1 release
title: 0.6.1 Release
authors: [casey]
tags: [pluralsight, development, v0.6.1 beta release, react]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

New React components, a11y libs, and a bright future ahead! :fire:

<!--truncate-->

## React

We are excited to announce some new React components that are now available for you to use in your apps!

### New Components

#### [ActionMenu](https://design.pluralsight.com/docs/reference/components/action-menu)

First up is the [ActionMenu](https://design.pluralsight.com/docs/reference/components/action-menu) which brings together a submit button and a dropdown menu into one component. This is a first to Pluralsight but is commonly used all over Github.

#### [For](https://design.pluralsight.com/docs/reference/components/for)

For...when you need to iterate over some data, we have the [For](https://design.pluralsight.com/docs/reference/components/for) component which is another Solid-JS inspired API that helps you render a list in a declarative (code base) and performant (customer experience) way.

#### [Tabs](https://design.pluralsight.com/docs/reference/components/tabs)

Last, we have the [Tabs](https://design.pluralsight.com/docs/reference/components/tabs) family which is a set of components that help you build a tabbed interface. Fun fact, it also handles [heavy data loading](https://design.pluralsight.com/docs/reference/components/tabs/#dynamic-tabs) for you!

### Developer Experience

The new APIs also ship JSDOC comments to help you understand how to use the components right where you are in your IDE.

We have also updated the build process so you can import types from the library directly. This means you can now do this:

```tsx
import { For, type ForProps } from '@pluralsight/react'
```

From this point forth, **all** of the Pando packages will use this build process.

### Future features?

We are about almost feature complete for our v1 release. The only thing we are missing is a few more components mentioned in our [Library Status Discussion](https://github.com/pluralsight/pando/discussions/1312). We are closer than ever!

But that's not all for React! We have a few more things to announce...

## React-aria

We have officially launched our [React-aria](https://www.npmjs.com/package/@pluralsight/react-aria) library which is a set of **high performant** React hooks that help you build accessible components. This is used internally in the React library so there is no need to install it when using Pando.

As Pando has matured we have realized that we need to start separating our a11y and styles libraries. This is the first step in that direction.

The new APIs also ship JSDOC comments to help you understand how to use the components right where you are in your IDE.

## Headless-styles

With the introduction of React-aria, we can now update our [Headless-styles](https://www.npmjs.com/package/@pluralsight/headless-styles) library to own only styling which will help the library scale long-term. We have started this migration with the [new components](#react) mentioned above.

The new APIs also ship JSDOC comments to help you understand how to use the components right where you are in your IDE.

## What's Next?

We have very **BIG** changes in store for our future. This means that we will probably ship one more minor release that contains the final components for the React lib, then we will be moving to the official v1 release.

### v1 Release

We are planning on releasing v1 in the next few months and will bring a new developer experience that is the best Pando (or Pluralsight) has ever seen. Here is the high level details of what you can expect:

#### Pando CLI

In v1, we will be introducing a new CLI that will help streamline using Pando. This will help you setup and maintain anything Pando related in your app through automation. :fist:

Example of a future command:

```bash
npx pando setup --typescript
```

This command would setup your app with all the necessary configs and dependencies to use Pando with Typescript. Likewise, we will have a command that will help you migrate from version to version. :tada:

#### Panda CSS :panda_face:

In v1, Headless styles will migrate to [Panda CSS](https://panda-css.com/) which will help create consistency across all of our teams regarding styling libraries. This means that each user of Pando should _only_ use Panda CSS for styling. Panda does what Headless-styles was meant to do long-term and is very easy and scalable to use. Likewise, it natively supports close to any JSX-like syntax (including Svelte) which means that if and when we need to switch technologies - teams can still use Pando without worry.

The CLI above will install and setup a panda.config.ts file for you to use in your app. This will allow your team to have a solid styling foundation that is both easy to use and scale whenever your team needs to deviate from Pando.

#### Github Actions

We will also be introducing a Github Actions workflow to help quality check our code-bases to ensure everyone is on the latest version of Pando and only using Panda-CSS. :rocket:

One of our biggest goals with Pando is to help provide a stable structure for the styling FE tech stack at Pluralsight. This is very big problem with the current product that is loading anywhere from up to 5 different styling libraries at once. :no_good:

This will help us ensure that we are delivering as high performant of a product for our customers as possible, while also making it easy for our teams to build new features and context switch successfully if there is ever a need for teammates to move around.

## Future Ideas

Interested in where we are going or have a new idea of your own? Create a [new discussion](https://github.com/pluralsight/pando/discussions/new/choose) or submit a [new RFC](https://github.com/pluralsight/pando-rfcs#what-the-process-is)!

Want to help us get to v1 faster? We are always looking for more contributors! Check out our [Contributing Guide](https://design.pluralsight.com/docs/learn/contributing/) to get started.

## Thanks :tada:

This release wouldn't be possible without the contribution of all the teams who have already started using the React library in addition to contributing to our RFC for the design of it!

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/learn/get-started/installation/).

```bash npm2yarn
npm install @pluralsight/{react,headless-styles,icons}@0.6.1
```

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/pando/discussions).**

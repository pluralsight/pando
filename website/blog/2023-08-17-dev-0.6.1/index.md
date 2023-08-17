---
slug: v0.6.1 release
title: 0.6.1 Release
authors: [casey]
tags: [pluralsight, development, v0.6.1 beta release, react]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

Today marks a big milestone for the design system as we happily introduce the Pando React library and discuss our future! :tada:

<!--truncate-->

## Docs

We have a pretty big update to share regarding our docs! We do our best to constantly test and research current standards to make sure we are always presenting the best solution that matches our [team standards](https://design.pluralsight.com/docs/learn/about-pando/versioning) and have come to realize that we have outgrown our current tech [Docusaurus](https://docusaurus.io/).

There are quite a few pros with DS, but the cons for us now outweigh them and in the future, we will be migrating to a more scalable solution via [Astro](https://docs.astro.build/en/getting-started/). :rocket:

For now, we have a couple of changes:

### Single Version Docs

From this point forth, to prepare for v1 and match our [version policy](https://design.pluralsight.com/docs/learn/about-pando/versioning), we will be using a single version docs with [Badges](https://design.pluralsight.com/docs/reference/components/badge) to signify "next" APIs and [Admonitions](https://design.pluralsight.com/docs/reference/components/admonition) for deprecation notices and other information.

We have all the APIs in a good place for v1 and only plan on introducing one more breaking change via Theme tokens, which we will talk about in the later section of this blog.

### All React

From this point forth, all the docs will reference the React component library due to the time and effort we spent building it. Our original goal for Pando was to be platform agnostic, however the reality of Pluralsight and our teams are that we are devoted to React. So until that changes, we will keep it simple and just promote the easiest solution for developers to use (which is highly customizable, accessible, and performant).

Now, let's talk about that new React library!

## React

We now offer a composable naturally customzible library that helps developers become better React engineers. This is something that most your common UI libraries have missed over the years (for some reason) and we are choosing to fill the gap.

What does that mean, though?

### React Element APIs

All of our components outside of a few "complex ones" extend native React JSX elements. This means, instead of having to learn which properties are exposed or "allowed" - if React allows it for X JSX.Element, so does our API.

This also means that instead of needing to learn what to expect from Pando, you can just reference the Source of Truth - React.

### Full customization

The same can be said about customizing. Out of the box, there are _at least_ 4 different ways to customize components:

1. Unused class names at every level
2. The `className` prop
3. The `style` prop
4. Headless-styles library (honestly should never be needed)

No need for learning new properties or intensive customization logic - just use the styling design you are already using in your project and use React how it was meant to be used. :wink:

### Browser related components

Our composable design builds off the browser APIs which takes helping to learn and use the Pando React library that much easier.

You can see an example of how we have specific [Confirm](https://design.pluralsight.com/docs/reference/components/confirm-dialog) and [Prompt](https://design.pluralsight.com/docs/reference/components/prompt-dialog) Dialogs that matches the Javascript API but enhances it with Promises.

### React future features?

We are about 95% done with the React library, but there are still a few components we are getting ready to build and ship within the next few weeks that you can [check out in our discussion](https://github.com/pluralsight/pando/discussions/1312).

## What's Next?

From this point until v1 it's all about the **stabilizing** and **we need your help!**

In order for us to make sure our system is ready for mass integration, we need more early adopters to test out migrating in their apps. This is the only way we can fix or improve our library before we release the official v1.

### Early Adopter Questions

If you are someone that would like to test our migration with your team, ask yourself these questions during your experience:

- **Was this a good developer experience?** If the answer is "no" or anything similar to "not really", [start a new discussion](https://github.com/pluralsight/pando/discussions) to help us become aware of your experience and learn how we can improve Pando.
- **Is there something that feels buggy?** [Submit a new issue](https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+) so we can fix it!

We value all feedback and keep a pulse on all of the above and want to make sure v1 has all the features or bugfixes needed to ensure a satisfactory experience with everyone! :tada:

## Future Ideas

Interested in where we are going? Check out our [White-boarding Sessions](https://github.com/pluralsight/pando-rfcs/wiki) to see what ideas we are experiementing with on a weekly basis.

A high level of some developer goals (that may change) next quarter are:

- Moving to a utility style library under the hood (UnoCSS)
- Migrating to pnPm
- Segrating styles and a11y

## Thanks :tada:

This release wouldn't be possible without the contribution of all the teams who have already started using the React library in addition to contributing to our RFC for the design of it!

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/learn/get-started/installation/).

```bash npm2yarn
npm install @pluralsight/{react,headless-styles,icons}
```

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/pando/discussions).**

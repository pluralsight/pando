---
slug: v0.7.1 release
title: 0.7.1 Release
authors: [casey]
tags: [pluralsight, development, v0.7.1 beta release, react]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

Final Beta before the official v1 release! :rocket:

<!--truncate-->

## React

We are excited to announce some new React components that are now available for you to use in your apps!

### New Components

#### [Popover](https://design.pluralsight.com/docs/reference/components/popover)

First up is the [Popover](https://design.pluralsight.com/docs/reference/components/popover) which allows users to see some interactive meta data in the UI.

#### [Tooltip](https://design.pluralsight.com/docs/reference/components/tooltip)

For...when you need to display helpful static message, there's the [Tooltip](https://design.pluralsight.com/docs/reference/components/tooltip)! This API is the only API you'll find in any open-source library that allows you to use a tooltip by just adding attributes to your existing JSX! This is a first for Pluralsight history and the "component world" in general.

### Future features?

As of this release, we are officially "feature complete" for the React library. This means that we will not be adding any new components or features to the library until we release v1. We will be focusing on building the Pando CLI and integrating Panda-CSS in our ecosystem until then.

## Headless-styles

Nothing has changed in the Headless-styles library since the last release but we wanted to proactively announce it's official deprecation in favor of Panda-CSS. We will be removing this library in the next major release but it will of course still live on in NPM land.

## Design Tokens

We've updated a couple of token values in the `action` sentiment to be more accessible. There is no change to token names - just the values returned from them. The update is so minor that most people won't even notice the change.

## What's Next?

We will be heads down working on the Pando CLI and Panda-CSS until the v1 release. We will also be working on a Github Actions workflow to help quality check our code-bases to ensure everyone is on the latest version of Pando and only using Panda-CSS to help create consistency across all of our teams regarding styling libraries and improve performance of the Pluralsight product sweet for our customers.

If you want to learn more about the v1 design, check out our [previous blog post](https://design.pluralsight.com/blog/v0.6.1%20release#v1-release).

## Future Ideas

Interested in where we are going or have a new idea of your own? Create a [new discussion](https://github.com/pluralsight/pando/discussions/new/choose) or submit a [new RFC](https://github.com/pluralsight/pando-rfcs#what-the-process-is)!

Want to help us get to v1 faster? We are always looking for more contributors! Check out our [Contributing Guide](https://design.pluralsight.com/docs/learn/contributing/) to get started.

## Thanks :tada:

This release wouldn't be possible without the contribution of all the teams who have already started using the React library in addition to contributing to our RFC for the design of it!

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/learn/get-started/installation/).

```bash npm2yarn
npm install @pluralsight/{react,headless-styles,icons}@0.7.1
```

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/pando/discussions).**

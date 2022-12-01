---
slug: v0.3.1-beta-release
title: Announcing Beta Release
authors: [casey]
tags:
  [
    pluralsight,
    development,
    v0.3.1-beta-release,
    headless-styles,
    ui-library,
    design-tokens,
    react-utils,
  ]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

Today marks a big milestone for the developer suite as we happily introduce the Beta version! :tada:

<!--truncate-->

## Beta Cometh

As of today we are [feature complete](https://github.com/pluralsight/tva/projects/2) for all of our packages! This means that from this point forward, we are focusing on delivering a stable "rc" release. In order to do this we need _YOU_, the early adopter, to test out migration and help us reveal the areas we can improve our packages. :zap:

## Design Tokens

Thanks to [Dan Davidson](https://github.com/dan-davidson-ps), we have an improvement for the Normalize.css file to support setting the `background-color` to help ease migration from Classic.

:::tip

Interested in learning more about Migration? Check out the [NEW Migration docs](https://design.pluralsight.com/docs/development/getting-started/migration).

:::

## Mobile support

Thanks to [Cassidy Swallow](https://github.com/cantocass), we have full Android/Kotlin support for our Design Tokens! This is the first time in Pluralsight history that a design system has supported both mobile and web teams and it only gets better from here!

:::note

We also support iOS/Swift teams, but need some help verifying if there needs to be more work done. If you are a iOS developer, please [check out this issue](https://github.com/pluralsight/tva/issues/724).

:::

## Headless Styles

A massive update in this package delivers all the style helpers for the components available to designers in the new Web UI Kit. Everything from [Grid helpers](https://design.pluralsight.com/docs/development/headless-styles/Grid) to [Tabs](https://design.pluralsight.com/docs/development/headless-styles/Tabs), Headless styles is now Web Kit complete!

:::note

Classic is **not** a 1:1 comparison to our current system. When Classic was created, Pluralsight was a single product brand. Now that we are multi-product, the new UI Kit acts as the "core" library allowing teams across all products to own their own custom solutions where needed.

:::

### New Style Objects

Most people wonder why we don't offer a Component library for our new system. The reason is quite simple: in a world full of Component libraries, we don't need another one. Let's face it, the reality is that for the people who use them, there are plenty of loyalists out there.

This is where Headless Styles shines. Instead of forcing another component library, we have built a system that allows people to _easily extend the libraries they already love._ :tada:

In Beta, we introduce a new export path that allows you to extend your library of choice even more easily! This means that your team can keep using the tech stack you already love and utilize the power of Headless Styles to customize the themes at your convenience!

Special thanks to [Josh Degraw](https://github.com/josh-degraw) for testing out Headless Styles migration with v5 of MUI and helping us improve our library. :heart:

:::note

Interested in learning more about customizing 3rd party component libraries with Headless Styles? Check out the [NEW Customization Docs](https://design.pluralsight.com/docs/development/headless-styles/customization/components).

:::

## React Utils

Beta introduces a ton of new hooks for people who are React users. Everything from [Preloading Images](https://design.pluralsight.com/docs/development/react-utils/use-preloaded-img) to [Autoformatting Dates](https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date), we have it covered!

Check out the latest hooks in the [React Utils docs](https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date).

## What's Next?

From this point until v1 it's all about the **stabilizing** and **we need your help!**

In order for us to make sure our system is ready for mass integration, we need more early adopters to test out migrating in their apps. This is the only way we can fix or improve our library before we release the official v1.

### Early Adopter Questions

If you are someone that would like to test our migration with your team, ask yourself these questions during your experience:

- **Is this easy to use for how we need to use it?** If the answer is "no" or anything similar to "not really", [start a new discussion](https://github.com/pluralsight/tva/discussions) to help us become aware of your experience.
- **Is there something that feels buggy?** [Submit a new issue](https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+) so we can fix it!

We value all feedback and keep a pulse on all of the above and want to make sure v1 has all the features or bugfixes needed to ensure a satisfactory experience with everyone! :tada:

## Thanks :tada:

Some features in this release wouldn't be possible without the contribution of the following people:

- [Cassidy Swallow](https://github.com/cantocass)
- [Dan Davidson](https://github.com/dan-davidson-ps)
- [Kayden Thomson](https://github.com/kaydenthomson)
- [Josh Degraw](https://github.com/josh-degraw)

## Upgrading

```bash
# npm
npm install @pluralsight/{headless-styles,react-utils}@latest

# Yarn Classic
yarn upgrade @pluralsight/{headless-styles,react-utils}@latest

# Yarn Berry
yarn up @pluralsight/{headless-styles,react-utils}@latest
```

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)
or the [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)
of whichever package you are interested in using.

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/tva/discussions).**

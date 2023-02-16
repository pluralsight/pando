---
slug: v0.4.1-rc-release
title: Announcing RC Release
authors: [casey]
tags:
  [
    pluralsight,
    development,
    v0.4.1 rc release,
    headless-styles,
    ui-library,
    design-tokens,
    react-utils,
  ]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

Today marks a big milestone for the design system as we happily introduce the RC version and our official name, **Pando**! :tada:

<!--truncate-->

## Welcome to Pando

That's right! We are proud to introduce the world to the official Pluralsight Design System suite name - **Pando**. You may recognize this name from the latest Disney animated movie (awesome timing) [Strange World](https://movies.disney.com/strange-world) which ties the name for its main plot (no spoilies).

For those that don't Disney, let's break down what led us to the name Pando.

### What's the why of our system?

The core vision of our team is different from the average Design System team in the industry. Our goals are **not** to just build another system that ultimately leads to the same problems every company faces - flexibility. Ironically, even though our industry is aware of this problem - we keep building the same thing over and over again with only minor tweaks (see any Design System or UI library that exists).

Because of this, our team is choosing to approach our Design System from a different perspective of building a system with the standard rules (a framework that produces a direct result of our brand visually), but that allows flexibility _beyond_ the basic need in a way that scales with the company and time (i.e., technology is not static, the moment we build for a single library or concept, like Components, is the moment we have failed).

So what **is** the core vision of our team? To put it plainly, our team's vision is to build an **ecosystem** that allows both designers and developers to use an agnostic pattern that will yield the same standard results, but in a way that is more flexible and scalable than Components.

> The foundational roots to a better design system using Pluralsight Design.

### What's the why of Pando?

Having a better understanding of what our long-term vision is now, let's connect the dots of the actual meaning of the word "Pando".

> "I spread" - An aspen tree located in Utah that originated from a single seed and spreads by sending up new shoots from the expanding root system."

[Check out the USDA Forest Service Definition](https://www.fs.usda.gov/detail/fishlake/home/?cid=STELPRDB5393641#:~:text=When%20the%20Pando%20clone%20was,from%20the%20expanding%20root%20system.)

Just as the Pando starts from a single seed and develops an interconnected root system to grow and multiply, our long-term vision is to build a tool that helps our company (and others) to evolve in the same way:

1. Minimal to 0 work for teams regarding branding updates (huge)
2. A flexible lego type system for designers to creatively produce the results they need
3. A developer experience that is easier than using components

Are we there yet? **Absolutely not.** Doing something this big requires time, but we are on a successful path that is leading to that spot which is great news. :tada:

Now let's talk about what has changed in the RC release. :zap:

## Design Tokens

In order to scale our tokens better to include mobile platforms, we have internally rebuilt the core engine which allows us to move faster and is more organized. This release includes:

- **FEAT**: Support for Android (via Compose) and iOS (via Asset Catalog) Platforms! :tada:
- **FEAT**: [Theme class names now use `pando-<theme>`](https://design.pluralsight.com/docs/development/tokens/colors#themes).
- **FIX**: Missing light theme tokens and some token values in general via design evolution

Special thanks to [Kayden Thomson](https://github.com/kaydenthomson) who helped us validate our iOS Asset Catalog assets for this release and [Joe Moore](https://github.com/ThatJoeMoore) for the theme class inspiration via a [Discussion](https://github.com/pluralsight/pando/discussions/990).

### Normalize Updates

- **FEAT**: Our normalize.css now includes scrollbar styles by default. :tada:
- **FEAT**: [Lists styles are now "opt-in" via class names.](https://design.pluralsight.com/docs/development/headless-styles/Typography#lists)
- **FEAT**: [We now have opt-in display title class names.](https://design.pluralsight.com/docs/development/headless-styles/Typography#display-headings)
- Heading style updates via design evolutions.

:::tip

Interested in learning more about migrating to Pando? Check out the [Migration page](https://design.pluralsight.com/docs/development/getting-started/migration).

:::

## Headless Styles

Another massive update that is just too large to list, so we'll just hit some important parts:

- **FEAT**: Headless Styles is now fully tree-shakable in all environments! :tada:
- **FEAT**: Select API now includes a [Select Option API](https://design.pluralsight.com/docs/development/headless-styles/Select).
- **FEAT**: [The FormLabel API now supports the use of non-visible labels](https://design.pluralsight.com/docs/development/headless-styles/FormControl#formlabeloptions).
- **FEAT**: General UI style updates throughout the project via design evolution.
- **FEAT**: Now use `disabled` attribute on all APIs for better compatibility with 3rd party libraries.
- **FIX**: [The Tabs API now uses the correct plural naming](https://design.pluralsight.com/docs/development/headless-styles/Tabs).
- **FIX**: Improved types throughout the APIs!
- **FIX**: General high-level bugfixes throughout the project.

A special thanks to [Joe Moore](https://github.com/ThatJoeMoore) and [Josh Degraw](https://github.com/josh-degraw) for their contributions in helping us improve and get Headless-styles one step closer to its full potential! :tada:

:::caution Pando is not Classic

Pando is **not** a 1:1 comparison to Classic. When Classic was created, Pluralsight was a single product brand. Now that we are multi-product, Pando acts as the "core" library allowing teams across all products to own their own custom solutions for _team specific needs_.

:::

## Icons

Icons ships new Theme icons! Check out our new SunIcon and MoonIcon in the [common actions section](https://design.pluralsight.com/docs/development/icons/iconsList#common-actions).

## React Utils

In this release of React utils we add a couple of new features:

- **FEAT**: React Utils is now fully tree-shakable for all platforms! :tada:
- **FEAT**: [**NEW** `useTheme` hook that allows type extending](https://design.pluralsight.com/docs/development/react-utils/useTheme)! :tada:

Special thanks to [Nicholas Mackey](https://github.com/nicholasmackey) for his contribution to building the initial version of the `useTheme` hook.

## Docs

Our README pages for each package now includes a visual diagram showing how they are involved in the Pando ecosystem for contributors to understand and contribute more successfully.

[Check out the React Utils README](https://github.com/pluralsight/pando/blob/main/packages/react-utils/README.md#react-utils).

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

## Thanks :tada:

This release wouldn't be possible without the contribution of the following people:

- [Kayden Thomson](https://github.com/kaydenthomson)
- [Joe Moore](https://github.com/ThatJoeMoore)
- [Josh Degraw](https://github.com/josh-degraw)
- [Nicholas Mackey](https://github.com/nicholasmackey)

## Upgrading

```bash
# npm
npm install @pluralsight/{headless-styles,icons,react-utils}@latest

# Yarn Classic
yarn upgrade @pluralsight/{headless-styles,icons,react-utils}@latest

# Yarn Berry
yarn up @pluralsight/{headless-styles,icons,react-utils}@latest
```

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)
or the [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)
of whichever package you are interested in using.

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/pando/discussions).**

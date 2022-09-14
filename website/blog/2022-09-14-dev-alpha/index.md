---
slug: v0.1.0-alpha-release
title: Announcing Alpha Release
authors: [casey]
tags:
  [
    pluralsight,
    development,
    v0.1.0-alpha-release,
    headless-styles,
    ui-library,
    design-tokens,
    react-utils,
  ]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

Today, marks a big milestone for the Design System developer suite as we happily introduce the alpha version! :tada:

<!--truncate-->

## Alpha Phase

**Stable APIs are here to stay.**

A lot has changed in the past month (for the better!) from our docs design to our APIs. As scary as this sounds, it brings us into a new era for our users and company in general. As some of you may know, we recently celebrated PS-Refresh day which was another awesome experience that will help drive us into 2023.

In honor of PS-Refresh, we felt that our suite was in a good enough spot to mature it into the next phase of it's life span bringing a shared API design that spans across all of our packages.

Let's dive in! :zap:

## Release Channels

As of alpha, we have a fully automated release channel pipeline which allows users to opt-in to different API experiences.

- **experimental:** All packages with this tag have access to `unstable_` features that are in development mode. We of course, don't recommend ever using this version, unless you just want to stay as green as possible. API's here will more than likely change.
- **next:** The packages with this tag will provide _new_ APIs that we believe are stable enough to use without consequences, but are technically still in the "testing phase". If you need a new feature **now**, or want to test an integration in your project, this is the one.
- **latest:** This is the most stable version of our packages and what we recommend everyone uses.

:::tip

For more details about our release channels, check out the official [Release Channel Guide](https://github.com/pluralsight/tva/discussions/53).

:::

## Versioning

Along with our release channels, we've also updated our version policy to match our standard. The new guide should help set expectations and ease anxiety that you might have for future releases. Thanks to our release channels, we can guarantee releases that are backwards compatible and safe to use (i.e. we will rarely ship a breaking change).

:::tip

For more information about our versioning standards and development practices regarding stability and breaking changes, check out our [Versions Page](https://design.pluralsight.com/docs/development/discover-more/versions).

:::

## Docs

As you might have noticed, our docs have receieved a nice little update to match where the new brand is headed. Additionally, we have re-organized the main nav to be more user friendly.

- **Start Here** is our introductory section for core concepts that span into both design and development. This section also helps readers understand how to use the site more successfully.
- **Design** is the central hub for all the resources a designer may need to reference.
- **Development** is the place where you can find all information regarding the NPM packages we offer in our engineering suite and any other information related to our engineering practices.
- **Blog** where we make announcements for both design and development about meaningful updates.

That's not all, if you look in the top right corner, you will notice a "0.1.0-alpha" dropdown which means our docs officially have a version history! :tada:

If you are ever interested in seeing what is coming in the next release (Beta), just click on the dropdown and choose "Beta 🚧".

## Design Tokens

The alpha version of design tokens introduces a **BREAKING CHANGE**, but includes some really nice features.

### Theme Refresh

After testing our original token theme for a few months, we found that there were some major inconsistencies with the original UI Kit and values being used incorrectly. Likewise, there were a ton of tokens that weren't being used at all. As a result, we re-organized the tokens to work more successfully with the UI Kit and be more functional.

Check out the new [token colors list](https://design.pluralsight.com/docs/development/tokens/colors).

### New Meta Files

There are certain times when using tokens is just not enough and you need some extra help. In alpha, we added 2 new meta-data files to the tokens package.

- **CSS Properties** is a JS file that sources the CSS property definition. If you are using CSS-in-JS, when combined with our [Normalize setup](https://design.pluralsight.com/docs/development/getting-started/installation/#normalizecss), this will allow you to use themes seamlessly without requiring an unnecessary Provider component. This is also what we use under the hood in Healdess-styles for all of our CSS-in-JS API's.
- **Normalized Data** is a raw JSON file of normalized data from our tokens, and makes things like mapping and loops much easier and performant.

:::tip

To learn more about our new Design Tokens, check out the [Web Meta section](https://design.pluralsight.com/docs/development/tokens/intro#web-meta) in the docs.

:::

## Headless Styles

With the token overhaul, by nature, we've had to internally update most of our styles. So, in justifying the work, we went ahead and updated multiple things in this package.

### New Styles

The majority of our helpers were built while the Brand design team was still figuring out the direction that they wanted to take our company. As a result, this dramatically changed some components in the [Web UI Kit](https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1214%3A50531) from Buttons down to Tags. In alpha, all of the helpers now reflect the latest visual styles from our UI Kit.

### New API Design

Another area we enhanced this package is in the overall API design. Some APIs were completely overhauled to be more scalable ([Button](https://design.pluralsight.com/docs/development/headless-styles/Button)) and others just to use a standard naming convention.

With the naming convention, we decided to share the [Semantic Tokens](https://design.pluralsight.com/docs/development/tokens/intro#naming-convention) design to help bring the suite together into a cohesive body.

### Typography Styles

One topic that has always been disconnected from design and engineering in design systems is Typography. Historically, designers of create systems of typography styles that don't really compliment how the browser semantically works with text, which by nature, makes typography less accessible.

We are happy to state that the new Web UI Kit typography styles do just and which makes it the most functional use case to date!

What we mean is that our typography styles **ship with our Normalize setup**, this means that to get a header - just use the HTML syntax for header `h1-6`. To get normal text styles, just us a `p`. What about Lists? Just use the `ul/ol`. \*\*We even ship styles for `code` and `keyboard shortcuts`! :raised_hands:

:::tip

To learn more about text styling, check out the [Typography Page](https://design.pluralsight.com/docs/development/headless-styles/Typography).

:::

### Better Named Components

The final change we made was renaming a few components in the Web UI Kit to better reflect browser API's they are meant to mimic.

- Alert is now [Admonition](https://design.pluralsight.com/docs/development/headless-styles/Admonition)
- Alert Dialog is now [Confirm Dialog](https://design.pluralsight.com/docs/development/headless-styles/ConfirmDialog)

These small changes allow us to scale our kit even further by making more unique Dialogs that serve a purpose (i.e. Prompt Dialog, Alert Dialog, and Modal) or actual alert differences (i.e. Alert, Toast, etc.).

## What's Next?

From this point until v1 it's all about the **features**!

- **Headless-Styles**
  - **FEAT** - Menu, Tabs, Modal, Select, Datepicker, Pagination, Popover, Table, and Tooltip
- **React-utils**
  - **FEAT** - `usePreloadResource` custom hook for a better UI experience via preoloading assets (from images to scripts).

Our next planned release is Beta which should conclude all missing components in the Web UI Kit, unless more are added in the future (always a possibility).

:::tip

For a view of where we plan on going leading up to v1 at Q4, [Check out our 2022 Roadmap](https://github.com/pluralsight/tva/projects/2).

:::

## What about Components?

When we started building the Design Suite at the start of this year, we wanted to make sure we were building something that not only was unique, but something that does not follow trends and potentially fade away after a few years.

As a team, **we believe that the Component design has reached it's full potential** and will soon be "the old way of doing things". We respect and value your opinion if you don't believe this to be true. :heart:

Ultimately, this [along with other reasons](https://design.pluralsight.com/docs/development/discover-more/faq#why-doesnt-your-suite-provide-a-components-package) are why we have moved past components and are building something that is more scalable and lightweight in nature.

Having said that, we also understand there are many people who are not frontend developers that find themselves forced into having to build things on the frontend. These are the users who might actually benefit from using a traditional Components Library if they are unwilling to learn the common practices and skills for frontend development.

So, as a team, we decided to draw up an agreement theorizing how a component library would fit in our suite of tools. What purpose would it solve when working alongside our other packages? Where would the lines in the sand be drawn to prevent duplicated work or responsibility?

So, we created a discussion on our repo that contains a **poll**. We will be monitoring this for the rest of the year. If there is a large enough response, we will consider creating a components package in the future that follows our agreement guidelines.

:::tip

To read the aggreement and contribute to the poll, [check out our Discussion](https://github.com/pluralsight/tva/discussions/577). All we ask is that you approach this topic **without bias** as we will do the same in receiving the results.

:::

## Thanks

Some features in this release wouldn't be possible without the contribution of [Josh Degraw](https://github.com/josh-degraw). :tada:

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
or any [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)
of whichever package you are interested in using.

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/tva/discussions).**

---
slug: experimental-release-30088c
title: Announcing React Utils
authors: [casey]
tags:
  [
    pluralsight,
    0.0.0-experimental-30088c-20220809,
    headless-styles,
    ui-library,
    design-tokens,
    react-utils,
  ]
hide_table_of_contents: false
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). -->

We have exciting news for you today as we continue to stay on track for our
September `alpha` release!

<!--truncate-->

With this announcement, the team is even more confident that the Design System
suite will continue to grow and become a **new standard for custom UI libraries.**

## Experimental Phase

**Don't fear the experimental tag!**

Even though our suite is still in the experimental phase, so far it
has been a rare case that any of our API's change. However, because we are still
building out the final library touches, we feel it's the best version to keep them
until we are "feature complete" for the next month.

:::tip

To follow our progress this year, check out our [2022 Roadmap](https://github.com/pluralsight/tva/projects/2). Our goal is to hit a solid alpha by end of September 2022.

:::

### What are the goals of the experimental release?

For now, **experimental is just a creation phase.** What we are trying to do is very
different than your basic UI library (MUI, Chakra, etc.). Libraries like these
are fine for startups, but at some point in time, lose flexibility on projects
or create **major tech debt problems** due to the nature of a component library
depending on many other 3rd party libraries to exist. **Not to mention that natural
security dependency risk this introduces.**

:point_right: **This is where the PS Design Suite comes in.** :point_left:

Instead of building another component
library (which has been done a countless number of ways already), we are building
a family of tools for you to create **your own library that better serves the
needs of your team and project.**

Each package serves a purpose that directly relates to the flexibility you want
to have in your project. You can use them as a single source, or you can combine
them all to create an ultimate solution. It's up to you.

And the best news is - **our packages are close to 100% dependency free** :tada:.

No more adding 5 additional dependencies just to use a single UI library. No more
getting security issues in your project because X dependency within another
dependency within another dependency has a security bug.

<figure style={{ textAlign: 'center' }}>
  <iframe src="https://giphy.com/embed/SACoDGYTvVNhZYNb5a" width="480" height="360" frameBorder="0" allowFullScreen></iframe>
  <figcaption align="center">Mindblown gif</figcaption>
</figure>

## Headless Styles

We have some new goodies for you:

- **NEW** [Avatar](https://design.pluralsight.com/docs/development/headless-styles/Avatar)
- **NEW** [Alert Dialog](https://design.pluralsight.com/docs/development/headless-styles/AlertDialog)
- **NEW** [Text tLink](https://design.pluralsight.com/docs/development/headless-styles/TextLink)

That's right, we now officially have support that for inline text links! This
will allow your apps to follow a better UI standard and provide great a11y
support for external links.

## React Utils

**We are very excited to introduce this new package for React users!** :tada:

In order to help reduce the code base and responsiblity for teams using React (or our [Headless Styles](https://design.pluralsight.com/docs/development/headless-styles/intro) library), we decided to create [React Utils](https://design.pluralsight.com/docs/development/react-utils/intro)!

:::note

**This library only requires the use of React.** You can use this library without
any of our other packages if you want to just improve the accessbility and UX
in your projects. :kissing_heart:

:::

**This library will deliver custom hooks and other utility functions that will
help you add accessible features for your components in React.** :atom_symbol:

- **NEW** [useFocusTrap](https://design.pluralsight.com/docs/development/react-utils/use-focus-trap): a custom hook for Dialogs/Modals that will trap the
  focus within your dialog when it is active and returns it back to the trigger
  that opened it when removed from the UI.
- **NEW** [useEscToClose](https://design.pluralsight.com/docs/development/react-utils/use-esc-to-close): a custom hook that calls a function when the user presses the
  "Escape" key.

<figure style={{ textAlign: 'center' }}>
  <iframe src="https://giphy.com/embed/70YaDoZ1VqBZ8SgYiz" width="480" height="378" frameBorder="0" allowFullScreen></iframe>
  <figcaption align="center">A woman saying "girl yes"</figcaption>
</figure>

## PWA Docs

As of today, our docs site is **officially a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)!** :tada:
You can now enjoy the experience offline or however
you may choose.

## What's Next?

More big updates to come including continued **features** in Headless Styles,
along with some additional **refactoring**.

- **FEAT** - HS: Add Tabs, Modal, and Menu
- **BREAKING CHANGE** - HS: The Button API will get an overhaul to be more flexible
  and deliver news styles (recent design change).
- **BREAKING CHANGE** - Tokens are getting a refresh to be more scalable and flexible.

### Important

**We don't anticipate any more API breaking changes after the next release**.

This is a very rare situation where we have one which actually justifies making.

The only reason we are shipping these now is due to both Design Tokens and
the HS Button API were our first packages/APIs built at the beginning of the
year. Now that we are almost feature complete and have a better idea of the full
picture - we can make improvements now that will guarantee more success
for the alpa-v1 phase.

## Upgrading

```bash
# npm users
npm install @pluralsight/{headless-styles,react-utils}@experimental

# Yarn Classic users
yarn upgrade @pluralsight/{headless-styles,react-utils}@experimental

# Yarn Berry users
yarn up @pluralsight/{headless-styles,react-utils}@experimental
```

## Installing

If it is your first time using any of our packages, check out our
[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)
or any [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)
of whichever package you are interested in using.

**As always, if you have any questions or ideas, please drop us a thread in our
[Discussions Page](https://github.com/pluralsight/tva/discussions).**

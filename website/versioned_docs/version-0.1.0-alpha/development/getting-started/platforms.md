---
sidebar_position: 3
tags: [Development, Platforms, Getting Started, IE11, Server, Typescript]
title: Supported Platforms
---

<strong>
  <p className="page-subheadline" markdown="1">
    Learn about the platforms that are supported by Pluralsight Design.
  </p>
</strong>

At Pluralsight, we aim to stay in the modern realm vs. spending time and resources on catering to dying browsers.

## Browser

**Pluralsight Design supports the latest, stable releases of all major browser and platforms.**

| Edge  | Firefox | Chrome | Safari (macOS) | Safari (iOS) | IE                         |
| ----- | ------- | ------ | -------------- | ------------ | -------------------------- |
| >= 91 | >=78    | >=90   | >=14           | >=12.5       | 11 (partial to no support) |

An extensive list can be found in our [.browserlistrc](https://github.com/pluralsight/tva/blob/main/.browserslistrc).

## IE 11

**Pluralsight has officially dropped support for IE 11.** However, most of what we use will be compatible but we are not focused on catering to it unless there is demand.

## Server

Pluralsight Design supports [Node.js](https://github.com/nodejs/node) for server-side rendering. This aims to match the [LTS versions that are in maintenance](https://github.com/nodejs/Release#release-schedule) mode.

---
sidebar_position: 2
tags:
  [
    Development,
    Discover More,
    Versions,
    Version Strategy,
    Release frequency,
    Deprecation Policy,
  ]
---

# Versions

Learn how we approach versioning and releases for Pluralsight Design.

## Version strategy

Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Pluralsight Design to thrive.

This page contains the practices we follow to provide you with a leading-edge library, balanced with stability, ensuring that future changes are always introduced in a predictable way.

Pluralsight Design follows [Semantic Versioning 2.0.0](https://semver.org/). Pluralsight Design version numbers have three parts `major.minor.patch`. These numbers increase based on the level of change introduced in a release.

- **Major releases** contain new features. Some developer assistance may be expected during the update although we strive to stay backwards compatible. When upgrading to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs.
- **Minor releases** contain important new features. Minor releases are fully backwards-compatible; no developer assistance is expected during update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release.
- **Patch releases** are low risk and contain mostly bugfixes. There may be very high level (unrecognizable) new features. No developer assistance is expected during and update.

## Release frequency

A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of Pluralsight Design.

In general, you can expect the following release cycle:

- A **major** release every 12 months.
- 1-3 **minor** releases for each major release.
- A **patch** release anytime for urgent bugfixes.

You can follow the [milestones](https://github.com/pluralsight/pando/milestones) for a detailed review of what releases contain.

:::caution

The development, releases, and timing of any features or functionality remains at the sole discretion of Pluralsight Design. The roadmap does not represent a commitment, obligation, or promise to deliver at any time.

:::

## Breaking Changes

Breaking changes are inconvenient for everyone, so we try to minimize the number of major releases to yearly or longer.

Instead, we release new features in minor versions. That means that minor releases are often more interesting and compelling than majors, despite their unassuming name.

## Commitment to Stability

As we change the Design Suite over time, we try to minimize the effort required to take advantage of new features. When possible, we’ll keep an older API working, even if that means putting it in a separate package.

That means we need to make it as easy as possible to upgrade to new versions of our packages; if we make large changes without a migration path, people will be stuck on old versions. We test these upgrade paths on Pluralsight itself – if our team of less than 10 people can update 50,000+ components alone, we hope the upgrade will be manageable for anyone using our packages. In many cases, we write automated scripts to upgrade component syntax, which we then include in the open-source release for everyone to use.

## Gradual Upgrades via Warnings

Development builds of our packages include many helpful warnings. Whenever possible, we add warnings in preparation for future breaking changes. That way, if your app has no warnings on the latest release, it will be compatible with the next major release. This allows you to upgrade your apps one component (or whichever you use) at a time.

Development warnings won’t affect the runtime behavior of your app. That way, you can feel confident that your app will behave the same way between the development and production builds — the only differences are that the production build won’t log the warnings and that it is more efficient. (If you ever notice otherwise, please file an issue.)

## What Counts as a Breaking Change?

In general, we _don’t_ bump the major version number for changes to:

- **Development warnings.** Since these don’t affect production behavior, we may add new warnings or modify existing warnings in between major versions. In fact, this is what allows us to reliably warn about upcoming breaking changes.

- **APIs starting with unstable.** These are provided as experimental features whose APIs we are not yet confident in. By releasing these with an `unstable_` prefix, we can iterate faster and get to a stable API sooner.

- **Alpha and canary versions of our packages.** We provide alpha/next versions of our packages as a way to test new features early, but we need the flexibility to make changes based on what we learn in the alpha period. If you use these versions, note that APIs may change before the stable release.

- **Undocumented APIs and internal data structures.** If you access internal property names like `SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` or `psInternalInstance$uk43rzhitjg`, there is no warranty. You are on your own.

This policy is designed to be pragmatic: certainly, we don’t want to cause headaches for you. If we bumped the major version for all of these changes, we would end up releasing more major versions and ultimately causing more versioning pain for the community. It would also mean that we can’t make progress in improving our packages as fast as we’d like.

That said, if we expect that a change on this list will cause broad problems in the community, we will still do our best to provide a gradual migration path.

## If a Minor Release Includes No New Features, Why Isn’t It a Patch?

It’s possible that a minor release will not include new features. This is allowed by semver, which states **”[a minor version] MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes.”**

However, it does raise the question of why these releases aren’t versioned as patches instead.

The answer is that any change to our packages (or other software) carries some risk of breaking in unexpected ways. Imagine a scenario where a patch release that fixes one bug accidentally introduces a different bug. This would not only be disruptive to developers, but also harm their confidence in future patch releases. It’s especially regrettable if the original fix is for a bug that is rarely encountered in practice.

We have a pretty good track record for keeping our package releases free of bugs, but patch releases have an even higher bar for reliability because most developers assume they can be adopted without adverse consequences.

For these reasons, we reserve patch releases only for the most critical bugs and security vulnerabilities.

If a release includes non-essential changes — such as internal refactors, changes to implementation details, performance improvements, or minor bugfixes — we will bump the minor version even when there are no new features.

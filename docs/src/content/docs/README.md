---
title: Contributing Guidelines
description: Steps to add to the Pando docs
---

## Contributing to Pando docs

The Pando team uses the [diataxis framework](https://diataxis.fr/) to organize documentation content. Each piece of content will fit into one of the following buckets:

1. Tutorials
1. How-to guides
1. Reference
1. Explanation

_Please review the [diataxis docs](https://diataxis.fr/) to determine which bucket the content you are adding should live in_

## Anatomy of the docs, explained

- The main sidebar nav of the docs site is built by the contents of `astro.config.mjs`.
- The main homepage is controlled in `src/content/index.mdx`
- The docs themselves live in `src/content/docs`
  - there are 4 directories within the docs directory
    - explanation
    - guides
    - reference
    - tutorials
  - each of the above directories holds one markdown file per page of documentation

## Steps to contribute to the docs

1. Add a markdown file to one of the directories within the `src/content/docs` directory

   - Make sure to add the appropriate [frontmatter reference](https://starlight.astro.build/reference/frontmatter/#_top) to the top of the markdown file
   - Review the [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) for reference on markdown syntax

1. Add your new doc to the sidebar navigation in the `items` array in `astro.config.mjs` according to whichever bucket is most appropriate

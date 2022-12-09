---
tags: [design, grid, spacing, padding, margin, gap, row, column, template]
title: Layout & Alignment
---

## Description

Create consistent, and easy to follow experiences with our guidelines on layout, alignment, and the grid.

## Alignment

All elements and type within our system default to left alignment (or the leading edge in any particular language). Though, this is subject to internationalization and can change per support for left-to-right (LTR) and right-to-left (RTL) languages, accordingly.

### Exceptions

Exceptions to the default leading edge alignment include:

- Absolutely positioned elements such as close buttons
- Action buttons in overlays, eg. Confirm Dialog
- Status indicator icons in input fields
- Pagination buttons (may be horizontally centered on a page)
- Some table cell content (trail-align numbers, center buttons)
- Avatar/imagery with a title below (centered)
- Separated concerns (heading and subheading on leading edge, 'View all' link on trailing edge)

### Button alignment specifics

- Align buttons to the trailing edge of a container when using to prompt a user to navigate through a sequence, or when confirming an action (on the right for left-to-right languages and on the left for right-to-left languages).
  - The highest emphasis action should be placed near the trailing edge of the container.
- For focused tasks and single-page actions, align starting at the leading edge of the container.

## Grid and layout

We use a responsive 12-column, 24px gutter/gap grid to lay out content within the main content area. This does not include a sidebar navigation area.

Contract gutters/gaps (as well as padding) to 16px when compacting content into smaller areas.

### Layout anatomy

1. Container
2. Global header / Prism
3. Sidebar navigation
4. Main content area
5. Aside content
6. Global footer

### Margins and padding

- 24px/1.5em left/right/top/bottom padding on all containers
- 16px/1em padding on all compact containers
- 32px/2em default vertical separation between sections/cards

## Spacing

Spacing helps organize content, improves general readability and usability, and also implies hierarchy. We solve this via a system of inset, stacking, and inline types of spacing.

### Inset

Inset spacing separates content from the edge of its container via padding, and applies to all 4 sides of a container.

- Default padding on containers is 24px/1.5em
- 16px/1em padding on all compact containers
- Minimum of 4px/0.25em padding on any container

### Stacking

Stack spacing applies consistent top and/or bottom spacing to adjacent elements.

- 32px/2em default stacking spacing (vertical margin or gap) between sections or cards
- Items in a grid or in a row that wraps to a new line will maintain the same vertical spacing as they use horizontally.
- Use 24px/1.5em spacing between larger groups of elements within a container, e.g. space between a header and content, or an image area and content. Also applies to form controls within a form.
- Use 16px/1em spacing between related, non-textual elements in a grid or column, e.g. checkbox/radio lists.
- Use 8px/0.5em spacing between related textual elements, e.g. a list.
- Use 4px/0.25em spacing between elements within a line of text, e.g. required flags and icons.

NOTE: Ensure that the last items in a stack or row do not have trailing margins. Elements should end against the inset padding of the container.

### Inline

Inline spacing applies consistent spacing within a row of content.

- Separate larger elements such as sections or cards by 24px/1.5em
- Separate related elements in a grid or row within a card or container by 16px/1em

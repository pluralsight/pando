---
tags: [design, link, toggle, section]
title: Tabs
---

## Description

Used to alternate between content views within the same context.

## Anatomy/Structure

- Tabs container
  - Tabs
    - Label
    - Border

## Usage

- Use Tabs to switch between content blocks in one space, when space is limited.
- One tab (in most cases the leading tab) should be selected by default.
- Tabs should be arranged in a logical order, in context to what they are presenting.
- At least two tabs are required to utilize this pattern.

### Specs/guidelines

- Tab groups should expand to 100% width of their container.
- Tabs themselves are sized according to their label. See content guidelines.

### Dos and don'ts

- Do not use Tabs to navigate to different areas of a site or page.
- Do ensure the current tab is highlighted in a prominent and obvious manner to the user.
- Do not present multiple rows of tabs. Tabs should not wrap to a new line, and should maintain the visual metaphor of the tab being attached to the content.
- Do keep the tabs pattern on top of the content area that it controls.
- Do pre-select a default tab and content window.
- Do not use Tabs to indicate progress. Use the Progress component instead.
- Do not use Tabs to compare information in two or more groups. This would cause the user to have to switch back and forth to complete a task.
- Do not realign Tabs to the center or trailing edge of the container. Maintain the pattern as presented.
- Do bleed the entire Tabs container to the full width of its parent container.

### Best practices

- Select tab label values that are small enough that the entire set will fit into most views, without labels overflowing. Since horizontal scrolling is an extra action for the user, tabs that are scrolled away may not be accessed as frequently, or at all in some cases.
- If space is available, or small amounts of scrolling are acceptable, opt to _not_ use Tabs, but rather stack the content in place.
- Use Tabs only when users do not need to see content from multiple tabs simultaneously.
- It is recommended to only utilize one tabbed section per page, to keep the experience simpler for users to navigate and understand.

## Content Guidelines

### Microcopy

- Use sentence case for tab labels.
- As a guide for label size, labels should not exceed 15 characters.

### Content considerations

- Use single word labels if possible. Short labels are more scannable, so optimizing for the shortest possible, yet descriptive, label will be best for the user.
- Tabs will not be truncated, though the entire list risks being obscured with overflow if labels are too long.
- Tab labels should clearly communicate the view users will see and the content contained in the view.

## Accessibility

- Users can use keyboards or assistive technologies to select the entire tab group, and then switch between tabs to select content.
  - On a keyboard, users can tab to the tab group, then use the left and right arrow keys to select a tab.

## Behavior

### Overflow

- If tabs do not fit into the row, they will overflow and be clipped off the trailing edge of the Tabs container.
- A horizontal scroll will be enabled to allow users access to overflowing tabs.

### Animation

- The border on active tabs will raise to appear and lower to disappear with animation depending on active and deactivated interaction, respectively.

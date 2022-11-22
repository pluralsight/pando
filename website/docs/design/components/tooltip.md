---
tags: [design, message, description, alt, hover]
title: Tooltip
---

## Description

A tooltip is a brief, informative message that appears when a user focuses on an element.

## Anatomy/Structure

- Content
  - Text
- Arrow

## Usage

- Tooltips should provide useful, additional, or clarifying information to the user, and never any path-critical directions.
- Use tooltips to help identify elements or present small additional supportive bits of supplemental information about an element. E.g. the purpose of an icon button, the alternative text for an image, explanation of a form control label.
- The arrow points to the element that is the trigger for the Tooltip window.

### Best practices

- Consider applying a tooltip to instances of a Switch, to help explain what happens when switched on or off.
- If a lot of Tooltips are being used within a design, consider a redesign. Tooltips should be used sparingly.

### Dos and don'ts

- Do not include actionable elements such as links or buttons in tooltips.

## Content Guidance

### Microcopy

- Use sentence casing in Tooltips.
- Tooltips contain a maximum of 150 characters, or 10 words. When you need to go beyond this limit, consider using a Modal or Popover instead.

## Accessibility

## Behavior

- Tooltips are initiated via focus or hover events on an element. They will close when the element loses focus or the pointer leaves the trigger element.
- The display of the Tooltip will be delayed by 1s to prevent errant opening of tooltips on hover or focus interactions.
- Tooltips will be positioned approximately 0.25ems away from the trigger element
- The Tooltip's arrow can be configured to point to twelve different points outside of the content area.

### Resources/research

- Harley, A. (2015, January 11). _Timing guidelines for exposing hidden content_. Nielsen Norman Group. Retrieved October 6, 2022, from [https://www.nngroup.com/articles/timing-exposing-content/](https://www.nngroup.com/articles/timing-exposing-content/)

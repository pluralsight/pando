---
tags: [design, tooltip, dialog, modal, overlay]
title: Popover
---

## Description

An non-modal overlay with brief, additional content.

## Anatomy/Structure

1. Container
2. Title
3. Content
4. Close button
5. Arrow

## Usage

- Popovers should be used to display additional details or information about an element on a page.
- Popovers should be used sparingly, and only with non-essential information to help users that are not familiar with the user interface.
- Allowed Popover triggers include text and icons such as info-circle.
- Associated with a trigger, Popovers do not prevent other actions on the page by the user.
- Width and height of the Popover container can change according to its contents. It is recommended to keep width below 4 columns wide.
- Popover arrows can be placed in 9 different locations around the edge of the Popover container.
- The arrow should always point to the trigger element.
- A title/heading should be supplied with the Popover, even if it is not displayed visually.

## Behavior

- The Popover can be closed by:
  - Interacting with the close icon button
  - Interacting with the trigger element
  - Using the `Esc` key on the keyboard
  - Opening another Popover, Modal, or Dialog
- Popovers can only be displayed one at a time.
- Popovers stay open until a user closes them or opens another dialog, even if the user scrolls them out of view.
- A Popover should always be displayed inside of the viewport, and placement should be adjusted accordingly if needed.

:::note

Popovers capture focus, and maintain this capture until closed.

:::

## Dos and don'ts

- Do not use Popovers to contain actionable buttons such as confirmations. Use Confirm Dialog for this.
- Do not overload Popovers with content. If content exceeds 4 columns, use a Modal.

## Content Guidance

### Microcopy

- Popover headings should use sentence casing.
- Ensure all popover content uses proper capitalization and punctuation, and should be written as a complete sentence.

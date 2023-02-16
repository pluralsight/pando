---
tags: [design, toggle, form, control]
title: Switch
---

## Description

Choosing between enabled and disabled states.

## Anatomy/Structure

- Container
  - Label
  - Switch
    - Handle
    - Icon indicator

## Usage

- Use a Switch to turn something on or off instantly, such as changing permissions data or a change in the UI.
- A Switch can be checked or unchecked by default, depending on the context of where and how it is being used.
- Labels can be placed to the leading or trailing side of the Switch control.
  - Place labels on the trailing edge when the control is placed on the leading edge of a form or container.
  - Place labels on the leading side when the control is placed on the trailing edge of a row.

### Size

- L
  - Default size, use in most cases as part of a page form or settings screen.
- S
  - Use when placed within another widget or control, or when space is at a premium.

### Interactions

- Checked
- Unchecked

### States

- Default
- Hover
- Focus
- Disabled
- Invalid

### Dos and don'ts

- Do not use a Switch when requiring user action consent. Instead, use a Checkbox.
- Do not use a Switch when choosing from multiple, related options. Instead, use a Checkbox-group.
- Do not change the label based on the state of the Switch.

## Content Guidance

### Microcopy

- Use sentence case for the Switch label.
- Do not use punctuation, unless the label is a complete sentence.

### Content considerations

- The label should be clear and concise, and should explain the functionality associated with the control.
- The label should not change based on the state of the Switch.

## Accessibility

- Display an icon within the switch to help indicate state to the user without relying on color or position, both of which could be unreliable universally.

## Behavior

### Animation

- The handle within the switch UI should animate between a checked to unchecked view, and vice-versa.
- If icons are present, these should fade in and out on each side of the handle accordingly.
- The handles will snap to one side or the other, with no intermittent state.

---
tags: [Design, Forms, dropdown, choose]
title: Select
---

## Description

Used to allow a user to select a value from a list of options.

## Anatomy/Structure

Note: Select will be used as part of a Form Control, in place of either an Input or Textarea component as needed.

1. Container
2. Value
3. Icon

## Usage

Select uses the native OS controls to display and style the options menu that appears when interacting with the control.

- Use a Select when the list of options exceeds 5 items. If the list of options is 5 or less, consider using a Radio group instead.
- The label of this associated Form Control can be visually hidden when a Select is used within a table row, widget, or other condensed area. If this approach is taken, properly descriptive option values should be used, along with helper text potentially, to explain to the user exactly how to use the control.
- Multi-select is not supported at this time. Only one option will be shown at a time in the Select control itself.
- Options in a list can be individually disabled if it is possible to add or enable options. Otherwise, omit anything that will never be enabled.

### Option groups

- Option groups provide named categories for options in the list.
- Natively styled, this generally results in the option group name being bolded, and the group's items being indented slightly.
- Option groups are a purely organizational treatment, and do not affect the option values.
- Groups can also be disabled. Similar to individual options, this feature should only be used if the groups can be enabled, otherwise they should be fully omitted.

### Dos and don'ts

- Do not use a Select as a navigation control to send the user to another location. Instead, consider using a Menu.

## Content Guidance

### Microcopy

- Use sentence case for all option titles, unless representing a proper noun.
- Instruct the user on what to do by defaulting to "Choose a [content]", with [content] representing the list of options.
- Keep options to a single line of text.
- Avoid punctuation and articles (“the”, “an”, “a”).

### Best practices

- Always display an initial choice, which should have a null value, that helps instruct the user to interact with and choose an option.
- Order select options in a way that makes the most sense contextually. This may be numerically or by listing the most popular items first. Avoid alphabetical order, which can be broken via localization. Use increasing order if it makes sense to the content.
- Utilize helper text (along with the Form Control title) via the Form control if further clarification or context is needed.

## Figma usage

## Feedback on this component

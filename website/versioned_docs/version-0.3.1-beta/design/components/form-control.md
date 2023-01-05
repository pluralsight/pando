---
tags: [form, text, select, textarea, input, label, helper, caption]
title: Form Control
---

## Description

A combination of label, input, and caption to collect or manipulate data.

## Anatomy/Structure

- Label
  - Required flag
  - Info icon
- Input type (text, textarea, select)
- Caption

## Usage

Form control uses embedded input, textarea or select components.

- Required fields will show "(required)" following the label.
- Optional fields will only include the label.
- An info icon can be placed after the Label to trigger a tooltip explaining the Form Control in more detail.

### State

- Default
  - Default use for forms, individual inputs
- Error
  - Indicates missing or invalid data

### Types

- Input
- Textarea
- Select
  - See more on usage in Input, Textarea, and Select

### Size

- L
  - Default, use in most cases
- M
  - Use within another widget or experience, when space is at a premium, e.g. Pagination (table)

## States

- Default
- Hover
- Focus
- Error
  - Note: The warning icon is required for all error-state input fields, as an additional indicator that doesn't rely on color.
- Disabled

### Dos and don'ts

- Do stack form fields when displaying a set. This allows users to better scan down the list of fields.
- Do not use a Form Control with a Select for less than 5 options. Instead, use a Radio Group.
- Do display a required flag on all required fields. Though potentially redundant, this helps to eliminate cognitive load for users.

### Best practices

- Labels should be present in most use cases for Form Controls. If not visually present, label content should be provided as it will still be made available to assistive technologies.

## Content Guidance

### Microcopy

- Labels accompanying text inputs are written in sentence-case.
- Label length should be limited to 16 characters or approximately 3 words.
- Do not end labels in punctuation unless you are using a full sentence (which should not be common).
- Captions, when written as examples, should precede the example with "e.g.,".
- Do not exceed 40 characters for captions.
- Use sentence case and punctuation for captions.
- See Content Guidelines for proper pronoun/determiner use.

### Content considerations

- Captions should never repeat the label verbatim.
- Replace the need for placeholders in text inputs and textareas with just enough direction in captions.
- When it works, use the original caption in error states, but style accordingly. If needed, replace the original caption with concise, error-based information in the event of an error.

## Research

- [https://www.nngroup.com/articles/required-fields/](https://www.nngroup.com/articles/required-fields/)

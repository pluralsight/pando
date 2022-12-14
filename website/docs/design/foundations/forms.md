---
tags:
  [
    design,
    fields,
    input,
    select,
    radio,
    checkbox,
    layout,
    spacing,
    alignment,
    button,
    disclaimer,
    legend,
  ]
title: Forms
---

## Description

Standards for cohesion across forms and data collection.

## Usage

### Required and optional fields

Required fields will all be marked with a “(required)” flag. This helps to
clearly and definitively designate each required field for the user to complete
the task.

Optional fields will have no additional marking beside the label.

### More information

Use information or question icons in labels to provide additional, supplemental
information about a particular [form control](../components/form-control).

- Use an “i” icon to provide clarifying information about formatting or other
  technical considerations
- Use an “?” icon to explain why a particular field is asking for specific
  information.

## Layout & spacing

### Anatomy

1. Form (gap: 40px)
2. Form header (gap: 4px)
3. Form title
4. Form description
5. Fieldset (gap: 32px)
6. Fieldset header (gap: 8px)
7. Fieldset legend
8. Fieldset description
9. Form control(s) (gap: 24px)

### Layout considerations

- Maintain a single column for form controls. Left-aligned, stacked controls are
  easiest to scan for users.
- The size of fields within form controls should be relative to their expected
  or potential data entry. E.g. a ZIP code field would only be expected to
  receive no more than 10 characters.

### Button alignment

- Align [buttons](../components/button.md) to the trailing edge of a container when using to prompt a user
  to navigate through a sequence, or when confirming an action (on the right for
  left-to-right languages and on the left for right-to-left languages).
  - The highest emphasis action should be placed near the trailing edge of the
    container.
- For focused tasks and single-page actions, align starting at the leading edge
  of the container.

## Multi-step and conditional forms

Multi-step or conditional forms will work slightly differently than standard
form layouts.

### Multi-step considerations

- Steps and progress in a multi-step form should be communicated via a progress
  timeline.
- Forward and backward buttons should be available at all applicable steps.

### Conditional forms

Conditional forms rely on a [Select](../components/select.md) or other control to determine visibility of
further fields.

- Use a Select to choose which set of revealed inputs users will see.

## Validation and errors

1. Field outline
2. Error icon
3. Helper text

## Related information

- See individual component pages for related element specifications and
  guidelines:
  - [Form control (including labels and captions)](../components/form-control.md)
  - [Input](../components/input.md)
  - [Select](../components/select.md)
  - [Textarea](../components/input.md)
  - [Checkbox](../components/checkbox.md)
  - [Radio](../components/radio.md)
  - [Switch](../components/switch.md)

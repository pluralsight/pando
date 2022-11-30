---
tags: [confirmation, modal, error, message]
title: Confirm Dialog
---

## Description

Used to interrupt the user with a mandatory confirmation or action.

## Anatomy/Structure

- Container
  - Header
    - Title - A descriptive explanation of what action is required.
    - Body - A lengthier description of the reasons or ramifications of performing this action.
  - Footer
    - Actions
      - Cancel - Cancels the action and closes the dialog.
      - Primary action - Performs the action and closes the dialog.

## Usage

Confirm dialogs are to be used to interrupt the user’s task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native `window.confirm()` function.

- A pointer action outside of the dialog (on the 'backdrop') will close the dialog.
- The `Esc` key will close the dialog.

### Kinds

- Non-destructive
- Destructive
  - For times you want to confirm an action that is potentially destructive or irreversable, e.g. removing a user, deleting data, etc.

### Dos and don’ts

- Do always use the danger sentiment option for the trigger Button when using the destructive Confirm Dialog.
- Do not use Confirm Dialogs for any task other than their intended purpose as defined above. For all other tasks, use a Modal with custom content.
- Do not add additional buttons to this pattern. Instead, utilize custom Modal content for interactions requiring multiple action options.
- Do not use for non-critical information or warnings. Instead, use an inline Admonition.

### Best practices

- Confirm Dialogs are potentially invasive and interrupt the user experience, and should be used sparingly.

## Content Guidance

### Microcopy

- Use sentence case for the dialog title.

### Content considerations

- Prioritize descriptive keywords in dialog titles.
- Dialog descriptions should contain content that is both descriptive and concise.
- The primary action label should mirror terms used in the dialog title, e.g. a dialog with a title of “You are about to delete this row” should use an action button with the label of “Delete”

## Figma usage

## Feedback on this component

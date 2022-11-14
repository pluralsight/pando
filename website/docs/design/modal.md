# Modal

## Description

A disruptive overlay requiring users to take an action before proceeding.

## Anatomy/Structure

- Container
  - Close button
  - Header
    - Heading
  - Slot (content)
- Backdrop

## Usage

- Modals interrupt the user experience, and either present additional information or demand an action, and thus should be used sparingly.
- The best use of a modal is to focus a user on a particular task or action before moving them on to another step.
- Modals should only be used for focused actions or temporary or supplementary information. Because of the extra action needed to open Modals, they should not be used for information or actions that should be part of the persistent UI.
- Modals should close when users interact with the close button, the Esc key, interact outside of the Modal window, or choose an action within the Modal window.
- In most cases, use only 2 buttons after content in a Modal: an action and a default button for "Cancel". In some cases a third action may be necessary, in which case a third style of button should be used to indicate hierarchy of actions.

### Dos and Don'ts

- Do not use Modals for confirmation dialogs, use the Confirm Dialog for this. This also applies to any destructive (ie. data loss) confirmation actions.
- Do not use Modals for prompting the user to input data, use Prompt Dialog for this.
- Do use Modal for any custom content that helps direct the user on a path or helps to inform the user.
- Do not use Modals for complex or large amounts of content, such as complex forms, multi-step processes, or entire page experiences.

### Specifications

- Maximum width: 600px
- Minimum width: 320px
- Maximum height: 80% of viewport. (Content excedding this will introduce a vertical scrollbar. It is recommended to avoid this scenario whenever possible.)
- Backdrop opacity: 65% black (dark theme), 65% white (light theme)
- Modal windows open horizontally centered and 60px from the top of the viewport.

## Content Guidance

### Microcopy

- Use sentence case for the heading text.

### Content considerations

- Ensure the heading adequately explains the function and purpose of the modal content.

## Accessibility

- A title for the modal window must be supplied to engineers, even if no title appears visually.

## Behavior

- Backdrop
  - All modals make use of a backdrop to obscure content behind the modal window, preventing interactions outside of the Modal and helping to focus the user's attention.

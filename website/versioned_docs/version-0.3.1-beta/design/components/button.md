---
tags: [Design, Button, CTA, Icon button]
title: Button
---

## Description

- The Button is used to perform an action or event, such as submitting a form, opening/closing a dialog, or using a cancel action.

## Anatomy/Structure

[View the part of a button in Figma](https://www.figma.com/file/T6b7uFqGkQO1hSpNLNGrNf/Untitled?node-id=1%3A369)

1. Icon-placeholder (leading)
2. Label
3. Icon-placeholder (trailing)

## Usage

### Sentiment

- Action
  - Primary and highest emphasis action within the area, page or window.
  - More important than other actions, the main action in a group, default action
  - Should be used once per component screen
  - Use to indicate going to a next step
  - The highest emphasis in a group or component
- Default
  - Lower emphasis actions that are optional or secondary to the primary action
  - Actions that are important but not primary
  - Use for something that happens on the current page
- Danger
  - For use on any destructive action, leading to loss of data or progress for the user.
- Text
  - Lowest priority actions
  - Don't distract from nearby content
  - Use for the lowest emphasis
  - Use alone where content must be emphasized
  - Use when multiple actions appear and a low-emphasis action is needed

### Icon buttons

- Take actions and make choices that are clearly indicated by a single icon
- Circle
  - Use when alone, as a floating action button
- Square
  - Reserved for buttons that are used alongside of form fields or links

### Sizes

- L (default)
  - The default button size conforms to standard tap target sizes without a larger interactive area needed surrounding it.
- S
  - Use in condensed areas and smaller widgets when aligned with adjacent medium-sized form controls.

### Use cases

- With icons
  - Use leading icons for presentational and ornamental glyphs only, to emphasize meaning
  - Directional or action-oriented icons such as arrows should always be placed on the trailing side of the button
  - Avoid using icons on both the leading and trailing sides of a button. This has potential to confuse the user. Use when representing an external link or new window icon to convey these behaviors to the user.

### Dos and Don'ts

- Do not use too many buttons. Stick to no more than 3 buttons with discrete actions in any group.
- Do not use buttons as styled links. Use linked text for navigation to other pages or sites.
- Action buttons should represent the main action in a button group. Do not use more than one action button in a group.
- Use the same size button in groups. Do not use different sized buttons together in the same row.

### Related patterns

- Button vs. Link
  - Use a link when you're navigating to another page or location. Examples include breadcrumb links, content links to other pages, and lists of links to related pages.
    - Styles for links will deviate when placed in a global header and footer, or other navigation-type of element such as Tabs or Menus. This is to allow for a larger tap target and hierarchical presentation.
  - Use buttons when performing an action, such as: "Submit," "Add a row," "Cancel," "Upload," etc.
  - An action is almost always on the same page.

### Best practices

- Buttons can be set to full width in some situations, including mobile screens and smaller-width areas such as sidebars.
- Not all features need to have primary actions, sometimes the actions are secondary to the content and are all of equal importance.

## Content guidance

### Microcopy - Case/punctuation, Voice, Length

- Use sentence-case capitalization
- Do not use all caps or title case.

### Content considerations

- Lead with action verbs to tell the user what will happen next
  - Especially import in Danger sentiment buttons, to ensure the action being performed is clear.
- Use concise, easy to scan, clear labels to indicate the action to the user
- Do not use long, unnecessary phrases in button labels.
- Use active voice to indicate the action
- Do not use vague or generic labels such as "yes" or "No"

## Accessibility

- Expected actions for assistive technologies
  - Ensure your label will make sense when spoken aloud with screen readers
  - Prioritize using validation and errors over disabled buttons, as the latter do not provide feedback.
  - Button labels should make sense independent of their context, to support users with screen readers that may skip to actions.

## States

- Hover
  - Appearing only on pointer-based interfaces, the hover state helps to imply interactivity.
- Focus
  - Focus styles generally mirror hover styles, and will also be shown when using assistive technologies
- Active
  - The active state is shown during the press of a mouse, touch, or key.
- Disabled
  - Disabled buttons should only be used when the user is realizing an incomplete task that will enable the button. Rely on validation and error messages instead, in most cases.

## Behavior

### Placement

- Always place buttons side-by-side as long as there is space to do so.
- Icon buttons should lead other buttons in order in a row

### Alignment

- Align buttons to the trailing edge of a container when using to prompt a user to navigate through a sequence, or when confirming an action (on the right for left-to-right languages and on the left for right-to-left languages).
  - The highest emphasis action should be placed near the trailing edge of the container.
- For focused tasks and single-page actions, align starting at the leading edge of the container.

### Spacing and arrangement

- Space buttons apart by `16px/1rem`

<!-- ## Figma properties/options

## Feedback on this component/Status -->

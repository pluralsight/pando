---
tags: [form, tick, label, group, checked]
title: Checkbox
---

## Description

A small list of multi-select options.

## Anatomy/Structure

- Container
  - Label
  - Checkbox-group
    - Checkbox
    - Checkbox-target
    - Label
      - Optional flag
  - Helper text

## Usage

- Use Checkbox when users can select all, one, or none of the available options.
- Checkbox can be used as a stand-alone option, e.g. when asking a user to agree to certain services or statements.
- Checkboxes are used as part of a checkbox-group, and have a group Label and optional helper text assigned to them.
- If necessary, use a Legend to provide further context to multiple groups of Checkboxes or the choices available within a group.
- By default, in most occasions, leave all Checkboxes unchecked. A scenario where checked-by-default makes sense includes viewing preselected options in a profile.
- Labels always trail the Checkbox-target. For similar situations where the UI dictates a left-aligned label - and the option is not part of a larger, related list - consider using a switch.
- Note that the label will be interactive and will trigger the checkbox as well, providing a larger tap target for the user.

### Dos and don’ts

- Do not use Checkboxes to navigate a user to another part of the experience. Utilize text links for navigation.
- Do always provide an accompanying label and, in many cases, accompanying helper text as part of the checkbox-group as well.
- Do always stack Checkboxes in a group to provide better scannability for the user.
- Do not use Checkboxes as UI for showing or hiding content. Instead consider using a Switch or other control.
- Do not include links inside of checkbox labels, they are not allowed and will not work properly. Place supplementary content adjacent to the checkbox element.

### Best practices

- List options in a logical order:
  - most likely to least likely to be selected
  - simplest to most complex operation
  - least to most risk
  - Avoid alphabetizing options as this is not localizable.

### Interactions

- **Unchecked:** The Checkbox option is not selected, and/or as a parent of a nested list of Checkbox options, all options in the nested list are also not selected.
- **Indeterminant:** As the parent option of a nested group of options, at least one option is selected within the nested list.
- **Checked:** The option is selected, and/or as a parent of a nested list of Checkbox options, all options in the nested list are also selected.

### States

- Default
- Hover
- Focus
- Disabled
- Invalid

## Content Guidance

### Microcopy

- Labels for Checkboxes use sentence case.
  - Exceptions include acronyms (all capitals), proper nouns, or site sections (title-case).
- Do not end in punctuation unless you are using a full sentence.
- When using to confirm user consent, start the label with “I”, e.g. "I consent to receive email notifications from Pluralsight."

### Content considerations

- Checkbox labels should be clear and concise. If a full sentence is needed, keep it short (approx. 40-50 characters, or 10 words).
- Frame labels positively, e.g. “Turn on notifications” rather than “Turn off notifications”.

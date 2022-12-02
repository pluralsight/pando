---
tags: [forms, single select]
title: Radio
---

## Description

A small list of single-select options.

## Anatomy/Structure

- Radio-group
  - Label
    - Optional flag
  - Radio(s)
    - Radio-target
    - Label
  - Caption

## Usage

- Use Radio button groups when all options should be visible and exposed, or when the list of options does not exceed 5 items. Otherwise, consider use of a Select.
- Radios are used as part of a radio-group, and have a group Label and optional caption assigned to them.
- If necessary, use a Legend to provide further context to multiple groups of Radios or the choices available within a group.
- One Radio input should always be selected by default. Select the safest, most secure and private option, then defaulting to the most likely or convenient, which will help expedite the user through their task.
- Always provide a "None" option if an unselected state is required.
- Labels always trail the Radio-target.

### Dos and don'ts

- Do submit choices made in a Radio group with a button, either exclusively or as part of a larger form.
- Do not use Radios to navigate a user to another part of the experience.
- Do always provide an accompanying label, and in most cases, accompanying caption as well.
- Do always stack Radios in a group to provide better scannability for the user.
- Do not use Radios as UI for showing or hiding content. Instead consider using a Switch or other control.

### Best practices

- Consider offering a default, neutral selection such as "None" or "Keep private", especially when dealing with a user's personal data.
- List options in a logical order:
  - most likely to least likely to be selected
  - simplest to most complex operation
  - least to most risk
  - Avoid alphabetizing options as this is not localizable.

### Interactions

- Default
- Checked
- Optional

### States

- Default
- Hover
- Focus
- Disabled
- Invalid

## Content Guidance

### Microcopy

- Labels for Radios use sentence case.
  - Exceptions include acronyms (all capitals), proper nouns, Pluralsight product names or site sections (title-case).
- Do not end Labels in punctuation unless you are using a full sentence.
- When using to confirm user consent, start the label with "I", e.g. "I wish to receive my updates via email".

### Content considerations

- Radio labels should be clear and concise. If a full sentence is needed, keep it short (max 15 words, 65 characters).

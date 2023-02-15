---
tags: [text, text box, field, label, helper]
title: Input and Textarea
---

## Description

Text inputs and textareas allow users to insert and interact with data.

## Anatomy/Structure

1. Container
2. Leading icon
3. Placeholder/Value
4. Trailing icon
5. Resize (textarea)

## Usage

Input and Textarea will be used as part of the Form Control component, which can be configured to include either type of input type, or a Select dropdown.

- **Input (text):**
  - Short form, single-line data collection and interaction
- **Textarea:**
  - Long form, multiple line data collection and interaction

Note: Required and invalid messaging will be represented in form-control.

### Size

- L
  - Default, use in most cases
- M
  - Use within another widget or experience, when space is at a premium, eg. Pagination (table)

### Dos and don'ts

- Do always provide a label or allow access to a label for assistive technologies if it is not shown visually (applied using the Form Control component)
- Do adjust the size of the input according to the data being asked for, e.g. ZIP code would use a shorter input width to accommodate only 10 max characters.
- Do not use placeholders to communicate critical information, as they disappear as soon as the user begins entering data. [See more about Placeholders](#content-considerations)
- Use a text input with type: date for date entries, which will format the date as `MM/DD/YYYY`

### Best practices

- Input masks (such as date or phone number formatting) would use the same styling as placeholder text.
- Consider _not_ using placeholder values in most cases. Empty fields draw more attention than those with placeholders, which users are more likely to skip as the hint can get mistaken for pre-filled data.
- Use freeform Inputs or Textareas when a particular type of data is easier for users to enter themselves rather than manipulating a prerendered widget, e.g. entering an address instead of choosing from a widget. Many users take advantage of browser or 3rd party quickfill features as well.
- Similarly, using typeahead or similar suggestive/search technologies with a text input may be more efficient for the user than choosing from a Select, so consider these cases when selecting a control.

## Content Guidance

### Microcopy

- Placeholders: Use sentence case capitalization
- Validation: Validate all numbers, email addresses, and other applicable information according to our content guides.

### Content considerations

- Placeholder text
  - Placeholder text is not required, and should only be utilized in addition to helper text to guide the user as to what information should be entered, and in what format.
  - Placeholder text should never repeat the label associated with an input.

## States (visual examples)

- Default
- Hover
- Focus
- Error
  - Note: The warning icon is required for all error-state input fields, as an additional indicator that doesn't rely on color.
- Disabled

## Behavior

- Input masking
  - Data masks (auto formatting of input content) should be used in the following types of data: numbers, time, dates, phone numbers, currency, and social security numbers (dashes).
- Icons
  - A leading icon may be used as an assistive indicator of the purpose of a field, e.g. Search fields using a magnifying glass icon. These should be used sparingly otherwise, as they add more cognitive load, may confuse the user, and may not provide enough info via assistive technologies. Rely on a label, helper text, or (lastly) placeholder text to direct the user instead.
- Text overflow
  - Text will overflow, and scroll horizontally as needed, in all Input fields. While the users are able to enter or manipulate as much data as needed, if a minimum or maximum limit or specific format is required, it should be communicated via helper text.
  - Textareas will only overflow and scroll vertically as needed.
- Resizing (textarea)
  - Textarea elements should be allowed to be resized at least vertically by the user, to allow for a larger area to enter or manipulate data. Ensure that surrounding elements or layouts will not be affected by this.

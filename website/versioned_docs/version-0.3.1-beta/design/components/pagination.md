---
tags: [design, next, previous, more]
title: Pagination
---

## Description

Navigate through large amounts of content.

## Anatomy/Structure

(Basic)

- Container
  - Button (Show more)

Two Button

- Container
  - Button (Previous)
  - Button (Next)

(Pagination bar)

- Container
  - Count
  - Select
  - Buttons
    - Previous
    - Next

## Usage

- Basic
  - Used to show more results on the same page
- Two button
  - Used to move between pages of content.
- Bar

  - Used to show a number of rows of the table at a time.

- A general use of Pagination is when the number of returned results is greater than 25 items.
- Pagination should be placed at the bottom of the page, directly below the last result in a list of content.
- A Pagination bar can be placed directly above and/or below tabular content.
- Buttons
  - Buttons advance or go back 1 page at a time.
  - The leading button will be disabled until a user navigates past the first page in the set.
  - Once at the last page in the set, the trailing button will be disabled.

### Dos and don'ts

- Do not show the Pagination control if only 1 page (less than 25 results) is returned.
- Do not use pagination patterns when utilizing lazy loading as the user scrolls.

### Best practices

- Pagination should navigate to the previous and next set of items in a content set.
- When using the Pagination Bar type, match the range of pages displayed (1-25) to the amount selected in the Select control (25 items).

## Content Guidance

### Microcopy

- Do not put a space within the number range of pages, according to our Grammar & Mechanics rules.

## Accessibility

- The button components utilized within these patterns automatically handle all accessibility requirements.

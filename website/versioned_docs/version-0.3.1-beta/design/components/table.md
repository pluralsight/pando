---
tags: [design, row, column, tabular]
title: Table
---

## Description

Tables are used to organize and display large data sets.

## Anatomy/Structure

### Table cell

- Checkbox
- Text
- Sort arrow
- Division line

### Table column

- Table cells

### Table

- Table Body
- Table Header
  - Caption
- Table Footer

## Usage

- Use tables for any tabular data that requires 2 axis: rows and columns.
- Tables allow users to easily scan and analyze large amounts of complex data.

### Types

- Header
  - Column (or row) header cells, these define the contents of the columns or rows.
- Data
  - Data cells contain the content and data that will be repeated throughout a column or row.

### Content

- Text
  - Alphanumeric-only content
- Button
  - Cells that contain actionable buttons. These cells allow for up to 2 default buttons and/or icon button.
- Badge
  - Displays 1 Badge component
- Leading icon
  - A data or header cell with a leading icon, often used as a checkbox.
- Trailing icon
  - A data or header cell with a trailing icon, often a sorting arrow.
- Double icon
  - A data or header cell with a leading and trailing icon.

### Row style

- Condensed
  - use when presenting a table as part of a larger dashboard or page.
- Regular
  - Used in most cases.
- Relaxed
  - Use in full-screen environments, when the table is the main or only presentation method on the page.

### Alignment

- **Numerical data**: Right aligned
- **Textual data**: Left aligned
- **Buttons**: Center aligned
- **Badges**: Left aligned
- Align headers with their related data

### States

- Rows of the table will change their surface color on hover/focus, to help with traversing and reading data.

### Best practices

- Tables should be reserved for more complex data, usually consisting of 3-4 columns and multiple rows.
- Provide a 1-2 line description of the table content to allow all users to gain context about the data.
- Is a table the best pattern for your use case? Consider a Definition list if you are merely displaying key/value or term/description pairs.
- Allow for filtering and ordering when comparison is not a priority.

### Dos and don'ts

- Do not rely on tables merely for their layout. Ensure they are used only for tabular data display.

### Related patterns

- **Pagination (table)**
  - Place table pagination controls above the table for easier and more visible access.

## Content Guidance

### Microcopy

- Use sentence casing for all header and data cells.
- Wrap content in cells if needed (though, this is discouraged if avoidable), do not truncate.

### Content considerations

- Include units of measurement symbols (e.g. $) in column headers so that they do not need to be repeated in the data cells.
- Use consistent decimals throughout an entire table.

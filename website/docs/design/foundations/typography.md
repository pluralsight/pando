---
tags: [design, type, fonts, code, headings, line lengths]
title: Typography
---

## Description

Clarify an information hierarchy, accessibly communicate content, and express our brand with these typographic choices.

## Font families

### PS TT Commons

Pluralsight's default font family for the web is a custom font called **PS TT Commons**.

Internally, we are using a variable font to provide all weights programmatically. This drastically reduces the number of network requests and overall page weight dedicated to fonts. Browsers that do not support variable fonts will get the system `sans-serif` fallback.

### DM Mono

For code examples and code blocks, we use **DM Mono**, a monospace font.

## Font sizes

### Body copy font sizes

Six font sizes are used in this system, with the default font size set to `16px`. Each size is available in 2 weights and also in an underline style for links.

| Size          | Font family   | Font weight  | Font size | Use for                                         |
| ------------- | ------------- | ------------ | --------- | ----------------------------------------------- |
| xs            | PS TT Commons | 500 (Medium) | 12px      | Smallest text for labels, smallest descriptions |
| xs underline  | PS TT Commons | 500 (Medium) | 12px      | Linked text                                     |
| xs bold       | PS TT Commons | 700 (Bold)   | 12px      | Strong text                                     |
| s             | PS TT Commons | 500 (Medium) | 14px      | Card titles, subtitles, smaller descriptions    |
| s underline   | PS TT Commons | 500 (Medium) | 14px      | Linked text                                     |
| s bold        | PS TT Commons | 700 (Bold)   | 14px      | Strong text                                     |
| m             | PS TT Commons | 500 (Medium) | 16px      | Default body copy                               |
| m underline   | PS TT Commons | 500 (Medium) | 16px      | Linked text                                     |
| m bold        | PS TT Commons | 700 (Bold)   | 16px      | Strong text                                     |
| l             | PS TT Commons | 500 (Medium) | 18px      | Long form text, subheadings                     |
| l underline   | PS TT Commons | 500 (Medium) | 18px      | Linked text                                     |
| l bold        | PS TT Commons | 700 (Bold)   | 18px      | Strong text                                     |
| xl            | PS TT Commons | 500 (Medium) | 20px      | Large labels                                    |
| xl underline  | PS TT Commons | 500 (Medium) | 20px      | Linked text                                     |
| xl bold       | PS TT Commons | 700 (Bold)   | 20px      | Strong text                                     |
| 2xl           | PS TT Commons | 500 (Medium) | 24px      | Large, emphasized text                          |
| 2xl underline | PS TT Commons | 500 (Medium) | 24px      | Linked text                                     |
| 2xl bold      | PS TT Commons | 700 (Bold)   | 24px      | Strong text                                     |

Default line-height is currently set to `150%` for all.

### Headings

Heading styles are chosen to match HTML heading hierarchies, and establish a consistent visual language for the UI. Ensure page structures are set up to decrease the heading level - much like an outline - as the page or document grows.

| Style     | Font family   | Font weight    | Font size | Line height | Use for                                           |
| --------- | ------------- | -------------- | --------- | ----------- | ------------------------------------------------- |
| heading 1 | PS TT Commons | 600 (DemiBold) | 40px      | 110%        | Page headings                                     |
| heading 2 | PS TT Commons | 600 (DemiBold) | 32px      | 125%        | Section headings                                  |
| heading 3 | PS TT Commons | 600 (DemiBold) | 24px      | 125%        | Nested section headings, sidebar section headings |
| heading 4 | PS TT Commons | 600 (DemiBold) | 18px      | 125%        | Nested sidebar section headings                   |
| heading 5 | PS TT Commons | 600 (DemiBold) | 16px      | 125%        | Smaller in-content labels and headings            |
| heading 6 | PS TT Commons | 600 (DemiBold) | 14px      | 150%        | Smallest, in-content labels and headings          |

### Code font sizes

Code styles are available in 4 sizes, each with 2 weights.

| Style     | Font family | Font weight | Font size |
| --------- | ----------- | ----------- | --------- |
| l         | DM Mono     | 400         | 18px      |
| l strong  | DM Mono     | 500         | 18px      |
| m         | DM Mono     | 400         | 16px      |
| m strong  | DM Mono     | 500         | 16px      |
| s         | DM Mono     | 400         | 14px      |
| s strong  | DM Mono     | 500         | 14px      |
| xs        | DM Mono     | 400         | 12px      |
| xs strong | DM Mono     | 500         | 12px      |

## Line lengths

Wide lines of text can be difficult for people to read, and reuire increased focus. While there is no way to measure a perfect line length for everyone, a general rule of 60-100 characters is often cited as a best practice.

When designing, this should be taken into consideration according to font size and responsive layout. Users may change the width and size of their viewports, as well as their font-size, thereby altering the perceived line length.

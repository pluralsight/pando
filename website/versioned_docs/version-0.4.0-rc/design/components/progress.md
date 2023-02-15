---
tags: [design, bar, duration, loading, upload, percentage, download]
title: Progress
---

## Description

Displays the progress to completion of a particular process.

## Anatomy/Structure

1. Container
2. Line
3. Percentage

## Usage

- Use Progress for visual representation of progress through a process, showing file transfer progress, if a request is processing, and any other process where a user must wait for something to complete before progressing.

### Types

- **Linear:** Use to indicate progress through multiple steps.
  - **Default:** Use in most cases and locations
  - **Inset:** Use when pinned to the edges of a container.
- **Circular:** Use for showing loading or transfer progress.
  - **Determinate:** Use when it is known how long an operation will take.
  - **Indeterminate:** Use when wait time is unspecified or unknown.

### Sizes

- **S:** Default, use in most cases and locations
- **XS:** Use in tight, compact spaces, or where progress indication is secondary and not a high priority

### Dos and don'ts

- Do not use to show page load progress. Instead, use Skeleton.
- Do not embed text or other elements within a Progress bar.

## Content Guidance

### Best practices

- Use text in close proximity to explain what processes are taking place, if the processes are complex or have a long wait time.
- Provide a percentage value for users using assistive technologies.

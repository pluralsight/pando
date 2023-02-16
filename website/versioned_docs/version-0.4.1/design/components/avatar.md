---
tags: [Photo, Headshot, Profile]
title: Avatar
---

## Description

An avatar is a thumbnail representation of a user or an organization.

## Anatomy/Structure

- Container
  - Image
  - Initials
  - Icon

## Usage

An Avatar is designed to display a profile image, initials, or a fallback icon. Primary source for the image will use anything uploaded by the user, then fall back to utilizing the Gravatar service, then the pattern defaults and fallbacks.

### Sentiment

- Default
  - For use with non-actionable avatars.
- Action
  - For any interactive avatars

### Sizes

- XS - 32x32
  - Use in menu bars or tight areas where multiple users may be listed in one area.
- S - 48x48
  - Use to reference a user or author in a meta data space, or as reference on a card.
- M (default) - 80x80
  - Use in single page or focused experiences to identify the author or current user profile.
- L - 120x120
  - For use in a profile card as the primary image.
- XL - 160x160
  - Use as part of a hero header or primary image on a profile page.

### Content states

- Image (preferred)
  - A profile image should be used for all Avatars no matter the context (i.e. person, platform, etc.). This will give the best visual experience for the user and should be used over all other options.
- Initials (fallback)
  - In the absence of an image, the avatar's initials (up to 2 characters) should be displayed. This is not ideal but allows the user to still quickly put the dots together of who the avatar is meant to represent.
- Icon (last resort)
  - If neither the image nor initials are available, display an icon to represent a person.

### Dos and don'ts

- Do not obscure or visually block any portion of the avatar image.
- Do not reshape the avatar. Maintain a circular shape and size as offered.

## States

- Default
- Hover/Focus - When actionable, a hover/focus state indicates to users that an action can be performed, such as linking to a profile page, triggering a menu, or other.

Note: To indicate an editable avatar photo, apply a floating action icon button (size M, round, action sentiment) placed in the bottom trailing edge of the avatar container, utilizing the pencil icon.

## Figma usage

## Feedback on this component

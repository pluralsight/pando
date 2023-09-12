# Panda Preset

A preset and config for Pando projects that use Panda CSS :panda:.

## What role does this package play in Pando?

```mermaid
erDiagram
  PANDO ||--o{ DESIGN-TOKENS : contains
  PANDO ||--o{ ICONS : contains
  PANDO ||--o{ PANDA-PRESET : contains
  PANDO ||--o{ REACT-ARIA : contains
  PANDO ||--o{ REACT-UTILS : contains
  PANDO ||--o{ REACT : contains
  PANDA-PRESET ||..|{ DESIGN-TOKENS : contains
  PANDA-PRESET ||..|{ CSS RESET : contains
  PANDA-PRESET ||..|{ THEMES : contains
  REACT ||--|{ PANDA-PRESET : uses
  REACT ||--|{ REACT-ARIA : uses
  REACT ||--|{ REACT-UTILS : uses
```

This package allows Pando to have a single source of truth for all things CSS. It contains the following:

- Design Tokens
- CSS Reset
- Themes
- Panda General Config
- CSS-in-JS API's

### Panda Preset General Function

The Panda Preset will be used in all Pando projects and thus internally used in the React package. It will be used to generate the CSS-in-JS/JSX API's and will be used to generate the Atomic CSS for the React package and build time within each local project.

## Install

This project uses pnPm so there are no setup commands needed. If you get any errors, you may need to run an initial `pnpm install` or ensure you are using Node >= 18.

## Development

From the **root directory of the project**, run:

```bash
pnpm -w start:sandbox
```

## Testing

From the **root directory of the project**, run:

```bash
pnpm -w test
```

## Contribution

If you plan on contributing to this project, please take time to read our [CONTRIBUTING.md](https://github.com/pluralsight/pando/blob/main/CONTRIBUTING.md). Pull requests that do not adhere to the requirements in this doc will automatically be flagged and closed.

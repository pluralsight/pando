# React

A library of React components and hooks that help manage advanced React features like State and accessibility.

## Contributing

Are you planning on contributing to this package? Please review the [Contributing Guidelines](/CONTRIBUTING.md).

## What role does this package play in Pando?

```mermaid
erDiagram
  PANDO ||--o{ DESIGN-TOKENS : contains
  PANDO ||--o{ ICONS : contains
  PANDO ||--o{ HEADLESS-STYLES : contains
  PANDO ||--o{ REACT : contains
  PANDO ||--o{ REACT-UTILS : contains
  DESIGN-TOKENS ||..|{ NORMALIZE-SETUP : contains
  NORMALIZE-SETUP ||..|{ THEMES : contains
  HEADLESS-STYLES ||--|{ DESIGN-TOKENS : uses
  REACT ||--|{ HEADLESS-STYLES : uses
  REACT ||--|{ REACT-UTILS : uses
```

This package utilizes the latest version of React to deliver component-based abstractions, helpers, and hooks of the Headless-styles library.

### React General Function

The react package is dependant on the Headless-styles library, and works cohesively with the other libraries when combined with them. It's true purpose is to provide a component and hook library within the Pando Normalize system (i.e. themes, etc.).

## Install

This project uses pnPm so there are no setup commands needed. If you get any errors, you may need to run an initial `pnpm install` or ensure you are using Node >= 18.

## Development

We use a custom Vite TS/React sandbox to help keep security issues, complexity, and dependency size down.

From the **root directory of the project**, run:

```bash
pnpm run start:sandbox
```

## Testing

To run your unit tests, make sure you are in the **project root directory** not this workspace - and run:

```bash
pnpm test packages/react/tests
```

## Contribution

If you plan on contributing to this project, please take time to read our [CONTRIBUTING.md](https://github.com/pluralsight/pando/blob/main/CONTRIBUTING.md). Pull requests that do not adhere to the requirements in this doc will automatically be flagged and closed.

## v1 Migration TODO

- [ ] Create a new Icon API that is more flexible and user friendly (i.e. `Icon` component - React v19 forces an API change for SSR compatibility)

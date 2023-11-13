# Pando CLI

The Pando CLI is a command line interface for Pando. It is used to help manage setting up a Pando project or maintaining an existing one.

## What role does this package play in Pando?

This is the official entry point to using Pando. It generates the files needed for development and installs any dependencies needed to get started.

Likewise, it is used to update the project as new versions of Pando are released and help the user to know when there is a new version available.

### Pando CLI General Function

The Pando CLI should be used to install Pando or do anything relative to Pando in general. By all means, this is the "user interface" of Pando.

## Install

This project uses bun so there are no setup commands needed. If you get any errors, you may need to run an initial `bun install` or ensure you are using Node >= 18.

## Development

To use this project in development, simply run the bin commands exposed.

## Testing

From the **root directory of the project**, run:

```bash
bun test tests/pando
```

## Contribution

If you plan on contributing to this project, please take time to read our [CONTRIBUTING.md](https://github.com/pluralsight/pando/blob/main/CONTRIBUTING.md). Pull requests that do not adhere to the requirements in this doc will automatically be flagged and closed.

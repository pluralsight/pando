# Pando Docs Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

If it is your first time working in the Pando repo, you may need to run an initial `install` command
to ensure all dependencies are ready. Because we use Yarn PnP and cache the dependencies, you should
never (if rarely) have to run the install command again.

From the root directory of the repo, run:

```bash
yarn install
```

### Development

_⚠️ This section assumes you are already familiar with Docusaurus and its features. If you are not familar or have ever used this framework, please read the [GUIDES SECTION](https://docusaurus.io/docs/category/guides) **before** contributing to the Pando docs site._

To start up a local build of the Pando docs site, run the following command from the **root directory of the repo**:

```bash
yarn start:website
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Versioned docs

We use versioned docs, so make sure you are familiar with [how it works](https://docusaurus.io/docs/versioning) and are contributing **to the right location**.

### Submitting a Pull Request

When you are ready to submit a Pull Request, our CI will run some additional jobs related to
the integrity of the website:

1. Validate the site will successfully build
2. Create a preview link of the Pull Request build via Netlify

Please validate your build from the Netlify preview **before** marking your PR ready for review
to respect the time of your reviewers.

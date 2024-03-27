# Welcome to the Pando v1 docs workspace!

The documents written here are deployed to [https://pando.pluralsight.com](https://pando.pluralsight.com)

## Contributing

Are you planning on contributing to this package? Please review the [Contributing Guidelines](/CONTRIBUTING.md)

## Getting Started

To run the docs from the `docs` directory:

`pnpm run dev`

To run the docs from the `root` Pando directory:

`pnpm run start:docs`

This project will run by default on http://localhost:4321

## Directory structure

### /src/content/docs

You can find all docs pages within `/src/content/docs`

### /src/components

All components that are not meant to be pages within the docs are contained in `/src/components`.

## Routes

Pando v1 docs uses file based routing, so any file you create within `/src/content/docs` will automatically create a route.

**To add a document to the left side nav,** add to the `sidebar` array in `astro.config.mjs`

For additional support, the Astro Starlight docs can be very helpful:

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```bash
npm create astro@latest -- --template starlight
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```bash
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

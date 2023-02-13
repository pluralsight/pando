// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight')
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')
const startPath = 'start/get-started'
const designPath = 'design/foundations/color'
const devPath = 'development/getting-started/installation'
const psIconPngPath = '/img/ps-icon.png'

const isNetlifyDeploy =
  Boolean(process.env.NETLIFY) && process.env.CONTEXT === 'deploy-preview'

function createDocsPath(path) {
  return `/docs/${path}`
}

function getUrl() {
  if (isNetlifyDeploy) {
    return 'https://famous-torte-605d60.netlify.app'
  }

  return 'https://design.pluralsight.com'
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pando Design System',
  tagline: 'The foundational roots to a better design system.',
  url: getUrl(),
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'pluralsight',
  projectName: 'pando',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css',
      },
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-B4W12ZVHDB',
          anonymizeIP: true,
        },
        docs: {
          editUrl: 'https://github.com/pluralsight/pando/edit/main/website/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          versions: {
            current: {
              label: `RC 1.0 🚧`,
              banner: 'unreleased',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pluralsight/pando/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: psIconPngPath,
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#1B1834',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#1B1834',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: psIconPngPath,
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/ps-icon.svg',
            color: '#1B1834',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: psIconPngPath,
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#1B1834',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'IJ77Q0YL0X',
        // Public API key: it is safe to commit it
        apiKey: '3fcedfb99537045bc7f67e1bf07d02d4',
        indexName: 'design-pluralsight',
        contextualSearch: true,
        searchParameters: {},
      },
      announcementBar: {
        id: 'announcementBar',
        backgroundColor: '#003655',
        content: `⭐️ If you like Pando, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/pluralsight/pando/tree/main">GitHub</a>`,
        textColor: '#D5F0FF',
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      navbar: {
        title: 'Pluralsight Design',
        logo: {
          alt: 'Pluralsight Design System Logo',
          src: 'img/logo-full-color.svg',
        },
        items: [
          {
            type: 'doc',
            docId: startPath,
            position: 'left',
            label: 'Start Here',
          },
          {
            type: 'doc',
            docId: designPath,
            position: 'left',
            label: 'Design',
          },
          {
            type: 'doc',
            docId: devPath,
            position: 'left',
            label: 'Development',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
          {
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
            href: 'https://github.com/pluralsight/pando',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here',
                to: createDocsPath(startPath),
              },
              {
                label: 'Design',
                to: createDocsPath(designPath),
              },
              {
                label: 'Development',
                to: createDocsPath(devPath),
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/pluralsight/pando/discussions',
              },
              {
                label: 'Team',
                href: '/docs/team',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pluralsight/pando',
              },
              {
                label: 'Slack (internal)',
                href: 'https://pluralsight.slack.com/archives/C03D8G0V42G',
              },
              {
                label: 'Figma',
                href: 'https://www.figma.com/files/683421083042836615/project/41385094/Libraries?fuid=859884248375447621',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pluralsight LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'jsx',
      },
    }),
}

module.exports = config

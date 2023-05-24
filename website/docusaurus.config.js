// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const pandoWebpackPlugin = require('./plugins/webpackPlugin.cjs')

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight')
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')

const learnPath = 'learn/get-started/installation'
const refPath = 'reference/general/themes'
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
    {
      tagName: 'script',
      attributes: {
        src: '/clarity.js',
      },
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-95CGK1NT3X',
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
              label: `Next 🚧`,
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
    require.resolve('./plugins/webpackPlugin.cjs'),
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
        backgroundColor: 'var(--ps-info-surface)',
        content: `How do you like these docs? <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/pf6s1pun2UxdrZoMA">Take our survey!</a>`,
        id: 'announcementBar',
        isCloseable: false,
        textColor: 'var(--ps-info-text)',
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      navbar: {
        title: 'Pando Design System',
        logo: {
          alt: 'Pando Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: `${learnPath}/index`,
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: `${refPath}/index`,
            position: 'left',
            label: 'Reference',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
          {
            'aria-label': 'Youtube channel',
            className: 'header-youtube-link',
            href: 'https://www.youtube.com/channel/UC0-KMZohEWO_mCTY713v5oA',
            position: 'right',
          },
          {
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
            href: 'https://github.com/pluralsight/pando',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: createDocsPath(learnPath),
              },
              {
                label: 'Reference',
                to: createDocsPath(refPath),
              },
            ],
          },
          {
            title: 'Learn Pando',
            items: [
              {
                label: 'Installation',
                to: createDocsPath(learnPath),
              },
              {
                label: 'Design Patterns',
                to: createDocsPath('learn/learn-pando/design-patterns/'),
              },
              {
                label: 'Migrating from Classic',
                to: createDocsPath('learn/learn-pando/migration/'),
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                href: 'https://github.com/pluralsight/pando/blob/main/CODE_OF_CONDUCT.md',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/pluralsight/pando/discussions',
              },
              {
                label: 'Meet the Team',
                href: createDocsPath('learn/about-pando/team'),
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC0-KMZohEWO_mCTY713v5oA',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pluralsight/pando',
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

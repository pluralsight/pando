import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import pandacss from '@pandacss/astro'
import react from '@astrojs/react'
import yaml from '@rollup/plugin-yaml'
import path from 'path'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://pando.pluralsight.com',
  // vite config is specific to enable the docs site to build
  // see PR https://github.com/pluralsight/pando/pull/1990 for additional information including helpful resources
  vite: {
    plugins: [yaml()],
    ssr: {
      noExternal: ['execa', 'is-stream', 'npm-run-path'],
    },
    resolve: {
      alias: {
        '@/styled-system/patterns': path.resolve('./styled-system/patterns'),
        '@/styled-system/css': path.resolve('./styled-system/css'),
        '@/styled-system/recipes': path.resolve('./styled-system/recipes'),
      },
    },
  },
  integrations: [
    starlight({
      title: 'Pando Docs',
      social: {
        github: 'https://github.com/pluralsight/pando',
        youtube: 'https://www.youtube.com/channel/UC0-KMZohEWO_mCTY713v5oA',
      },
      sidebar: [
        {
          label: 'Tutorials',
          items: [
            {
              label: 'Add Pando to a website',
              items: [
                {
                  label: 'Step 1 - Install & Setup Panda CSS',
                  link: '/tutorials/add-pando-to-a-website/step-1/',
                },
                {
                  label: 'Step 2 - Install Pando',
                  link: '/tutorials/add-pando-to-a-website/step-2/',
                },
                {
                  label: 'Step 3 - Add the Theme & Mode',
                  link: '/tutorials/add-pando-to-a-website/step-3/',
                },
                {
                  label: 'Step 4 - Set up fonts',
                  link: '/tutorials/add-pando-to-a-website/step-4/',
                },
                {
                  label: 'Typescript',
                  link: '/tutorials/add-pando-to-a-website/typescript/',
                },
                {
                  label: 'Bundlers',
                  link: '/tutorials/add-pando-to-a-website/bundlers/',
                },
              ],
            },
          ],
        },
        {
          label: 'Explanation',
          items: [
            {
              label: 'Color',
              link: '/explanation/color/',
            },
            {
              label: 'Accessibility',
              link: '/explanation/accessibility/',
            },
            {
              label: 'Versioning Policy',
              link: '/explanation/versioning-policy/',
            },
            {
              label: 'Themes',
              link: '/explanation/themes/',
            },
            {
              label: 'Color Modes',
              link: '/explanation/modes/',
            },
            {
              label: 'FAQ',
              link: '/explanation/faq/',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Migrate from Classic PSDS',
              collapsed: true,
              items: [
                {
                  label: 'Component comparison',
                  link: '/guides/migrate-from-classic-psds/component-comparison',
                },
              ],
            },
            {
              label: 'Using with Next 13',
              link: '/guides/next-13',
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Available in v1',
              link: '/reference/available-in-v1/',
            },
            {
              label: 'Color',
              collapsed: true,
              items: [
                {
                  label: 'Neutral Palette',
                  link: 'reference/color/neutral-palette',
                },
                {
                  label: 'Action Palette',
                  link: 'reference/color/action-palette',
                },
                {
                  label: 'Info Palette',
                  link: 'reference/color/info-palette',
                },
                {
                  label: 'Success Palette',
                  link: 'reference/color/success-palette',
                },
                {
                  label: 'Warning Palette',
                  link: 'reference/color/warning-palette',
                },
                {
                  label: 'Danger Palette',
                  link: 'reference/color/danger-palette',
                },
              ],
            },
            {
              label: 'Components',
              collapsed: true,
              items: [
                {
                  label: 'Button',
                  link: 'reference/components/button/overview',
                },
              ],
            },
            {
              label: 'Hooks',
              collapsed: true,
              items: [
                {
                  label: 'useTheme',
                  link: 'reference/hooks/use-theme',
                },
              ],
            },
            {
              label: 'Typography',
              link: '/reference/typography/',
            },
            {
              label: 'Tokens',
              link: '/reference/tokens-list/',
            },
            {
              label: 'Brand Guidelines',
              link: 'https://view.ceros.com/pluralsight/brand-guidelines/p/8',
              attrs: {
                target: '_blank',
              },
            },
            {
              label: 'Figma UI Kit',
              link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?node-id=6-11626&starting-point-node-id=6%3A11626',
              attrs: {
                target: '_blank',
              },
            },
            {
              label: 'Document status',
              link: '/reference/document-status/',
            },
          ],
        },
      ],
      components: {
        ThemeSelect: './src/components/ReactLib/ThemeSelect/ThemeSelect.astro',
      },
      customCss: [
        './src/styles/pandoColorMode.css',
        './src/styles/overrides.css',
      ],
      expressiveCode: {
        themes: ['github-dark-dimmed'],
        styleOverrides: {
          borderRadius: '6px',
        },
      },
    }),
    pandacss(),
    react(),
    expressiveCode(),
  ],
})

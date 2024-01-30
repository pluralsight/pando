import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import pandacss from '@pandacss/astro'
import react from '@astrojs/react'
import yaml from '@rollup/plugin-yaml'

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
              label: 'Getting started',
              link: '/tutorials/getting-started/',
            },
            {
              label: 'Migrating from Classic PSDS',
              link: '/tutorials/migrating-from-classic-psds/',
            },
            {
              label: 'Add Pando to a website',
              link: '/tutorials/add-pando-to-a-website/',
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
              label: 'Comparing Pando and Classic',
              link: '/explanation/classic-pando-comparison/',
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
              label: 'FAQ',
              link: '/explanation/faq/',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
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
              label: 'Color',
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
              items: [{ label: 'Button', link: 'reference/components/button' }],
            },
            {
              label: 'Hooks',
              items: [{ label: 'useTheme', link: 'reference/hooks/use-theme' }],
            },
            {
              label: 'Typography',
              link: '/reference/typography/',
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
        ThemeSelect: './src/components/ReactLib/ThemeSelect.astro',
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
  ],
})

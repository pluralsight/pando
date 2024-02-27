import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import pandacss from '@pandacss/astro'
import react from '@astrojs/react'
import yaml from '@rollup/plugin-yaml'
import path from 'path'
import { ExpressiveCodeTheme } from 'astro-expressive-code'
import fs from 'node:fs'

const themejsoncString = fs.readFileSync(
  path.resolve('./nightowlTheme.jsonc'),
  'utf8',
)
const nightowl = ExpressiveCodeTheme.fromJSONString(themejsoncString)

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
                {
                  label: 'Icon Button',
                  link: 'reference/components/icon-button/overview',
                },
                {
                  label: 'Text Link',
                  link: 'reference/components/text-link/overview',
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
            { label: 'Z-index', link: '/reference/z-index/' },
            {
              label: 'Document status',
              link: '/reference/document-status/',
            },
          ],
        },
      ],
      components: {
        ThemeSelect: './src/components/ReactLib/ThemeSelect/ThemeSelect.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: [
        './src/styles/pandoColorMode.css',
        './src/styles/overrides.css',
      ],
      expressiveCode: {
        themes: [nightowl],
        styleOverrides: {
          borderRadius: '6px',
        },
      },
    }),
    pandacss(),
    react(),
  ],
})

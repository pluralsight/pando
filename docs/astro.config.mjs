import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Pando Docs',
      social: {
        github: 'https://github.com/pluralsight/pando',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Getting started', link: '/start-here/getting-started/' },
          ],
        },
        {
          label: 'Core concepts',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Accessibility', link: '/core-concepts/accessibility/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Using with Next 13', link: '/guides/next-13' },
          ],
        },
        {
          label: 'Reference',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Comparing Pando and Classic',
              link: '/reference/classic-pando-comparison/',
            },
          ],
        },
      ],
    }),
  ],
})

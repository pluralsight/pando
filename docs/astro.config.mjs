import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://pando.pluralsight.com',
  integrations: [
    starlight({
      title: 'Pando Docs',
      social: {
        github: 'https://github.com/pluralsight/pando',
      },
      sidebar: [
        { label: 'Getting started', link: '/getting-started' },
        {
          label: 'Collections',
          items: [
            {
              label: 'Developer',
              link: '/collections/developer',
            },
            {
              label: 'Designer',
              link: '/collections/designer',
            },
            {
              label: 'Product',
              link: '/collections/product',
            },
          ],
        },
        {
          label: 'Tutorials',
          items: [{ label: 'Quick start', link: '/tutorials/quick-start/' }],
        },
        {
          label: 'Explanation',
          items: [
            { label: 'Color', link: '/explanation/color/' },
            {
              label: 'Comparing Pando and Classic',
              link: '/explanation/classic-pando-comparison/',
            },
            { label: 'Accessibility', link: '/explanation/accessibility/' },
          ],
        },
        {
          label: 'Guides',
          items: [{ label: 'Using with Next 13', link: '/guides/next-13' }],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Brand Guidelines',
              link: 'https://view.ceros.com/pluralsight/brand-guidelines/p/1',
              attrs: { target: '_blank' },
            },
            {
              label: 'Figma UI Kit',
              link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?node-id=6-11626&starting-point-node-id=6%3A11626',
              attrs: { target: '_blank' },
            },
          ],
        },
      ],
    }),
  ],
})

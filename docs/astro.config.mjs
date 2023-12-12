import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

const tutorials = {
  label: 'Tutorials',
  items: [{ label: 'Getting started', link: '/tutorials/getting-started/' }],
}

const explanation = {
  label: 'Explanation',
  items: [
    {
      label: 'Comparing Pando and Classic',
      link: '/explanation/classic-pando-comparison/',
    },
    { label: 'Accessibility', link: '/explanation/accessibility/' },
  ],
}

const guides = {
  label: 'Guides',
  items: [{ label: 'Using with Next 13', link: '/guides/next-13' }],
}

const reference = {
  label: 'Reference',
  items: [
    {
      label: 'Brand Guidelines',
      link: 'https://view.ceros.com/pluralsight/brand-guidelines/p/8',
      attrs: { target: '_blank' },
    },
    {
      label: 'Figma UI Kit',
      link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?node-id=6-11626&starting-point-node-id=6%3A11626',
      attrs: { target: '_blank' },
    },
  ],
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Pando Docs',
      social: {
        github: 'https://github.com/pluralsight/pando',
      },
      sidebar: [tutorials, explanation, guides, reference],
    }),
  ],
})

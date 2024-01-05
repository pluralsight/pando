type DocumentEntry = {
  title: string
  status: 'done' | 'todo' | 'in-progress' | "won't-do"
  refLink?: string
  docLink?: string
}

const generalDocs: DocumentEntry[] = [
  {
    title: 'Design style guide',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=35-5298&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Color',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-15766&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'in-progress',
    docLink: '/explanation/color',
  },
  {
    title: 'Neutral Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19600&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'done',
    docLink: '/reference/colors/neutral-palette',
  },
  {
    title: 'Action Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19174&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'done',
    docLink: '/reference/colors/action-palette',
  },
  {
    title: 'Info Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19105&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'in-progress',
  },
  {
    title: 'Success Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20597&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Warning Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-16070&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Danger Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20797&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Typography',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=533-15987&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'FAQ',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33503150602/Pando+%28Pluralsight+design+system%29+questions+answered',
    status: 'todo',
  },
  {
    title: 'Priorities List',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33647100667/Pando+priorities+list',
    status: 'todo',
  },
  {
    title: 'Figma UI-kit Update Process',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33725120835/Figma+UI-kit+Update+Process',
    status: 'todo',
  },
  {
    title: "Figma component do's and don'ts on detaching",
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33828896833/Figma+components+Dos+and+please+don+ts+on+detaching',
    status: 'todo',
  },
  {
    title: 'Pando design contributions',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33847967878/Pando+Design+System+-+Design+Contributions',
    status: 'todo',
  },
  {
    title: 'PSDS Classic -> Pando Migration',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33915469841/PSDS+Classic+Pando+migration',
    status: 'todo',
  },
  {
    title: "Pando Design FAQ's",
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33938833544/Pando+Design+FAQs',
    status: 'todo',
  },
  {
    title: 'Glossary',
    status: 'todo',
  },
  {
    title: 'Add Pando to a Website',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/installation/add-to-website',
    status: 'todo',
  },
  {
    title: 'Quick Start',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/quick-start/',
    status: 'todo',
  },
  {
    title: 'Tutorial: StarRating Component',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/quick-start/tutorial-star-rating',
    status: 'todo',
  },
  {
    title: 'Design Patterns',
    refLink:
      'https://design.pluralsight.com/docs/learn/learn-pando/design-patterns/',
    status: 'todo',
  },
  {
    title: 'Migrating from Classic',
    refLink: 'https://design.pluralsight.com/docs/learn/learn-pando/migration',
    status: 'todo',
  },
  {
    title: 'Using with Next 13',
    refLink: 'https://design.pluralsight.com/docs/learn/learn-pando/next13',
    status: 'todo',
  },
  {
    title: 'Accessibility',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/a11y',
    status: 'todo',
  },
  {
    title: 'Versioning Policy',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/versioning',
    status: 'todo',
  },
  {
    title: 'Meet the Team',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/team',
    status: 'todo',
  },
  {
    title: 'Themes',
    refLink: 'https://design.pluralsight.com/docs/reference/general/themes/',
    status: 'todo',
  },
  {
    title: 'Token List',
    refLink:
      'https://design.pluralsight.com/docs/reference/general/themes/token-list',
    status: 'todo',
  },
  {
    title: 'Customizing Themes',
    refLink:
      'https://design.pluralsight.com/docs/reference/general/themes/customizing',
    status: 'todo',
  },
  {
    title: 'Icons',
    refLink: 'https://design.pluralsight.com/docs/reference/general/icons',
    status: 'todo',
  },
  {
    title: 'Typography',
    refLink: 'https://design.pluralsight.com/docs/reference/general/typography',
    status: 'todo',
  },
  {
    title: 'Z-Index',
    refLink: 'https://design.pluralsight.com/docs/reference/general/zIndex',
    status: 'todo',
  },
]

export const componentDocs: DocumentEntry[] = [
  {
    title: 'ActionMenu',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/action-menu',
    status: 'todo',
  },
  {
    title: 'Admonition',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/admonition',
    status: 'todo',
  },
  {
    title: 'Avatar',
    refLink: 'https://design.pluralsight.com/docs/reference/components/avatar',
    status: 'todo',
  },
  {
    title: 'Badge',
    refLink: 'https://design.pluralsight.com/docs/reference/components/badge',
    status: 'todo',
  },
  {
    title: 'Button',
    refLink: 'https://design.pluralsight.com/docs/reference/components/button',
    status: 'todo',
  },
  {
    title: 'Checkbox',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/checkbox',
    status: 'todo',
  },
  {
    title: 'Circular Progress',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/circular-progress',
    status: 'todo',
  },
  {
    title: 'Confirm Dialog',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/confirm-dialog',
    status: 'todo',
  },
  {
    title: 'Field Messages',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/field-message',
    status: 'todo',
  },
  {
    title: 'Fieldset',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/fieldset',
    status: 'todo',
  },
  {
    title: 'Flex',
    refLink: 'https://design.pluralsight.com/docs/reference/components/flex',
    status: 'todo',
  },
  {
    title: 'For',
    refLink: 'https://design.pluralsight.com/docs/reference/components/for',
    status: 'todo',
  },
  {
    title: 'Form Control',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/form-control',
    status: 'todo',
  },
  {
    title: 'Form Label',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/form-label',
    status: 'todo',
  },
  {
    title: 'Grid',
    refLink: 'https://design.pluralsight.com/docs/reference/components/grid',
    status: 'todo',
  },
  {
    title: 'Icon Button',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/icon-button',
    status: 'todo',
  },
  {
    title: 'Icon',
    refLink: 'https://design.pluralsight.com/docs/reference/components/icon',
    status: 'todo',
  },
  {
    title: 'Input',
    refLink: 'https://design.pluralsight.com/docs/reference/components/input',
    status: 'todo',
  },
  {
    title: 'Menu',
    refLink: 'https://design.pluralsight.com/docs/reference/components/menu',
    status: 'todo',
  },
  {
    title: 'Modal',
    refLink: 'https://design.pluralsight.com/docs/reference/components/modal',
    status: 'todo',
  },
  {
    title: 'Popover',
    refLink: 'https://design.pluralsight.com/docs/reference/components/popover',
    status: 'todo',
  },
  {
    title: 'Portal',
    refLink: 'https://design.pluralsight.com/docs/reference/components/portal',
    status: 'todo',
  },
  {
    title: 'Progress Bar',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/progress-bar',
    status: 'todo',
  },
  {
    title: 'Prompt Dialog',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/prompt-dialog',
    status: 'todo',
  },
  {
    title: 'Radio',
    refLink: 'https://design.pluralsight.com/docs/reference/components/radio',
    status: 'todo',
  },
  {
    title: 'Select',
    refLink: 'https://design.pluralsight.com/docs/reference/components/select',
    status: 'todo',
  },
  {
    title: 'Show',
    refLink: 'https://design.pluralsight.com/docs/reference/components/show',
    status: 'todo',
  },
  {
    title: 'Skeleton',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/skeleton',
    status: 'todo',
  },
  {
    title: 'Table',
    refLink: 'https://design.pluralsight.com/docs/reference/components/table',
    status: 'todo',
  },
  {
    title: 'Tabs',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tabs',
    status: 'todo',
  },
  {
    title: 'Tag',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tag',
    status: 'todo',
  },
  {
    title: 'Textarea',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/text-area',
    status: 'todo',
  },
  {
    title: 'Text Link',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/text-link',
    status: 'todo',
  },
  {
    title: 'Toast',
    refLink: 'https://design.pluralsight.com/docs/reference/components/toast',
    status: 'todo',
  },
  {
    title: 'Toggle',
    refLink: 'https://design.pluralsight.com/docs/reference/components/toggle',
    status: 'todo',
  },
  {
    title: 'Tooltip',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tooltip',
    status: 'todo',
  },
]

const reactHooks: DocumentEntry[] = [
  {
    title: 'useAutoFormatDate',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useAutoFormatDate',
    status: 'todo',
  },
  {
    title: 'useIsIndeterminate',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useIsIndeterminate',
    status: 'todo',
  },
  {
    title: 'usePreloadedImage',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/usePreloadedImage',
    status: 'todo',
  },
  {
    title: 'useTheme',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useTheme',
    status: 'todo',
  },
]

function TableContent({ documents }: { readonly documents: DocumentEntry[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Reference Link</th>
          <th>Document Link</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => {
          return (
            <tr key={doc.title}>
              <td>{doc.title}</td>
              <td>{doc.status}</td>
              <td>
                {doc.refLink && (
                  <a href={doc.refLink} rel="noreferrer" target="_blank">
                    View Reference
                  </a>
                )}
              </td>
              <td>{doc.docLink && <a href={doc.docLink}>View Document</a>}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export function GeneralDocs() {
  return <TableContent documents={generalDocs} />
}

export function ComponentDocs() {
  return <TableContent documents={componentDocs} />
}

export function ReactHooksDocs() {
  return <TableContent documents={reactHooks} />
}

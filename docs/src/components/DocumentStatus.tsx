type DocumentEntry = {
  title: string
  status: 'done' | 'todo' | 'in-progress' | "won't-do"
  refLink?: string
  docLink?: string
}

const TODO = 'todo'
const IN_PROGRESS = 'in-progress'
const DONE = 'done'
// const WONT_DO = "won't-do"

const generalDocs: DocumentEntry[] = [
  {
    title: 'Design style guide',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=35-5298&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: TODO,
  },
  {
    title: 'Color',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-15766&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: IN_PROGRESS,
    docLink: '/explanation/color',
  },
  {
    title: 'Neutral Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19600&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: DONE,
    docLink: '/reference/colors/neutral-palette',
  },
  {
    title: 'Action Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19174&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: DONE,
    docLink: '/reference/colors/action-palette',
  },
  {
    title: 'Info Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19105&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    docLink: '/reference/color/info-palette',
    status: IN_PROGRESS,
  },
  {
    title: 'Success Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20597&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    docLink: '/reference/color/success-palette',
    status: IN_PROGRESS,
  },
  {
    title: 'Warning Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-16070&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    docLink: '/reference/color/warning-palette',
    status: IN_PROGRESS,
  },
  {
    title: 'Danger Palette',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20797&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    docLink: '/reference/color/danger-palette',
    status: DONE,
  },
  {
    title: 'Typography',
    refLink:
      'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=533-15987&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    docLink: '/reference/typography',
    status: DONE,
  },
  {
    title: 'FAQ',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33503150602/Pando+%28Pluralsight+design+system%29+questions+answered',
    status: DONE,
  },
  {
    title: 'Priorities List',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33647100667/Pando+priorities+list',
    status: TODO,
  },
  {
    title: 'Figma UI-kit Update Process',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33725120835/Figma+UI-kit+Update+Process',
    status: TODO,
  },
  {
    title: "Figma component do's and don'ts on detaching",
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33828896833/Figma+components+Dos+and+please+don+ts+on+detaching',
    status: TODO,
  },
  {
    title: 'Pando design contributions',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33847967878/Pando+Design+System+-+Design+Contributions',
    status: TODO,
  },
  {
    title: 'PSDS Classic -> Pando Migration',
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33915469841/PSDS+Classic+Pando+migration',
    status: TODO,
  },
  {
    title: "Pando Design FAQ's",
    refLink:
      'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33938833544/Pando+Design+FAQs',
    status: TODO,
  },
  {
    title: 'Glossary',
    status: TODO,
  },
  {
    title: 'Add Pando to a Website',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/installation/add-to-website',
    status: IN_PROGRESS,
    docLink: '/tutorials/add-pando-to-a-website/step-1/',
  },
  {
    title: 'Quick Start',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/quick-start/',
    status: TODO,
  },
  {
    title: 'Tutorial: StarRating Component',
    refLink:
      'https://design.pluralsight.com/docs/learn/get-started/quick-start/tutorial-star-rating',
    status: TODO,
  },
  {
    title: 'Design Patterns',
    refLink:
      'https://design.pluralsight.com/docs/learn/learn-pando/design-patterns/',
    status: TODO,
  },
  {
    title: 'Migrating from Classic PSDS',
    refLink: 'https://design.pluralsight.com/docs/learn/learn-pando/migration',
    status: IN_PROGRESS,
    docLink: '/tutorials/migrating-from-classic-psds',
  },
  {
    title: 'Using with Next 13',
    refLink: 'https://design.pluralsight.com/docs/learn/learn-pando/next13',
    status: TODO,
  },
  {
    title: 'Accessibility',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/a11y',
    status: IN_PROGRESS,
    docLink: '/explanation/accessibility/',
  },
  {
    title: 'Versioning Policy',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/versioning',
    status: DONE,
    docLink: '/explanation/versioning-policy',
  },
  {
    title: 'Meet the Team',
    refLink: 'https://design.pluralsight.com/docs/learn/about-pando/team',
    status: TODO,
  },
  {
    title: 'Themes',
    refLink: 'https://design.pluralsight.com/docs/reference/general/themes/',
    status: IN_PROGRESS,
    docLink: '/explanation/themes',
  },
  {
    title: 'Token List',
    refLink:
      'https://design.pluralsight.com/docs/reference/general/themes/token-list',
    status: IN_PROGRESS,
    docLink: '/reference/tokens-list',
  },
  {
    title: 'Modes',
    refLink:
      'https://design.pluralsight.com/docs/reference/general/themes/customizing',
    status: IN_PROGRESS,
    docLink: '/explanation/modes',
  },
  {
    title: 'Icons',
    refLink: 'https://design.pluralsight.com/docs/reference/general/icons',
    status: TODO,
  },
  {
    title: 'Typography',
    refLink: 'https://design.pluralsight.com/docs/reference/general/typography',
    docLink: '/reference/typography',
    status: DONE,
  },
  {
    title: 'Z-Index',
    refLink: 'https://design.pluralsight.com/docs/reference/general/zIndex',
    status: TODO,
  },
]

export const componentDocs: DocumentEntry[] = [
  {
    title: 'ActionMenu',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/action-menu',
    status: TODO,
  },
  {
    title: 'Admonition',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/admonition',
    status: TODO,
  },
  {
    title: 'Avatar',
    refLink: 'https://design.pluralsight.com/docs/reference/components/avatar',
    status: TODO,
  },
  {
    title: 'Badge',
    refLink: 'https://design.pluralsight.com/docs/reference/components/badge',
    status: TODO,
  },
  {
    title: 'Button',
    refLink: 'https://design.pluralsight.com/docs/reference/components/button',
    status: IN_PROGRESS,
    docLink: '/reference/components/button',
  },
  {
    title: 'Checkbox',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/checkbox',
    status: TODO,
  },
  {
    title: 'Circular Progress',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/circular-progress',
    status: TODO,
  },
  {
    title: 'Confirm Dialog',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/confirm-dialog',
    status: TODO,
  },
  {
    title: 'Field Messages',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/field-message',
    status: TODO,
  },
  {
    title: 'Fieldset',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/fieldset',
    status: TODO,
  },
  {
    title: 'Flex',
    refLink: 'https://design.pluralsight.com/docs/reference/components/flex',
    status: TODO,
  },
  {
    title: 'For',
    refLink: 'https://design.pluralsight.com/docs/reference/components/for',
    status: TODO,
  },
  {
    title: 'Form Control',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/form-control',
    status: TODO,
  },
  {
    title: 'Form Label',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/form-label',
    status: TODO,
  },
  {
    title: 'Grid',
    refLink: 'https://design.pluralsight.com/docs/reference/components/grid',
    status: TODO,
  },
  {
    title: 'Icon Button',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/icon-button',
    status: TODO,
  },
  {
    title: 'Icon',
    refLink: 'https://design.pluralsight.com/docs/reference/components/icon',
    status: TODO,
  },
  {
    title: 'Input',
    refLink: 'https://design.pluralsight.com/docs/reference/components/input',
    status: TODO,
  },
  {
    title: 'Menu',
    refLink: 'https://design.pluralsight.com/docs/reference/components/menu',
    status: TODO,
  },
  {
    title: 'Modal',
    refLink: 'https://design.pluralsight.com/docs/reference/components/modal',
    status: TODO,
  },
  {
    title: 'Popover',
    refLink: 'https://design.pluralsight.com/docs/reference/components/popover',
    status: TODO,
  },
  {
    title: 'Portal',
    refLink: 'https://design.pluralsight.com/docs/reference/components/portal',
    status: TODO,
  },
  {
    title: 'Progress Bar',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/progress-bar',
    status: TODO,
  },
  {
    title: 'Prompt Dialog',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/prompt-dialog',
    status: TODO,
  },
  {
    title: 'Radio',
    refLink: 'https://design.pluralsight.com/docs/reference/components/radio',
    status: TODO,
  },
  {
    title: 'Select',
    refLink: 'https://design.pluralsight.com/docs/reference/components/select',
    status: TODO,
  },
  {
    title: 'Show',
    refLink: 'https://design.pluralsight.com/docs/reference/components/show',
    status: TODO,
  },
  {
    title: 'Skeleton',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/skeleton',
    status: TODO,
  },
  {
    title: 'Table',
    refLink: 'https://design.pluralsight.com/docs/reference/components/table',
    status: TODO,
  },
  {
    title: 'Tabs',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tabs',
    status: TODO,
  },
  {
    title: 'Tag',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tag',
    status: TODO,
  },
  {
    title: 'Textarea',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/text-area',
    status: TODO,
  },
  {
    title: 'Text Link',
    refLink:
      'https://design.pluralsight.com/docs/reference/components/text-link',
    status: TODO,
  },
  {
    title: 'Toast',
    refLink: 'https://design.pluralsight.com/docs/reference/components/toast',
    status: TODO,
  },
  {
    title: 'Toggle',
    refLink: 'https://design.pluralsight.com/docs/reference/components/toggle',
    status: TODO,
  },
  {
    title: 'Tooltip',
    refLink: 'https://design.pluralsight.com/docs/reference/components/tooltip',
    status: TODO,
  },
]

const reactHooks: DocumentEntry[] = [
  {
    title: 'useAutoFormatDate',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useAutoFormatDate',
    status: TODO,
  },
  {
    title: 'useIsIndeterminate',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useIsIndeterminate',
    status: TODO,
  },
  {
    title: 'usePreloadedImage',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/usePreloadedImage',
    status: TODO,
  },
  {
    title: 'useTheme',
    refLink:
      'https://design.pluralsight.com/docs/reference/react-hooks/useTheme',
    status: DONE,
    docLink: '/reference/hooks/use-theme',
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

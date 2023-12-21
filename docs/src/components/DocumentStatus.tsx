type DocumentEntry = {
  title: string
  link?: string
  status: 'done' | 'todo' | 'in-progress' | "won't-do"
}

const generalDocs: DocumentEntry[] = [
  {
    title: 'Design style guide',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=35-5298&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Color',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-15766&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'in-progress',
  },
  {
    title: 'Neutral Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19600&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'in-progress',
  },
  {
    title: 'Action Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19174&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Info Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=481-19105&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Success Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20597&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Warning Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=477-16070&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Danger Palette',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=483-20797&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'Typography',
    link: 'https://www.figma.com/proto/uJtPfI38D9i8iQg0UGK2E0/Pando-Design-Guidelines?page-id=0%3A1&type=design&node-id=533-15987&viewport=1226%2C-14299%2C0.55&t=M7BKfoKdz6EBQ7ax-1&scaling=min-zoom&starting-point-node-id=6%3A11626',
    status: 'todo',
  },
  {
    title: 'FAQ',
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33503150602/Pando+%28Pluralsight+design+system%29+questions+answered',
    status: 'todo',
  },
  {
    title: 'Priorities List',
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33647100667/Pando+priorities+list',
    status: 'todo',
  },
  {
    title: 'Figma UI-kit Update Process',
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33725120835/Figma+UI-kit+Update+Process',
    status: 'todo',
  },
  {
    title: "Figma component do's and don'ts on detaching",
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33828896833/Figma+components+Dos+and+please+don+ts+on+detaching',
    status: 'todo',
  },
  {
    title: 'Pando design contributions',
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33847967878/Pando+Design+System+-+Design+Contributions',
    status: 'todo',
  },
  {
    title: 'PSDS Classic -> Pando Migration',
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33915469841/PSDS+Classic+Pando+migration',
    status: 'todo',
  },
  {
    title: "Pando Design FAQ's",
    link: 'https://pluralsight.atlassian.net/wiki/spaces/DO/pages/33938833544/Pando+Design+FAQs',
    status: 'todo',
  },
  {
    title: 'Glossary',
    status: 'todo',
  },
  {
    title: 'Add Pando to a Website',
    link: 'https://design.pluralsight.com/docs/learn/get-started/installation/add-to-website',
    status: 'todo',
  },
  {
    title: 'Quick Start',
    link: 'https://design.pluralsight.com/docs/learn/get-started/quick-start/',
    status: 'todo',
  },
  {
    title: 'Tutorial: StarRating Component',
    link: 'https://design.pluralsight.com/docs/learn/get-started/quick-start/tutorial-star-rating',
    status: 'todo',
  },
  {
    title: 'Design Patterns',
    link: 'https://design.pluralsight.com/docs/learn/learn-pando/design-patterns/',
    status: 'todo',
  },
  {
    title: 'Migrating from Classic',
    link: 'https://design.pluralsight.com/docs/learn/learn-pando/migration',
    status: 'todo',
  },
  {
    title: 'Using with Next 13',
    link: 'https://design.pluralsight.com/docs/learn/learn-pando/next13',
    status: 'todo',
  },
  {
    title: 'Accessibility',
    link: 'https://design.pluralsight.com/docs/learn/about-pando/a11y',
    status: 'todo',
  },
  {
    title: 'Versioning Policy',
    link: 'https://design.pluralsight.com/docs/learn/about-pando/versioning',
    status: 'todo',
  },
  {
    title: 'Meet the Team',
    link: 'https://design.pluralsight.com/docs/learn/about-pando/team',
    status: 'todo',
  },
  {
    title: 'Themes',
    link: 'https://design.pluralsight.com/docs/reference/general/themes/',
    status: 'todo',
  },
  {
    title: 'Token List',
    link: 'https://design.pluralsight.com/docs/reference/general/themes/token-list',
    status: 'todo',
  },
  {
    title: 'Customizing Themes',
    link: 'https://design.pluralsight.com/docs/reference/general/themes/customizing',
    status: 'todo',
  },
  {
    title: 'Icons',
    link: 'https://design.pluralsight.com/docs/reference/general/icons',
    status: 'todo',
  },
  {
    title: 'Typography',
    link: 'https://design.pluralsight.com/docs/reference/general/typography',
    status: 'todo',
  },
  {
    title: 'Z-Index',
    link: 'https://design.pluralsight.com/docs/reference/general/zIndex',
    status: 'todo',
  },
]

export const componentDocs: DocumentEntry[] = [
  {
    title: 'ActionMenu',
    link: 'https://design.pluralsight.com/docs/reference/components/action-menu',
    status: 'todo',
  },
  {
    title: 'Admonition',
    link: 'https://design.pluralsight.com/docs/reference/components/admonition',
    status: 'todo',
  },
  {
    title: 'Avatar',
    link: 'https://design.pluralsight.com/docs/reference/components/avatar',
    status: 'todo',
  },
  {
    title: 'Badge',
    link: 'https://design.pluralsight.com/docs/reference/components/badge',
    status: 'todo',
  },
  {
    title: 'Button',
    link: 'https://design.pluralsight.com/docs/reference/components/button',
    status: 'todo',
  },
  {
    title: 'Checkbox',
    link: 'https://design.pluralsight.com/docs/reference/components/checkbox',
    status: 'todo',
  },
  {
    title: 'Circular Progress',
    link: 'https://design.pluralsight.com/docs/reference/components/circular-progress',
    status: 'todo',
  },
  {
    title: 'Confirm Dialog',
    link: 'https://design.pluralsight.com/docs/reference/components/confirm-dialog',
    status: 'todo',
  },
  {
    title: 'Field Messages',
    link: 'https://design.pluralsight.com/docs/reference/components/field-message',
    status: 'todo',
  },
  {
    title: 'Fieldset',
    link: 'https://design.pluralsight.com/docs/reference/components/fieldset',
    status: 'todo',
  },
  {
    title: 'Flex',
    link: 'https://design.pluralsight.com/docs/reference/components/flex',
    status: 'todo',
  },
  {
    title: 'For',
    link: 'https://design.pluralsight.com/docs/reference/components/for',
    status: 'todo',
  },
  {
    title: 'Form Control',
    link: 'https://design.pluralsight.com/docs/reference/components/form-control',
    status: 'todo',
  },
  {
    title: 'Form Label',
    link: 'https://design.pluralsight.com/docs/reference/components/form-label',
    status: 'todo',
  },
  {
    title: 'Grid',
    link: 'https://design.pluralsight.com/docs/reference/components/grid',
    status: 'todo',
  },
  {
    title: 'Icon Button',
    link: 'https://design.pluralsight.com/docs/reference/components/icon-button',
    status: 'todo',
  },
  {
    title: 'Icon',
    link: 'https://design.pluralsight.com/docs/reference/components/icon',
    status: 'todo',
  },
  {
    title: 'Input',
    link: 'https://design.pluralsight.com/docs/reference/components/input',
    status: 'todo',
  },
  {
    title: 'Menu',
    link: 'https://design.pluralsight.com/docs/reference/components/menu',
    status: 'todo',
  },
  {
    title: 'Modal',
    link: 'https://design.pluralsight.com/docs/reference/components/modal',
    status: 'todo',
  },
  {
    title: 'Popover',
    link: 'https://design.pluralsight.com/docs/reference/components/popover',
    status: 'todo',
  },
  {
    title: 'Portal',
    link: 'https://design.pluralsight.com/docs/reference/components/portal',
    status: 'todo',
  },
  {
    title: 'Progress Bar',
    link: 'https://design.pluralsight.com/docs/reference/components/progress-bar',
    status: 'todo',
  },
  {
    title: 'Prompt Dialog',
    link: 'https://design.pluralsight.com/docs/reference/components/prompt-dialog',
    status: 'todo',
  },
  {
    title: 'Radio',
    link: 'https://design.pluralsight.com/docs/reference/components/radio',
    status: 'todo',
  },
  {
    title: 'Select',
    link: 'https://design.pluralsight.com/docs/reference/components/select',
    status: 'todo',
  },
  {
    title: 'Show',
    link: 'https://design.pluralsight.com/docs/reference/components/show',
    status: 'todo',
  },
  {
    title: 'Skeleton',
    link: 'https://design.pluralsight.com/docs/reference/components/skeleton',
    status: 'todo',
  },
  {
    title: 'Table',
    link: 'https://design.pluralsight.com/docs/reference/components/table',
    status: 'todo',
  },
  {
    title: 'Tabs',
    link: 'https://design.pluralsight.com/docs/reference/components/tabs',
    status: 'todo',
  },
  {
    title: 'Tag',
    link: 'https://design.pluralsight.com/docs/reference/components/tag',
    status: 'todo',
  },
  {
    title: 'Textarea',
    link: 'https://design.pluralsight.com/docs/reference/components/text-area',
    status: 'todo',
  },
  {
    title: 'Text Link',
    link: 'https://design.pluralsight.com/docs/reference/components/text-link',
    status: 'todo',
  },
  {
    title: 'Toast',
    link: 'https://design.pluralsight.com/docs/reference/components/toast',
    status: 'todo',
  },
  {
    title: 'Toggle',
    link: 'https://design.pluralsight.com/docs/reference/components/toggle',
    status: 'todo',
  },
  {
    title: 'Tooltip',
    link: 'https://design.pluralsight.com/docs/reference/components/tooltip',
    status: 'todo',
  },
]

const reactHooks: DocumentEntry[] = [
  {
    title: 'useAutoFormatDate',
    link: 'https://design.pluralsight.com/docs/reference/react-hooks/useAutoFormatDate',
    status: 'todo',
  },
  {
    title: 'useIsIndeterminate',
    link: 'https://design.pluralsight.com/docs/reference/react-hooks/useIsIndeterminate',
    status: 'todo',
  },
  {
    title: 'usePreloadedImage',
    link: 'https://design.pluralsight.com/docs/reference/react-hooks/usePreloadedImage',
    status: 'todo',
  },
  {
    title: 'useTheme',
    link: 'https://design.pluralsight.com/docs/reference/react-hooks/useTheme',
    status: 'todo',
  },
]

function TableContent({ documents }: { documents: DocumentEntry[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Reference Link</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => {
          return (
            <>
              <tr>
                <td>{doc.title}</td>
                <td>{doc.status}</td>
                <td>
                  {doc.link && (
                    <a href={doc.link} rel="noreferrer" target="_blank">
                      Link
                    </a>
                  )}
                </td>
              </tr>
            </>
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

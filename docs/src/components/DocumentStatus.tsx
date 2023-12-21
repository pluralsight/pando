import { Icon } from '@astrojs/starlight/components'

type DocumentEntry = {
  title: string
  link?: string
  status: 'done' | 'todo' | 'in-progress'
}

export const documents: DocumentEntry[] = [
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
    title: '',
    link: '',
    status: 'todo',
  },
  {
    title: '',
    link: '',
    status: 'todo',
  },
  {
    title: '',
    link: '',
    status: 'todo',
  },
  {
    title: '',
    link: '',
    status: 'todo',
  },
  {
    title: '',
    link: '',
    status: 'todo',
  },
]

function getIcon(status: string) {
  switch (status) {
    case 'done':
      return <Icon name="approve-check-circle" />
    case 'in-progress':
      return <Icon name="pencil" />
    case 'todo':
      return <Icon name="list-format" />
    default:
      break
  }
}

export function TableContent() {
  return (
    <>
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
    </>
  )
}

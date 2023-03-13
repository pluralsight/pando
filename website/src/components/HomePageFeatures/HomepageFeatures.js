import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import {
  CodeIcon,
  GithubIcon,
  PeopleIcon,
  PencilIcon,
  PluralsightIcon,
  ThemeIcon,
} from '@pluralsight/icons'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    icon: PeopleIcon,
    title: 'Accessibility',
    description:
      'Our highest priority is to help teams build products for everyone.',
  },
  {
    icon: PencilIcon,
    title: 'Full Customization',
    description: 'Extend anything from our dev suite to match your needs.',
  },
  {
    icon: ThemeIcon,
    title: 'Themeable UI',
    description:
      'Light/dark mode out of the box with an easy setup for extending.',
  },
  {
    icon: CodeIcon,
    title: 'Developer Experience',
    description:
      'Guaranteed to boost productivity, flexiblity, and scalability when building your app or website.',
  },
  {
    icon: PluralsightIcon,
    title: 'Designer Experience',
    description:
      'Guaranteed to boost productivity when designing your app or website.',
  },
  {
    icon: GithubIcon,
    title: 'Active Community',
    description:
      "We're a team of active maintainers ready to help you when you need.",
  },
]
const iconProps = getIconProps({ size: 'l' })

function Feature(props) {
  const Icon = props.icon

  return (
    <div className={styles.card}>
      <span className={styles.iconContainer}>
        <Icon {...iconProps} />
      </span>
      <div className="text--left">
        <h6 className={styles.cardTitle}>{props.title}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

const hompageFeaturesContent = (
  <section className={styles.features}>
    <div>
      <h2 className={styles.title}>
        Everything users expect from an application.
      </h2>
      <p className="size-l">
        From Accessibility to elegant design, we have you covered.
      </p>
    </div>
    <div className={styles.grid}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  </section>
)

export default function HomepageFeatures() {
  return hompageFeaturesContent
}

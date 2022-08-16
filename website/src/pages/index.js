import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  getButtonWithIconProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { ArrowRightIcon, PluralsightIcon } from '@pluralsight/icons'
import HomepageFeatures from '../components/HomePageFeatures/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const { button: buttonProps, iconOptions } = getButtonWithIconProps({
    kind: 'medium',
  })
  const { button: designBtnProps, designIconOptions } = getButtonWithIconProps({
    kind: 'medium',
  })

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={clsx('size-xxl', styles.heroSub)}>
            {siteConfig.tagline}
          </p>
        </div>
        <div className={styles.btnGroup}>
          <a
            className={`${buttonProps.className} ${styles.link}`}
            href="/docs/development/getting-started/installation"
          >
            Start Building
            <ArrowRightIcon {...getIconProps(iconOptions)} />
          </a>
          <a
            className={`${designBtnProps.className} ${styles.link}`}
            href="/docs/foundations/brand"
          >
            <PluralsightIcon {...getIconProps(designIconOptions)} />
            Design Resources
          </a>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The official design guides and developer tool suite for Pluralsight."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

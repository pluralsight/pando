import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ArrowRightIcon } from '@pluralsight/icons'
import HomepageFeatures from '../components/HomePageFeatures/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const { button: buttonProps, iconOptions } = getButtonProps()

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div>
          <h1 className={clsx('black-heading', styles.title)}>
            {siteConfig.title}
          </h1>
          <p className={clsx('size-xxl', styles.heroSub)}>
            {siteConfig.tagline}
          </p>
        </div>
        <div className={styles.btnGroup}>
          <a
            className={`${buttonProps.className} ${styles.link}`}
            href="/docs/start/get-started"
          >
            Get Started
            <ArrowRightIcon {...getIconProps(iconOptions)} />
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

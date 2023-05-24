import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
} from '@pluralsight/headless-styles'
import { ArrowRightIcon } from '@pluralsight/icons'
import HomepageFeatures from '../components/HomePageFeatures/HomepageFeatures'
import PandoLogo from '../components/PandoLogo/PandoLogo'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const buttonProps = getButtonProps({
    classNames: [styles.link],
  })

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div>
          <h1 className={clsx('black-heading', styles.title)}>
            <PandoLogo />
          </h1>
          <p className={clsx('size-xxl', styles.heroSub)}>
            {siteConfig.tagline}
          </p>
        </div>
        <div className={styles.btnGroup}>
          <Link {...buttonProps} href="/docs/learn/get-started/installation">
            Get Started
            <ArrowRightIcon {...getIconProps(getButtonIconOptions())} />
          </Link>
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

// File: components/blocks/BenefitBlock/index.tsx
import React from 'react'

import styles from './BenefitBlock.module.css'

// Define the types for our component props
type BenefitBlockProps = {
  tagline: string
  title: string
  description: string
  features: {
    title: string
    description: string
    icons: string[] // Array of icon paths
  }[]
}

const BenefitBlock: React.FC<BenefitBlockProps> = ({ tagline, title, description, features }) => {
  return (
    <section className={styles.benefitBlock}>
      <div className={styles.header}>
        <div className={styles.tagline}>[* {tagline} *]</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.centerLogo}>
        <div className={styles.logoContainer}>
          <img src="/images/logo-x.svg" alt="IRONX Logo" className={styles.logo} />
        </div>
      </div>
    </section>
  )
}

export default BenefitBlock

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Explore the Book - 5min ⏱️
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/img/ai-humanoid-robotics.svg"
              alt="AI and Humanoid Robotics"
              className={styles.heroImageContent}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Physical AI Resources',
    description: (
      <>
        Comprehensive technical content on Physical AI and Humanoid Robotics.
      </>
    ),
    link: '/docs/intro',
    image: 'img/physical-ai-icon.svg'
  },
  {
    title: 'AI-Powered Learning',
    description: (
      <>
        Interactive learning experience with AI assistance, structured lessons,
        and real-time updates based on the latest research.
      </>
    ),
    link: '/docs/intro',
    image: 'img/ai-learning-icon.svg'
  },
  {
    title: 'Expert Validated',
    description: (
      <>
        All content is reviewed by domain experts to ensure technical accuracy
        and adherence to best practices in robotics and AI.
      </>
    ),
    link: '/docs/intro',
    image: 'img/expert-validation-icon.svg'
  },
];

function Feature({title, description, link, image}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        {image && (
          <div className="feature-image" style={{marginBottom: '1rem'}}>
            <img
              src={image}
              alt={title}
              style={{
                maxWidth: '80px',
                maxHeight: '80px',
                margin: '0 auto 0.5rem auto',
                display: 'block'
              }}
            />
          </div>
        )}
        <Link to={link}>
          <Heading as="h3" style={{color: 'var(--ifm-color-primary)'}}>
            {title}
          </Heading>
        </Link>
        <p>{description}</p>
        <Link to={link} className="button button--outline button--secondary">
          Learn More
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features} style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="AI-Powered Knowledge for Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section style={{padding: '2rem 0', backgroundColor: 'var(--ifm-color-emphasis-100)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <Heading as="h2" className="text--center" style={{marginBottom: '2rem'}}>
                  Cutting-Edge Knowledge in Physical AI & Humanoid Robotics
                </Heading>
                <p className="text--center">
                  Our platform provides comprehensive technical content
                  that bridges the gap between digital intelligence and physical interaction.
                  Whether you're a researcher, engineer, or enthusiast, access the most current
                  information on advanced robotics and AI integration.
                </p>
              </div>
            </div>

            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--4">
                <Link to="/docs/physical-ai/chapter1-intro" className={styles.cardLink}>
                  <div className={clsx('card', styles.homeCard)}>
                    <div className="card__header">
                      <Heading as="h3">Physical AI Fundamentals</Heading>
                    </div>
                    <div className="card__body">
                      <p>Core concepts of Physical AI and how it bridges digital intelligence and physical interaction.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col col--4">
                <Link to="/docs/humanoid-robotics/chapter1-design" className={styles.cardLink}>
                  <div className={clsx('card', styles.homeCard)}>
                    <div className="card__header">
                      <Heading as="h3">Humanoid Robotics</Heading>
                    </div>
                    <div className="card__body">
                      <p>Design principles, control systems, and applications of humanoid robots in modern society.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col col--4">
                <Link to="/docs/ai-integration/chapter1-perception" className={styles.cardLink}>
                  <div className={clsx('card', styles.homeCard)}>
                    <div className="card__header">
                      <Heading as="h3">AI Integration</Heading>
                    </div>
                    <div className="card__body">
                      <p>Perception, decision-making, and execution systems that enable intelligent physical interaction.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
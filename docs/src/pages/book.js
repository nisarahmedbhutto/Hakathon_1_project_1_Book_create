import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './book.module.css';

const BookPage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Book - ${siteConfig.title}`}
      description="Explore the PhysicalAI Book - comprehensive content on Physical AI & Humanoid Robotics">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>PhysicalAI Book</h1>
            <p>Explore technical content on Physical AI and Humanoid Robotics.</p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.bookSections}>
            <div className={styles.section}>
              <h2>Physical AI Fundamentals</h2>
              <p>Explore the core concepts of Physical AI and how it bridges the gap between digital intelligence and physical interaction.</p>
              <Link to="/docs/physical-ai/chapter1-intro" className={styles.button}>
                Start Reading
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Humanoid Robotics</h2>
              <p>Learn about the design principles, control systems, and applications of humanoid robots in modern society.</p>
              <Link to="/docs/humanoid-robotics/chapter1-design" className={styles.button}>
                Start Reading
              </Link>
            </div>

            <div className={styles.section}>
              <h2>AI Integration</h2>
              <p>Deep dive into perception, decision-making, and execution systems that enable intelligent physical interaction.</p>
              <Link to="/docs/ai-integration/chapter1-perception" className={styles.button}>
                Start Reading
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Safety & Ethics</h2>
              <p>Understand the critical safety considerations and ethical frameworks that guide responsible AI development.</p>
              <Link to="/docs/safety/chapter1-safety" className={styles.button}>
                Start Reading
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BookPage;
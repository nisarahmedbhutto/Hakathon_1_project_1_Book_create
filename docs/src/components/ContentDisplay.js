import React from 'react';
import clsx from 'clsx';
import styles from './ContentDisplay.module.css';

// Mock data for content display
const mockContent = {
  title: 'Physical AI Fundamentals',
  author: 'AI Content Generator',
  lastUpdated: '2025-12-15',
  content: 'This content was automatically generated and reviewed by AI agents and human experts.',
  version: '1.2.0'
};

const ContentDisplay = (props) => {
  const { title, author, lastUpdated, content, version } = props.content || mockContent;

  return (
    <div className={styles.contentDisplay}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.metadata}>
          <span className={styles.author}>Author: {author}</span>
          <span className={styles.lastUpdated}>Last Updated: {lastUpdated}</span>
          <span className={styles.version}>Version: {version}</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>{content}</p>
        {props.children && <div className={styles.children}>{props.children}</div>}
      </div>

      <div className={styles.footer}>
        <div className={styles.aiGeneratedNotice}>
          <strong>AI Generated Content</strong> - This content was automatically generated and reviewed by AI agents and human experts.
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ContentDisplay from '../components/ContentDisplay';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './lessons.module.css';

const LessonsPage = () => {
  const { siteConfig } = useDocusaurusContext();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Mock data for lessons - in a real implementation, this would come from the backend API
  const mockLessons = [
    {
      id: 'lesson-1',
      title: 'Introduction to Physical AI',
      description: 'Learn the fundamental concepts of Physical AI and its applications',
      difficulty: 'Beginner',
      duration: '30 min',
      prerequisites: [],
      objectives: ['Understand Physical AI basics', 'Identify key applications']
    },
    {
      id: 'lesson-2',
      title: 'Humanoid Robot Design Principles',
      description: 'Explore the design considerations for humanoid robots',
      difficulty: 'Intermediate',
      duration: '45 min',
      prerequisites: ['lesson-1'],
      objectives: ['Understand anthropomorphic design', 'Learn about balance systems']
    },
    {
      id: 'lesson-3',
      title: 'AI Perception Systems',
      description: 'Deep dive into perception systems for physical AI',
      difficulty: 'Advanced',
      duration: '60 min',
      prerequisites: ['lesson-1', 'lesson-2'],
      objectives: ['Understand sensor fusion', 'Learn about computer vision']
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch lessons
    setTimeout(() => {
      setLessons(mockLessons);
      setLoading(false);
    }, 500);
  }, []);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <Layout
      title={`Lessons - ${siteConfig.title}`}
      description="Structured learning content for Physical AI & Humanoid Robotics">
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Learning Path: Physical AI & Humanoid Robotics</h1>
          <p>Progress through structured lessons to master key concepts</p>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading lessons...</div>
        ) : (
          <div className={styles.content}>
            <div className={styles.lessonList}>
              <h2>Available Lessons</h2>
              <div className={styles.lessonGrid}>
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={clsx(
                      styles.lessonCard,
                      selectedLesson?.id === lesson.id && styles.selected
                    )}
                    onClick={() => handleLessonSelect(lesson)}
                  >
                    <h3>{lesson.title}</h3>
                    <p className={styles.description}>{lesson.description}</p>
                    <div className={styles.lessonMeta}>
                      <span className={clsx(styles.difficulty, styles[lesson.difficulty.toLowerCase()])}>
                        {lesson.difficulty}
                      </span>
                      <span className={styles.duration}>{lesson.duration}</span>
                    </div>
                    <div className={styles.objectives}>
                      <h4>Learning Objectives:</h4>
                      <ul>
                        {lesson.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedLesson && (
              <div className={styles.lessonDetail}>
                <ContentDisplay
                  content={{
                    title: selectedLesson.title,
                    author: 'AI Content Generator',
                    lastUpdated: '2025-12-15',
                    content: `This is the content for ${selectedLesson.title}. In a real implementation, this would be loaded from the backend API based on the selected lesson.`,
                    version: '1.0.0'
                  }}
                />
              </div>
            )}
          </div>
        )}
      </main>
    </Layout>
  );
};

export default LessonsPage;
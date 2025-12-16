// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar for Physical AI & Humanoid Robotics
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'overview'],
    },
    {
      type: 'category',
      label: 'Physical AI Fundamentals',
      items: [
        'physical-ai/chapter1-intro',
        'physical-ai/chapter2-theory',
        'physical-ai/chapter3-applications',
      ],
    },
    {
      type: 'category',
      label: 'Humanoid Robotics',
      items: [
        'humanoid-robotics/chapter1-design',
        'humanoid-robotics/chapter2-control',
        'humanoid-robotics/chapter3-learning',
      ],
    },
    {
      type: 'category',
      label: 'AI Integration',
      items: [
        'ai-integration/chapter1-perception',
        'ai-integration/chapter2-decision',
        'ai-integration/chapter3-execution',
      ],
    },
    {
      type: 'category',
      label: 'Safety & Ethics',
      items: [
        'safety/chapter1-safety',
        'safety/chapter2-ethics',
        'safety/chapter3-responsibility',
      ],
    },
  ],
};

export default sidebars;

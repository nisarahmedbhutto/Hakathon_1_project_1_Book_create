# PhysicalAI - Frontend

This directory contains the Docusaurus-based frontend for Physical AI & Humanoid Robotics. The frontend provides a user-friendly interface for accessing comprehensive technical content.

## Overview

The PhysicalAI frontend is built with Docusaurus, a modern static site generator optimized for documentation and content delivery. It provides:

- Chapter and lesson navigation
- AI-generated content display with proper attribution
- Search functionality
- Responsive design for all device sizes
- Accessibility features

## Project Structure

```
docs/
├── blog/                 # Blog posts (if needed)
├── docs/                 # Main documentation content
│   ├── intro.md          # Introduction to PhysicalAI
│   ├── overview.md       # System overview
│   ├── physical-ai/      # Physical AI chapters
│   ├── humanoid-robotics/ # Humanoid Robotics chapters
│   ├── ai-integration/   # AI Integration chapters
│   └── safety/           # Safety & Ethics chapters
├── src/
│   ├── components/       # Reusable React components
│   │   └── ContentDisplay.js # Component for displaying content
│   └── pages/
│       └── lessons.js    # Lessons page with navigation
├── static/               # Static assets
├── docusaurus.config.js  # Main Docusaurus configuration
├── sidebars.js          # Navigation sidebar configuration
└── package.json         # Project dependencies and scripts
```

## Key Features

### Content Display
- Dynamic content loading with metadata display
- AI-generated content attribution
- Version tracking and update information

### Navigation
- Hierarchical chapter organization
- Lesson progression tracking
- Difficulty level indicators
- Prerequisite navigation

### Components
- `ContentDisplay`: Reusable component for displaying content with metadata
- `lessons.js`: Interactive lessons page with filtering and selection

## Configuration

The site is configured in `docusaurus.config.js` with:

- Custom title and tagline for PhysicalAI
- Navigation items for chapters and lessons
- Footer links to GitHub and documentation
- Social media and community links

## Local Development

To run the site locally:

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view the site

## Building for Production

To build the site for production:

```bash
npm run build
```

The static files will be generated in the `build/` directory and can be deployed to any static hosting service.

## Integration with Backend

The frontend is designed to connect to the backend API for:
- Fetching content, chapters, and lessons
- User progress tracking
- Search functionality
- Content review and attribution data

## Accessibility

The site follows accessibility best practices:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast

## Contributing

To add new content:
1. Create a new markdown file in the appropriate section under `docs/`
2. Add the file to the sidebar configuration in `sidebars.js`
3. Ensure proper frontmatter with `sidebar_position`

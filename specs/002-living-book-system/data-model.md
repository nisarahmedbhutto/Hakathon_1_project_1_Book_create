# Data Model for Living Book System for Physical AI & Humanoid Robotics

## Core Entities

### Content
- **id**: string (UUID) - Unique identifier for the content piece
- **title**: string - Title of the chapter/lesson
- **slug**: string - URL-friendly identifier
- **content_type**: enum (chapter, lesson, article) - Type of content
- **body**: string (Markdown) - Main content in Markdown format
- **metadata**: JSON object - Additional metadata (tags, difficulty, etc.)
- **version**: integer - Version number for tracking changes
- **status**: enum (draft, in_review, approved, published, deprecated) - Current status
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp
- **author**: string - Author identifier (human or AI agent ID)
- **review_status**: object - Review information (reviewer, timestamp, comments)

### Chapter
- **id**: string (UUID) - Unique identifier
- **title**: string - Chapter title
- **slug**: string - URL-friendly identifier
- **description**: string - Brief description
- **order**: integer - Order in the book sequence
- **lessons**: array of strings - IDs of lessons in this chapter
- **difficulty_level**: enum (beginner, intermediate, advanced) - Target audience level
- **prerequisites**: array of strings - Prerequisite chapter/lesson IDs
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp

### Lesson
- **id**: string (UUID) - Unique identifier
- **title**: string - Lesson title
- **slug**: string - URL-friendly identifier
- **chapter_id**: string - ID of parent chapter
- **content_id**: string - ID of associated content
- **learning_objectives**: array of strings - What the reader will learn
- **estimated_duration**: integer - Estimated reading time in minutes
- **difficulty_level**: enum (beginner, intermediate, advanced) - Target audience level
- **prerequisites**: array of strings - Prerequisite lesson IDs
- **dependencies**: array of strings - Related content IDs
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp

### AI Agent
- **id**: string (UUID) - Unique identifier
- **name**: string - Agent name
- **type**: enum (content_generator, reviewer, ethics_checker) - Agent type
- **configuration**: JSON object - Agent-specific configuration
- **memory_state**: JSON object - Persistent memory state
- **last_run**: datetime - Last execution timestamp
- **status**: enum (active, paused, error) - Current operational status
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp

### Review
- **id**: string (UUID) - Unique identifier
- **content_id**: string - ID of content being reviewed
- **reviewer_id**: string - ID of reviewer (human or agent)
- **review_type**: enum (automated, human) - Type of review
- **comments**: string - Reviewer comments
- **status**: enum (pending, approved, rejected) - Review outcome
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp

### User (if authentication is implemented)
- **id**: string (UUID) - Unique identifier
- **username**: string - Unique username
- **email**: string - Email address
- **role**: enum (reader, reviewer, admin) - User role
- **preferences**: JSON object - User preferences
- **created_at**: datetime - Creation timestamp
- **updated_at**: datetime - Last update timestamp

## Relationships

1. **Chapter** contains many **Lesson** entities (one-to-many)
2. **Lesson** belongs to one **Chapter**
3. **Content** can be referenced by one **Lesson** (one-to-one)
4. **Chapter** may have prerequisite **Chapter** or **Lesson** (many-to-many through prerequisites array)
5. **Lesson** may have prerequisite **Lesson** (many-to-many through prerequisites array)
6. **Review** references **Content** (many-to-one)
7. **AI Agent** processes **Content** (many-to-many through execution logs)

## Validation Rules

1. **Content**:
   - Title must be 1-200 characters
   - Body must not be empty
   - Status must follow proper workflow (draft → in_review → approved → published)
   - Version must increment on updates

2. **Chapter**:
   - Title must be 1-100 characters
   - Order must be unique within a book
   - Difficulty level must match contained lessons

3. **Lesson**:
   - Title must be 1-100 characters
   - Estimated duration must be positive
   - Must belong to exactly one chapter

4. **AI Agent**:
   - Name must be unique
   - Configuration must be valid for the agent type

5. **Review**:
   - Each content item can only have one active review
   - Reviewer cannot review their own content (for human reviewers)

## State Transitions

### Content Status Transitions
- draft → in_review (when submitted for review)
- in_review → approved (when review passes)
- in_review → draft (when changes requested)
- approved → published (when human approves)
- published → draft (when updates needed)
- published → deprecated (when content becomes outdated)

### AI Agent Status Transitions
- active → paused (when manually paused)
- paused → active (when resumed)
- active → error (when execution fails)
- error → active (when fixed and resumed)
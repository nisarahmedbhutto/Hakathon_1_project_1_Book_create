# Quickstart Guide for Living Book System

## Prerequisites

- Python 3.11+
- Node.js 18+ (for Docusaurus)
- Git
- GitHub account with repository access

## Setup Backend

1. **Install Python dependencies:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Run the backend server:**
   ```bash
   uvicorn src.api.main:app --reload --port 8000
   ```

## Setup Frontend (Docusaurus)

1. **Install Node dependencies:**
   ```bash
   cd docs
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm start
   ```

## Setup AI Agents

1. **Install agent dependencies:**
   ```bash
   cd agents
   pip install -r requirements.txt
   ```

2. **Configure agent settings:**
   ```bash
   # Configure agents with appropriate API keys and settings
   python -c "from agents.content_generator import setup; setup()"
   ```

## Basic Usage

### Creating Content

1. **Using the API:**
   ```bash
   curl -X POST http://localhost:8000/api/v1/content \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Introduction to Physical AI",
       "content_type": "lesson",
       "body": "# Introduction to Physical AI\n\nPhysical AI...",
       "author": "content_generator_agent"
     }'
   ```

### Running an AI Agent

1. **Execute content generation:**
   ```bash
   curl -X POST http://localhost:8000/api/v1/agents/{agent-id}/run \
     -H "Content-Type: application/json" \
     -d '{
       "parameters": {
         "topic": "Humanoid Robotics Control Systems",
         "target_audience": "intermediate",
         "length": "medium"
       }
     }'
   ```

### Publishing Content

1. **Submit content for review:**
   ```bash
   curl -X PUT http://localhost:8000/api/v1/content/{content-id} \
     -H "Content-Type: application/json" \
     -d '{"status": "in_review"}'
   ```

2. **Publish approved content:**
   ```bash
   curl -X POST http://localhost:8000/api/v1/content/{content-id}/publish
   ```

## Configuration

### Environment Variables

- `GITHUB_TOKEN`: GitHub API token for repository access
- `CLAUDE_API_KEY`: API key for Claude integration
- `DATABASE_URL`: Database connection string (if using database)
- `CONTENT_DIR`: Directory for content storage (defaults to ./content)

### Agent Configuration

Agents can be configured with different settings:

- **Content Generator**: Configured for research paper parsing and technical writing
- **Reviewer**: Configured with quality check rules
- **Ethics Checker**: Configured with ethical guidelines from constitution

## Development

### Running Tests

```bash
# Backend tests
cd backend
python -m pytest tests/

# Frontend tests (if applicable)
cd docs
npm test
```

### Adding New Content Types

1. Update the data model in `data-model.md`
2. Add corresponding API endpoints
3. Update the Docusaurus configuration to handle new content types
4. Update agent processing logic if needed

## Troubleshooting

### Common Issues

1. **Agent not running**: Check that Claude API key is properly configured
2. **Content not updating**: Verify GitHub integration and permissions
3. **Slow response times**: Check system resources and database performance
4. **Review process stuck**: Verify human review workflow configuration

### Logs

- Backend logs: `backend/logs/app.log`
- Agent logs: `agents/logs/agent.log`
- Frontend build logs: Console output during `npm start`
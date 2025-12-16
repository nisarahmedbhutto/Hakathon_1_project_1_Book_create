---
id: 4
title: create-implementation-plan
stage: plan
date: 2025-12-15
surface: agent
model: Claude Sonnet 4.5
feature: living-book-system
branch: 002-living-book-system
user: user
command: /sp.plan
labels: [planning,architecture,living-book,physical-ai]
links:
  spec: specs/002-living-book-system/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-living-book-system/plan.md
  - specs/002-living-book-system/research.md
  - specs/002-living-book-system/data-model.md
  - specs/002-living-book-system/quickstart.md
  - specs/002-living-book-system/contracts/content-api.yaml
  - specs/002-living-book-system/contracts/agent-api.yaml
tests:
  - none
---

## Prompt

```text
# Style Plan – *Physical AI & Humanoid Robotics*

This Style Plan defines **how the book is written, structured, updated, and presented**, following the approved Technical Specification. It ensures consistency across agents, chapters, lessons, and continuous updates.

---

## 1. Writing Philosophy

* The book is written **by engineers, for engineers**.
* Focus on **systems thinking**, not isolated algorithms.
* Every concept must answer at least one of the following:

  * *How does this work in the real world?*
  * *How do I build, integrate, or debug this?*
  * *What breaks when theory meets physical reality?*

**Rule:** If a section cannot connect to a physical system, it must be revised or removed.

---

## 2. Tone & Voice

* Clear, technical, and practical
* No marketing language
* No hype or exaggerated claims
* Confident but honest about limitations

**Voice Guidelines:**

* Prefer: "In practice…", "In real robots…", "A common failure mode is…"
* Avoid: "Revolutionary", "Magical", "Human-level", unless clearly justified

---

## 3. Audience Assumptions

The reader:

* Can read Python code
* Understands basic linear algebra and control concepts
* Has exposure to AI/ML terminology

**Do not:**

* Explain basic programming concepts
* Over-simplify engineering trade-offs

**Do:**

* Explain why design decisions are made
* Show consequences of wrong assumptions

---

## 4. Chapter-Level Style Rules

Each chapter must:

1. Start with a **systems-level problem statement**
2. Explain **why the topic matters in Physical AI**
3. Connect hardware, software, and learning
4. Highlight real-world constraints
5. End with a concise engineering summary

**Chapter Length Rule:**

* Short enough to read in one sitting
* Long enough to build mental models

---

## 5. Lesson-Level Style Rules (Core Unit)

Each lesson must follow this exact flow:

1. **Lesson Goal** – what the reader will be able to build or understand
2. **System Context** – where this fits in a robot or humanoid
3. **Core Concepts** – theory tied directly to embodiment
4. **Engineering Reality** – noise, latency, failure modes
5. **Implementation Insight** – Python-based logic or pseudocode
6. **Takeaways** – 3–5 concrete points

**Lesson Rules:**

* Lessons are independent
* No forward references required
* Can be updated without breaking others

---

## 6. Code Style Rules

**Global Rules:**

* Python only (except Docusaurus frontend)
* Code must be readable before it is clever

**Code Purpose:**

* Illustrate ideas
* Show structure, not just syntax

**Avoid:**

* Over-optimized code
* Large unexplained blocks

**Prefer:**

* Modular functions
* Clear variable names
* Comments explaining *why*, not *what*

---

## 7. Math Usage Style

* Math is a **tool**, not the focus
* Introduce math only when it explains behavior
* Always pair equations with intuition

**Rule:**
If math cannot explain a physical or learning effect, it does not belong.

---

## 8. Diagrams & Visual Reasoning

* Diagrams are conceptual, not decorative
* Prefer block diagrams, data flow, and control loops
* Every diagram must answer:

  * *What information flows where?*

Agents may generate diagrams, but humans approve final versions.

---

## 9. Ethics & Safety Style

Ethics is not a separate chapter — it is **embedded**.

* Safety considerations appear alongside technical content
* Failure scenarios are explicitly discussed
* Human impact is considered in deployment sections

**Rule:**
Any autonomy-related lesson must mention safety boundaries.

---

## 10. Agent Writing Rules

All agents must:

* Follow the Global Constitution
* Follow this Style Plan
* Write in a consistent technical voice

**Agents must NOT:**

* Introduce new terminology without definition
* Change structure without approval
* Violate language restrictions

---

## 11. Update & Evolution Style

Because this is a Living Book:

* Updates must be incremental
* Breaking changes are documented
* Old lessons may be deprec
```

## Response snapshot

Successfully executed the planning workflow for the Living Book System for Physical AI & Humanoid Robotics. Completed all required phases:

Phase 0 - Research:
- Created research.md with technology decisions and rationale
- Resolved all architectural and technical unknowns

Phase 1 - Design & Contracts:
- Created data-model.md with comprehensive entity definitions
- Created API contracts (content-api.yaml and agent-api.yaml)
- Created quickstart.md with setup and usage instructions
- Updated agent context to include new technologies

The implementation plan is now complete with:
- Technical context defined (Python 3.11, FastAPI, Docusaurus)
- Architecture validated against constitution principles
- Data models and API contracts established
- Quickstart guide for development setup
- Agent context updated with new technology stack

## Outcome

- ✅ Impact: Complete implementation plan created for living book system
- 🧪 Tests: none
- 📁 Files: Created plan.md, research.md, data-model.md, quickstart.md, and contract files
- 🔁 Next prompts: Ready for /sp.tasks to create implementation tasks
- 🧠 Reflection: Plan aligns with style guide and constitution requirements

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
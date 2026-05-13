# Project structure

This document is generated in the **Architecture** stage. **All application source** lives under the `app/` root folder at the repository level.

**Summary:** This layout separates front-end, back-end, and database concerns into distinct directories under a single app root, facilitating modular development and clear organization.

## Directory tree

```text
app/
├── app/frontend/
├── app/backend/
├── db/migrations/
├── db/seeds/
├── .nagent/
│   ├── nagent.yml
│   └── summary.txt
└── project_structure.md
```

## Path reference

| Path | Purpose |
|------|---------|
| `app/frontend` | React UI |
| `app/backend` | API server - Fastify |
| `db/migrations` | Ordered DB migrations for PostgreSQL |
| `db/seeds` | Seed data for initializing the database |
| `.nagent/nagent.yml` | Nagent platform blueprint (stack + paths) |
| `.nagent/summary.txt` | Buildcraft run summary + request excerpt |
| `architecture.md` | Full architecture & API contracts |

## Database layout (postgresql)

- SQL: migrations under `db/migrations/` (e.g. `001_initial.sql`); seeds under `db/seeds/`.

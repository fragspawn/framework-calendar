# Architecture

## Overview
This repository is a frontend-only calendar prototype for managing free/busy time blocks. It is built as a Vite + React application and uses FullCalendar for the interactive scheduling UI.

At the current stage, the product is a single-page experience focused on:
- selecting and creating time blocks
- assigning categories such as Busy, Free, and Tentative
- editing and deleting events
- dragging events to new dates/times
- enforcing business-hour constraints on the calendar

The repository does not yet include a backend API, database layer, or authentication system. Data is currently held in React component state, so it is ephemeral and resets when the app reloads.

## Runtime stack
- Frontend framework: React 19
- Build tool: Vite
- UI calendar: FullCalendar
- Styling: custom CSS in the app source
- Local runtime: Docker Compose for development

## High-level architecture

```text
Browser
  │
  ▼
Vite dev server
  │
  ▼
React app (app/src/App.jsx)
  │
  ├─ interacts with FullCalendar
  ├─ stores events in local React state
  ├─ applies category colors and labels
  └─ handles selection / drag / edit / delete flows
```

## Repository structure

```text
framework-calendar/
├─ AGENTS.md
├─ README.md
├─ docker-compose.yml
├─ docker-compose-staging.yml
├─ Dockerfile-staging
├─ architecture.md
├─ app/
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  └─ src/
│     ├─ App.jsx
│     ├─ App.css
│     ├─ index.css
│     └─ main.jsx
└─ .gitignore
```

## Major components

### 1. Application shell
The app entry point is [app/src/main.jsx](./app/src/main.jsx). It mounts the React root and renders the main application component.

### 2. Calendar and business logic
The primary implementation lives in [app/src/App.jsx](./app/src/App.jsx). It contains:
- `CATEGORIES` definitions for Busy, Free, and Tentative
- event state managed by `useState`
- date range selection logic via FullCalendar `select`
- event click handling for editing
- delete logic for calendar entries
- event category updates
- drag and drop updates
- business-hours configuration for weekly scheduling

This component is effectively the current application model, controller, and view logic in one file.

### 3. Styling
The layout and visual behavior are defined in [app/src/App.css](./app/src/App.css). It styles:
- page layout and header
- sidebar controls and legend
- event editor panel
- calendar container and fullcalendar theming
- event cards in the lower summary list

### 4. HTML bootstrap
The root HTML shell is [app/index.html](./app/index.html). It provides the mounting element (`#root`) for the React application.

## Data model
The current app uses a lightweight event shape similar to:

```js
{
  id: '1',
  title: 'Busy - Teams Meeting',
  start: '2026-10-22T09:00:00',
  end: '2026-10-22T10:00:00',
  category: 'busy',
  backgroundColor: '#EF4444',
  borderColor: '#DC2626'
}
```

Key characteristics:
- each event has a start and end time
- each event belongs to a category
- the category controls title prefix and display color
- drag/drop updates the event's time range
- the list view is derived directly from the event array

## State flow
The application currently follows a simple local-state pattern:

1. User picks a date range or drags an event.
2. A callback in [app/src/App.jsx](./app/src/App.jsx) creates or updates an event object.
3. The updated `events` array is stored in React state.
4. FullCalendar re-renders from the `events` prop.
5. The summary list beneath the calendar is also driven from the same source of truth.

This makes the app easy to understand and prototype quickly, but it is not production-ready for multi-user or persistent scheduling workflows.

## Docker and local dev environment
The repo includes Docker Compose files for running the app locally:
- [docker-compose.yml](./docker-compose.yml): standard development configuration
- [docker-compose-staging.yml](./docker-compose-staging.yml): staging-oriented setup

These files run the app in a Node container and expose the Vite interface on port 5173.

## Architectural constraints and current limitations
The following are important constraints evident in the current repo:

- No backend or API service exists yet.
- No database exists for persistent storage.
- No user auth or role model is implemented.
- No server-side validation or business rules beyond UI constraints exist.
- The app does not yet model the broader concepts described in [README.md](./README.md), including roster templates, roles, staff assignments, or organizational scopes.

In other words, the current codebase is a proof-of-concept for a scheduling UI rather than a complete workforce-planning platform.

## Target architecture direction
Based on the README and project goals, the intended system likely evolves toward a more complete scheduling platform with these layers:

```text
Client UI
  │
  ▼
Application services
  │
  ├─ calendar logic
  ├─ template management
  ├─ roster generation
  ├─ role constraints
  └─ availability rules
  │
  ▼
Persistent storage (future)
  ├─ relational or document database
  ├─ user/staff records
  ├─ shifts and templates
  └─ audit/history data
```

This is a likely long-term architecture, but the current repo only implements the first frontend slice of that vision.

## Summary
This repository currently implements a Compact React + FullCalendar scheduling front-end for free/busy management. The architecture is intentionally simple: a single-page app with local state and calendar-driven interactions. It is well suited for prototyping and UI validation, but it still needs a backend and persistent storage layer before it can support multi-user, production-grade scheduling workflows.

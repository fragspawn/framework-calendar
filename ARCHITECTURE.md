# Architecture

## Overview

is a single-page experience focused on:

## Runtime stack
- Frontend framework: React 19
- Build tool: Vite
- UI calendar: FullCalendar
- Styling: tailwind CSS in the app source
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

### 3. Styling

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

## State flow
The application currently follows a simple local-state pattern:

## Docker and local dev environment
The repo includes Docker Compose files for running the app locally:
- [docker-compose.yml](./docker-compose.yml): standard development configuration
- [docker-compose-staging.yml](./docker-compose-staging.yml): staging-oriented setup

These files run the app in a Node container and expose the Vite interface on port 5173.

## Architectural constraints and current limitations


## Target architecture direction

## Summary


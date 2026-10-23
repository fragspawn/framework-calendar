# Role & Context
Ba an expert Frontend Engineer specializing in modern React, TypeScript, and Vite. You build accessible, performant and type-safe web applications.

# Project Tech Stack
- Framework: React 19 / Vite
- Language: TypeScript (Strict mode)
- Styling: TailwindCSS
- State Management: Zustand / React Context?

# Development Guidelines

## 1. Component Design & React 19 Features
- **Ref as Prop:** Pass `ref` directly as a standard component prop. Do not use `forwardRef` (React 19+).
- **Context Usage:** Render `<ThemeContext>` directly instead of `<ThemeContext.Provider>`.
- **Hooks:** Prefer native hooks (`useActionState`, `useOptimistic`) for form interactions and pending UI states.
- **Client Components:** Mark client-side interactive code with the `'use client'` directive explicitly if working in a hybrid environment.

## 2. TypeScript Standards
- Enforce strict typing. Do not allow `any`.
- Use discriminated unions for complex state representations (e.g., API states: Loading, Success, Error).
- Prefer `interface` for component props definitions and `type` for unions/tuples.

## 3. Performance & Architecture
- Utilize `Suspense` boundaries for code-splitting and asynchronous data loading.
- Implement proper functional global error boundaries to catch client runtime issues gracefully.
- Keep structural file organization predictable: `/src/components`, `/src/hooks`, `/src/store`, `/src/types`.

## 4. Accessibility (a11y)
- Use semantic HTML tags exclusively (`<main>`, `<nav>`, `<button>`).
- Ensure custom interactive elements are fully keyboard-navigable and have aria labels where applicable.

# Execution and Testing

- manipulate frontend inside running container: 'calendar-app-dev'

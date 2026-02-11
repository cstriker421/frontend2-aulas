# Aula 06 – Unit Tests (Jest + React Testing Library)

This folder contains the exercises for **Aula 06**, focused on writing unit tests
using **Jest** and **React Testing Library** in a **React + TypeScript** project.

The goal of these exercises is to demonstrate understanding of:
- testing pure functions
- testing component rendering
- testing user interactions

---

## Folder Structure

aula-06-tests/
├─ src/
│  └─ utils/
│     ├─ isEven.ts
│     └─ isEven.test.ts
├─ components/
│  ├─ Welcome.tsx
│  ├─ Welcome.test.tsx
│  ├─ Toggle.tsx
│  └─ Toggle.test.tsx
└─ README.md

---

## Implemented Tests

### 1. Pure function test
- **File:** `src/utils/isEven.test.ts`
- Tests a simple deterministic function.
- Demonstrates basic Jest assertions.

### 2. Render test
- **File:** `components/Welcome.test.tsx`
- Uses React Testing Library to render a component.
- Verifies that expected text appears in the DOM.

### 3. Interaction (click) test
- **File:** `components/Toggle.test.tsx`
- Simulates a user clicking a button.
- Verifies state change reflected in the rendered output.

---

## Running the Tests

From the **repository root**, run:

`npm test`

or, to run in watch mode:

`npm run test:watch`

---

## Notes

- Tests are written in TypeScript (`.ts` / `.tsx`).
- Jest is configured at the repository root.
- React Testing Library is used for component and interaction tests.
- The number of tests reported by Jest may be greater than three, as each `test()` block is counted individually.

---

## Objective

These exercises are intended to demonstrate correct usage of:
- Jest
- React Testing Library
- TypeScript in a testing environment

The implementations may differ from instructor examples, while still fulfilling the same testing objectives.

# Retro Todo - Ocean Professional

A minimal React todo app with a modern, clean aesthetic. Add, view, and delete tasks in-memory (no backend, no auth).

## Features
- Ocean Professional theme: blue primary, slate accents, subtle gradient background
- In-memory state with React hooks
- Add via Enter key or Add button
- Delete per item
- Empty-state messaging
- Responsive layout for small screens
- Smooth transitions, rounded corners, soft shadows

## Scripts
- npm start — start development server at http://localhost:3000
- npm run build — production build
- npm test — run tests

## Structure
- src/App.js — main Todo UI
- src/theme.js — theme tokens (colors, radii, shadows)
- src/App.css — component styling
- src/index.css — global styles and resets

## Notes
- No external dependencies beyond React and react-dom
- State is not persisted on refresh

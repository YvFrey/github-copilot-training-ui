# Build Guide

This project generates two types of outputs: a full application server and standalone HTML pages.

## Build Commands

### Full Build (Server + Static Pages)
```bash
npm run build
```

Generates:
- **`dist/`** — Production server and client files
  - `index.cjs` — Node.js server bundle
  - `public/` — Client assets (CSS, JS, etc.)
- **`dist_single/`** — Standalone HTML files
  - `AIEngineeringCopilotTraining.html` — Main training page (all-in-one)
  - `AIEngineeringCopilotPrerequisite.html` — Prerequisites page (all-in-one)

### Development Server
```bash
npm run dev
```

Starts the dev server at `http://localhost:5173`

## Output Folders

### `dist/` — Full Application
Use this for running the Express server with full functionality.

**When to use:**
- Local testing and development
- Server-side rendering scenarios
- Running in a Node.js environment

**Start the server:**
```bash
node dist/index.cjs
```

### `dist_single/` — Static HTML Pages
Standalone, self-contained HTML files with everything bundled inline (CSS, JS, fonts, assets).

**When to use:**
- Hosting on GitHub Pages or static CDN
- Distributing training materials as standalone files
- Email attachments or offline viewing
- No server required

**Files are ready to open directly in a browser.**

## Pages Generated

All React components are automatically converted to static HTML during the build:

- `AIEngineeringCopilotTraining.html` — Full training interface
- `AIEngineeringCopilotPrerequisite.html` — Setup and prerequisites checklist

Changes to React components (ModulePrereq, Module1Content, etc.) are automatically reflected in these files on the next build.

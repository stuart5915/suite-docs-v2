---
sidebar_position: 4
title: "🤖 AI Fleet"
---

# 🤖 AI Fleet

**The autonomous app-building system that works 24/7**

---

## What Is AI Fleet?

AI Fleet is SUITE's automated app generation system. It consists of:

- **Watcher Bot** — Monitors for new prompts and auto-pulls changes
- **Cadence AI** — Processes prompts and generates code
- **FORGE Bot** — Discord integration for notifications and commands
- **TELOS Mode** — Autonomous goal-seeking behavior

---

## How It Works

```
1. Idea appears in queue (manual or TELOS-generated)
2. Watcher detects the prompt file
3. Cadence AI processes and generates code
4. Code is committed and pushed
5. App is deployed (Expo OTA)
6. FORGE notifies Discord
```

---

## TELOS Mode

When TELOS is enabled, the AI Fleet operates autonomously:

- **Research Phase** — AI explores categories for app ideas
- **Planning Phase** — Generates specifications and scope
- **Building Phase** — Creates the app with iterative prompts
- **Testing Phase** — Verifies functionality
- **Deployment Phase** — Publishes to App Store

### Human Priority

Even in TELOS mode, human requests **always** take priority. The AI will pause autonomous work to handle manual prompts.

---

## Configuration

Configure AI Fleet from the Dashboard:

- **Iterations per App** — Number of prompts before "done"
- **Max Apps per Day** — Daily limit on autonomous builds
- **Auto-Deploy** — Push live after iterations complete
- **Research Focus** — Categories to explore

---

[🛠️ Dashboard →](/build/dashboard) | [⚡ Commands →](/build/commands)

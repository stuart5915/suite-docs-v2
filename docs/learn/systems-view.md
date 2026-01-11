---
sidebar_position: 8
title: "🏗️ Systems View"
---

# 🏗️ Systems View

**A technical overview of the SUITE ecosystem architecture**

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                       SUITE HUB                          │
│                    (Discord Server)                       │
├─────────────────────────────────────────────────────────┤
│  FORGE Bot ←→ Prompt Queue ←→ Watcher ←→ Cadence AI     │
└─────────────────────────────────────────────────────────┘
         ↓                                    ↓
    ┌─────────┐                          ┌─────────┐
    │ GitHub  │                          │  Expo   │
    │  Repos  │──────────────────────────│ Deploy  │
    └─────────┘                          └─────────┘
         ↓
    ┌─────────────────────────────────────────────────────┐
    │                   getsuite.app                       │
    │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌────────┐ │
    │  │App Store│  │Dashboard│  │  Vault  │  │  Docs  │ │
    │  └─────────┘  └─────────┘  └─────────┘  └────────┘ │
    └─────────────────────────────────────────────────────┘
```

---

## Components

### FORGE Bot
Discord bot handling:
- Prompt submission (`/addition`)
- App management (`/create-app`, `/delete-app`)
- Status notifications
- User commands

### Watcher
Python service on PC that:
- Monitors prompt queue files
- Triggers IDE to process prompts
- Auto-pulls changes from GitHub
- Syncs between PC and laptop

### Cadence AI
AI model (Gemini) that:
- Interprets natural language prompts
- Generates code changes
- Iterates based on feedback
- Manages file operations

### PC Prompt Server
Local web interface for:
- Viewing prompt queue
- Manual prompt management
- Toggle auto-pull
- Connection status

---

## Data Flow

### Prompt Lifecycle

```
1. User submits /addition → FORGE creates prompt file
2. Watcher detects new file → Triggers IDE
3. IDE runs Cadence → Generates code
4. Code committed to GitHub → Pushed
5. Laptop auto-pulls (if enabled)
6. FORGE notifies completion
```

---

## Smart Contracts

### Treasury
- Holds ETH backing SUITE
- Handles mint (ETH → SUITE)
- Handles burn (SUITE → ETH)
- Proportional share system

### SUITE Token
- ERC-20 on Base
- Minted/burned by Treasury only
- Tracks total supply

---

## Security Model

- **Isolated repos** — Each app in its own repository
- **No cross-access** — Apps can't modify other apps
- **Prompt filtering** — Dangerous commands blocked
- **Human approval** — Critical operations require review

---

[🤖 AI Fleet →](/build/ai-fleet) | [👨‍💻 Developer Guide →](/build/developer)

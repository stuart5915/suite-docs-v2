---
sidebar_position: 8
title: "🏗️ Systems View"
---

# 🏗️ Systems View

**A technical overview of the SUITE ecosystem architecture**

---

## AI Fleet Architecture

![AI Fleet System](/img/diagrams/ai-fleet.png)

The AI Fleet is the backbone of autonomous app building — FORGE, Watcher, and Cadence working together.

---

## FORGE Discord Bot

![FORGE Discord Bot](/img/diagrams/forge-discord-bot.png)

Discord bot handling:
- Prompt submission (`/addition`)
- App management (`/create-app`, `/delete-app`)
- Status notifications
- User commands

---

## Watcher Bot

![Watcher Bot](/img/diagrams/watcher-bot.png)

Python service on PC that:
- Monitors prompt queue files
- Triggers IDE to process prompts
- Auto-pulls changes from GitHub
- Syncs between PC and laptop

---

## PC ↔ Laptop Sync

![PC Laptop Sync](/img/diagrams/pc-laptop-sync.png)

Seamless synchronization between development machines.

---

## App Store Flow

![App Store](/img/diagrams/app-store.png)

How apps flow from creation to the SUITE App Store.

---

## Treasury Architecture

![Treasury](/img/diagrams/treasury.png)

Smart contract architecture:
- Holds ETH backing SUITE
- Handles mint (ETH → SUITE)
- Handles burn (SUITE → ETH)
- Proportional share system

---

## Authentication Flow

![SUITE Authentication](/img/diagrams/suite-authentication.png)

How users authenticate across SUITE apps.

---

## Content Marketplace

![Content Marketplace](/img/diagrams/content-marketplace.png)

The flow of content monetization in the ecosystem.

---

## Security Model

- **Isolated repos** — Each app in its own repository
- **No cross-access** — Apps can't modify other apps
- **Prompt filtering** — Dangerous commands blocked
- **Human approval** — Critical operations require review

---

[🤖 AI Fleet →](/build/ai-fleet) | [👨‍💻 Developer Guide →](/build/developer)

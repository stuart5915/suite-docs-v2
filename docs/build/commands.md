---
sidebar_position: 3
title: "⚡ Commands"
---

# ⚡ FORGE Commands

**All available Discord bot commands**

---

## App Management

| Command | Description |
|---------|-------------|
| `/create-app` | Create a new app project |
| `/delete-app` | Delete an existing app |
| `/list-apps` | List all your apps |
| `/publish` | Submit app for review |

---

## Prompt Queue

| Command | Description | Access |
|---------|-------------|--------|
| `/addition` | Queue a prompt for AI processing | Admin only |
| `/status` | Check prompt queue status | Everyone |
| `/queue` | View pending prompts | Everyone |

---

## Account

| Command | Description |
|---------|-------------|
| `/balance` | Check your SUITE token balance |
| `/earnings` | View your developer earnings |
| `/profile` | View your profile stats |

---

## TELOS Mode

| Command | Description | Access |
|---------|-------------|--------|
| `/telos on` | Enable autonomous AI mode | Admin only |
| `/telos off` | Disable autonomous AI mode | Admin only |
| `/telos status` | Check TELOS mode status | Everyone |

---

## Examples

### Creating an app
```
/create-app name:FoodTracker description:"Track daily meals and calories"
```

### Queuing a prompt
```
/addition target:FoodTracker prompt:"Add a screen to log meals with name and calorie count"
```

### Checking status
```
/status
```

---

[👨‍💻 Developer Guide](/build/developer) | [🚀 Quick Start](/build/quickstart)

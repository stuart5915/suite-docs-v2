---
sidebar_position: 3
title: "🛡️ AI Safety"
---

# 🛡️ AI Safety & Guardrails

**System-level protections for autonomous AI and the SUITE ecosystem**

---

:::tip Core Safety Principle
"These systems should harness energy ultimately for the goodness of God's Will."
— Stuart Hollinger, Founder
:::

---

## Content Moderation

### App Store Content Policy

Apps submitted to the SUITE App Store must comply with strict content guidelines:

- ❌ **No adult/pornographic content** — Apps must be appropriate for all audiences
- ❌ **No hate speech or harassment** — Content promoting discrimination is prohibited
- ❌ **No illegal activity** — Apps cannot facilitate unlawful actions
- ❌ **No deceptive practices** — Scams, phishing, or misleading apps are rejected
- ❌ **No harmful code** — Malware, spyware, or data theft is blocked

### AI-Generated Content Review

When TELOS mode generates apps autonomously:

- **Automated content scanning** — AI checks output for policy violations
- **Human review queue** — Flagged content goes to human moderators
- **Safe-by-default generation** — AI is prompted to avoid sensitive topics

---

## Code & Execution Safety

### Isolated App Repositories

User-created apps are **sandboxed in separate repositories**. They cannot:

- Access or modify the main SUITE website codebase
- Read or write to other users' apps
- Access system directories or sensitive files
- Execute privileged system commands

### Prompt Filtering

The AI watcher includes safeguards against dangerous prompts:

- **Blocklist patterns** — Commands like `rm -rf`, `format`, or `delete *` are blocked
- **Path restrictions** — Cannot access system directories or parent folders
- **Flag for review** — Suspicious prompts are held for human approval

---

## Financial Protections

### Treasury Solvency Guarantee

The SUITE Treasury smart contract is designed to **always remain solvent**:

- **Proportional shares** — Withdrawals are based on share percentage, not fixed amounts
- **No over-withdrawal** — Cannot withdraw more than your proportional ETH
- **Floor price guarantee** — SUITE tokens always have ETH backing

---

## Role-Based Access Control

| Role | Permissions |
|------|-------------|
| **Member** | Report bugs, request features (approval queue) |
| **Developer** | Create and edit their own apps only |
| **Reviewer** | Approve/reject pending requests |
| **Admin** | Full access to all commands and infrastructure |
| **Owner** | Treasury control and governance |

---

## TELOS Mode Guardrails

When TELOS mode is enabled and the AI operates autonomously:

- **Human priority** — Human requests ALWAYS take precedence over TELOS tasks
- **Scope limitations** — TELOS can only create new apps, not modify infrastructure
- **Review before publish** — AI-generated apps go through approval before App Store listing
- **Kill switch** — TELOS can be disabled instantly from the Dashboard

:::success Human Always in Control
TELOS is a tool, not a replacement for human judgment. The system is designed so humans can always intervene, pause, review, and override AI decisions.
:::

---

[← Back to The SUITE Bible](/codex)

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * SUITE Docs Sidebar - Simplified for MVP
 * Archived docs are still in folders but hidden from nav
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // Welcome page

    // --- LEARN (Core Product Info) ---
    {
      type: 'category',
      label: '📚 Learn',
      items: [
        'learn/ecosystem',
        'learn/how-it-works',
        'learn/tokenomics',
        'learn/utility',
        'learn/governance',
        'learn/roadmap',
      ],
    },

    // --- BUILD (For Developers) ---
    {
      type: 'category',
      label: '🛠️ Build',
      items: [
        'build/quickstart',
        'build/developer',
        'build/commands',
        'build/publish-checklist',
      ],
    },

    // --- EARN ---
    {
      type: 'category',
      label: '💰 Earn',
      items: [
        'earn/index',
        'earn/revenue',
      ],
    },
  ],
};

export default sidebars;

/*
 * ARCHIVED DOCS (Still in folders, just hidden from sidebar):
 * 
 * Faith/School:
 * - faith.md
 * - codex.md (The SUITE Bible)
 * - school/*
 * 
 * AI/Meta:
 * - learn/safety.md (AI Safety)
 * - learn/systems-view.mdx
 * - learn/glossary.md (SUITE Lingo)
 * - build/ai-fleet.md
 * - build/dashboard.md
 * 
 * Future Features:
 * - earn/staking.md
 * - admin/*
 */

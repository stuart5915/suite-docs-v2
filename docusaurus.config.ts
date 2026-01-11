import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SUITE Docs',
  tagline: 'Anyone Can Build. Everyone Gets Paid.',
  favicon: 'img/suite-token.png',

  future: {
    v4: true,
  },

  url: 'https://docs.getsuite.app',
  baseUrl: '/',

  organizationName: 'stuart5915',
  projectName: 'suite-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Docs at root
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/stuart5915/suite-docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/suite-token.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SUITE Docs',
      logo: {
        alt: 'SUITE Logo',
        src: 'img/suite-token.png',
      },
      items: [
        {
          href: 'https://getsuite.app',
          label: '← Back to SUITE',
          position: 'left',
        },
        {
          href: 'https://getsuite.app/apps.html',
          label: 'Apps',
          position: 'right',
        },
        {
          href: 'https://getsuite.app/dashboard.html',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: 'https://discord.gg/suitehub',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'The SUITE Bible', to: '/codex' },
            { label: 'Explore Faith', to: '/faith' },
            { label: 'SUITE School', to: '/school' },
          ],
        },
        {
          title: 'Build',
          items: [
            { label: 'Quick Start', to: '/build/quickstart' },
            { label: 'Developer Guide', to: '/build/developer' },
            { label: 'AI Fleet', to: '/build/ai-fleet' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/suitehub' },
            { label: 'Twitter', href: 'https://x.com/suiteappstore' },
            { label: 'YouTube', href: 'https://youtube.com/@SUITEAppStore' },
          ],
        },
        {
          title: 'SUITE',
          items: [
            { label: 'App Store', href: 'https://getsuite.app/apps.html' },
            { label: 'Vault', href: 'https://getsuite.app/wallet.html' },
            { label: 'Dashboard', href: 'https://getsuite.app/dashboard.html' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SUITE. Built with ❤️ for the glory of God.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

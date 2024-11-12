// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BPT DEVELOPMENT',
  tagline: 'Programming has never been easier',
  favicon: 'https://cdn.discordapp.com/attachments/1081885857818087504/1188840550787461121/docusaurus.png?width=800&height=800',

  // Set the production url of your site here
  url: 'https://bitpredator.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bptdevelopment/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bitpredator', // Usually your GitHub org/user name.
  projectName: 'bptdevelopment', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HOMEPAGE',
        logo: {
          alt: 'Logo',
          src: 'https://cdn.discordapp.com/attachments/1305853825994985534/1305854758581440555/bptdevelopmentw.png?ex=67348b84&is=67333a04&hm=5387f00ea7e750306d81e028d46facec4cd1b3913b4ec02b644ee40a63c54eec&?width=800&height=800',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'INFORMATION',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/bitpredator',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://bptdevelopment1.statuspage.io/',
            label: 'Server Status',
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
              {
                label: 'FiveM',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ksGfNvDEfq',
              },
            ],
          },
          {
            title: 'More',
            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
              {
                label: 'GitHub',
                href: 'https://github.com/bitpredator',
              },
              {
                label: 'Empiretown',
                href: 'https://github.com/bitpredator/empiretown',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitpredator - All rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

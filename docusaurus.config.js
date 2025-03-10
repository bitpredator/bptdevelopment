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
          src: 'https://media.discordapp.net/attachments/1305853825994985534/1305854758581440555/bptdevelopmentw.png?ex=67542f84&is=6752de04&hm=d672ce1382208f6b15bfe0285145f41117ebfe2a29be92d74964c2116f41baa0&=&format=webp&quality=lossless&width=1048&height=655',
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

module.exports = config;
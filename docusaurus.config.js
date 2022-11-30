// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nc.social',
  tagline: 'tagline',
  url: 'https://about.nc.social',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ncsocial', // Usually your GitHub org/user name.
  projectName: 'about', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ncsocial/about/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, 
        //{
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/ncsocial/about/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'nc.social',
        logo: {
          alt: 'space cardinal logo',
          src: 'img/cardinal.png',
        },
        items: [
          //{type: 'doc', docId: 'welcome', position: 'left', label: 'Welcome'},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ncsocial/about',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'nc.social',
            items: [
              {
                label: 'Home',
                to: 'https://nc.social',
              },
              {
                label: 'Create an account',
                to: 'https://nc.social/auth/sign_up',
              },
              {
                label: 'Privacy',
                to: 'https://nc.social/privacy-policy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/ncsocial',
              },
              {
                label: 'Server Status',
                to: 'https://status.nc.social',
              },
            ],
          },
        ],
        copyright: `CC BY-SA ${new Date().getFullYear()} nc.social`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

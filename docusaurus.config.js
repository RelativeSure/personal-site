import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: "Rasmus Personal Site",
  tagline: 'Intro, personal and more',
  url: 'https://www.rasmusj.dk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en-GB',
    locales: ['da-DK', 'en-GB', 'en-US'],
  },
  plugins: [
    [require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 2,
        indexBlog: false,
        indexPages: false,
        language: "en",
        style: undefined,
        maxSearchResults: 8,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2,
        }
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themes: [
    '@saucelabs/theme-github-codeblock'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
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
        title: 'Introduction',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            href: 'https://infosec.exchange/@relativesure',
            label: 'Mastodon',
            position: 'right',
          },
          {
            href: 'https://github.com/RelativeSure',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'diff',
          'json',
          'markdown',
          'powershell',
          'yaml',
          'git',
          'nginx',
          'docker',
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};

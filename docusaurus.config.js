import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: "Rasmus Personal Site",
  tagline: 'Intro, personal and more',
  url: 'https://www.rasmusj.dk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/relativesure/personal-site/edit/master/docs/${versionDocsDirPath}/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rasmus Brøgger Jørgensen',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Socials',
            position: 'left',
            items: [
              {
                href: 'https://infosec.exchange/@relativesure',
                label: 'Mastodon',
              },
              {
                href: 'https://github.com/RelativeSure',
                label: 'GitHub',
              },
            ]
          }
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
      announcementBar: {
        id: 'work_in_progress',
        content:
          'I am currently working on this site and there can be issues, typos etc.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Personal site. Built with Docusaurus.`,
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

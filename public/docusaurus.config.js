module.exports = {
  title: 'HacktoberFest Ekiti 2021 Docs',
  url: 'https://hacktoberfest-ekiti.web.app/',
  baseUrl: '/documentation/',
  favicon: 'img/favicon.png',
  organizationName: 'OSCA-Ado-Ekiti',
  projectName: 'documentation',
  scripts: [
    {src: 'https://hacktoberfest-ekiti.web.app/script.js', defer: true, 'data-domain': 'hacktoberfest-ekiti.web.app'}
  ],
  themeConfig: {
    colorMode: {disableSwitch: true},
    navbar: {
      title: 'HacktoberFest Ekiti 2021 Docs',
      logo: {
        alt: 'Hacktoberfest Ekiti logo',
        src: 'img/logo.svg',
        href: 'https://hacktoberfest-ekiti.web.app/',
        target: '_self',
      },
      items: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
          target: '_self',
          activeBasePath: '/documentation'
        },
        {
          href: 'https://github.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            {
              label: 'About Hackotberfest',
              to: 'https://hacktoberfest-ekiti.web.app/about',
            },
            {
              label: 'See our contributors',
              to: 'https://hacktoberfest-ekiti.web.app/contributors',
            },
            {
              label: 'Study the documentation',
              to: 'https://hacktoberfest-ekiti.web.app/documentation/',
            },
          ],
        },
 
        {
          title: 'Explore',
          items: [
            {
              label: 'Why Open Source',
              href: 'https://hacktoberfest-ekiti.web.app/why-open-source',
            },
            {
              label: 'We have a public roadmap',
              to: 'https://hacktoberfest-ekiti.web.app/roadmap',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OSCA-Ado-Ekiti',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/osca_ado_ekiti',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hacktoberfest. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/edit/main/public/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

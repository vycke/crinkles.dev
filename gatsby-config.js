module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.kevtiq.dev',
    author: 'Kevin Pennekamp',
    title: 'kevtiq | Kevin Pennekamp',
    image: '/img/kevtiq-logo.png',
    twitterName: '@kevtiq',
    description:
      'Personal website of Kevin Pennekamp, a blog about my opinions about CSS, front-end engineering, and web design',
    keywords: [
      'Front-end Engineer',
      'Software Engineer',
      'Web Developer',
      'Designer',
      'UI Designer',
      'Consultant',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/admin', '/tags/links'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A front-end engineer',
        short_name: 'Kevtiq',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2a3654',
        display: 'standalone',
        icon: 'src/img/favicon.svg',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: '',
              className: `anchor`,
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`
    //   }
    // },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        printRejected: true,
        purgeOnly: ['/styles/reset.scss'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};

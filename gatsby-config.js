module.exports = {
  siteMetadata: {
    title: '💢',
    author: `Sehyun Chung`,
    description: `Yet another dev blog (in Korean).s`,
    siteUrl: `https://sehyunchung.dev/`,
    social: {
      twitter: `sehyunchung`,
      github: `sehyunchung`,
      facebook: `sxhyxnchxng`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public',
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'mono dark',
              extensions: ['mono'],
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-135916528-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sehyunchung.dev`,
        short_name: `sehyunchung.dev`,
        start_url: `/`,
        background_color: `hsl(0, 0, 60%)`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/12157-anger-symbol-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Gothic A1',
            variants: ['100', '300', '400', '500', '700', '900'],
          },
          {
            family: 'Noto Sans KR',
            variants: ['100', '300', '400', '500', '700', '900'],
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
  ],
}

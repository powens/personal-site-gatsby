module.exports = {
  siteMetadata: {
    title: 'Patrick Owens',
    author: 'Patrick Owens',
    twitter: '@padraigcodes',
    description:
      'I’m a full stack developer, infosec enthusiast, licensed HAM radio operator - VA7ORO, and occasional competitive game player.',
    siteUrl: 'https://padraig.io',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        excerpt_separator: '<!-- end -->',
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              backgroundColor: 'black',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-116902845-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Patrick Owens',
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: 'Padraig',
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: '/',
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: '#e8e8e8',
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: '#1f56a7',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-typescript',
    'gatsby-mdx',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  html
                  fields { path }
                  frontmatter {
                    title
                    date
                    excerpt
                  }
                }
              }
            }
          }
        `,
            output: '/rss.xml',
            // title: "Your Site's RSS Feed",
          },
        ],
      },
    },
  ],
};

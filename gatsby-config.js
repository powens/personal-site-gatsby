module.exports = {
  siteMetadata: {
    title: 'Patrick Owens',
    author: 'Patrick Owens',
    twitter: '@padraigcodes',
    description:
      'I’m a full stack developer, infosec enthusiast, HAM radio operator - VA7ORO, and occasional competitive game player.',
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
      resolve: 'gatsby-theme-blog',
      options: {
        contentPath: 'src/posts',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: true,
            },
          },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-prismjs' },
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
    'gatsby-plugin-typescript',
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
                  // eslint-disable-next-line @typescript-eslint/camelcase
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
            title: 'Patrick Owens',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};

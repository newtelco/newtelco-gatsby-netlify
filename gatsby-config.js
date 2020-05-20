module.exports = {
  siteMetadata: {
    title: 'Newtelco GmbH',
    description: 'Newtelco GmbH Homepage',
    author: '@ndom91',
    siteUrl: 'https://newtelco.dev/'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // It needs to be the first one to work with gatsby-remark-images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/config/translations`,
        name: 'translations'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/config/menu`,
        name: 'menu'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/products`,
        name: 'products'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/services`,
        name: 'services'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/location`,
        name: 'location'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/testimonials`,
        name: 'testimonials'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1040,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs' // It needs to be the last one
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['NETBOX_KEY', 'GEO_KEY']
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Libre Baskerville',
            variants: ['400', '600']
          },
          {
            family: 'Libre Franklin',
            variants: ['100', '300', '400']
          },
          {
            family: 'Roboto Mono',
            variants: ['300', '600']
          },
          {
            family: 'Roboto',
            variants: ['100', '300', '700']
          }
        ]
      }
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Newtelco GmbH',
        short_name: 'Newtelco',
        start_url: '/',
        background_color: '#4b4c4d',
        theme_color: '#67b246',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
}

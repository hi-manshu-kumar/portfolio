/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
const siteUrl = 'https://himanshu.netlify.com'
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl,
    title: 'Himanshu Das Portfolio |Full Stack Dev',
    description: 'I am a software engineer specializing in developing high-quality applications and websites from scratch taking care of both frontend and backend part.',
    author: 'Himanshu Das'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      } 
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1500,
            linkImagesToOriginal: false
          }}
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Himanshu Portfolio',
        short_name: 'Himank',
        start_url: '/',
        background_color: '#2be1f2',
        theme_color: '#2be1f2',
        display: 'standalone',
        icon: path.join(__dirname, 'static/favicon2.ico'),
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    'gatsby-plugin-offline',

  ]
}

module.exports = {
  siteMetadata: {
    title: "Confused Ape",
    siteUrl: `https://www.yourdomain.tld`,
    description: "Your Mum",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx"
  ],
}
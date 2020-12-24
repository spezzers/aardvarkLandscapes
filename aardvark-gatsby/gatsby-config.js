module.exports = {
  siteMetadata: {
    title: "Aardvark Landscapes"
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/default-page-layout.js"),
        },
      },
    },
  ],
};

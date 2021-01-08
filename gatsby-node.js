const fs = require('fs')
const path = require('path')
const {URL} = require('url')
const rimraf = require('rimraf')
const slugify = require('@sindresorhus/slugify')
const {createFilePath} = require('gatsby-source-filesystem')
const {zipFunctions} = require('@netlify/zip-it-and-ship-it')
const config = require('./config/website')

const onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

const onCreateNode = (...args) => {
  if (args[0].node.internal.type === `Mdx`) {
    onCreateMdxNode(...args)
  }
}

// eslint-disable-next-line complexity
function onCreateMdxNode({node, getNode, actions}) {
  const {createNodeField} = actions
  let slug =
    node.frontmatter.slug || createFilePath({node, getNode, basePath: `pages`})
  let {isProject} = false

  if (node.fileAbsolutePath.includes('content/projects/')) {
    isProject = true
    slug = `/projects/${
      node.frontmatter.slug || slugify(node.frontmatter.title)
    }`
  }

  createNodeField({
    name: 'id',
    node,
    value: node.id,
  })

  createNodeField({
    name: 'title',
    node,
    value: node.frontmatter.title,
  })

  createNodeField({
    name: 'author',
    node,
    value: node.frontmatter.author || 'Maciek Sitkowski',
  })

  createNodeField({
    name: 'description',
    node,
    value: node.frontmatter.description,
  })

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  })

  const productionUrl = new URL(config.siteUrl)
  productionUrl.pathname = slug

  createNodeField({
    name: 'productionUrl',
    node,
    value: productionUrl.toString(),
  })

  createNodeField({
    name: 'date',
    node,
    value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
  })

  createNodeField({
    name: 'banner',
    node,
    value: node.frontmatter.banner,
  })

  createNodeField({
    name: 'categories',
    node,
    value: node.frontmatter.categories || [],
  })

  createNodeField({
    name: 'keywords',
    node,
    value: node.frontmatter.keywords || [],
  })

  createNodeField({
    name: 'redirects',
    node,
    value: node.frontmatter.redirects,
  })

  createNodeField({
    name: 'noFooter',
    node,
    value: node.frontmatter.noFooter || false,
  })

  createNodeField({
    name: 'isProject',
    node,
    value: isProject,
  })

  createNodeField({
    name: 'repoUrl',
    node,
    value: node.frontmatter.repoUrl,
  })

  createNodeField({
    name: 'homepageUrl',
    node,
    value: node.frontmatter.homepageUrl,
  })
}

const onPostBuild = async () => {
  if (process.env.gatsby_executing_command === 'develop') {
    return
  }
  const srcLocation = path.join(__dirname, `netlify/functions`)
  const outputLocation = path.join(__dirname, `public/functions`)
  if (fs.existsSync(outputLocation)) {
    rimraf.sync(outputLocation)
  }
  fs.mkdirSync(outputLocation)
  await zipFunctions(srcLocation, outputLocation)
}

module.exports = {
  // createPages,
  onCreateWebpackConfig,
  onCreateNode,
  onPostBuild,
}

/*
eslint
  consistent-return: "off",
  max-statements: "off",
*/

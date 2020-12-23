const fs = require('fs')
const path = require('path')
const {URL} = require('url')
const rimraf = require('rimraf')
const {spawnSync} = require('child_process')
const slugify = require('@sindresorhus/slugify')
const {createFilePath} = require('gatsby-source-filesystem')
const remark = require('remark')
const stripMarkdownPlugin = require('strip-markdown')
const {zipFunctions} = require('@netlify/zip-it-and-ship-it')
const config = require('./config/website')

const createProjects = (createPage, edges) => {
  edges.forEach(({node}, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

function createProjectPages({data, actions}) {
  if (!data.edges.length) {
    throw new Error('There are no projects!')
  }

  const {edges} = data
  const {createPage} = actions
  createProjects(createPage, edges)

  return null
}

function stripMarkdown(markdownString) {
  return remark()
    .use(stripMarkdownPlugin)
    .processSync(markdownString)
    .toString()
}

const createPages = async ({actions, graphql}) => {
  const {data, errors} = await graphql(`
    fragment PostDetails on Mdx {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      fields {
        title
        slug
        description
        date
      }
    }
    query {
      projects: allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            ...PostDetails
          }
        }
      }
      projects: allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            ...PostDetails
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  const {projects} = data

  createProjectPages({
    data: projects,
    actions,
  })
}

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
    name: 'plainTextDescription',
    node,
    value: stripMarkdown(node.frontmatter.description),
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
    name: 'editLink',
    node,
    value: `https://github.com/kentcdodds/kentcdodds.com/edit/master${node.fileAbsolutePath.replace(
      __dirname,
      '',
    )}`,
  })

  createNodeField({
    name: 'historyLink',
    node,
    value: `https://github.com/kentcdodds/kentcdodds.com/commits/master${node.fileAbsolutePath.replace(
      __dirname,
      '',
    )}`,
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
}

const onPreBootstrap = () => {
  if (process.env.gatsby_executing_command === 'develop') {
    return
  }
  require('./other/load-cache')

  const result = spawnSync(
    './node_modules/.bin/npm-run-all --parallel lint test:coverage',
    {stdio: 'inherit', shell: true},
  )
  if (result.status !== 0) {
    throw new Error(`pre build failure. Status: ${result.status}`)
  }
}

const onPostBuild = async () => {
  if (process.env.gatsby_executing_command === 'develop') {
    return
  }
  require('./other/make-cache')
  const srcLocation = path.join(__dirname, `netlify/functions`)
  const outputLocation = path.join(__dirname, `public/functions`)
  if (fs.existsSync(outputLocation)) {
    rimraf.sync(outputLocation)
  }
  fs.mkdirSync(outputLocation)
  await zipFunctions(srcLocation, outputLocation)
}

module.exports = {
  createPages,
  onCreateWebpackConfig,
  onCreateNode,
  onPreBootstrap,
  onPostBuild,
}

/*
eslint
  consistent-return: "off",
  max-statements: "off",
*/

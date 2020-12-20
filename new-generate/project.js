const path = require('path')
const fs = require('fs')
const util = require('util')
const slugify = require('@sindresorhus/slugify')
const tinify = require('tinify')
const jsToYaml = require('json-to-pretty-yaml')
const mkdirp = require('mkdirp')
const inquirer = require('inquirer')
const prettier = require('prettier')
const {lightFormat, parseISO} = require('date-fns')
const axios = require('axios')

const ora = require('ora')
require('dotenv').config({
  path: path.join(__dirname, '.env'),
})

tinify.key = process.env.TINIFY_KEY

const fromRoot = (...p) => path.join(__dirname, '..', ...p)

const formatDate = d => lightFormat(parseISO(d), 'yyyy-MM-dd')

async function generateProject() {
  const {title} = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Repository name',
    },
  ])
  const slug = slugify(title)
  const destination = fromRoot('content/projects', slug)

  const {
    description,
    date,
    repoUrl,
    homepageUrl,
    imageUrl,
    techs,
  } = await getRepoData(slug)

  mkdirp.sync(destination)
  console.log(imageUrl)
  await downloadImage(imageUrl, destination)

  const yaml = jsToYaml.stringify(
    removeEmpty({
      slug,
      title,
      description: `_${description}_`,
      techs,
      date: formatDate(date),
      repoUrl,
      homepageUrl,
      banner: './images/banner.jpg',
      ckTag: Date.now(),
    }),
  )
  const markdown = prettier.format(`---\n${yaml}\n---\n`, {
    ...require('../prettier.config'),
    parser: 'mdx',
  })
  fs.writeFileSync(path.join(destination, 'index.mdx'), markdown)

  console.log(`${destination.replace(process.cwd(), '')} is all ready for you`)
}

async function getRepoData(name) {
  const query = `
    query RepoQuery($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        name
        description
        techs: repositoryTopics(first: 10) {
          edges {
            node {
              topic {
                name
              }
            }
          }
        }
        date: createdAt
        repoUrl: url
        homepageUrl
        imageUrl: openGraphImageUrl
      }
    }
  `
  const {
    data: {data},
  } = await axios({
    method: 'post',
    url: `${process.env.BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: process.env.GITHUB_TOKEN,
    },
    data: JSON.stringify({
      query,
      variables: {owner: process.env.OWNER, name},
    }),
  })
  const {techs, ...repository} = data.repository

  return {
    ...repository,
    techs: techs.edges.map(edge => edge.node.topic.name),
  }
}

function removeEmpty(obj) {
  return Object.entries(obj).reduce((o, [key, value]) => {
    if (value) {
      o[key] = value
    }
    return o
  }, {})
}

async function downloadImage(url, destination) {
  const imagesDestination = path.join(destination, 'images')

  const source = tinify.fromUrl(url).resize({
    method: 'scale',
    width: 1280,
  })

  mkdirp.sync(imagesDestination)

  const spinner = ora('compressing the image with tinypng.com').start()
  await util
    .promisify(source.toFile)
    .call(source, path.join(imagesDestination, 'banner.jpg'))
  spinner.text = 'compressed the image with tinypng.com'
  spinner.stop()
}

generateProject()

/* eslint no-console:0 */

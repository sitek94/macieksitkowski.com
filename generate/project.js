const path = require('path')
const fs = require('fs')
const jsToYaml = require('json-to-pretty-yaml')
const mkdirp = require('mkdirp')
const slugify = require('@sindresorhus/slugify')
const inquirer = require('inquirer')
const prettier = require('prettier')
const {lightFormat, parseISO} = require('date-fns')

const fromRoot = (...p) => path.join(__dirname, '..', ...p)

const formatDate = d => lightFormat(parseISO(d), 'yyyy-MM-dd')

const listify = a =>
  a && a.trim().length
    ? a
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
    : null

async function generateProject() {
  const {title, description, techs, date} = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
    },
    {
      type: 'input',
      name: 'techs',
      message: 'techs (comma separated)',
    },
    {
      type: 'input',
      name: 'date',
      message: 'date in YYYY-MM-DD format',
    },
  ])
  const slug = slugify(title)
  const destination = fromRoot('content/projects', slug)
  mkdirp.sync(destination)

  const yaml = jsToYaml.stringify(
    removeEmpty({
      slug,
      title,
      description: `_${description}_`,
      techs: listify(techs),
      date: formatDate(date),

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

function removeEmpty(obj) {
  return Object.entries(obj).reduce((o, [key, value]) => {
    if (value) {
      o[key] = value
    }
    return o
  }, {})
}

generateProject()

/* eslint no-console:0 */

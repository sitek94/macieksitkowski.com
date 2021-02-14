import bootstrap from 'images/icons/bootstrap.svg'
import css from 'images/icons/css.svg'
import d3 from 'images/icons/d3.svg'
import express from 'images/icons/express.svg'
import firebase from 'images/icons/firebase.svg'
import html from 'images/icons/html.svg'
import javascript from 'images/icons/javascript.svg'
import jest from 'images/icons/jest.svg'
import materialUi from 'images/icons/material-ui.svg'
import mongodb from 'images/icons/mongodb.svg'
import nodejs from 'images/icons/nodejs.svg'
import react from 'images/icons/react.svg'
import redux from 'images/icons/redux.svg'
import sass from 'images/icons/sass.svg'
import typescript from 'images/icons/typescript.svg'

const createTech = (src, label) => ({src, label})

const techImages = {
  bootstrap: createTech(bootstrap, 'Bootstrap'),
  css: createTech(css, 'CSS'),
  d3: createTech(d3, 'D3.js'),
  express: createTech(express, 'Express'),
  firebase: createTech(firebase, 'Firebase'),
  html: createTech(html, 'HTML'),
  javascript: createTech(javascript, 'JavaScript'),
  jest: createTech(jest, 'Jest'),
  'material-ui': createTech(materialUi, 'Material UI'),
  mongodb: createTech(mongodb, 'MongoDB'),
  nodejs: createTech(nodejs, 'Node.js'),
  react: createTech(react, 'React'),
  redux: createTech(redux, 'Redux'),
  sass: createTech(sass, 'Sass'),
  typescript: createTech(typescript, 'TypeScript'),
}

const techImage = tech => {
  if (techImages.hasOwnProperty(tech)) {
    return techImages[tech]
  } else {
    throw new Error(`There is no image src for '${tech}'`)
  }
}

export default techImage

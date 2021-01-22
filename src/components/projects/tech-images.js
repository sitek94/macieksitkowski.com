import javascript from 'images/icons/javascript.svg'
import typescript from 'images/icons/typescript.svg'
import react from 'images/icons/react.svg'
import redux from 'images/icons/redux.svg'
import jest from 'images/icons/jest.svg'
import materialUi from 'images/icons/material-ui.svg'
import firebase from 'images/icons/firebase.svg'
import html from 'images/icons/html.svg'
import css from 'images/icons/css.svg'
import sass from 'images/icons/sass.svg'
import bootstrap from 'images/icons/bootstrap.svg'
import d3 from 'images/icons/d3.svg'

const createTech = (src, label) => ({src, label})

const techImages = {
  html: createTech(html, 'HTML'),
  css: createTech(css, 'CSS'),
  sass: createTech(sass, 'SASS'),
  bootstrap: createTech(bootstrap, 'Bootstrap'),
  javascript: createTech(javascript, 'JavaScript'),
  react: createTech(react, 'React'),
  redux: createTech(redux, 'Redux'),
  'material-ui': createTech(materialUi, 'Material UI'),
  firebase: createTech(firebase, 'Firebase'),
  d3: createTech(d3, 'D3'),
  jest: createTech(jest, 'Jest'),
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

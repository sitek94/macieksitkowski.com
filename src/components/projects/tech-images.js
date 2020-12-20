import javascript from 'images/icons/javascript.svg'
import react from 'images/icons/react.svg'
import testing from 'images/icons/testing.svg'
import materialUi from 'images/icons/material-ui.svg'
import firebase from 'images/icons/firebase.svg'
import html from 'images/icons/html.svg'
import css from 'images/icons/css.svg'
import sass from 'images/icons/sass.svg'
import bootstrap from 'images/icons/bootstrap.svg'

const techImages = {
  html,
  css,
  sass,
  bootstrap,
  javascript,
  react,
  'material-ui': materialUi,
  firebase,
  testing,
}

const techImage = tech => {
  if (techImages.hasOwnProperty(tech)) {
    return techImages[tech]
  } else {
    throw new Error(`There is no image src for '${tech}'`)
  }
}

export default techImage

import {darken, lighten} from 'polished'
import {fonts} from '../src/lib/typography'

const brand = {
  primary: '#573EDE',
  secondary: '#EEF4F2',
}

const colors = {
  primary_light: `${lighten(0.55, brand.primary)}`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#fafafa',
  body_color: '#222426',
  link_color: brand.primary,
  link_color_hover: `${darken(0.07, brand.primary)}`,
  red: '#E75248',
  green: '#17A974',
  blue: '#327CDC',
  navy_dark: '#0F1B35',
  yellow: '#FFB700',
  purple: '#8242F6',
  purple_dark: '#231c42',
  background_light: '#5e31dc',
  background_dark: '#1e243a',
}

const theme = {
  colors,
  fonts,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 100ms ease',
  },
}

export default theme

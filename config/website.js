module.exports = {
  siteTitle: 'Maciek Sitkowski', // Navigation and Site Title
  siteTitleAlt: 'The personal website of Maciek Sitkowski', // Alternative Site title for SEO
  siteTitleShort: 'macieksitkowski', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://macieksitkowski.com', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: `Come check out Maciek Sitkowski's portfolio.`,
  minibio: `
    <strong>Maciek Sitkowski</strong> is a Frond-end engineer from Poland.
    He specializes in React and modern JavaScript.
  `,
  author: 'Maciek Sitkowski', // Author for schemaORGJSONLD

  ogSiteName: 'Maciek Sitkowski', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  github: 'https://github.com/sitek94/',
  youtube: 'https://www.youtube.com/channel/UC1rKQAm9EWiHtI4ADYusG0w',
  freeCodeCamp: 'https://forum.freecodecamp.org/u/sitek94/summary',
}

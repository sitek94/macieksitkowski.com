module.exports = {
  siteTitle: 'Maciek Sitkowski', // Navigation and Site Title
  siteTitleAlt: 'The personal website of Maciek Sitkowski', // Alternative Site title for SEO
  siteTitleShort: 'macieksitkowski', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://kentcdodds.com', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Come check out how Maciek Sitkowski can help you level up your career as a software engineer.',
  minibio: `
    <strong>Maciek Sitkowski</strong> is a JavaScript software engineer and
    teacher. He's taught hundreds of thousands of people how to make the world
    a better place with quality software development tools and practices. He
    lives with his wife and four kids in Utah.
  `,
  author: 'Maciek Sitkowski', // Author for schemaORGJSONLD
  organization: 'Maciek Sitkowski Tech LLC',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kentcdodds', // Twitter Username
  ogSiteName: 'Maciek Sitkowski', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/kentcdodds/',
  twitterHandle: '@kentcdodds',
  github: 'https://github.com/kentcdodds/',
  linkedin: 'https://www.linkedin.com/in/kentcdodds/',
  youtube: 'https://www.youtube.com/channel/UCz-BYvuntVRt_VpfR6FKXJw',
  rss: 'https://kentcdodds.com/blog/rss.xml',
}

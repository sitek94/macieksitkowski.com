const nodemailer = require('nodemailer')
const ow = require('ow').default
const {username} = require('os').userInfo()

const isEmail = ow.string.is(e => /^.+@.+\..+$/.test(e))

function owWithMessage(val, message, validator) {
  try {
    ow(val, validator)
  } catch (error) {
    throw new Error(message)
  }
}

owWithMessage(
  process.env.EMAIL_PASSWORD,
  'EMAIL_PASSWORD environment variable is not set',
  ow.string.minLength(1),
)
owWithMessage(
  process.env.EMAIL_USERNAME,
  'EMAIL_USERNAME environment variable is not set to an email',
  isEmail,
)

const transporter = nodemailer.createTransport({
  host: 'smtp.eu.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

async function handler(event) {
  // Logger
  const runId = Date.now().toString().slice(-5)
  // eslint-disable-next-line no-console
  const log = (...args) => console.log(runId, ...args)

  // CORS
  const origin = new URL(event.headers.origin)
  const acceptable =
    (origin.hostname === 'localhost' && username === 'sitek') ||
    origin.hostname === 'macieksitkowski.com'

  if (!acceptable) {
    return {
      statusCode: 403,
      body: JSON.stringify({message: 'Unacceptable request'}),
      headers,
    }
  }
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      body: 'CORS ok',
      headers,
    }
  }

  const {email, message, ...otherData} = JSON.parse(event.body)

  // Validating
  try {
    log('> Validating input', ' email: ', email, ' message:', message)
    owWithMessage(
      email,
      'The email is invalid. Please enter a valid email address.',
      isEmail,
    )
  } catch (e) {
    log('> Validation failed', e.message)
    return {
      statusCode: 403,
      body: JSON.stringify({message: e.message}),
      headers,
    }
  }

  const otherDataString = JSON.stringify(otherData, null, 2)

  const text = `${message}\n\n---\n\nOther form data:\n\`\`\`\n${otherDataString}\n\`\`\`\n`
  const sender = email

  const mail = {
    from: sender,
    to: `"Maciek Sitkowski" <msitkowski94@gmail.com>`,
    subject: `Email from ${sender}`,
    text,
  }

  try {
    log('> Sending...')
    await transporter.verify()
    await transporter.sendMail(mail)
    log('> Send success!')
  } catch (error) {
    log('> Send failure!', error, error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({message: error.message}),
      headers,
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({success: true}),
    headers,
  }
}

module.exports = {handler}

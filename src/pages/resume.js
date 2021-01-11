import * as React from 'react'
import {css} from '@emotion/react'
import locationPin from 'images/icons/location.svg'
import mail from 'images/icons/mail.svg'
import mobile from 'images/icons/mobile.svg'
import website from 'images/icons/website.svg'
import github from 'images/icons/github.svg'
import checkbox from 'images/icons/checkbox.svg'
import simpleCheck from 'images/icons/simple-check.svg'
import message from 'images/icons/message.svg'
import chess from 'images/icons/chess.svg'
import dancing from 'images/icons/dancing.svg'
import react from 'images/icons/react-dark.svg'
import checkList from 'images/icons/check-list.svg'
import books from 'images/icons/books.svg'
import gym from 'images/icons/gym.svg'
import {fonts} from 'lib/typography'

// LEFT COLUMN
//////////////

// Contact
const contactDetails = [
  {
    src: website,
    alt: 'website',
    text: 'macieksitkowski.com',
    link: 'https://macieksitkowski.com',
  },
  {
    src: github,
    alt: 'github',
    text: 'github.com/sitek94',
    link: 'https://github.com/sitek94',
  },
  {src: mail, alt: 'mail', text: 'msitkowski94@gmail.com'},
  {src: mobile, alt: 'mobile', text: '+48 797 164 649'},
  {src: locationPin, alt: 'location', text: 'Warsaw, Poland'},
]

// Key skills
const keySkills = [
  'React, Redux, JSX',
  'JavaScript, D3.js',
  'Responsive Web Design',
  'HTML5, CSS3',
]

// Additional skills
const additionalSkills = [
  'C, Python, SQL',
  'Node.js, Webpack',
  'OAuth, Firebase',
  'GitHub, Git', // ???
  'REST, GraphQL',
  'Sass, CSS-in-JS',
]

// Languages
const languages = [
  'Polish - Native',
  'English - Fluent',
  'Spanish - Communicative',
]

// Interests
const interests = [
  {src: chess, alt: 'chess', text: 'Playing chess'},
  {src: dancing, alt: 'dancing', text: 'Dancing bachata'},
  {src: react, alt: 'react', text: 'Learning new things'},
  {src: checkList, alt: 'checkList', text: 'Building habits'},
  {src: books, alt: 'books', text: 'Reading'},
  {src: gym, alt: 'gym', text: 'Being active'},
]

// RIGHT COLUMN
///////////////

// Summary
const summary = `
  Front-end developer that has 1 year of experience developing web applications 
  and building websites. Broadens his knowledge by actively contributing to Open Source projects.
`

// Work experience
const workExperience = [
  {
    company: 'Dolphin Bar & Restaurant',
    location: 'Mallorca, Spain',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Bartender/Waiter',
    description: `
      Working in one of the busiest restaurants on the island I became a better team player.
      Additionaly it was a great opportunity to learn Spanish and further improve my English.`,
  },
  {
    company: 'Clothes2Order',
    location: 'Manchester, United Kingdom',
    dateStart: '2017-03',
    dateEnd: '2018-05',
    jobTitle: 'Customer Service Assistant',
    description: `
      Being a part of Customer Service team and talking over the phone with clients from all around the world 
      helped me improve both my communication and collaboration skills.`,
  },
  {
    company: 'Marks & Spencer',
    location: 'Castle Donington, United Kingdom',
    dateStart: '2015-12',
    dateEnd: '2017-01',
    jobTitle: 'Production Operative',
    description: `
      Working for the first time abroad and overcoming the challenges along the road
      taught me how to quickly adapt to new environments.`,
  },
  {
    company: 'Sniadaniownia Restaurant',
    location: 'Warsaw, Poland',
    dateStart: '2015-05',
    dateEnd: '2015-09',
    jobTitle: 'Barista/Waiter',
    description: `
      In this small restaurant I learned about importance of 
      individual approach to each and every client.`,
  },
  {
    company: 'SO! Coffee',
    location: 'Warsaw Chopin Airport, Poland',
    dateStart: '2013-06',
    dateEnd: '2013-10',
    jobTitle: 'Barista',
    description: `
      Some extremely busy hours at the airport taught me how to organize 
      my workspace well and stay calm even under a lot of pressure.`,
  },
]

// Certificates
const certificates = [
  {
    name: 'CS50x: Introduction to Computer Science',
    provider: 'Harvard University',
  },
  {
    name: 'Responsive Web Design Certification',
    provider: ' freeCodeCamp',
  },
  {
    name: 'Algorithms and Data Structures Certification',
    provider: ' freeCodeCamp',
  },
  {
    name: 'Data Visualization Certification',
    provider: ' freeCodeCamp',
  },
  {
    name: 'Front End Libraries Certification',
    provider: ' freeCodeCamp',
  },
]

// Education
const education = [
  {
    name: 'Warsaw University of Technology',
    description: 'Architecture and Urban Planning',
    dateStart: '2014-09',
    dateEnd: '2015-09',
  },
]

function Resume() {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 21cm;
        height: 29.7cm;
        background-color: #fff;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 30% 70%;
        font-size: 14px;

        h1 {
          text-align: center;
          margin: 0;
          letter-spacing: 10px;
          padding-bottom: 5px;
          border-bottom: 1px solid #ccc;
        }
        h2 {
          font-size: 1.15rem;
          text-align: center;
          margin-bottom: 5px;
        }
        h4 {
          margin-top: 0;
        }
        h5 {
          line-height: 1.4;
          font-size: 0.8rem;
          font-family: ${fonts.semibold};
          margin-bottom: 0;
        }
        ul {
          margin: 0;
          margin-bottom: 27px;
          list-style: none;
        }
        li {
          font-size: 14px;
        }
      `}
    >
      <div
        id="left-column"
        css={css`
          background-color: #f4f4f4;
          padding: 15px;
        `}
      >
        <div id="contact">
          <h4>Contact</h4>
          <ul>
            {contactDetails.map(({alt, src, link, text}) => (
              <li key={alt}>
                <Detail src={src} alt={alt} text={text} link={link} />
              </li>
            ))}
          </ul>
        </div>

        <div id="key-skills">
          <h4>Key skills</h4>
          <ul>
            {keySkills.map(skill => (
              <li key={skill}>
                <Detail src={checkbox} alt="Checkbox icon" text={skill} />
              </li>
            ))}
          </ul>
        </div>

        <div id="additional-skills">
          <h4>Additional skills</h4>
          <ul>
            {additionalSkills.map(skill => (
              <li key={skill}>
                <Detail src={simpleCheck} alt="Check icon" text={skill} />
              </li>
            ))}
          </ul>
        </div>

        <div id="languages">
          <h4>Languages</h4>
          <ul>
            {languages.map(language => (
              <li key={language}>
                <Detail src={message} alt="Message icon" text={language} />
              </li>
            ))}
          </ul>
        </div>

        <div id="interests">
          <h4>Interests</h4>
          <ul>
            {interests.map(({alt, src, text}) => (
              <li key={alt}>
                <Detail src={src} alt={alt} text={text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        css={css`
          padding: 15px;
        `}
      >
        <div
          id="title"
          css={css`
            margin-bottom: 30px;
          `}
        >
          <h1>MACIEK SITKOWSKI</h1>
          {/* <h2>front-end developer</h2> */}
        </div>

        <div id="summary">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>

        <div id="work-experience">
          <h2>Work experience</h2>
          <ul>
            {workExperience.map(
              ({
                company,
                jobTitle,
                location,
                dateStart,
                dateEnd,
                description,
              }) => (
                <li key={company}>
                  <div
                    css={css`
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      span {
                        font-size: 0.7rem;
                        font-family: ${fonts.lightItalic};
                      }
                    `}
                  >
                    <h5>
                      {jobTitle} <br />
                      {company}, {location}{' '}
                    </h5>
                    <span>
                      {format(dateStart)} - {format(dateEnd)}
                    </span>
                  </div>
                  <p
                    css={css`
                      font-size: 14px;
                    `}
                  >
                    {description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>

        <div id="certificates">
          <h2>Certificates</h2>

          <ul>
            {certificates.map(({name, provider}) => (
              <li key={name}>
                <span
                  css={css`
                    font-family: ${fonts.semibold};
                  `}
                >
                  {name}
                </span>{' '}
                &mdash; {provider}
              </li>
            ))}
          </ul>
        </div>

        <div id="education">
          <h2>Education</h2>
          <ul>
            {education.map(({name, description, dateStart, dateEnd}) => (
              <li key={description}>
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span {
                      font-size: 0.7rem;
                      font-family: ${fonts.lightItalic};
                    }
                  `}
                >
                  <h5>{name}</h5>
                  <span>
                    {format(dateStart)} - {format(dateEnd)}
                  </span>
                </div>
                <p
                  css={css`
                    font-size: 14px;
                  `}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
/* 


*/
const Detail = ({src, alt, link, text}) => {
  const detail = (
    <div
      css={css`
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }
      `}
    >
      <img width={18} height={18} src={src} alt={alt} /> {text}
    </div>
  )

  return link ? (
    <a
      css={css`
        text-decoration: none;
        color: hsla(0, 0%, 0%, 0.8);
      `}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {detail}
    </a>
  ) : (
    detail
  )
}

function format(dateString) {
  const [year, month] = dateString.split('-')
  const date = new Date(year, month)

  return `${date.toString().slice(4, 7)} ${year}`
}

export default Resume

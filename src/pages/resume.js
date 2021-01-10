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

const interests = [
  {src: chess, alt: 'chess', text: 'Playing chess'},
  {src: dancing, alt: 'dancing', text: 'Dancing bachata'},
  {src: react, alt: 'react', text: 'Learning new things'},
  {src: checkList, alt: 'checkList', text: 'Building habits'},
  {src: books, alt: 'books', text: 'Reading'},
  {src: gym, alt: 'gym', text: 'Being active'},
]

const contactDetails = [
  {src: website, alt: 'website', text: 'macieksitkowski.com'},
  {src: github, alt: 'github', text: 'github.com/sitek94'},
  {src: mail, alt: 'mail', text: 'msitkowski94@gmail.com'},
  {src: mobile, alt: 'mobile', text: '+48 797 164 649'},
  {src: locationPin, alt: 'location', text: 'Warsaw, Poland'},
]

const keySkills = [
  'React, Redux, JSX',
  'JavaScript, D3.js',
  'Responsive Web Design',
  'HTML5, CSS3',
]

const additionalSkills = [
  'C, Python, SQL',
  'Node.js, Webpack',
  'OAuth, Firebase',
  'GitHub, Git', // ???
  'REST, GraphQL',
  'Sass, CSS-in-JS',
]

const languages = [
  'Polish - Native',
  'English - Fluent',
  'Spanish - Communicative',
]

const workExperience = [
  {
    company: 'Dolphin Bar & Restaurant',
    location: 'Palma Nova, Mallorca',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Bartender/Waiter',
    description: `Learning Spanish and practicing English. Maitaining relationships with
    regular and returning clients.`,
  },
  {
    company: 'Clothes2Order',
    location: 'Manchester, United Kingdom',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Customer Service Assistant',
    description: `Learning Spanish and practicing English. Maitaining relationships with
    regular and returning clients.`,
  },
  {
    company: 'Marks & Spencer',
    location: 'Castle Donington, United Kingdom',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Production Operative',
    description: `Learning Spanish and practicing English. Maitaining relationships with
    regular and returning clients.`,
  },
  {
    company: 'Sniadaniownia Restaurant',
    location: 'Warsaw, Poland',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Barista/Waiter',
    description: `
      In this small restaurant I learned about importance of 
      individual approach to each and every client.`,
  },
  {
    company: 'SO! Coffee',
    location: 'Warsaw Chopin Airport, Poland',
    dateStart: '2018-05',
    dateEnd: '2019-10',
    jobTitle: 'Barista',
    description: `
      Some extremely busy hours at the airport taught me how to organize 
      my workspace well and stay calm even under a lot of pressure.`,
  },
]

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

function Resume() {
  return (
    <div
      css={css`
        background-color: #222;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          width: 21cm;
          height: 29.7cm;
          background-color: #fafafa;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 30% 70%;
          font-size: 16px;

          h1 {
            text-align: center;
            margin: 0;
            letter-spacing: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ccc;
          }
          h2 {
            margin: 0;
            text-align: center;
            text-transform: uppercase;
            font-size: 0.8rem;
          }
          h3 {
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
          css={css`
            background-color: #ccc;
            padding: 15px;
          `}
        >
          <h4>Contact</h4>
          <ul>
            {contactDetails.map(({alt, src, text}) => (
              <li key={alt}>
                <Detail src={src} alt={alt} text={text} />
              </li>
            ))}
          </ul>

          <h4>Key skills</h4>
          <ul>
            {keySkills.map(skill => (
              <li key={skill}>
                <Detail src={checkbox} alt="Checkbox icon" text={skill} />
              </li>
            ))}
          </ul>

          <h4>Additional skills</h4>
          <ul>
            {additionalSkills.map(skill => (
              <li key={skill}>
                <Detail src={simpleCheck} alt="Check icon" text={skill} />
              </li>
            ))}
          </ul>

          <h4>Languages</h4>
          <ul>
            {languages.map(language => (
              <li key={language}>
                <Detail src={message} alt="Message icon" text={language} />
              </li>
            ))}
          </ul>

          <h4>Interests</h4>
          <ul>
            {interests.map(({alt, src, text}) => (
              <li key={alt}>
                <Detail src={src} alt={alt} text={text} />
              </li>
            ))}
          </ul>
        </div>
        <div
          css={css`
            padding: 15px;
          `}
        >
          <div
            css={css`
              margin-bottom: 30px;
            `}
          >
            <h1>MACIEK SITKOWSKI</h1>
            {/* <h2>front-end developer</h2> */}
          </div>

          <div>
            <h3>Summary</h3>
            <p>
              {`Hi, I'm Maciek, a self-taught programmer from Poland. One day I
            decided to switch career from being waiter/barman. What I didn't
            know back then is that in the process of learning to code I would
            soon discover a true passion.`}
            </p>
          </div>

          <div>
            <h3>Work experience</h3>

            <div>
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

            <div>
              <h3>Certificates</h3>

              <div>
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
            </div>

            <div>
              <h3>Education</h3>
              <div>
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
                  <h5>Warsaw University of Technology</h5>
                  <span>Sep 2014 - Sep 2015</span>
                </div>
                <p
                  css={css`
                    font-size: 14px;
                  `}
                >
                  Architecture and Urban Planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Detail = ({src, alt, text}) => (
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

function format(dateString) {
  const [year, month] = dateString.split('-')
  const date = new Date(year, month)

  return `${date.toString().slice(4, 7)} ${year}`
}

export default Resume

import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {fonts, rhythm} from 'lib/typography'
import theme from '../../../config/theme'
import {truncate} from 'lodash'
import techImage from './tech-images'
import Project from 'components/projects/project'

const TechToggle = styled.button`
  padding: 8px 15px 8px 12px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border: none !important;
  display: flex;
  align-items: center;
  margin: 5px;
  :focus {
    outline: none;
  }
  img {
    margin: 0;
    margin-right: 10px;
  }
  :hover,
  :focus {
    color: ${theme.colors.body_color};
    background: #fafafa !important;
    border: none;
  }
`

const orderedTechs = [
  'react',
  'material-ui',
  'javascript',
  'd3',
  'firebase',
  'sass',
  'bootstrap',
  'css',
  'html',
  'redux',
  'typescript',
  'nodejs',
  'mongodb',
  'jest',
]

export default function Projects() {
  const {projects} = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: {fields: {isProject: {eq: true}}}
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              repoUrl
              homepageUrl
              isInDevelopment
              banner {
                ...bannerImage720
              }
              techs
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const [activeTech, setActiveTech] = React.useState(null)

  const toggleActiveTech = newTech => {
    if (activeTech === newTech) {
      setActiveTech(null)
    } else {
      setActiveTech(newTech)
    }
  }

  return (
    <div
      id="all-projects"
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: 90vw;
        padding: 40px 0;
      `}
    >
      <div
        css={css`
          text-align: center;
          margin: ${rhythm(2)} 0 ${rhythm(1.5)} 0;

          h2 {
            font-family: ${fonts.light};
          }
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 550px;
          `}
        >
          <h2>ALL PROJECTS</h2>
          <p>
            Below you can find all my finished projects. Select a technology to
            see only those projects where it has been used.
          </p>
        </div>
        <div
          css={css`
            margin: 0 auto;
            max-width: 700px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          `}
        >
          {orderedTechs.map(tech => (
            <TechToggle
              css={css`
                ${activeTech === tech
                  ? `
                  color: white; 
                  background: #2F313E;
                  :hover,
                  :focus {
                    color: white !important;
                    background: #232323 !important;
                  }`
                  : `
                  color: black; 
                  background: white;
                  :hover,
                  :focus {
                    color: black !important;
                    background: #fafafa !important;
                  }`}
              `}
              key={tech}
              onClick={() => toggleActiveTech(tech)}
            >
              <img
                width="26px"
                height="26px"
                src={techImage(tech).src}
                alt={techImage(tech).label}
              />{' '}
              {techImage(tech).label}
            </TechToggle>
          ))}
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          justify-content: center;
        `}
      >
        {projects.edges
          .filter(({node: project}) =>
            activeTech ? project.frontmatter.techs.includes(activeTech) : true,
          )
          .map(({node: project}) => (
            <Project
              key={project.id}
              title={project.frontmatter.title}
              description={truncate(project.frontmatter.description, {
                length: 190,
              })}
              banner={project.frontmatter.banner}
              repoUrl={project.frontmatter.repoUrl}
              homepageUrl={project.frontmatter.homepageUrl}
              techs={project.frontmatter.techs}
              isInDevelopment={project.frontmatter.isInDevelopment}
            />
          ))}
      </div>
    </div>
  )
}

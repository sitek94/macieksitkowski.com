import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Container from 'components/container'
import {rhythm} from '../../lib/typography'
import {bpMaxSM} from '../../lib/breakpoints'
import theme from '../../../config/theme'
import {flatten, uniq, truncate} from 'lodash'
import techImage from './tech-images'
import Project from 'components/projects/project'

const TechToggle = styled.button`
  padding: 8px 15px 8px 12px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border: none !important;
  display: flex;
  align-items: center;
  text-transform: capitalize;
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

export default function Projects() {
  const {projects} = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: {fields: {isProject: {eq: true}}}
        sort: {order: ASC, fields: [frontmatter___date]}
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

  const techs = uniq(
    flatten(projects.edges.map(({node: project}) => project.frontmatter.techs)),
  )

  const [activeTechs, setActiveTechs] = React.useState([])

  const toggleTech = type => {
    setActiveTechs(
      activeTechs.includes(type)
        ? activeTechs.filter(t => t !== type)
        : activeTechs.concat(type),
    )
  }

  return (
    <Container noVerticalPadding>
      <div
        css={css`
          text-align: center;
          margin: ${rhythm(2)} 0 ${rhythm(1.5)} 0;
        `}
      >
        <h1>My Projects</h1>
        <p>Check out the rest of my projects</p>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          `}
        >
          {techs.map(tech => (
            <TechToggle
              css={css`
                ${activeTechs.includes(tech)
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
              onClick={() => toggleTech(tech)}
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
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));

          ${bpMaxSM} {
            grid-template-columns: 1fr;
          }
        `}
      >
        {projects.edges
          .filter(({node: project}) => {
            return activeTechs.every(tech =>
              project.frontmatter.techs.includes(tech),
            )
          })
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
            />
          ))}
      </div>
    </Container>
  )
}

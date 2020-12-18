import * as React from 'react'
import {graphql} from 'gatsby'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Layout from 'components/layout'
import Container from 'components/container'
import {rhythm} from 'lib/typography'
import SEO from 'components/seo'
import {bpMaxSM} from 'lib/breakpoints'
import theme from '../../../config/theme'
import Hero from 'components/big-hero'
import {uniq, includes, truncate} from 'lodash'

import Project from 'components/projects-my/project'

import jsIcon from 'images/icons/js.svg'
import reactIcon from 'images/icons/react.svg'
import testingIcon from 'images/icons/testing.svg'

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

export default function ProjectsSection({data: {projects}}) {
  const projectTech = uniq(
    projects.edges.map(({node: project}) => project.frontmatter.tech),
  )

  const [displayedTech, setDisplayedTech] = React.useState(projectTech)

  const techToggleIsActive = (getDisplayedTech, tech) => {
    return includes(getDisplayedTech, tech) && getDisplayedTech.length === 1
  }

  const techImage = tech => {
    return (
      (tech === 'react' && `${reactIcon}`) ||
      (tech === 'javascript' && `${jsIcon}`) ||
      (tech === 'testing' && `${testingIcon}`)
    )
  }

  return (
    <Layout
      hero={
        <Hero
          title="Remote Projects"
          text="Learning shouldn't depend on location. Remote projects with Kent are a valuable and effective way to level-up your skills as a web developer."
          background="linear-gradient(213deg, #854BF1 0%, #4335DF 100%), linear-gradient(32deg, rgba(255,255,255,0.25) 33%, rgba(153,153,153,0.25) 100%)"
        />
      }
      headerColor={theme.colors.white}
    >
      <SEO />
      <Container noVerticalPadding>
        <div
          css={css`
            text-align: center;
            margin: ${rhythm(2)} 0 ${rhythm(1.5)} 0;
          `}
        >
          <h1>Available Projects</h1>
          <p>Join the waitlist to get early access and special discounts</p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
            `}
          >
            {projectTech.map(tech => (
              <TechToggle
                css={css`
                  ${techToggleIsActive(displayedTech, tech)
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
                onClick={() => {
                  if (techToggleIsActive(displayedTech, tech)) {
                    setDisplayedTech(projectTech)
                  } else {
                    setDisplayedTech([tech])
                  }
                }}
              >
                <img src={techImage(tech)} alt={tech} /> {tech}
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
              return includes(displayedTech, project.frontmatter.tech)
            })
            .map(({node: project}) => (
              <Project
                key={project.id}
                title={project.frontmatter.title}
                description={truncate(project.frontmatter.description, {
                  length: 190,
                })}
                url={
                  project.fields.slug
                    ? project.fields.slug
                    : `/projects/${project.frontmatter.slug}`
                }
                tech={project.frontmatter.tech}
              />
            ))}
        </div>
      </Container>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query {
    projects: allMdx(
      filter: {fields: {isProject: {eq: true}}}
      sort: {order: ASC, fields: [frontmatter___tech]}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            tech
            slug
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

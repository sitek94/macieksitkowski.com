import * as React from 'react'
import {graphql} from 'gatsby'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Container from 'components/container'
import Hero from 'components/big-hero'
import HabitTrackerProject from 'components/projects/habit-tracker'
import PocketGlobeProject from 'components/projects/pocket-globe'
import theme from '../../config/theme'
import {bpMaxSM, bpMaxXS} from '../lib/breakpoints'
import {rhythm, fonts} from '../lib/typography'
import Projects from 'components/projects'

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  font-size: 22px;
  font-family: ${fonts.regular};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.div`
  width: 100%;
  p {
    margin-bottom: 4px;

    ${bpMaxXS} {
      text-align: justify;
    }
  }
`

export default function Index(/* {data: {blogPosts}} */) {
  return (
    <Layout headerColor={theme.colors.white} logo={false} hero={<Hero />}>
      <SEO />
      <Container
        id="about"
        css={css`
          margin-top: -40px;
          position: relative;
          background: white;
          border-radius: 5px;
          padding: 40px 80px 60px 80px;
          margin-bottom: ${rhythm(1)};
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

          ${bpMaxSM} {
            padding: 40px;
            border-radius: 0;
          }
          h2 {
            margin-top: 0;
            text-align: center;
          }
        `}
      >
        <h2>ABOUT ME</h2>
        <div
          css={css`
            margin-bottom: 40px;
          `}
        >
          <PostTitle>My Beginnings</PostTitle>
          <Description>
            I started learning to code in December 2020 with a motivation to
            switch career from being a waiter/barman. What I did not know back
            then is that in the process of learning I would soon discover a true
            passion.
          </Description>
        </div>

        <div>
          <PostTitle>Why Front End?</PostTitle>
          <Description>
            I remembered back from high school that each website has head and
            body sections so I thought that this will give me a nice head
            start...
          </Description>
        </div>
      </Container>
      <div
        css={css`
          padding: 40px 0;
          text-align: center;
          h2 {
            font-family: ${fonts.light};
          }
        `}
      >
        <h2>MOST RECENT PROJECTS</h2>
        <p>Checkout my most recent work</p>
        <div
          css={css`
            display: grid;
            grid-gap: 40px;
          `}
        >
          <HabitTrackerProject />
          <PocketGlobeProject />
        </div>
      </div>
      <Projects />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    blogPosts: allMdx(
      limit: 5
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {published: {ne: false}, unlisted: {ne: true}}
        fileAbsolutePath: {regex: "//content/blog//"}
      }
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            keywords
          }
        }
      }
    }
  }
`

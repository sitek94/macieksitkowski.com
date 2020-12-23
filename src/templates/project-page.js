import * as React from 'react'
import {graphql} from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import SEO from 'components/seo'
import Container from 'components/container'
import Layout from 'components/layout'
import {css} from '@emotion/react'
import {fonts} from '../lib/typography'
import get from 'lodash/get'
import {bpMaxSM} from '../lib/breakpoints'

export default function ProjectPage({data: {site, mdx}}) {
  const {title} = mdx.fields

  return (
    <Layout site={site} frontmatter={mdx.fields} headerLink="/" noFooter={true}>
      <SEO
        frontmatter={mdx.fields}
        metaImage={get(mdx, 'fields.banner.childImageSharp.fluid.src')}
      />
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container
          css={css`
            padding-top: 0;
          `}
        >
          <div
            css={css`
              padding: 40px 0 0 0;
              ${bpMaxSM} {
                padding: 20px 0 0 0;
              }
              h1 {
                font-size: 1.75rem;
                font-family: ${fonts.semibold}, sans-serif;
              }
            `}
          >
            <h1>{title} Project</h1>
          </div>

          <div
            css={css`
              display: flex;
              justify-content: center;
              h3,
              span {
                text-align: center;
                font-size: 15px;
                opacity: 0.6;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: {id: {eq: $id}}) {
      frontmatter {
        ckTag
      }
      fields {
        title
        noFooter
        description
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          ...bannerImage720
        }
        slug
        description
      }
      body
    }
  }
`

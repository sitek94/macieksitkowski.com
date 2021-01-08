import * as React from 'react'
import Container from 'components/container'
import SEO from 'components/seo'
import Layout from 'components/layout'
import BigHero from 'components/big-hero'
import theme from '../../config/theme'
import SmallHero from 'components/small-hero'
import {css} from '@emotion/react'
import {bpMaxSM} from 'lib/breakpoints'
import Link from 'components/link'

function MarkdownPage({children, pageContext: {frontmatter}}) {
  return (
    <>
      <SEO frontmatter={frontmatter} />
      <Layout
        pageTitle={frontmatter.title}
        hero={
          frontmatter.useBigHero ? (
            <BigHero message={frontmatter.heroMessage} />
          ) : (
            <SmallHero />
          )
        }
        noFooter={frontmatter.noFooter}
        frontmatter={frontmatter}
        headerColor={theme.colors.white}
      >
        <Container
          maxWidth={frontmatter.maxWidth}
          css={css`
            ${bpMaxSM} {
              padding: 20px
                ${frontmatter.noMobileHorizontalPadding ? 0 : '20'}px;
            }
          `}
        >
          {children}
        </Container>
        <Container noVerticalPadding>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: flex-start;

              a {
                margin-left: 20px;
              }
            `}
          >
            <div
              css={css`
                flex-grow: 1;
                border-top: 1px solid ${theme.colors.gray};
              `}
            />
            <Link to="/#recent-projects">Back to projects</Link>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default MarkdownPage

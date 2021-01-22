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
import {fonts} from 'lib/typography'
import styled from '@emotion/styled'

function MarkdownPage({children, pageContext: {frontmatter}}) {
  const projectLinks = (
    <div
      css={css`
        margin-top: 40px;
        a:not(:last-child) {
          margin-right: 10px;
        }
      `}
    >
      <Button href={frontmatter.homepageUrl}>Project LIVE</Button>
      <Button href={frontmatter.repoUrl}>Source code</Button>
    </div>
  )

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
          {projectLinks}
          {children}
          {projectLinks}
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

const Button = styled.a({
  cursor: 'pointer',
  padding: '6px 12px',
  color: '#573EDE !important',
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '16px',
  fontFamily: fonts.semibold,
  border: '1px solid #573EDE',
  transition: 'all 300ms ease',
  ':hover': {
    transition: 'all 300ms ease',
    color: 'white !important',
    backgroundImage:
      'linear-gradient(180deg, #4A60DE 0%, #2F43C2 100%) !important',
    border: '1px solid #573EDE',
  },
})

export default MarkdownPage

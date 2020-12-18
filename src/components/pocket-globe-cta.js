import * as React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {bpMaxSM} from 'lib/breakpoints'
import {fonts} from 'lib/typography'
import theme from '../../config/theme'
import Link from 'components/link'
// import Trophy from 'components/courses/testing-js/trophy'
import Globe from './projects-my/pocket-globe/interactive-globe'
export default function TestingCta({
  title = `Discover the countries from all around the world`,
  button = `See project`,
  byline = `Pocket Globe is an app where I wanted practice using D3.js with React while keeping
  it very responsive.`,
  background = '#fff',
}) {
  return (
    <Banner
      css={css({
        background,
      })}
    >
      <Content>
        <Link
          css={css({
            color: theme.colors.black,
          })}
          to="https://testingjavascript.com"
        >
          Pocket Globe App
        </Link>
        <Title>{title}</Title>
        <Byline>{byline}</Byline>
        <Button href="https://testingjavascript.com">{button}</Button>
      </Content>
      <Box>
        <TrophyContainer>
          <Globe />
        </TrophyContainer>

        <Card>
          <div className="card-content">
            <h3>Play and explore!</h3>
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="19" viewBox="0 0 116 19"> <path fill="#FFCD5D" d="M10,0.5 L12.645,6.86 L19.511,7.41 L14.28,11.89 L15.878,18.59 L10,15 L4.122,18.59 L5.72,11.89 L0.49,7.41 L7.355,6.86 L10,0.5 Z M34,0.5 L36.645,6.86 L43.511,7.41 L38.28,11.89 L39.878,18.59 L34,15 L28.122,18.59 L29.72,11.89 L24.49,7.41 L31.355,6.86 L34,0.5 Z M58,0.5 L60.645,6.86 L67.511,7.41 L62.28,11.89 L63.878,18.59 L58,15 L52.122,18.59 L53.72,11.89 L48.49,7.41 L55.355,6.86 L58,0.5 Z M82,0.5 L84.645,6.86 L91.511,7.41 L86.28,11.89 L87.878,18.59 L82,15 L76.122,18.59 L77.72,11.89 L72.49,7.41 L79.355,6.86 L82,0.5 Z M106,0.5 L108.645,6.86 L115.511,7.41 L110.28,11.89 L111.878,18.59 L106,15 L100.122,18.59 L101.72,11.89 L96.49,7.41 L103.355,6.86 L106,0.5 Z"/></svg>
          </div>
        </Card>
      </Box>
    </Banner>
  )
}

const Banner = styled.div({
  display: 'flex',
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: 800,
  margin: '0 auto',
  border: '1px solid #F6F6F6',
  [bpMaxSM]: {
    flexDirection: 'column',
  },
})

const Content = styled.div({
  width: '100%',
  padding: '40px 0 40px 40px',
  [bpMaxSM]: {
    padding: '32px 16px',
    textAlign: 'center',
  },
})

const Title = styled.h3({
  fontSize: 28,
  lineHeight: '32px',
  fontFamily: fonts.bold,
  marginTop: '1rem',
  marginBottom: 0,
  div: {
    color: '#485FEA',
  },
})

const Byline = styled.p({
  margin: '0.75rem 0',
  paddingBottom: '1rem',
  fontSize: 16,
  opacity: 0.8,
})

const Button = styled.a({
  padding: '10px 16px',
  color: 'white !important',
  backgroundImage: 'linear-gradient(180deg, #566FF8 0%, #394FDC 100%)',
  borderRadius: '5px',
  fontSize: '17px',
  fontFamily: fonts.semibold,
  border: 'none',
  transition: 'all 250ms ease',
  ':hover': {
    transition: 'all 250ms ease',
    backgroundImage:
      'linear-gradient(180deg, #4A60DE 0%, #2F43C2 100%) !important',
    border: 'none !important',
  },
})

const Box = styled.div({
  width: '100%',
  maxWidth: 340,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 20px',
  position: 'relative',
  overflow: 'hidden',
  [bpMaxSM]: {
    paddingTop: '7rem',
    maxWidth: '100%',
  },
})

const Card = styled.div({
  border: '1px solid #F6F6F6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 16px',
  background: '#FFFFFF',
  boxShadow: '0 7px 19px 0 rgba(0,0,0,0.04), 0 12px 47px 0 rgba(0,0,0,0.05)',
  borderRadius: '8px 8px 0 0',
  maxWidth: 250,
  maxHeight: 200,
  width: '100%',
  height: '100%',
  '.card-content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    h3: {
      fontSize: 20,
      marginTop: '1.5rem',
    },
  },
})

const TrophyContainer = styled.div({
  position: 'absolute',
  // maxWidth: 86,
  top: 16,
})

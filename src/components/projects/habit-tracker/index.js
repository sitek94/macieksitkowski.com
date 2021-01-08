import * as React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {bpMaxSM} from 'lib/breakpoints'
import {fonts} from 'lib/typography'
import theme from '../../../../config/theme'
import Link from 'components/link'
import Barchart from './barchart'
import techImage from '../tech-images'

export default function HabitTrackerCta({
  title = `Build a routine of positive, life changing habits`,
  button = `Read more`,
  byline = `
    Habit Tracker is my final project for Harvard's CS50 course. 
    It's built as MVP (minimal viable product) and its core functionality 
    is to track user's habits.`,
  background = theme.colors.navy_dark,
}) {
  return (
    <Banner
      css={css({
        background,
      })}
    >
      <Content>
        <TopTextBox>
          <Link
            css={css({
              color: theme.colors.white,
            })}
            to="/habit-tracker-app"
          >
            Habit Tracker App
          </Link>
          <Techs>
            {['react', 'material-ui', 'firebase'].map(tech => (
              <img
                key={tech}
                width="26px"
                height="26px"
                src={techImage(tech).src}
                alt={techImage(tech).label}
              />
            ))}
          </Techs>
        </TopTextBox>
        <Title>{title}</Title>
        <Byline>{byline}</Byline>
        <Button href="/habit-tracker-app">{button}</Button>
      </Content>
      <Box>
        <BoxContent>
          <Barchart width={150} height={150} />
          <h3>Track your progress!</h3>
        </BoxContent>

        <Card />
      </Box>
    </Banner>
  )
}

const TopTextBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [bpMaxSM]: {
    flexDirection: 'column',
    a: {
      marginBottom: 10,
    },
  },
})

const Techs = styled.span({
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '10px',
  img: {
    marginBottom: 0,
  },
})

const Banner = styled.div({
  display: 'flex',
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: 800,
  margin: '0 auto',
  [bpMaxSM]: {
    flexDirection: 'column',
  },
})

const Content = styled.div({
  width: '100%',
  padding: '40px 0 40px 40px',
  color: theme.colors.white,
  textAlign: 'left',
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
  color: theme.colors.white,
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

const BoxContent = styled.div({
  position: 'absolute',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  h3: {
    fontFamily: fonts.semibold,
    fontSize: 20,
    marginTop: 18,
    color: theme.colors.white,
  },
})

const Card = styled.div({
  padding: '50px 16px',
  boxShadow: '0 7px 19px 0 rgba(0,0,0,0.3), 0 12px 47px 0 rgba(0,0,0,0.31)',
  borderRadius: '8px 8px 0 0',
  maxWidth: 250,
  maxHeight: 200,
  width: '100%',
  height: '100%',
})

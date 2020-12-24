import * as React from 'react'
import {css} from '@emotion/react'
import theme from '../../config/theme'
import {bpMaxMD, bpMaxSM} from '../lib/breakpoints'
import {fonts} from '../lib/typography'
import Container from 'components/container'
import heroImageRight from '../images/hero/path-right.svg'
import heroImageLeft from '../images/hero/path-left.svg'

import particlesOptions from 'lib/particles.json'
import Particles from 'react-tsparticles'

function Hero({
  children,
  title = `Maciek Sitkowski`,
  subTitle = `Front-end engineer`,
  headerColor, // pluk this out of the props so it's not applied to the section
  ...props
}) {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: linear-gradient(
          -213deg,
          ${theme.colors.background_light} 0%,
          ${theme.colors.background_dark} 100%
        );
        z-index: 0;
        position: relative;
        align-items: center;
        display: flex;
        padding-top: 40px;
        .particles {
          position: absolute;
          inset: 0px;
        }
        .images {
          background-image: url(${heroImageRight}), url(${heroImageLeft});
          background-position: center right, center left;
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          inset: 0px;

          ${bpMaxMD} {
            background-size: cover;
          }
        }

        ${bpMaxSM} {
          padding-top: 60px;
        }
      `}
      {...props}
    >
      <Particles className="particles" options={particlesOptions} />
      <div className="images" />
      <Container
        css={css`
          height: 336px;
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 0;
        `}
      >
        <div
          css={css`
            margin-top: -40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          `}
        >
          <h1
            css={css`
              position: relative;
              z-index: 5;
              line-height: 1;
              letter-spacing: 1px;
              margin: 0;
              font-size: 60px;
              font-family: ${fonts.thin};
              height: 100%;
              display: flex;
              padding-bottom: 0;

              ${bpMaxMD} {
                font-size: 50px;
              }
            `}
          >
            {title.toUpperCase()}
          </h1>
          <p
            css={css`
              color: hsla(255, 100%, 100%, 0.9);
              font-family: ${fonts.regular};
              font-size: 25px;
              margin-bottom: 0;

              ${bpMaxMD} {
                font-size: 20px;
              }
            `}
          >
            {subTitle.toUpperCase()}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Hero

import * as React from 'react'
import {css} from '@emotion/react'
import theme from '../../config/theme'
import {bpMaxSM} from '../lib/breakpoints'

import optionsParticles from 'lib/particles.json'
import Particles from 'react-tsparticles'

function Hero({
  children,
  headerColor, // pluk this out of the props so it's not applied to the section
  ...props
}) {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        height: 100px;
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
        ${bpMaxSM} {
          padding-top: 60px;
        }
      `}
      {...props}
    >
      <Particles className="particles" options={optionsParticles} />
    </section>
  )
}

export default Hero

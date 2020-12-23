import * as React from 'react'
import {css} from '@emotion/react'
import theme from '../../config/theme'
import Link from 'components/link'
import {bpMaxSM} from 'lib/breakpoints'
import SubscribeForm from './forms/subscribe'
import {GitHub, YouTube, FreeCodeCamp} from './social'
import Container from './container'

import particlesOptions from 'lib/particles.json'
import Particles from 'react-tsparticles'
import {fonts} from 'lib/typography'

const Footer = ({subscribeForm = <SubscribeForm />, maxWidth}) => (
  <footer
    css={css`
      position: relative;
      background: ${theme.colors.purple_dark};
      color: white;
      margin-top: 70px;
      .particles {
        position: absolute;
        inset: 0px;
      }
    `}
  >
    <Particles className="particles" options={particlesOptions} />
    <Container
      id="contact"
      maxWidth={maxWidth}
      css={css`
        position: relative;
        z-index: 10;
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${bpMaxSM} {
          padding-top: 0;
          flex-direction: column;
        }
      `}
    >
      {subscribeForm ? (
        <div css={{marginTop: -40}}>
          {subscribeForm}
          <br />
          <br />
        </div>
      ) : null}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div {
            margin: 50px 0;
            ${bpMaxSM} {
              margin: 20px 0;
            }
          }
          ${bpMaxSM} {
            align-items: center;
          }
          h4 {
            font-family: ${fonts.light};
            font-size: 14px;
            color: white;
          }
        `}
      >
        <div>
          <GitHub />
          <FreeCodeCamp />
          <YouTube />
        </div>

        <Link to="/" aria-label="Return to homepage">
          <div>
            <h4>by Maciek Sitkowski</h4>
          </div>
        </Link>
      </div>
    </Container>
  </footer>
)

export default Footer

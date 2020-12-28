import * as React from 'react'
import {css} from '@emotion/react'
import theme from '../../config/theme'
import {darken} from 'polished'

const light_color = theme.colors.background_light
const dark_color = darken(0.2, theme.colors.background_light)

export default function ExternalLinks({liveUrl, githubUrl}) {
  return (
    <div
      css={css`
        display: flex;
        margin-bottom: 20px;
        a:not(:last-child) {
          margin-right: 10px;
        }

        .button {
          cursor: pointer;
          padding: 13px 20px;
          border-radius: 200px;
          border: 1px solid ${dark_color};
          color: #fff;
          font-size: 14px;
          line-height: 1;
          transition: all 250ms ease;
        }

        .contained {
          background-color: ${light_color};
        }
        .contained:hover {
          color: #fff;
          border: 1px solid ${dark_color};
          background-color: ${dark_color};
        }
        .outlined {
          color: ${light_color};
        }
        .outlined:hover {
          color: #fff;
          border: 1px solid ${light_color};
          background-color: ${light_color};
        }
      `}
    >
      <a className="button contained" href={liveUrl}>
        Project Live
      </a>
      <a className="button outlined" href={githubUrl}>
        Source Code
      </a>
    </div>
  )
}

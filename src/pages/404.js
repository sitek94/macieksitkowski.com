import * as React from 'react'
import {css} from '@emotion/react'
import {NotFound} from 'illustrations/not-found'

function FourOFour() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `}
    >
      {NotFound}
      <h1>NOT FOUND</h1>
      <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
    </div>
  )
}

export default FourOFour

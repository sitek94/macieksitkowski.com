import {css} from '@emotion/react'
import {fonts} from '../../lib/typography'
import theme from '../../../config/theme'
import {bpMaxSM, bpMaxXS} from '../../lib/breakpoints'

const styles = css`
  width: 320px;
  background: ${theme.colors.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  ${bpMaxSM} {
    margin: 10px;
  }
  ${bpMaxXS} {
    margin: 10px 0;
  }

  img {
    margin-bottom: 0;
  }
  h1 {
    margin-top: 0;
    font-family: ${fonts.bold}, sans-serif;
    font-size: 26px;
  }
  .button {
    font-size: 16px;
    padding: 15px 20px;
    background-image: linear-gradient(-180deg, #8161ff 0%, #5b36d0 100%);
    text-align: center;
    border: 1px solid transparent;
    color: white;
    border-radius: 5px;
    :hover {
      background-image: linear-gradient(-180deg, #4054f4 0%, #3647ce 100%);
      border: 1px solid transparent;
    }
  }
`
export default styles

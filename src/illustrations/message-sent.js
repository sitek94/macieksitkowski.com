import * as React from 'react'
import {css, keyframes} from '@emotion/react'
import theme from '../../config/theme'
import {fonts} from 'lib/typography'

// PleaseConfirmIllustration
const PaperRollOut = keyframes`
from, 0% {
    transform: translate(10px, 80px);
}
to, 100% {
    transform: translate(10px, 0);
    
}
`
const ButtonRollOut = keyframes`
from, 0% {
    opacity: 0;
    transform: translate(0px, 80px) scale(1);
    transform-origin: center center;
}
70% {
    transform: scale(1);
}
90% {
    transform: scale(0.95);
    transform-origin: center center;
}
to, 100% {
    opacity: 1;
    transform: translate(0px, 0) scale(1);
    transform-origin: center center;
}
`
const TextCopyRollOut = keyframes`
from, 0% {
    opacity: 0;
    transform: translate(0px, 80px);
}
to, 100% {
    opacity: 1;
    transform: translate(0px, 0);
}
`
const TextCopyWidth1 = keyframes`
from, 0% {
    width: 0;
}
to, 100% {
    width: 25;
}
`
const TextCopyWidth2 = keyframes`
from, 0% {
    width: 0;
}
to, 100% {
    width: 47;
}
`
const NotificationFadeIn = keyframes`
0% {
    opacity: 0;
    r: 0;
}
50% {
    opacity: 0;
    r: 0;
}
100% {
    opacity: 1;
    r: 9.5;
    
}
`
// SVG
export const MessageSentIllustration = (
  <div
    css={css`
      .paper {
        animation: ${PaperRollOut} 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1;
        transform: translate(10px, 0);
      }
      .text-copy {
        animation: ${TextCopyRollOut} 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1;
        transform: translate(0px, 0);
        rect:nth-of-type(1) {
          animation: ${TextCopyWidth1} 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1;
          width: 25;
        }
        rect:nth-of-type(2) {
          animation: ${TextCopyWidth2} 1.5s 250ms cubic-bezier(0.19, 1, 0.22, 1)
            1;
          width: 47;
        }
      }
      .button,
      .text-button {
        animation: ${ButtonRollOut} 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1;
      }
      .notification {
        position: absolute;
        animation: ${NotificationFadeIn} 1.4s cubic-bezier(0.19, 1, 0.22, 1) 1;
      }
      text {
        animation: ${NotificationFadeIn} 1.25s 250ms
          cubic-bezier(0.19, 1, 0.22, 1) 1;
      }
      .cursor {
        animation: ${TextCopyRollOut} 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1;
      }
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      height="109"
      viewBox="0 0 100 109"
    >
      <defs>
        <rect id="please-confirm-a" width="79" height="85" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#737794"
          d="M49.5384615,86.7692308 C49.1356923,86.7692308 48.7350769,86.6572308 48.3818462,86.4332308 L1.54931641,56.2793846 C0.894547175,55.8636923 0.515470252,55.1249231 0.554239483,54.3495385 C0.59516256,53.5763077 1.04747025,52.8806154 1.74316256,52.5338462 L49.5384615,22.1538462 L98.393312,52.5338462 C99.0868505,52.8806154 99.541312,53.5741538 99.5822351,54.3495385 C99.6231582,55.1249231 99.2419274,55.8615385 98.5871582,56.2793846 L50.6950769,86.4332308 C50.3418462,86.6572308 49.9412308,86.7692308 49.5384615,86.7692308 Z"
        />
        <g transform="translate(10 4)" className="paper">
          <mask id="please-confirm-b" fill="#fff">
            <use xlinkHref="#please-confirm-a" />
          </mask>
          <path
            fill="#EAEBEE"
            d="M71.8461538,84.9230769 L7.23076923,84.9230769 L7.23076923,7.38461538 C7.23076923,6.19569231 8.19569231,5.23076923 9.38461538,5.23076923 L69.6923077,5.23076923 C70.8812308,5.23076923 71.8461538,6.19569231 71.8461538,7.38461538 L71.8461538,84.9230769 Z"
            mask="url(#please-confirm-b)"
          />
        </g>
        <circle
          className="notification"
          cx="80"
          cy="9.5"
          r="9.5"
          fill="#E86C60"
          fillRule="nonzero"
        />
        <text
          fill="#FFF"
          fontFamily={fonts.bold}
          fontSize="10"
          fontWeight="600"
          letterSpacing="1"
        >
          <tspan x="77.63" y="12.308">
            1
          </tspan>
        </text>

        <rect
          width="47.385"
          height="16"
          x="26.385"
          y="35.077"
          fill={theme.brand.primary}
          fillRule="nonzero"
          rx="4.308"
          className="button"
        />
        <text
          className="text-button"
          fill="#FFF"
          fontFamily={fonts.regular}
          fontSize="10.3"
          fontWeight="500"
        >
          <tspan x="33.713" y="47">
            HELLO
          </tspan>
        </text>
        <g className="text-copy">
          <rect
            width="25.846"
            height="4.308"
            x="26.385"
            y="18.462"
            fill="#737794"
            fillRule="nonzero"
            opacity=".2"
            rx="2.154"
          />
          <rect
            width="47.385"
            height="2.154"
            x="26.385"
            y="27.077"
            fill="#737794"
            fillRule="nonzero"
            opacity=".1"
            rx="1.077"
          />
          <rect
            width="17.231"
            height="2.154"
            x="26.385"
            y="56.923"
            fill="#737794"
            fillRule="nonzero"
            opacity=".1"
            rx="1.077"
          />
        </g>
        <path
          className="cursor"
          fill="#2E2E2E"
          stroke="#EAEBEE"
          strokeWidth="2.154"
          d="M73.3339536,52.7745654 L72.2959296,55.3695683 C72.0489805,55.982934 71.4537922,56.3846357 70.7934735,56.3846357 C70.767838,56.3844334 70.767838,56.3844334 70.7528443,56.3840011 C70.7474956,56.383832 70.7474956,56.383832 70.7449965,56.3837465 C70.74609,56.383827 70.74609,56.383827 70.7209873,56.3830191 C70.0329402,56.352258 69.4398973,55.8899508 69.2427872,55.2307314 L65.9906732,44.3898504 C65.8207402,43.8201444 65.9764789,43.2025472 66.3986377,42.7803719 C66.8195543,42.3610488 67.4348876,42.2056409 68.0068432,42.3757802 L78.8477047,45.6281899 C79.5059498,45.8271281 79.9688032,46.4202007 79.9979681,47.1088482 C80.027057,47.7956994 79.6206152,48.4266851 78.9817153,48.6816108 L76.3894363,49.7187751 L79.5252805,52.8547629 C80.1570155,53.4865268 80.1570155,54.5106808 79.5252805,55.1440634 L78.7599538,55.9094239 C78.1279695,56.5430577 77.1022735,56.5430577 76.4696443,55.9103996 L73.3339536,52.7745654 Z"
        />
        <path
          fill="#B4BDDC"
          d="M97.4615385,108.307692 C97.2806154,108.307692 97.0975385,108.284 96.9187692,108.238769 L47.3803077,95.3156923 L47.9230769,80.3076923 L99.6153846,54.4615385 L99.6153846,106.153846 C99.6153846,106.821538 99.3052308,107.450462 98.7775385,107.859692 C98.3984615,108.152615 97.9332308,108.307692 97.4615385,108.307692 Z"
        />
        <path
          fill="#CFD6E9"
          d="M97.4615385,108.307692 L2.69230769,108.307692 C1.50123077,108.307692 0.538461538,107.342769 0.538461538,106.153846 L0.538461538,54.4615385 L98.4932308,104.262769 C99.3569231,104.734462 99.7941538,105.731692 99.5486154,106.685846 C99.3052308,107.64 98.4458462,108.307692 97.4615385,108.307692 Z"
        />
      </g>
    </svg>
  </div>
)

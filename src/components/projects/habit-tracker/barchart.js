import * as React from 'react'
import * as d3 from 'd3'
import {random} from 'lodash'
import {css} from '@emotion/react'
import theme from '../../../../config/theme'
import {lighten} from 'polished'

const {blue, green, yellow, purple, red} = theme.colors

const createColor = (color, name) => ({color, name})

const defaultColors = [
  createColor(purple, 'purple'),
  createColor(blue, 'blue'),
  createColor(green, 'green'),
  createColor(yellow, 'yellow'),
  createColor(red, 'red'),
]

const hoverStyle = d => `svg:hover .${d.name} {
  fill: ${lighten(0.02, d.color)}
}`

function getInitialData(colors) {
  return [17, 20, 15, 10, 5].map((height, i) => ({
    name: colors[i].name,
    color: colors[i].color,
    height,
  }))
}

function getRandomData(colors) {
  return colors.map(color => ({
    ...color,
    height: random(5, 20),
  }))
}

export default function Barchart({width = 400, height = 400}) {
  const [data, setData] = React.useState(getInitialData(defaultColors))
  const svgRef = React.useRef(null)

  // Update data interval
  React.useEffect(() => {
    const id = setInterval(() => {
      setData(getRandomData(defaultColors))
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Redraw svg whenever data changes
  React.useEffect(() => {
    // x scale
    const x = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])

    // y scale
    const y = d3.scaleLinear().domain([0, 20]).range([height, 0])

    d3.select(svgRef.current)
      .selectAll('rect')
      .data(data)
      .transition()
      .duration(1000)
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.height))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.height))
      .attr('fill', d => d.color)
  }, [data, width, height])

  const handleClick = () => {
    setData(getRandomData(data))
  }

  return (
    <button
      onClick={handleClick}
      className="barchart"
      css={css`
        &.barchart {
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          ${data.map(d => hoverStyle(d))}
          &:hover {
            background: transparent;
            border: 0;
          }
        }
      `}
    >
      <svg ref={svgRef} width={width} height={height}>
        {data.map(d => (
          <rect key={d.color} className={d.name} />
        ))}
      </svg>
    </button>
  )
}

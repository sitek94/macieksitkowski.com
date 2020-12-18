import * as React from 'react'
import * as d3 from 'd3'
import {random} from 'lodash'
import {css} from '@emotion/react'

const defaultColors = ['royalblue', '#33bae3', 'brown', 'gold', '#e37933']

function getInitialData(colors) {
  return [17, 20, 15, 10, 5].map((height, i) => ({
    color: colors[i],
    height,
  }))
}

function getRandomData(colors) {
  return colors.map(color => ({
    color,
    height: random(5, 20),
  }))
}

export default function Barchart({
  width = 400,
  height = 400,
  colors = defaultColors,
}) {
  const [data, setData] = React.useState(getInitialData(colors))
  const svgRef = React.useRef(null)

  // Redraw svg whenever data changes
  React.useEffect(() => {
    // x scale
    const x = d3.scaleBand().domain(colors).range([0, width])

    // y scale
    const y = d3.scaleLinear().domain([0, 20]).range([height, 0])

    // Select rectangles inside svg
    d3.select(svgRef.current)
      .selectAll('rect')
      .data(data)
      .transition()
      .duration(1000)
      .attr('x', d => x(d.color))
      .attr('y', d => y(d.height))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.height))
      .attr('fill', d => d.color)
  }, [data, width, height, colors])

  const handleClick = () => {
    setData(getRandomData(colors))
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
          opacity: 0.9;
          &:hover {
            background: transparent;
            border: 0;
            opacity: 1;
          }
        }
      `}
    >
      <svg ref={svgRef} width={width} height={height}>
        {data.map(d => (
          <rect key={d.color} />
        ))}
      </svg>
    </button>
  )
}

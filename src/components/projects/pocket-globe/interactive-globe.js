import * as React from 'react'
import {css} from '@emotion/react'
import {feature} from 'topojson'
import {json, geoOrthographic, geoPath, select, drag} from 'd3'
import globe from 'images/globe.svg'
import theme from '../../../../config/theme'

// World atlas - Land 110m
const url = 'https://unpkg.com/world-atlas@2.0.2/land-110m.json'

/**
 * Fetches topojson data and returns topology already tranformed into features.
 */
function useFeatures() {
  const [features, setFeatures] = React.useState([])
  React.useEffect(() => {
    json(url).then(topology => {
      setFeatures(feature(topology, topology.objects.land).features)
    })
  }, [])

  return features
}

export default function Globe({
  size = 150,
  scale = size / 2,
  initialRotation = [0, -30],
  sensitivity = 30,
}) {
  const width = size
  const height = size
  const svgRef = React.useRef(null)
  const features = useFeatures()

  // Projection
  const projection = React.useMemo(
    () =>
      geoOrthographic()
        .scale(scale)
        .center([0, 0])
        .rotate(initialRotation)
        .translate([width / 2, height / 2]),
    [width, height, initialRotation, scale],
  )

  // Path generator
  const pathGenerator = geoPath().projection(projection)

  // Update circle's `r` when `scale` changes
  React.useEffect(() => {
    if (!svgRef.current) return
    select(svgRef.current).select('circle').attr('r', projection.scale())
  }, [projection, scale])

  // Update `path` when `pathGenerator` changes
  React.useEffect(() => {
    if (!svgRef.current) return
    select(svgRef.current)
      .select('path')
      .data(features)
      .join('path')
      .attr('d', pathGenerator)
  }, [features, pathGenerator])

  // Apply dragging behaviour
  React.useEffect(() => {
    const svg = select(svgRef.current)
    if (!svg) return
    svg.call(
      drag().on('drag', event => {
        const rotate = projection.rotate()
        const k = sensitivity / projection.scale()

        projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k])
        pathGenerator.projection(projection)

        svg.select('path').attr('d', pathGenerator)
      }),
    )
  }, [features, projection, pathGenerator, sensitivity])

  // Animation
  React.useEffect(() => {
    if (!svgRef.current) return
    const id = setInterval(() => {
      const [x, y] = projection.rotate()
      projection.rotate([x + 0.5, y + 0])

      pathGenerator.projection(projection)
      select(svgRef.current).select('path').attr('d', pathGenerator)
    }, 25)

    return () => {
      clearInterval(id)
    }
  }, [pathGenerator, projection])

  return (
    <div
      css={css`
        svg {
          cursor: grab;
        }
        circle {
          fill: ${theme.colors.white};
          stroke: ${theme.colors.navy_dark};
        }
        path {
          fill: ${theme.colors.navy_dark};
        }
      `}
    >
      {features.length ? (
        <svg ref={svgRef} width={width} height={height}>
          <circle cx={width / 2} cy={height / 2} r={scale} />
          <path />
        </svg>
      ) : (
        <img src={globe} alt="Earth Globe" width={width} height={height} />
      )}
    </div>
  )
}

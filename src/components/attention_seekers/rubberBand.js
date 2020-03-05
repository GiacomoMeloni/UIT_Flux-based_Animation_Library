import React from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'
import rubberBandActions from '../../data/rubberBand/rubberBandActions'

function rubberBand ({
  id, stretches, maxOffset,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.rubberband.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    rubberBandActions.newRubberBand(
      id, stretches, maxOffset,
      duration, timing, delay, iterations, direction, fillMode, playState
    )
  } else {
    const rubberBObj = rest.rubberband.state.get(id)
    animation = getAnimation(id, {}, rubberBObj.style)

    CSSHandlerActions.insertRule(id, `@keyframes ${id} {\n${rubberBandKeyFrames(rubberBObj)}\n}`)
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function rubberBandKeyFrames ({ stretches, maxOffset }) {
  const frames = stretches * 2
  const lowerBound = Math.max(0, 35 - frames)
  const upperBound = Math.min(100, 85 + frames)
  const linspace = (upperBound - lowerBound) / frames
  const originFrame = 'from {\n' +
    '   transform: scale3d(1, 1, 1);\n' +
    '}'
  let bodyFrame = ''

  for (const i in [...Array(frames).keys()]) {
    if (i === (frames - 1).toString()) {
      bodyFrame += '\n\nto {\n' +
        '   transform: scale3d(1, 1, 1);\n' +
        '}'
    } else {
      let shift
      let negShift
      if (i === '0') {
        shift = maxOffset * 0.01
        negShift = shift > 1 ? 1 : shift
        bodyFrame += '\n\n' + lowerBound + '% {\n' +
          '   transform: scale3d(' + (1 + shift) + ', ' + (1 - negShift) + ', 1);\n' +
          '}'
      } else {
        if (i === (frames - 2).toString()) {
          bodyFrame += '\n\n' + upperBound + '% {\n'
        } else {
          bodyFrame += '\n\n' + (lowerBound + linspace * i) + '% {\n'
        }
        shift = (maxOffset * (frames - i) / frames) * 0.01
        if (i % 2 === 1) {
          shift = -shift
          shift = shift < -1 ? -1 : shift
          negShift = shift
        }
        negShift = shift > 1 ? 1 : shift
        bodyFrame += '   transform: scale3d(' + (1 + shift) + ', ' + (1 - negShift) + ', 1);\n' +
          '}'
      }
    }
  }

  return originFrame + bodyFrame
}

export function setStretches (value) {
  rubberBandActions.changeValue(this.id, 'stretches', value)
}

export function setMaxOffset (value) {
  rubberBandActions.changeValue(this.id, 'maxOffset', value)
}

rubberBand.propTypes = {
  id: PropTypes.string,
  stretches: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxOffset: PropTypes.number,
  duration: PropTypes.string,
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default rubberBand

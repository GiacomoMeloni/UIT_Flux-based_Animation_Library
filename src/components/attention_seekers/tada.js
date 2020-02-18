import React from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'
import tadaActions from '../../data/tada/tadaActions'

function tada ({
  id, maxScale, minScale, rotation,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.tada.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    tadaActions.newTada(
      id, maxScale, minScale, rotation,
      duration, timing, delay, iterations, direction, fillMode, playState
    )
  } else {
    const tadaObj = rest.tada.state.get(id)
    animation = getAnimation(id, {}, tadaObj.style)

    const rule = `@keyframes ${id} {\n${tadaKeyFrames(tadaObj)}\n}`
    console.log(rule)
    CSSHandlerActions.insertRule(id, rule)

    // test
    // animation.animationIterationCount = 'infinite'
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function tadaKeyFrames ({ maxScale, minScale, rotation }) {
  return `from {
   transform: scale3d(1, 1, 1);
}

10%,
20% {
   transform: scale3d(${minScale}, ${minScale}, ${minScale}) rotate3d(0, 0, 1, -${rotation}deg);
}

30%,
50%,
70%,
90% {
   transform: scale3d(${maxScale}, ${maxScale}, ${maxScale}) rotate3d(0, 0, 1, ${rotation}deg);
}

40%,
60%,
80% {
   transform: scale3d(${maxScale}, ${maxScale}, ${maxScale}) rotate3d(0, 0, 1, -${rotation}deg);
}

to {
   transform: scale3d(1, 1, 1);
}`
}

export function setMaxScale (value) {
  tadaActions.changeValue(this.id, 'maxScale', value)
}

export function setMinScale (value) {
  tadaActions.changeValue(this.id, 'minScale', value)
}

export function setRotation (value) {
  tadaActions.changeValue(this.id, 'rotation', value)
}

tada.propTypes = {
  id: PropTypes.string,
  maxScale: PropTypes.number,
  minScale: PropTypes.number,
  rotation: PropTypes.number,
  duration: PropTypes.string,
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default tada

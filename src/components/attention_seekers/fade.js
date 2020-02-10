import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import fadeActions from '../../data/fade/fadeActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function fade ({
  id, entry, animationDirection, opacityLimit,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  const animation = getAnimation(id, duration, timing, delay, iterations, direction, fillMode, playState)

  if (!rest.fade.state.has(id)) {
    fadeActions.newFade(id, entry, direction, opacityLimit)
  } else {
    const fadeObj = rest.fade.state.get(id)

    CSSHandlerActions.insertRule(id, fadeKeyframe(fadeObj))

    // test
    animation.animationIterationCount = 'infinite'
  }

  return (
    <div style={animation}>
      { rest.children }
    </div>
  )
}

function fadeKeyframe (state) {
  let opacity
  if (state.get('opacityLimit')) {
    opacity = (state.get('opacityLimit') / 100).toString()
  } else {
    opacity = 1
  }

  let originFrame
  let endFrame

  originFrame = '@keyframes ' + state.get('id') + ' {\nfrom {\n'
  endFrame = 'to {\n'

  if (state.get('entry') === true) {
    originFrame += 'opacity: 0;\n'
    endFrame += 'opacity: ' + opacity + ';\n'
  } else {
    originFrame += 'opacity: ' + opacity + ';\n'
    endFrame += 'opacity: 0;\n'
  }

  switch (state.get('direction')) {
    case 'down':
      originFrame += 'transform: translate3d(0, -100%, 0);\n' +
        '-webkit-transform: translate3d(0, -100%, 0);\n'
      endFrame += 'transform: translate3d(0, 0, 0);\n' +
        '-webkit-transform: translate3d(0, 0, 0);\n'
      break
    case 'up':
      originFrame += 'transform: translate3d(0, 100%, 0);\n' +
        '-webkit-transform: translate3d(0, 100%, 0);\n'
      endFrame += 'transform: translate3d(0, 0, 0);\n' +
        '-webkit-transform: translate3d(0, 0, 0);\n'
      break
    case 'left':
      originFrame += 'transform: translate3d(-100%, 0, 0);\n' +
        '-webkit-transform: translate3d(-100%, 0, 0);\n'
      endFrame += 'transform: translate3d(0, 0, 0);\n' +
        '-webkit-transform: translate3d(0, 0, 0);\n'
      break
    case 'right':
      originFrame += 'transform: translate3d(100%, 0, 0);\n' +
        '-webkit-transform: translate3d(100%, 0, 0);\n'
      endFrame += 'transform: translate3d(0, 0, 0);\n' +
        '-webkit-transform: translate3d(0, 0, 0);\n'
      break
    default:
      break
  }

  originFrame += '}\n\n'
  endFrame += '}\n\n}\n\n'

  return originFrame + endFrame
}

export function setEntry (value) {
  fadeActions.changeFadeValue(this.id, 'entry', value)
}

export function setFadeDirection (value) {
  fadeActions.changeFadeValue(this.id, 'direction', value)
}

export function setOpacityLimit (value) {
  fadeActions.changeFadeValue(this.id, 'opacityLimit', value)
}

fade.propTypes = {
  anim: PropTypes.object,
  id: PropTypes.string,
  entry: PropTypes.bool,
  animationDirection: PropTypes.string,
  opacityLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default fade

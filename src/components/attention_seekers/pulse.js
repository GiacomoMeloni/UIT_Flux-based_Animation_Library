import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import pulseActions from '../../data/pulse/pulseActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function pulse ({
  id, enlargement,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.pulse.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    pulseActions.newPulse(id, enlargement, duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    animation = getAnimation(id, {}, document.getElementById(id).style)
    const pulseObj = rest.pulse.state.get(id)
    console.log(pulseKeyframe(pulseObj))
    CSSHandlerActions.insertRule(id, pulseKeyframe(pulseObj))

    // test
    animation.animationIterationCount = 'infinite'
  }

  return (
    <div id={id} style={animation}>
      { rest.children }
    </div>
  )
}

function pulseKeyframe (state) {
  const enlargement = (1 + (state.get('enlargement') / 100)).toString()
  let rule = '@keyframes ' + state.get('id') + ' {\n'

  rule += 'from {\n-webkit-transform: scale3d(1, 1, 1);\ntransform: scale3d(1, 1, 1);\n}\n\n'
  rule += '50% {\n-webkit-transform: scale3d(' + enlargement + ', ' + enlargement + ', ' + enlargement + ');' +
    '\ntransform: scale3d(' + enlargement + ', ' + enlargement + ', ' + enlargement + ');\n}\n\n'
  rule += 'to {\n-webkit-transform: scale3d(1, 1, 1);\ntransform: scale3d(1, 1, 1);\n}\n}'

  return rule
}

export function setEnlargement (value) {
  pulseActions.changePulseValue(this.id, 'enlargement', value)
}

pulse.propTypes = {
  id: PropTypes.string,
  enlargement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default pulse

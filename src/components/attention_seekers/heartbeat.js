import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import heartbeatActions from '../../data/heartbeat/heartbeatActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function heartbeat ({
  id, beatTimes, beatStrength,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.heartbeat.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    heartbeatActions.newHeartBeat(
      id, beatTimes, beatStrength,
      duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    const heartbeatObj = rest.heartbeat.state.get(id)
    animation = getAnimation(id, {}, heartbeatObj.style)
    console.log(heartbeatKeyframe(heartbeatObj))
    CSSHandlerActions.insertRule(id, heartbeatKeyframe(heartbeatObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function heartbeatKeyframe (state) {
  const enlargement = (1 + (state.get('enlargement') / 100)).toString()
  let rule = '@keyframes ' + state.get('id') + ' {\n'

  rule += 'from {\n-webkit-transform: scale3d(1, 1, 1);\ntransform: scale3d(1, 1, 1);\n}\n\n'
  rule += '50% {\n-webkit-transform: scale3d(' + enlargement + ', ' + enlargement + ', ' + enlargement + ');' +
    '\ntransform: scale3d(' + enlargement + ', ' + enlargement + ', ' + enlargement + ');\n}\n\n'
  rule += 'to {\n-webkit-transform: scale3d(1, 1, 1);\ntransform: scale3d(1, 1, 1);\n}\n}'

  return rule
}

export function setBeatTimes (value) {
  heartbeatActions.changeValue(this.id, 'beatTimes', value)
}

export function setBeatStrength (value) {
  heartbeatActions.changeValue(this.id, 'beatStrength', value)
}

heartbeat.propTypes = {
  id: PropTypes.string,
  beatTimes: PropTypes.number,
  beatStrength: PropTypes.number,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default heartbeat

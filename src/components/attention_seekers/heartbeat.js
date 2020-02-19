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

    CSSHandlerActions.insertRule(id, heartbeatKeyframe(heartbeatObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function heartbeatKeyframe (state) {
  let iterationStep = ((100 / state.get('beatTimes')) / 2)
  iterationStep = iterationStep.toFixed(2)

  const beatCoefficient = (state.get('beatStrength') / 100)

  let currentStep = Number(iterationStep).toFixed(2)

  const startEndFrame = '@keyframes ' + state.get('id') + ' {\nfrom, \n' +
    'to {\n-webkit-transform: scale(1);\n' +
    'transform: scale(1);\n}\n\n'

  let startingForward = true
  let rule = ''

  while ((Number(currentStep) + Number(iterationStep)) < 100) {
    if (startingForward) {
      rule += currentStep + '% {\n' +
        '-webkit-transform: scale(' + (1 + Number(beatCoefficient)) + ');\n' +
        'transform: scale(' + (1 + Number(beatCoefficient)) + ');\n}\n\n'
    } else {
      rule += currentStep + '% {\n' +
      '-webkit-transform: scale(' + (1 - Number(beatCoefficient)) + ');\n' +
      'transform: scale(' + (1 - Number(beatCoefficient)) + ');\n}\n\n'
    }
    startingForward = !startingForward
    currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
  }

  return startEndFrame + rule
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

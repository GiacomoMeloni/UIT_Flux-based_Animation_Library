import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import swingActions from '../../data/swing/swingActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function swing ({
  id, angulation, swingingTimes,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.swing.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    swingActions.newSwing(
      id, angulation, swingingTimes,
      duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    const swingObj = rest.swing.state.get(id)
    animation = getAnimation(id, {}, swingObj.style)
    console.log(swingKeyframe(swingObj))
    CSSHandlerActions.insertRule(id, swingKeyframe(swingObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function swingKeyframe (state) {
  let angulationStep = state.get('angulation') / (state.get('swingingTimes') * 2)
  angulationStep = angulationStep.toFixed(2)
  let iterationStep = (100 / state.get('swingingTimes')) / 2
  iterationStep = iterationStep.toFixed(2)
  let currentAngulation = (Number(state.get('angulation')) + Number(angulationStep))
  let currentStep = Number(0)

  let rule = '@keyframes ' + state.get('id') + ' {\n'
  // '\nfrom {\n' +
  // '-webkit-transform: rotate3d(0, 0, 1, 0deg);\n' +
  // 'transform: rotate3d(0, 0, 1, 0deg);\n}\n\n'

  let toTheRight = true

  while (Number(currentStep) < 100) {
    // console.log('angolazione')
    // console.log(currentAngulation)
    // console.log('passo')
    // console.log(angulationStep)
    // console.log('currentStep')
    // console.log(currentStep)
    if (toTheRight) {
      rule += currentStep + '% {\n' +
        '-webkit-transform: rotate3d(0, 0, 1, ' + (currentAngulation - angulationStep) + 'deg);\n' +
        'transform: rotate3d(0, 0, 1, ' + (currentAngulation - angulationStep) + 'deg);\n}\n\n'
      currentAngulation -= angulationStep
    } else {
      rule += currentStep + '% {\n' +
        '-webkit-transform: rotate3d(0, 0, 1, -' + (currentAngulation - angulationStep) + 'deg);\n' +
        'transform: rotate3d(0, 0, 1, -' + (currentAngulation - angulationStep) + 'deg);\n}\n\n'
      currentAngulation -= angulationStep
    }
    currentStep = Number(currentStep) + Number(iterationStep)
    toTheRight = !toTheRight
  }

  rule += 'to {\n' +
    '-webkit-transform: rotate3d(0, 0, 1, 0deg);\n' +
    'transform: rotate3d(0, 0, 1, 0deg);\n}\n'

  return rule
}

export function setAngulation (value) {
  swingActions.changeValue(this.id, 'angulation', value)
}

export function setSwingingTimes (value) {
  swingActions.changeValue(this.id, 'swingingTimes', value)
}

swing.propTypes = {
  id: PropTypes.string,
  angulation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  swingingTimes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default swing

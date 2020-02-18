import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import swingActions from '../../data/swing/swingActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function swing ({
  id, angulation,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.swing.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    swingActions.newSwing(
      id, angulation,
      duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    const swingObj = rest.flash.state.get(id)
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
  const iterationStep = (100 / state.get('flashingTimes')) / 2
  let currentStep = 0
  let fullOpacityFrame = '@keyframes ' + state.get('id') + ' {\nfrom, \n'
  let zeroOpacityFrame = ''

  while (currentStep < 100) {
    if (currentStep === 0) {
      zeroOpacityFrame += '\n' + (currentStep + iterationStep).toString() + '%'
    } else {
      zeroOpacityFrame += ',\n' + (currentStep + iterationStep).toString() + '%'
    }
    fullOpacityFrame += (currentStep + iterationStep).toString() + '%,\n'
    currentStep += iterationStep * 2
  }

  fullOpacityFrame += 'to { opacity: 1; }\n'
  zeroOpacityFrame += ' { opacity: 0; }\n}\n'

  return fullOpacityFrame + zeroOpacityFrame
}

export function setAngulation (value) {
  swingActions.changeValue(this.id, 'angulation', value)
}

swing.propTypes = {
  id: PropTypes.string,
  angulation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default swing

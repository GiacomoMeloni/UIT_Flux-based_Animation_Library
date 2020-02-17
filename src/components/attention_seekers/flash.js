import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import flashActions from '../../data/flash/flashActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function flash ({
  id, flashingTimes,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.flash.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    flashActions.newFlash(
      id, flashingTimes,
      duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    const flashObj = rest.flash.state.get(id)
    animation = getAnimation(id, {}, flashObj.style)
    console.log(flashKeyframe(flashObj))
    CSSHandlerActions.insertRule(id, flashKeyframe(flashObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function flashKeyframe (state) {
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

export function setFlashingTimes (value) {
  flashActions.changeValue(this.id, 'flashingTimes', value)
}

flash.propTypes = {
  id: PropTypes.string,
  flashingTimes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default flash

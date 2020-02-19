import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import shakeActions from '../../data/shake/shakeActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

function shake ({
  id, shakingTimes, shakingStrength,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.shake.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    shakeActions.newShake(
      id, shakingTimes, shakingStrength,
      duration, timing, delay, iterations, direction, fillMode, playState)
  } else {
    const shakeObj = rest.shake.state.get(id)
    animation = getAnimation(id, {}, shakeObj.style)

    CSSHandlerActions.insertRule(id, shakeKeyframe(shakeObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function shakeKeyframe (state) {
  let iterationStep = ((100 / state.get('shakingTimes')) / 2)
  iterationStep = iterationStep.toFixed(2)
  let currentStep = Number(0).toFixed(2)

  const startFrame = '@keyframes ' + state.get('id') + ' {\nfrom, \n' +
    'to {\n-webkit-transform: translate3d(0, 0, 0);\n' +
    'transform: translate3d(0, 0, 0);\n}\n\n'

  let shakingFrameLeft = ''
  let shakingFrameRigth = ''

  while (Number(currentStep) < 100) {
    if (currentStep === '0.00') {
      currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
      shakingFrameLeft += currentStep + '%'
      currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
      shakingFrameRigth += currentStep + '%'
    } else if ((Number(currentStep) + Number(iterationStep)).toFixed(2) < 100) {
      currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
      shakingFrameLeft += ',\n' + currentStep + '%'
      if ((Number(currentStep) + Number(iterationStep)).toFixed(2) < 100) {
        currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
        shakingFrameRigth += ',\n' + currentStep + '%'
      }
    } else {
      currentStep = (Number(currentStep) + Number(iterationStep)).toFixed(2)
    }
  }

  shakingFrameLeft += ' {\n ' +
    '-webkit-transform: translate3d(' + -state.get('shakingStrength') + 'px, 0, 0); ' +
    'transform: translate3d(' + -state.get('shakingStrength') + 'px, 0, 0);\n}\n'
  shakingFrameRigth += ' {\n ' +
    '-webkit-transform: translate3d(' + state.get('shakingStrength') + 'px, 0, 0); ' +
    'transform: translate3d(' + state.get('shakingStrength') + 'px, 0, 0);\n}\n'

  return startFrame + shakingFrameLeft + shakingFrameRigth
}

export function setShakingTimes (value) {
  shakeActions.changeValue(this.id, 'shakingTimes', value)
}

export function setShakingStrength (value) {
  shakeActions.changeValue(this.id, 'shakingStrength', value)
}

shake.propTypes = {
  id: PropTypes.string,
  shakingTimes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shakingStrength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default shake

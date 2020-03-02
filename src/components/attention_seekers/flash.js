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

    CSSHandlerActions.insertRule(id, flashKeyframe(flashObj))
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function flashKeyframe (state) {
  const frames = state.get('flashingTimes') * 2
  const iterationStep = 100 / frames
  let fullOpacityFrame = '@keyframes ' + state.get('id') + ' {\nfrom, \n'
  let zeroOpacityFrame = ''

  for (const i in [...Array(frames).keys()]) {
    if (i !== '0') {
      if (i % 2 === 0) {
        fullOpacityFrame += (iterationStep * i).toString() + '%,\n'
      } else {
        zeroOpacityFrame += (iterationStep * i).toString() + '%'
        i === (frames - 1).toString() ? zeroOpacityFrame += '\n' : zeroOpacityFrame += ',\n'
      }
    }
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

import React from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'
import bounceActions from '../../data/bounce/bounceActions'

function bounce ({ id, bounces, topLimit, transformOrigin, ...rest }) {
  let _transformOrigin, _bounces, _topLimit

  if (!rest.bounce.has(id)) {
    bounceActions.newBounce(id, bounces, topLimit, transformOrigin)
    _transformOrigin = transformOrigin
    _bounces = bounces
    _topLimit = topLimit
  } else {
    _transformOrigin = rest.bounce.transformOrigin
    _bounces = rest.bounce.bounces
    _topLimit = rest.bounce.topLimit
  }

  const animation = getAnimation(id)
  if (_transformOrigin !== null) {
    animation.transfromOrigin = _transformOrigin
  } else {
    animation.transformOrigin = 'center bottom'
  }

  console.log(rest.bounce)

  // test
  animation.animationIterationCount = 'infinite'
  const rule = '@keyframes ' + id + ' {\n' + bounceKeyframes(_bounces || 3, _topLimit) + '\n}'
  CSSHandlerActions.insertRule(rule, id)

  return (
    <div id={id} style={animation}>
      { rest.children }
    </div>
  )
}

// TODO: need to be tested to check if animation bounces effectively
function bounceKeyframes (bounces, topLimit) {
  const frames = bounces * 2
  const linspace = Math.floor(100 / frames)
  // if topLimit not null or zero
  if (!topLimit) {
    topLimit = bounces * 10
  }

  let originFrame = 'from,\n'
  let translate = topLimit
  let multiplier = bounces - 1
  let bounceFrame = '\n\n' + Math.floor(linspace * 1.5) + '% {\n' +
    '   -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
    '   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
    '   -webkit-transform: translate3d(0, ' + -translate + 'px, 0);\n' +
    '   transform: translate3d(0, ' + -translate + 'px, 0);\n' +
    '}'

  for (const i in [...Array(frames).keys()]) {
    if (i % 2 === 0) {
      originFrame += (i > 0 ? linspace * i : linspace) + '%,\n'
    } else {
      if (i > 1) {
        translate = Math.floor(multiplier / bounces * topLimit)
        if (multiplier === 1) {
          translate /= 2
        }
        bounceFrame += '\n\n' + linspace * i + '% {\n' +
          '   -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
          '   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
          '   -webkit-transform: translate3d(0, ' + -translate + 'px, 0);\n' +
          '   transform: translate3d(0, ' + -translate + 'px, 0);\n' +
          '}'

        multiplier -= 1
      }
    }
  }

  originFrame += 'to {\n' +
    '   -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n' +
    '   animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n' +
    '   -webkit-transform: translate3d(0, 0, 0);\n' +
    '   transform: translate3d(0, 0, 0);\n' +
    '}'

  return originFrame + bounceFrame
}

bounce.propTypes = {
  id: PropTypes.string,
  anim: PropTypes.object,
  transformOrigin: PropTypes.string,
  bounces: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  topLimit: PropTypes.number
}

export default bounce

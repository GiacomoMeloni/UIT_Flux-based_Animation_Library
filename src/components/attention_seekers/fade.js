import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import fadeActions from '../../data/fade/fadeActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

const fade = ({ id, entry, direction, duration, opacityLimit, ...rest }) => {
  const animation = getAnimation(id)

  if (!rest.fade.state.has(id)) {
    fadeActions.newFade(id, entry, direction, duration, opacityLimit)
  }

  const state = rest.fade.state.get(id)

  if (state) {
    CSSHandlerActions.insertRule(fadeKeyframe(state), id)
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

  return (
    <div style={animation}>
      { rest.children }
    </div>
  )
}

fade.propTypes = {
  anim: PropTypes.object,
  id: PropTypes.string,
  entry: PropTypes.bool,
  direction: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacityLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default fade

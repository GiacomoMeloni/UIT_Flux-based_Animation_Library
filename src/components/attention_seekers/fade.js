import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'
import fadeActions from '../../data/fade/fadeActions'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'

const fade = ({ anim, id, entry, direction, duration, opacityLimit, ...rest }) => {
  const animation = getAnimation('fadeIn', anim)

  if (rest.fade.state.has(id)) {
    const state = rest.fade.state.get(id)
    console.log(rest.fade.state.get(id).get('direction'))
    if (state) {
      console.log(fadeKeyframe(state))
      CSSHandlerActions.insertRule(fadeKeyframe(state), id)
    }
  } else {
    fadeActions.newFade(id, entry, direction, duration, opacityLimit)
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

    originFrame = '@keyframes fade' + state.get('id') + ' {\nfrom {\n'
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
        console.log('ci sono')
        originFrame += 'transform: translate3d(-100%, 0, 0);\n' +
          '-webkit-transform: translate3d(-100%, 0, 0);\n'
        endFrame += 'transform: translate3d(0, 0, 0);\n' +
          '-webkit-transform: translate3d(0, 0, 0);\n'
        break
      case 'right':
        console.log('ci sono')
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
  duration: PropTypes.number,
  opacityLimit: PropTypes.number
}

export default fade

import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import React from 'react'

const fade = ({ anim, entry, direction, duration, opacityLimit, ...rest }) => {
  const animation = getAnimation('fade', anim)

  console.log(fadeKeyframe(entry, direction, duration, opacityLimit))

  function fadeKeyframe (entry, direction, duration, opacityLimit) {
    const opacity = (opacityLimit / 10).toString()
    let originFrame
    let endFrame

    originFrame = 'from {\n'
    endFrame = 'to {\n'

    if (entry === true) {
      originFrame += 'opacity: 0;\n'
      endFrame += 'opacity: ' + { opacity } + ';\n'
    } else {
      originFrame += 'opacity: ' + { opacity } + ';\n'
      endFrame += 'opacity: 0;\n'
    }

    switch (direction) {
      case 'down':
        originFrame += 'transform: translate3d(0, -100%, 0);\n' +
          '-webkit-transform: translate3d(0, -100%, 0);\n'
        endFrame += 'transform: translate3d(0, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(0, 0, 0);\\n'
        break
      case 'up':
        originFrame += 'transform: translate3d(0, 100%, 0); +\n' +
          '          \'-webkit-transform: translate3d(0, 100%, 0);\\n'
        endFrame += 'transform: translate3d(0, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(0, 0, 0);\\n'
        break
      case 'left':
        originFrame += 'transform: translate3d(-100%, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(-100%, 0, 0);\\n'
        endFrame += 'transform: translate3d(0, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(0, 0, 0);\\n'
        break
      case 'right':
        originFrame += 'transform: translate3d(100%, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(100%, 0, 0);\\n'
        endFrame += 'transform: translate3d(0, 0, 0); +\n' +
          '          \'-webkit-transform: translate3d(0, 0, 0);\\n'
        break
      default:
        break
    }

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
  entry: PropTypes.bool,
  direction: PropTypes.string,
  duration: PropTypes.string,
  opacityLimit: PropTypes.number
}

export default fade

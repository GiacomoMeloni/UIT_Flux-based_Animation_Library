import React from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'

function bounce ({ transformOrigin, ...rest }) {
  const animation = getAnimation('bounce')
  if (transformOrigin !== null) {
    animation.WebkitTransformOrigin = transformOrigin
    animation.transfromOrigin = transformOrigin
  } else {
    animation.WebkitTransformOrigin = 'center bottom'
    animation.transformOrigin = 'center bottom'
  }
  console.log(animation)

  // test
  animation.animationIterationCount = 'infinite'

  return (
    <div style={animation}>
      { rest.children }
    </div>
  )
}

bounce.propTypes = {
  keyframes: PropTypes.object,
  anim: PropTypes.object,
  transformOrigin: PropTypes.string
}

export default bounce

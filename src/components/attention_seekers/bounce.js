import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'

const bounce = ({ keyframes, anim, ...rest }) => {
  const animation = getAnimation(keyframes, 0, 'bounce', anim)

  return (
    <Component style={animation}>
      { rest.children }
    </Component>
  )
}

bounce.propTypes = {
  keyframes: PropTypes.object,
  anim: PropTypes.object
}

export default bounce

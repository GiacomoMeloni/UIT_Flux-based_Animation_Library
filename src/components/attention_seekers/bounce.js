import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'

const bounce = ({ keyframes, anim, transformOrigin, ...rest }) => {
  const animation = getAnimation('bounce', anim)
  if (transformOrigin !== null) {
    animation['-webkit-transform-origin'] = transformOrigin
    animation['transform-origin'] = transformOrigin
  } else {
    animation['-webkit-transform-origin'] = 'center bottom'
    animation['transform-origin'] = 'center bottom'
  }

  return (
    <Component style={animation}>
      { rest.children }
    </Component>
  )
}

bounce.propTypes = {
  keyframes: PropTypes.object,
  anim: PropTypes.object,
  transformOrigin: PropTypes.string
}

export default bounce

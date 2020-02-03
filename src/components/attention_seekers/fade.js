import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'

const fade = ({ keyframes, anim, transformOrigin, ...rest }) => {
  const animation = getAnimation('fade', anim)
  if (transformOrigin !== null) {
    animation['-webkit-transform-origin'] = transformOrigin
    animation['transform-origin'] = transformOrigin
  }

  return (
    <Component style={animation}>
      { rest.children}
    </Component>
  )
}

fade.propTypes = {
  keyframes: PropTypes.object,
  anim: PropTypes.object,
  transformOrigin: PropTypes.string
}

export default fade

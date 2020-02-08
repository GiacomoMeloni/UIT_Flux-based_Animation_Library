const animation = {
  animationDuration: '1s',
  animationTimingFunction: 'ease',
  animationDelay: '0s',
  animationIterationCount: '1',
  animationDirection: 'normal',
  animationFillMode: 'both',
  animationPlayState: 'running'
}

// TODO: Create function to change keyframes depending on keyframes parameter
/**
 * @param animationType
 * @returns animation object for the specific component
 */
function getAnimation (animationType) {
  return {
    ...animation,
    animationName: animationType
  }
}

function customProperties (_animReturn, anim) {
  if (anim.prototype.hasOwnProperty.call(anim, 'duration')) {
    _animReturn.animationDuration = anim.duration
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'timing')) {
    _animReturn.animationTimingFunction = anim.timing
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'delay')) {
    _animReturn.animationDelay = anim.delay
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'iterations')) {
    _animReturn.animationIterationCount = anim.iterations
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'direction')) {
    _animReturn.animationDirection = anim.direction
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'fillMode')) {
    _animReturn.animationFillMode = anim.fillMode
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'playState')) {
    _animReturn.animationPlayState = anim.playState
  }
}

export default getAnimation

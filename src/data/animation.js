import animationDispatcher from './animationDispatcher'

const animation = {
  '-webkit-animation-duration': '1s',
  'animation-duration': '1s',
  '-webkit-animation-timing-function': 'ease',
  'animation-timing-function': 'ease',
  '-webkit-animation-delay': '0s',
  'animation-delay': '0s',
  '-webkit-animation-iteration-count': '1',
  'animation-iteration-count': '1',
  '-webkit-animation-direction': 'normal',
  'animation-direction': 'normal',
  '-webkit-animation-fill-mode': 'both',
  'animation-fill-mode': 'both',
  '-webkit-animation-play-state': 'running',
  'animation-play-state': 'running'
}

// TODO: Create function to change keyframes depending on keyframes parameter
/**
 * @param keyframes: keyframes passed as an object
 * @param index: index of keyframes rule of current animation in the CSS
 * @param animationType
 * @param anim: object with default values: {
 *   duration: 1s,
 *   'timing-func': 1s,
 *   delay: 0s,
 *   iterations: 1,
 *   direction: normal,
 *   'fill-mode': both,
 *   'play-state': running
 * }
 * @returns animation object for the specific component
 * @throws TypeError if anim is not an object
 */
function getAnimation (animationType) {
  const _animReturn = animation

  _animReturn['-webkit-animation-name'] = animationType
  _animReturn['animation-name'] = animationType
  return _animReturn
}

function customProperties (_animReturn, anim) {
  if (anim.prototype.hasOwnProperty.call(anim, 'duration')) {
    _animReturn['-webkit-animation-duration'] = anim.duration
    _animReturn['animation-duration'] = anim.duration
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'timing-func')) {
    _animReturn['-webkit-animation-timing-function'] = anim['timing-func']
    _animReturn['animation-timing-function'] = anim['timing-func']
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'delay')) {
    _animReturn['-webkit-animation-delay'] = anim.delay
    _animReturn['animation-delay'] = anim.delay
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'iterations')) {
    _animReturn['-webkit-animation-iteration-count'] = anim.iterations
    _animReturn['animation-iteration-count'] = anim.iterations
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'direction')) {
    _animReturn['-webkit-animation-direction'] = anim.direction
    _animReturn['animation-direction'] = anim.direction
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'fill-mode')) {
    _animReturn['-webkit-animation-fill-mode'] = anim['fill-mode']
    _animReturn['animation-fill-mode'] = anim['fill-mode']
  }

  if (anim.prototype.hasOwnProperty.call(anim, 'play-state')) {
    _animReturn['-webkit-animation-play-state'] = anim['play-state']
    _animReturn['animation-play-state'] = anim['play-state']
  }
}

export default getAnimation

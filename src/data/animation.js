// import animationDispatcher from './animationDispatcher'

const animation = {
  WebkitAnimationDuration: '1s',
  animationDuration: '1s',
  WebkitAnimationTimingFunction: 'ease',
  animationTimingFunction: 'ease',
  WebkitAnimationDelay: '0s',
  animationDelay: '0s',
  WebkitAnimationIterationCount: '1',
  animationIterationCount: '1',
  WebkitAnimationDirection: 'normal',
  animationDirection: 'normal',
  WebkitAnimationFillMode: 'both',
  animationFillMode: 'both',
  WebkitAnimationPlayState: 'running',
  animationPlayState: 'running'
}

// TODO: Create function to change keyframes depending on keyframes parameter
/**
 * @param keyframes: keyframes passed as an object
 * @param index: index of keyframes rule of current animation in the CSS
 * @param animationType
 * @param anim: object with default values: {
 *   duration: 1s,
 *   'timing': ease,
 *   delay: 0s,
 *   iterations: 1,
 *   direction: normal,
 *   'fillMode': both,
 *   'playState': running
 * }
 * @returns animation object for the specific component
 * @throws TypeError if anim is not an object
 */
function getAnimation (animationType) {
  const _animReturn = animation

  _animReturn.WebkitAnimationName = animationType
  _animReturn.animationName = animationType
  return _animReturn
}

// function customProperties (_animReturn, anim) {
//   if (anim.prototype.hasOwnProperty.call(anim, 'duration')) {
//     _animReturn.WebkitAnimationDuration = anim.duration
//     _animReturn.animationDuration = anim.duration
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'timing')) {
//     _animReturn.WebkitAnimationTimingFunction = anim.timing
//     _animReturn.animationTimingFunction = anim.timing
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'delay')) {
//     _animReturn.WebkitAnimationDelay = anim.delay
//     _animReturn.animationDelay = anim.delay
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'iterations')) {
//     _animReturn.WebkitAnimationIterationCount = anim.iterations
//     _animReturn.animationIterationCount = anim.iterations
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'direction')) {
//     _animReturn.WebkitAnimationDirection = anim.direction
//     _animReturn.animationDirection = anim.direction
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'fillMode')) {
//     _animReturn.WebkitAnimationFillMode = anim.fillMode
//     _animReturn.animationFillMode = anim.fillMode
//   }
//
//   if (anim.prototype.hasOwnProperty.call(anim, 'playState')) {
//     _animReturn.WebkitAnimationPlayState = anim.playState
//     _animReturn.animationPlayState = anim.playState
//   }
// }

export default getAnimation

/**
 * @param animationName
 * @param duration
 * @param timing
 * @param delay
 * @param iterations
 * @param direction
 * @param fillMode
 * @param playState
 * @returns animation object for the specific component
 */
function getAnimation (animationName, duration, timing, delay, iterations, direction, fillMode, playState) {
  const animation = {}

  animation.animationDuration = duration || '1s'
  animation.animationTiming = timing || 'ease'
  animation.animationDelay = delay || '0s'
  animation.animationIterationCount = iterations || '1'
  animation.animationDirection = direction || 'normal'
  animation.animationFillMode = fillMode || 'both'
  animation.animationPlayState = playState || 'running'
  animation.animationName = animationName

  return animation
}

export default getAnimation

/**
 * @param animationName
 * @param defaultValues
 * @param style
 * @returns animation object for the specific component
 */
function getAnimation (animationName, defaultValues, style) {
  const animation = {}

  if (style) {
    animation.animationDuration = style.duration
    animation.animationTimingFunction = style.timing
    animation.animationDelay = style.delay
    animation.animationIterationCount = style.iterations
    animation.animationDirection = style.direction
    animation.animationFillMode = style.fillMode
    animation.animationPlayState = style.playState
  } else {
    const { duration, timing, delay, iterations, direction, fillMode, playState } = defaultValues
    animation.animationDuration = duration || '1s'
    animation.animationTimingFunction = timing || 'ease'
    animation.animationDelay = delay || '0s'
    animation.animationIterationCount = iterations || '1'
    animation.animationDirection = direction || 'normal'
    animation.animationFillMode = fillMode || 'both'
    animation.animationPlayState = playState || 'running'
  }

  animation.animationName = animationName

  return animation
}

export default getAnimation

import animationDispatcher from '../animationDispatcher'
import swingActionTypes from './swingActionTypes'

const swingActions = {
  newSwing (
    id, angulation, swingingTimes,
    duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: swingActionTypes.NEW_SWING,
      id: id,
      angulation: angulation,
      swingingTimes: swingingTimes,
      duration: duration,
      timing: timing,
      delay: delay,
      iterations: iterations,
      direction: direction,
      fillMode: fillMode,
      playState: playState
    })
  },
  changeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: swingActionTypes.CHANGE_SWING_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default swingActions

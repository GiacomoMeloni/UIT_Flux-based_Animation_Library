import animationDispatcher from '../animationDispatcher'
import swingActionTypes from './flashActionTypes'

const swingActions = {
  newSwing (
    id, angulation,
    duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: swingActionTypes.NEW_SWING,
      id: id,
      angulation: angulation,
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

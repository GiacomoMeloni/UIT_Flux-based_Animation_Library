import animationDispatcher from '../animationDispatcher'
import shakeActionTypes from './shakeActionTypes'

const shakeActions = {
  newShake (
    id, shakingTimes, shakingStrength,
    duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: shakeActionTypes.NEW_SHAKE,
      id: id,
      shakingTimes: shakingTimes,
      shakingStrength: shakingStrength,
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
      type: shakeActionTypes.CHANGE_SHAKE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default shakeActions

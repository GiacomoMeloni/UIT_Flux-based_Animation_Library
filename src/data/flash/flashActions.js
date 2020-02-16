import animationDispatcher from '../animationDispatcher'
import flashActionTypes from './flashActionTypes'

const flashActions = {
  newFlash (id, flashingTimes, duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: flashActionTypes.NEW_FLASH,
      id: id,
      flashingTimes: flashingTimes,
      duration: duration,
      timing: timing,
      delay: delay,
      iterations: iterations,
      direction: direction,
      fillMode: fillMode,
      playState: playState
    })
  },
  changeFlashValue (id, key, value) {
    animationDispatcher.dispatch({
      type: flashActionTypes.CHANGE_FLASH_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default flashActions

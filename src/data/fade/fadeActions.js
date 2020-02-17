import animationDispatcher from '../animationDispatcher'
import fadeActionTypes from './fadeActionTypes'

const fadeActions = {
  newFade (
    id, entry, entryDirection, opacityLimit,
    duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_FADE,
      id: id,
      entry: entry,
      entryDirection: entryDirection,
      opacityLimit: opacityLimit,
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
      type: fadeActionTypes.CHANGE_FADE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default fadeActions

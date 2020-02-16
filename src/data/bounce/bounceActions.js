import animationDispatcher from '../animationDispatcher'
import bounceActionTypes from './bounceActionTypes'

const bounceActions = {
  newBounce (
    id, bounces, limit, origin, entry, entryDirection,
    duration, timing, delay, iterations, direction, fillMode, playState
  ) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.NEW_BOUNCE,
      id: id,
      bounces: bounces,
      limit: limit,
      origin: origin,
      entry: entry,
      entryDirection: entryDirection,
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
      type: bounceActionTypes.CHANGE_BOUNCE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default bounceActions

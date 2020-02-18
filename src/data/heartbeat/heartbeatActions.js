import animationDispatcher from '../animationDispatcher'
import heartbeatActionTypes from './heartbeatActionTypes'

const heartbeatActions = {
  newHeartBeat (
    id, beatTimes, beatStrength,
    duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: heartbeatActionTypes.NEW_HEARTBEAT,
      id: id,
      beatTimes: beatTimes,
      beatStrength: beatStrength,
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
      type: heartbeatActionTypes.CHANGE_HEARTBEAT_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default heartbeatActions

import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import style from '../styleObject'
import heartbeat from './heartbeatObject'
import heartbeatActionTypes from './heartbeatActionTypes'
import Immutable from 'immutable'

class HeartbeatStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case heartbeatActionTypes.NEW_HEARTBEAT:
        return state.set(
          action.id,
          heartbeat({
            id: action.id,
            beatTimes: action.beatTimes,
            beatStrength: action.beatStrength,
            style: style({
              duration: action.duration,
              timing: action.timing,
              delay: action.delay,
              iterations: action.iterations,
              direction: action.direction,
              fillMode: action.fillMode,
              playState: action.playState
            })
          })
        )

      case heartbeatActionTypes.CHANGE_HEARTBEAT_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of heartbeat does not have a property ' + action.key)
          }
        } else {
          throw Error('heartbeat does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new HeartbeatStore()

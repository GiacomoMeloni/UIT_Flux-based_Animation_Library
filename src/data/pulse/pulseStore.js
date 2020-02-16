import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import pulse from './pulseObject'
import pulseActionTypes from './pulseActionTypes'
import Immutable from 'immutable'

class PulseStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case pulseActionTypes.NEW_PULSE:
        return state.set(
          action.id,
          pulse({
            id: action.id,
            enlargement: action.enlargement,
            duration: action.duration,
            timing: action.timing,
            delay: action.delay,
            iterations: action.iterations,
            direction: action.direction,
            fillMode: action.fillMode,
            playState: action.playState
          })
        )

      case pulseActionTypes.CHANGE_PULSE_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else {
          throw Error('pulse does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new PulseStore()

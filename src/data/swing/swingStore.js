import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import style from '../styleObject'
import swing from './swingObject'
import swingActionTypes from './swingActionTypes'
import Immutable from 'immutable'

class SwingStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case swingActionTypes.NEW_SWING:
        return state.set(
          action.id,
          swing({
            id: action.id,
            angulation: action.angulation,
            swingingTimes: action.swingingTimes,
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

      case swingActionTypes.CHANGE_SWING_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of swing does not have a property ' + action.key)
          }
        } else {
          throw Error('swing does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new SwingStore()

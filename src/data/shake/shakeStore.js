import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import style from '../styleObject'
import shake from './shakeObject'
import shakeActionTypes from './shakeActionTypes'
import Immutable from 'immutable'

class ShakeStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case shakeActionTypes.NEW_SHAKE:
        return state.set(
          action.id,
          shake({
            id: action.id,
            shakingTimes: action.shakingTimes,
            shakingStrength: action.shakingStrength,
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

      case shakeActionTypes.CHANGE_SHAKE_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of shake does not have a property ' + action.key)
          }
        } else {
          throw Error('shake does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new ShakeStore()

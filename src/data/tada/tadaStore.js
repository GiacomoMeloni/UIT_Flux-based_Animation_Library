import { ReduceStore } from 'flux/utils'
import tadaActionTypes from './tadaActionTypes'
import tada from './tadaObject'
import style from '../styleObject'
import animationDispatcher from '../animationDispatcher'
import Immutable from 'immutable'

class TadaStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case tadaActionTypes.NEW_TADA: {
        return state.set(
          action.id,
          tada({
            id: action.id,
            maxScale: action.maxScale,
            minScale: action.minScale,
            rotation: action.rotation,
            style: style({
              duration: action.duration,
              timing: action.timing,
              delay: action.delay,
              iterations: action.iterations,
              direction: action.direction,
              fillMode: action.fillMode,
              playState: action.playState
            })
          }))
      }

      case tadaActionTypes.CHANGE_TADA_VALUE: {
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of tada does not have a property ' + action.key)
          }
        } else {
          throw Error('tada does not have a property ' + action.key)
        }
      }

      default:
        return state
    }
  }
}

export default new TadaStore()

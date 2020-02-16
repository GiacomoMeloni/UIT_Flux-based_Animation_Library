import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import bounce from './bounceObject'
import bounceActionTypes from './bounceActionTypes'
import style from '../styleObject'
import Immutable from 'immutable'

class BounceStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case bounceActionTypes.NEW_BOUNCE: {
        return state.set(
          action.id,
          bounce({
            id: action.id,
            bounces: action.bounces,
            limit: action.limit,
            origin: action.origin,
            entry: action.entry,
            entryDirection: action.entryDirection,
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

      case bounceActionTypes.CHANGE_BOUNCE_VALUE: {
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of bounce does not have a property ' + action.key)
          }
        } else {
          throw Error('bounce does not have a property ' + action.key)
        }
      }

      default:
        return state
    }
  }
}

export default new BounceStore()

import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import bounce from './bounceObject'
import bounceActionTypes from './bounceActionTypes'
import Immutable from 'immutable'

class Store extends ReduceStore {
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
            topLimit: action.topLimit,
            origin: action.origin
          }))
      }

      case bounceActionTypes.CHANGE_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else {
          throw Error('bounce does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new Store()

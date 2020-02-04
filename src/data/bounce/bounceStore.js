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
        /* const last = state.last()
        const index = last ? parseInt(last._id.substr(6)) + 1 : 0 */

        return state.set(
          // 'bounce' + index.toString(),
          action.id,
          bounce({
            // _id: 'bounce0' + index.toString(),
            id: action.id,
            bounces: action.bounces,
            topLimit: action.topLimit,
            origin: action.origin
          }))
      }

      case bounceActionTypes.NEW_SIMPLE_BOUNCE:
        return state.set(action.id, bounce({ id: action.id }))

      case bounceActionTypes.CHANGE_VALUE:
        if (state.has(action.key)) {
          return state.set(action.key, action.value)
        } else {
          throw Error('bounce does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new Store()

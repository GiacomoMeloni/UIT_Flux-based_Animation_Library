import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import flash from './flashObject'
import flashActionTypes from './flashActionTypes'
import Immutable from 'immutable'

class FlashStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case flashActionTypes.NEW_FLASH:
        return state.set(
          action.id,
          flash({
            id: action.id,
            flashingTimes: action.flashingTimes
          })
        )

      case flashActionTypes.CHANGE_FLASH_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else {
          throw Error('flash does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new FlashStore()

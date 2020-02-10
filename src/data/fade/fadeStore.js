import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import fade from './fadeObject'
import fadeActionTypes from './fadeActionTypes'
import Immutable from 'immutable'

class FadeStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case fadeActionTypes.NEW_FADE:
        return state.set(
          action.id,
          fade({
            id: action.id,
            entry: action.entry,
            direction: action.direction,
            opacityLimit: action.opacityLimit
          })
        )

      case fadeActionTypes.CHANGE_FADE_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else {
          throw Error('fade does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new FadeStore()

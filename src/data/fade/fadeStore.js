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
            isSet: true,
            entry: action.entry,
            direction: action.direction,
            duration: action.duration,
            opacityLimit: action.opacityLimit
          })
        )

      case fadeActionTypes.NEW_SIMPLE_FADE:
        return state.set(action.id, fade({ id: action.id }))

      case fadeActionTypes.CHANGE_ENTRY:
        if (state.has(action.key)) {
          return state.set(action.key, action.entry)
        } else {
          throw Error('fade does not have a property ' + action.key)
        }

      case fadeActionTypes.CHANGE_DIRECTION:
        if (state.has(action.id)) {
          return state.set(action.id).set(action.key, action.direction)
        } else {
          throw Error('fade does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new FadeStore()

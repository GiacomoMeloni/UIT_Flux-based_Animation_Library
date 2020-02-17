import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import style from '../styleObject'
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
            flashingTimes: action.flashingTimes,
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

      case flashActionTypes.CHANGE_FLASH_VALUE:
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of flash does not have a property ' + action.key)
          }
        } else {
          throw Error('flash does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new FlashStore()

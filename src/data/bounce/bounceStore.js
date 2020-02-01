import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import bounce from './bounceObject'
import bounceActionTypes from './bounceActionTypes'

class BounceStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return bounce()
  }

  reduce (state, action) {
    switch (action.type) {
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

export default new BounceStore()

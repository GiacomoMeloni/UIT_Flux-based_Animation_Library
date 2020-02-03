import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import fade from './fadeObject'
import fadeActionTypes from './fadeActionTypes'

class FadeStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return fade()
  }

  reduce (state, action) {
    switch (action.type) {
      case fadeActionTypes.CHANGE_ENTRY:
        if (state.has(action.key)) {
          return state.set(action.key, action.entry)
        } else {
          throw Error('fade does not have a property ' + action.key)
        }

      default:
        return state
    }
  }
}

export default new FadeStore()

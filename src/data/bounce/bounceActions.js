import animationDispatcher from '../animationDispatcher'
import bounceActionTypes from './bounceActionTypes'

const bounceActions = {
  newSimpleBounce (id) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.NEW_SIMPLE_BOUNCE,
      id: id
    })
  },
  changeValue (key, value) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.CHANGE_VALUE,
      key: key,
      value: value
    })
  }
}

export default bounceActions

import animationDispatcher from '../animationDispatcher'
import bounceActionTypes from './bounceActionTypes'

const bounceActions = {
  changeValue (key, value) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.CHANGE_VALUE,
      key: key,
      value: value
    })
  }
}

export default bounceActions

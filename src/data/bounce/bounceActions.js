import animationDispatcher from '../animationDispatcher'
import bounceActionTypes from './bounceActionTypes'

const bounceActions = {
  newBounce (id, bounces, topLimit, origin) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.NEW_BOUNCE,
      id: id,
      bounces: bounces,
      topLimit: topLimit,
      origin: origin
    })
  },
  changeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.CHANGE_BOUNCE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default bounceActions

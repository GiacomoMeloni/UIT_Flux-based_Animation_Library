import animationDispatcher from '../animationDispatcher'
import bounceActionTypes from './bounceActionTypes'

const bounceActions = {
  newBounce (id, bounces, limit, origin, entry, entryDirection) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.NEW_BOUNCE,
      id: id,
      bounces: bounces,
      limit: limit,
      origin: origin,
      entry: entry,
      entryDirection: entryDirection
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

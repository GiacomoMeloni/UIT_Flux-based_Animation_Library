import animationDispatcher from '../animationDispatcher'
import tadaActionTypes from '../tada/tadaActionTypes'

const tadaActions = {
  newTada (id, maxScale, minScale, rotation) {
    animationDispatcher.dispatch({
      type: tadaActionTypes.NEW_TADA,
      id: id,
      maxScale: maxScale,
      minScale: minScale,
      rotation: rotation
    })
  },
  changeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: tadaActionTypes.CHANGE_TADA_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default tadaActions

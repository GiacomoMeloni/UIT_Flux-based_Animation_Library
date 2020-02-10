import animationDispatcher from '../animationDispatcher'
import fadeActionTypes from './fadeActionTypes'

const fadeActions = {
  newFade (id, entry, direction, opacityLimit) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_FADE,
      id: id,
      entry: entry,
      direction: direction,
      opacityLimit: opacityLimit
    })
  },
  changeFadeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_FADE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default fadeActions

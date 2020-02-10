import animationDispatcher from '../animationDispatcher'
import fadeActionTypes from './fadeActionTypes'

const fadeActions = {
  newSimpleFade (id) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_SIMPLE_FADE,
      id: id
    })
  },
  newFade (id, entry, direction, opacityLimit) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_FADE,
      id: id,
      entry: entry,
      direction: direction,
      opacityLimit: opacityLimit
    })
  },
  changeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default fadeActions

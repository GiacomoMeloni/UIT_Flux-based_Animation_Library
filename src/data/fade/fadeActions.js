import animationDispatcher from '../animationDispatcher'
import fadeActionTypes from './fadeActionTypes'

const fadeActions = {
  newSimpleFade (id) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_SIMPLE_FADE,
      id: id
    })
  },
  newFade (id, entry, direction, duration, opacityLimit) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.NEW_FADE,
      id: id,
      entry: entry,
      direction: direction,
      duration: duration,
      opacityLimit: opacityLimit
    })
  },
  changeEntry (key, entry) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_ENTRY,
      key: key,
      entry: entry
    })
  },
  changeDirection (key, direction) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_DIRECTION,
      key: key,
      direction: direction
    })
  },
  changeDuration (key, duration) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_DURATION,
      key: key,
      duration: duration
    })
  },
  changeOpacityLimit (key, opacity) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_OPACITY,
      key: key,
      opacity: opacity
    })
  }
}

export default fadeActions

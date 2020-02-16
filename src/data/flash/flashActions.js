import animationDispatcher from '../animationDispatcher'
import flashActionTypes from './flashActionTypes'

const flashActions = {
  newFlash (id, flashingTimes) {
    animationDispatcher.dispatch({
      type: flashActionTypes.NEW_FLASH,
      id: id,
      flashingTimes: flashingTimes
    })
  },
  changeFlashValue (id, key, value) {
    animationDispatcher.dispatch({
      type: flashActionTypes.CHANGE_FLASH_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default flashActions

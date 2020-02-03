import animationDispatcher from '../animationDispatcher'
import fadeActionTypes from './fadeActionTypes'

const fadeActions = {
  changeEntry (key, entry) {
    animationDispatcher.dispatch({
      type: fadeActionTypes.CHANGE_ENTRY,
      key: key,
      entry: entry
    })
  }
}

export default fadeActions

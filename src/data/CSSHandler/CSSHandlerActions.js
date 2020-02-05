import animationDispatcher from '../animationDispatcher'
import CSSHandlerActionTypes from './CSSHandlerActionTypes'

const Actions = {
  insertRule (rule, index) {
    animationDispatcher.dispatch({
      type: CSSHandlerActionTypes.INSERT_RULE,
      rule: rule,
      index: index
    })
  }
}

export default Actions

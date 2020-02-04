import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import CSSHandlerObject from './CSSHandlerObject'
import Immutable from 'immutable'
import CSSHandlerActionTypes from './CSSHandlerActionTypes'

class CSSHandlerStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    for (const styleSheet in document.styleSheets) {
      if (styleSheet.rules[0].name === 'bounce') {
        return CSSHandlerObject({
          sheet: styleSheet,
          rules: Immutable.OrderedMap()
        })
      }
    }
  }

  reduce (state, action) {
    switch (action.type) {
      case CSSHandlerActionTypes.INSERT_RULE:
        state.sheet.insertRule(action.keyframes, state.rules.get(action.animation))
        return state

      default:
        return state
    }
  }
}

export default new CSSHandlerStore()

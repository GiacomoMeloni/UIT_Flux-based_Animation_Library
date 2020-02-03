import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import CSSHanlderObject from './CSSHandlerObject'
import Immutable from 'immutable'

class CSSHandlerStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    for (const styleSheet in document.styleSheets) {
      if (styleSheet.title === 'animate.css') {
        return CSSHanlderObject({
          sheet: styleSheet,
          rules: Immutable.OrderedMap()
        })
      }
    }
    return
  }

  reduce (state, action) {
    switch (action.type) {

      default:
        return state
    }
  }
}

export default new CSSHandlerStore()

import animationDispatcher from '../animationDispatcher'
import CSSHandlerActionTypes from './CSSHandlerActionTypes'

let documentLoaded = false

const CSSHandlerActions = {
  insertRule (id, rule) {
    sheetReady(id, rule)
  },
  updateStyleRule (id, rule, value) {
    animationDispatcher.dispatch({
      type: CSSHandlerActionTypes.UPDATE_STYLE_RULE,
      id: id,
      rule: rule,
      value: value
    })
  },
  replayAnimation (id) {
    animationDispatcher.dispatch({
      type: CSSHandlerActionTypes.REPLAY_ANIMATION,
      id: id
    })
  }
}

function sheetReady (id, rule) {
  if (!documentLoaded) {
    if (document.readyState === 'complete') {
      documentLoaded = true
      for (const styleSheet of document.styleSheets) {
        if (styleSheet.cssRules.length > 0 &&
        Object.hasOwnProperty.call(Object.getPrototypeOf(styleSheet.cssRules[0]), 'name')) {
          if (styleSheet.cssRules[0].name === 'fal_animation_library') {
            animationDispatcher.dispatch({
              type: CSSHandlerActionTypes.INSERT_RULE,
              sheet: styleSheet,
              rule: rule,
              id: id
            })
          }
        }
      }
    } else {
      setTimeout(() => sheetReady(id, rule), 9)
    }
  } else {
    setTimeout(() => {
      animationDispatcher.dispatch({
        type: CSSHandlerActionTypes.INSERT_RULE,
        rule: rule,
        id: id
      })
    }, 200)
  }
}

export default CSSHandlerActions

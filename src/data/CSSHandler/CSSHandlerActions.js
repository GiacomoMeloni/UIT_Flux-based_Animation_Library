import animationDispatcher from '../animationDispatcher'
import CSSHandlerActionTypes from './CSSHandlerActionTypes'

var documentLoaded = false

const Actions = {
  insertRule (rule, id) {
    sheetReady(rule, id)
  }
}

function sheetReady (rule, id) {
  if (!documentLoaded) {
    if (document.readyState === 'complete') {
      documentLoaded = true
      for (const styleSheet of document.styleSheets) {
        if (styleSheet.rules[0].name === 'uit_animation_library') {
          animationDispatcher.dispatch({
            type: CSSHandlerActionTypes.INSERT_RULE,
            sheet: styleSheet,
            rule: rule,
            id: id
          })
        }
      }
    } else {
      setTimeout(() => sheetReady(rule, id), 9)
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

export default Actions

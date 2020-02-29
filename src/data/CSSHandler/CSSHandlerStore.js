import { ReduceStore } from 'flux/utils'
import animationDispatcher from '../animationDispatcher'
import { CSSHandlerObject, rule } from './CSSHandlerObject'
import CSSHandlerActionTypes from './CSSHandlerActionTypes'

class CSSHandlerStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return CSSHandlerObject()
  }

  reduce (state, action) {
    switch (action.type) {
      case CSSHandlerActionTypes.INSERT_RULE: {
        let index

        // Called only if state.sheet is not defined yet
        if ('sheet' in action) {
          index = action.sheet.cssRules.length
          action.sheet.insertRule(action.rule, index)
          return state.set('sheet', action.sheet).set('rules', state.rules.set(
            action.id,
            rule({
              index: index,
              rule: action.rule
            })
          ))
        }

        if (state.rules.has(action.id)) {
          index = state.rules.get(action.id).index
          state.sheet.removeRule(index)
          state.sheet.insertRule(action.rule, index)
          return state.setIn(['rules', action.id, 'rule'], action.rule)
        } else {
          index = state.sheet.cssRules.length
          state.sheet.insertRule(action.rule, index)

          return state.setIn(
            ['rules', action.id],
            rule({
              index: index,
              rule: action.rule
            })
          )
        }
      }

      case CSSHandlerActionTypes.UPDATE_STYLE_RULE:
        document.getElementById(action.id).style[action.rule] = action.value
        return state

      case CSSHandlerActionTypes.REPLAY_ANIMATION: {
        const animation = document.getElementById(action.id)
        animation.style.animationName = 'none'
        setTimeout(function () {
          animation.style.animationName = action.id
        }, 100)
        return state
      }

      default:
        return state
    }
  }
}

export default new CSSHandlerStore()

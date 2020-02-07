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
          console.log(state.rules.set(
            action.id,
            rule({
              index: index,
              rule: action.rule
            })
          ))
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
          state.sheet.insertRule(action.rule, index)

          return state.updateIn(['rules', action.id], value => {
            value.set('rule', action.rule)
          })
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

      default:
        return state
    }
  }
}

export default new CSSHandlerStore()

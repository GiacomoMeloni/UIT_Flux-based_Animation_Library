import Immutable from 'immutable'

const CSSHandlerObject = Immutable.Record({
  sheet: null,
  rules: Immutable.OrderedMap()
})

const rule = Immutable.Record({
  index: -1,
  rule: ''
})

export { CSSHandlerObject, rule }

import Immutable from 'immutable'

const animationSheet = Immutable.Record({
  sheet: CSSStyleSheet(),
  rules: Immutable.OrderedMap()
})

export default animationSheet

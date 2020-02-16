import bounceStore from './data/bounce/bounceStore'
import fadeStore from './data/fade/fadeStore'
import CSSHandlerActions from './data/CSSHandler/CSSHandlerActions'
import bounceActions from './data/bounce/bounceActions'
import fadeActions from './data/fade/fadeActions'

function getAnimData (type, id, tempObject) {
  const state = objectByType(type)
  const obj = state.get(id, tempObject({ id: id })).toJS()
  const ret = {
    setDuration,
    setTiming,
    setDelay,
    setIterations,
    setDirection,
    setFillMode,
    setPlayState
  }
  for (const prop in obj) {
    ret[prop] = obj[prop]
  }
  return ret
}

function objectByType (type) {
  switch (type) {
    case 'bounce':
      return bounceStore.getState()
    case 'fade':
      return fadeStore.getState()

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}

function actionsByType (type) {
  switch (type) {
    case 'bounce':
      return bounceActions
    case 'fade':
      return fadeActions

    default:
      throw TypeError(`"${type}" does not have actions defined in uit`)
  }
}

function setDuration (value) {
  actionsByType(this.type).changeValue(this.id, 'style.duration', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDuration', value)
}

function setTiming (value) {
  actionsByType(this.type).changeValue(this.id, 'style.timing', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationTimingFunction', value)
}

function setDelay (value) {
  actionsByType(this.type).changeValue(this.id, 'style.delay', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDelay', value)
}

function setIterations (value) {
  actionsByType(this.type).changeValue(this.id, 'style.iterations', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationIterationCount', value)
}

function setDirection (value) {
  actionsByType(this.type).changeValue(this.id, 'style.direction', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDirection', value)
}

function setFillMode (value) {
  actionsByType(this.type).changeValue(this.id, 'style.fillMode', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationFillMode', value)
}

function setPlayState (value) {
  actionsByType(this.type).changeValue(this.id, 'style.playState', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationPlayState', value)
}

export default getAnimData

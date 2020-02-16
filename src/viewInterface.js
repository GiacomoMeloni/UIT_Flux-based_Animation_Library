import bounceStore from './data/bounce/bounceStore'
import fadeStore from './data/fade/fadeStore'
import flashStore from './data/flash/flashStore'
import pulseStore from './data/pulse/pulseStore'
import CSSHandlerActions from './data/CSSHandler/CSSHandlerActions'

function getAnimData (type, id, tempObject) {
  const state = objectByType(type)
  const obj = state.get(id, tempObject({ id: id })).toJS()
  const ret = {
    // setTopLimit,
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
    case 'flash':
      return flashStore.getState()
    case 'pulse':
      return pulseStore.getState()

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}
/* This functionality needs to be added only if all animations share the same function,
*  but need different actions object

function actionsByType (type) {
  switch (type) {
    case 'bounce':
      return bounceActions

    default:
      throw TypeError(`"${type}" does not have actions defined in uit`)
  }
}

function setTopLimit (value) {
  actionsByType(this.type).changeValue(this.id, 'topLimit', value)
}
*/
function setDuration (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationDuration', value)
}

function setTiming (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationTimingFunction', value)
}

function setDelay (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationDelay', value)
}

function setIterations (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationIterationCount', value)
}

function setDirection (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationDirection', value)
}

function setFillMode (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationFillMode', value)
}

function setPlayState (value) {
  CSSHandlerActions.updateStyleRule(this.id, 'animationPlayState', value)
}

export default getAnimData

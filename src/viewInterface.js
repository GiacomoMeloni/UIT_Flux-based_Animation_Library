import bounceStore from './data/bounce/bounceStore'
import fadeStore from './data/fade/fadeStore'

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
  document.getElementById(this.id).style.animationDuration = value
}

function setTiming (value) {
  document.getElementById(this.id).style.animationTimingFunction = value
}

function setDelay (value) {
  document.getElementById(this.id).style.animationDelay = value
}

function setIterations (value) {
  document.getElementById(this.id).style.animationIterationCount = value
}

function setDirection (value) {
  document.getElementById(this.id).style.animationDirection = value
}

function setFillMode (value) {
  document.getElementById(this.id).style.animationFillMode = value
}

function setPlayState (value) {
  document.getElementById(this.id).style.animationPlayState = value
}

export default getAnimData

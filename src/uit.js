import bounce from './components/attention_seekers/bounce'
import fade from './components/attention_seekers/fade'
import bounceStore from './data/bounce/bounceStore'
import bounceActions from './data/bounce/bounceActions'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import fadeActions from './data/fade/fadeActions'
import fadeStore from './data/fade/fadeStore'

const uit = {
  bounce: bounce
}

export function getBounce (id) {
  return {
    ...getAnimData('bounce', id, bounceObject),
    setBounces
  }
}

export function getFade (id) {
  return getAnimData('fade', id)
}

export function getShake (id) {
  return getAnimData('shake', id)
}

export function getTada (id) {
  return getAnimData('tada', id)
}

function getAnimData (type, id, tempObject) {
  const state = objectByType(type)
  const obj = state.get(id, tempObject({ id: id })).toJS()
  const ret = {
    setTopLimit,
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

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}

function actionsByType (type) {
  switch (type) {
    case 'bounce':
      return bounceActions

    default:
      throw TypeError(`"${type}" does not have actions defined in uit`)
  }
}

function setBounces (value) {
  bounceActions.changeValue(this.id, 'bounces', value)
}

function setTopLimit (value) {
  actionsByType(this.type).changeValue(this.id, 'topLimit', value)
}

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

export default uit

import bounce from './components/attention_seekers/bounce'
import fade from './components/attention_seekers/fade'
import bounceStore from './data/bounce/bounceStore'
import bounceActions from './data/bounce/bounceActions'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import fadeActions from './data/fade/fadeActions'
import fadeStore from './data/fade/fadeStore'

const uit = {
  bounce: bounce,
  fade: fade
}

export function getBounce (id) {
  return getAnimData('bounce', id, bounceObject)
}

export function getFade (id) {
  return getAnimData('fade', id, fadeObject)
}

export function getShake (id) {
  return getAnimData('shake', id)
}

export function getTada (id) {
  return getAnimData('tada', id)
}

function getAnimData (type, id, returner) {
  const state = stateByType(type)
  if (state.has(id)) {
    console.log(id)
    return state.get(id)
  }
}

function stateByType (type) {
  switch (type) {
    case 'bounce':
      return bounceStore.getState()
    case 'fade':
      return fadeStore.getState()

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}

export default uit

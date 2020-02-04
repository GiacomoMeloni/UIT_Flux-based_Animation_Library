import bounce from './components/attention_seekers/bounce'
import bounceStore from './data/bounce/bounceStore'
import bounceActions from './data/bounce/bounceActions'
import bounceObject from './data/bounce/bounceObject'

const uit = {
  bounce: bounce
}

export function getBounce (id) {
  return getAnimData('bounce', id, bounceActions.newSimpleBounce)
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

function getAnimData (type, id, creater) {
  const state = stateByType(type)
  if (state.has(id)) {
    return state.get(id)
  } else {
    creater(id)
    return bounceObject({ id: id })
  }
}

function stateByType (type) {
  switch (type) {
    case 'bounce':
      return bounceStore.getState()

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}

export default uit

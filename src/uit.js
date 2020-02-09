import bounce, { setBounces, setTopLimit, setTransformOrigin } from './components/attention_seekers/bounce'
import bounceObject from './data/bounce/bounceObject'
import getAnimData from './viewInterface'

const uit = {
  bounce: bounce
}

export function getBounce (id) {
  return {
    ...getAnimData('bounce', id, bounceObject),
    setBounces,
    setTopLimit,
    setTransformOrigin
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

export default uit

import getAnimData from './viewInterface'
import bounce, { setBounces, setTopLimit, setTransformOrigin } from './components/attention_seekers/bounce'
import fade, { setEntry, setDirection, setOpacityLimit } from './components/attention_seekers/fade'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'

const uit = {
  bounce: bounce,
  fade: fade
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
  console.log(getAnimData('fade', id, fadeObject))
  return {
    ...getAnimData('fade', id, fadeObject),
    setEntry,
    setDirection,
    setOpacityLimit
  }
}

export function getShake (id) {
  return getAnimData('shake', id)
}

export function getTada (id) {
  return getAnimData('tada', id)
}

export default uit

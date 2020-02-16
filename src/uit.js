import getAnimData from './viewInterface'
import bounce, { setBounces, setLimit, setTransformOrigin } from './components/attention_seekers/bounce'
import fade, { setEntry as setFadeEntry, setEntryDirection as setFadeDirection, setOpacityLimit } from './components/attention_seekers/fade'
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
    setLimit,
    setTransformOrigin
  }
}

export function getFade (id) {
  return {
    ...getAnimData('fade', id, fadeObject),
    setFadeEntry,
    setFadeDirection,
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

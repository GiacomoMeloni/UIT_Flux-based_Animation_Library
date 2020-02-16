import getAnimData from './viewInterface'
import bounce, { setBounces, setTopLimit, setTransformOrigin } from './components/attention_seekers/bounce'
import fade, { setEntry, setFadeDirection, setOpacityLimit } from './components/attention_seekers/fade'
import flash, { setFlashingTimes } from './components/attention_seekers/flash'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import flashObject from './data/flash/flashObject'

const uit = {
  bounce: bounce,
  fade: fade,
  flash: flash
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
  return {
    ...getAnimData('fade', id, fadeObject),
    setEntry,
    setFadeDirection,
    setOpacityLimit
  }
}

export function getFlash (id) {
  return {
    ...getAnimData('flash', id, flashObject),
    setFlashingTimes
  }
}

export function getTada (id) {
  return getAnimData('tada', id)
}

export default uit

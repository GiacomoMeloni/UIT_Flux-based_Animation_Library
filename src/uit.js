import getAnimData from './viewInterface'
import bounce, {
  setBounces, setLimit, setTransformOrigin,
  setEntry as setBounceEntry, setEntryDirection as setBounceEntryDirection
} from './components/attention_seekers/bounce'
import fade, {
  setEntry as setFadeEntry, setEntryDirection as setFadeEntryDirection, setOpacityLimit
} from './components/attention_seekers/fade'
import flash, { setFlashingTimes } from './components/attention_seekers/flash'
import pulse, { setEnlargement } from './components/attention_seekers/pulse'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import flashObject from './data/flash/flashObject'
import pulseObject from './data/pulse/pulseObject'

const uit = {
  bounce: bounce,
  fade: fade,
  flash: flash,
  pulse: pulse
}

export function getBounce (id) {
  const retObject = {
    ...getAnimData('bounce', id, bounceObject),
    setBounces,
    setLimit,
    setTransformOrigin
  }
  retObject.setEntry = setBounceEntry
  retObject.setEntryDirection = setBounceEntryDirection

  return retObject
}

export function getFade (id) {
  const retObject = {
    ...getAnimData('fade', id, fadeObject),
    setFadeEntry,
    setFadeEntryDirection,
    setOpacityLimit
  }

  retObject.setEntry = setFadeEntry
  retObject.setEntryDirection = setFadeEntryDirection

  return retObject
}

export function getFlash (id) {
  const retObject = {
    ...getAnimData('flash', id, flashObject),
    setFlashingTimes
  }

  return retObject
}

export function getPulse (id) {
  const retObject = {
    ...getAnimData('pulse', id, pulseObject),
    setEnlargement
  }

  return retObject
}

export function getTada (id) {
  return getAnimData('tada', id)
}

export default uit

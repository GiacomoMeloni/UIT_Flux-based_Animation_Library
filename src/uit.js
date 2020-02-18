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
import shake, { setShakingTimes, setShakingStrength } from './components/attention_seekers/shake'
import swing, { setAngulation, setSwingingTimes } from './components/attention_seekers/swing'

import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import flashObject from './data/flash/flashObject'
import pulseObject from './data/pulse/pulseObject'
import shakeObject from './data/shake/shakeObject'
import swingObject from './data/swing/swingObject'

const uit = {
  bounce: bounce,
  fade: fade,
  flash: flash,
  pulse: pulse,
  shake: shake,
  swing: swing
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

export function getShake (id) {
  const retObject = {
    ...getAnimData('shake', id, shakeObject),
    setShakingTimes,
    setShakingStrength
  }

  return retObject
}

export function getSwing (id) {
  const retObject = {
    ...getAnimData('swing', id, swingObject),
    setAngulation,
    setSwingingTimes
  }

  return retObject
}

export function getTada (id) {
  return getAnimData('tada', id)
}

export default uit
